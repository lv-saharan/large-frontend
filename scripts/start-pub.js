import { dev } from "local-dev-server";
import pkg from "./dev-settings.json" assert { type: "json" };

import fs from "fs";
import path from "path";
import { tryFiles } from "./try-files.js";

const root = pkg.target;
const { reload } = dev({
  port: pkg.pub.server.port,
  root,
  home: "/apps/main/",
  response(filePath, res, { reqDir, fileName, extName }) {
    if (fs.existsSync(filePath)) {
      return false;
    }
    //有这个目录
    let type = "text/html";
    if (/\.js$/.test(filePath)) {
      type = "application/javascript";
    }
    if (/\.css$/.test(filePath)) {
      type = "text/css";
    }
    res.setHeader("Content-Type", `${type};charset=utf-8`);

    const tryFilePath = tryFiles(
      reqDir.startsWith("/node_modules/") ? "." : pkg.target,
      { reqDir, fileName, extName }
    );

    //开发目录查找不到，进入pub目录查找
    if (fs.existsSync(tryFilePath)) {
      fs.createReadStream(tryFilePath).pipe(res);
      return true;
    }
  },
});
