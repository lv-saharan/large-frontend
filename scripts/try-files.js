import path from "path";
import fs from "fs";
import pkg from "./dev-settings.json" assert { type: "json" };

/**
 * 这些路径尝试重定向到latest
 */
const tryDirs = [...pkg.copyFolders, "css"];
export function tryFiles(root, { reqDir, fileName, extName }) {
  let filePath = path.join(root, reqDir, `${fileName}${extName}`);
  if (fs.existsSync(filePath)) {
    return filePath;
  }

  //check lastest/
  filePath = path.join(root, reqDir, "latest", `${fileName}${extName}`);
  if (fs.existsSync(filePath)) {
    return filePath;
  }
  const paths = reqDir.split("/");
  for (let dir of tryDirs) {
    const index = paths.indexOf(dir);
    if (index != -1) {
      paths.splice(index, 0, "latest");
      filePath = path.join(root, paths.join("/"), `${fileName}${extName}`);
      if (fs.existsSync(filePath)) {
        return filePath;
      }
    }
  }

  return filePath;
}
