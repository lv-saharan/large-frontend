import { dev } from "local-dev-server";
import pkg from "./dev-settings.json" assert { type: "json" };

import fs from "fs";
import path from "path";
const root = "pub";
const { reload } = dev({
  port: pkg.pub.server.port,
  root,
  home: "/apps/simple/",
  response(filePath, res) {
    if (fs.existsSync(filePath)) {
      return false;
    }
    filePath = filePath.replace(/\\index/, "\\latest\\index");
    //有这个目录
    let type = "text/html";
    if (/\.js$/.test(filePath)) {
      type = "application/javascript";
    }
    if (/\.css$/.test(filePath)) {
      type = "text/css";
    }
    res.setHeader("Content-Type", `${type};charset=utf-8`);

    if (fs.existsSync(filePath)) {
      if (fs.statSync(filePath).isDirectory()) {
        //有没有index.html
        const indexHtml = path.join(filePath, "index.html");
        if (fs.existsSync(indexHtml)) {
          fs.createReadStream(indexHtml).pipe(res);
          return true;
        }
        const latestHtml = path.join(filePath, "latest", "index.html");
        if (fs.existsSync(latestHtml)) {
          fs.createReadStream(latestHtml).pipe(res);
          return true;
        }
        const indexJs = path.join(filePath, "index.js");
        if (fs.existsSync(indexJs)) {
          fs.createReadStream(indexJs).pipe(res);
          return true;
        }
        const latestJs = path.join(filePath, "latest", "index.js");
        if (fs.existsSync(latestJs)) {
          fs.createReadStream(latestJs).pipe(res);
          return true;
        }

        return false;
      } else {
        fs.createReadStream(filePath).pipe(res);
        return true;
      }
    } else if (type == "text/css") {
      filePath = filePath.replace(/\\css\\/, "\\latest\\css\\");
      if (fs.existsSync(filePath)) {
        fs.createReadStream(filePath).pipe(res);
        return true;
      }
    }
  },
});
