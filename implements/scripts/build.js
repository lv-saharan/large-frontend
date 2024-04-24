import pkg from "./settings.json" assert { type: "json" };
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import fs from "fs";
import path from "path";
import mime from "mime";

import { dev, proxy } from "local-dev-server";

const [mode = "dev", from = "./dev", start = "apps/main"] =
  process.argv.splice(2);

const buildFrom = from;

if (!fs.existsSync(buildFrom)) {
  throw new Error(`Directory ${buildFrom} does not exist.`);
}

const config = {
  entryRoots: fs
    .readdirSync(buildFrom)
    .map((file) => path.join(buildFrom, file))
    .filter(
      (file) =>
        fs.statSync(file).isDirectory() &&
        !pkg.excludeEntryFolders.includes(path.relative(buildFrom, file))
    ),
  target: pkg.target,
  copyFolders: pkg.copyFolders,
  entryPoints: pkg.entryPoints,
};
console.info("Config", config);

const options = {
  jsxFactory: "h",
  jsxFragment: "h.f",
  format: "esm",
  bundle: true,
  sourcemap: mode == "dev",
  // drop: mode !== "dev" ? ["console"] : [], //发布后取消console输出
  dropLabels: mode !== "dev" ? ["DEV", "TEST"] : [], //发布去除这些标签代码
  minify: true,
  charset: "utf8",
  outbase: "/",
  external: pkg.externals,
  plugins: [
    // checkerPlugin,
    {
      name: "external",
      setup(build) {
        //define global externals
        const externalRules = [];
        for (let [key, rule] of Object.entries(pkg.externalRules ?? {})) {
          //是否远程打包进来 fetch js 直接打包进来小功能
          const buildIn = rule.buildIn ?? false;
          const path = typeof rule === "string" ? rule : rule[mode];

          externalRules.push({
            filter: new RegExp(key),
            path,
          });
        }
        // console.info("externalRules");
        // console.table(externalRules);
        for (let rule of externalRules) {
          build.onResolve({ filter: rule.filter }, (args) => {
            console.info(
              "find rule",
              rule,
              args.path,
              args.path.replace(rule.filter, rule.path)
            );
            return {
              path: args.path.replace(rule.filter, rule.path),
              external: true,
            };
          });
        }
      },
    },
    sassPlugin({
      filter: /css[\/\\]src/,
      type: "css",
      sourceMap: mode == "dev",
      style: mode == "dev" ? "expanded" : "compressed",
    }),
    sassPlugin({
      filter: /.(s[ac]ss|css)$/,
      type: "css-text",
      sourceMap: false,
      style: mode == "dev" ? "expanded" : "compressed",
    }),
  ],
  loader: {},
};

function findEntryPoints(dirPath) {
  const dirStat = fs.statSync(dirPath);
  if (dirStat.isDirectory()) {
    //check src
    if (dirPath.endsWith("/css/src") || dirPath.endsWith("\\css\\src")) {
      fs.readdirSync(dirPath).forEach((file) => {
        if (file.endsWith(".scss") && !file.startsWith("_")) {
          const filePath = path.join(dirPath, file);
          entryPoints.push(filePath);
        }
      });
    } else if (dirPath.endsWith("src")) {
      for (let entryPoint of config.entryPoints) {
        const entryPointPath = path.join(dirPath, entryPoint);
        if (fs.existsSync(entryPointPath)) {
          return [entryPointPath];
        }
      }
    } else {
      const entryPoints = [];
      fs.readdirSync(dirPath).forEach((file) => {
        const filePath = path.join(dirPath, file);
        entryPoints.push(...findEntryPoints(filePath));
      });
      return entryPoints;
    }
  }
  return [];
}

const entryPoints = [];
//find all entry points
config.entryRoots.forEach((dir) => {
  entryPoints.push(...findEntryPoints(dir));
});
console.info("EntryPoints");
console.table(entryPoints);

/**
 * 这些路径尝试重定向到latest
 */
const tryDirs = [...pkg.copyFolders, "css"];
function tryFiles(root, { reqDir, fileName, extName }) {
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
    const newPaths = [...paths];
    const index = paths.indexOf(dir);
    if (index != -1) {
      newPaths.splice(index, 0, "latest");
      filePath = path.join(root, newPaths.join("/"), `${fileName}${extName}`);
      if (fs.existsSync(filePath)) {
        return filePath;
      }
    }
  }

  return filePath;
}

//create http server
if (mode == "dev" || mode == "remote") {
  const devOptions = {
    ...options,
    write: false,
    outdir: "/",
    entryPoints,
    entryNames: "[dir]/../[name]",
    plugins: [
      {
        name: "watch-plugin",
        setup(build) {
          let firstBuild = true;
          let reload = null;
          let buildResult = null;

          build.onStart(() => {
            console.info("start building ".padEnd(64, "."));
          });
          build.onEnd((result) => {
            if (result.errors.length == 0) {
              buildResult = result;
              if (firstBuild) {
                firstBuild = false;
                console.info("start http server".padEnd(64, "."));

                const devResult = dev(
                  {
                    root: buildFrom,
                    home: `/${start}/`,
                    response(
                      filePath,
                      res,
                      { reqDir, fileName, extName, req }
                    ) {
                      if (fs.existsSync(filePath)) {
                        return false;
                      }
                      const outfile = buildResult?.outputFiles.find(
                        (file) => file.path == filePath
                      );
                      res.setHeader(
                        "Content-Type",
                        `${mime.getType(filePath)};charset=utf-8`
                      );

                      if (outfile) {
                        res.end(outfile.contents);
                        return true;
                      }
                      if (reqDir.startsWith("/node_modules/")) {
                        const tryFilePath = tryFiles(".", {
                          reqDir,
                          fileName,
                          extName,
                        });
                        if (fs.existsSync(tryFilePath)) {
                          fs.createReadStream(tryFilePath).pipe(res);
                          return true;
                        }
                      }
                      if (mode !== "remote") {
                        const tryFilePath = tryFiles(pkg.target, {
                          reqDir,
                          fileName,
                          extName,
                        });

                        //开发目录查找不到，进入pub目录查找
                        if (fs.existsSync(tryFilePath)) {
                          fs.createReadStream(tryFilePath).pipe(res);
                          return true;
                        }
                      } else {
                        //remote 模式
                        const remoteServer = pkg.dev.remotes.find(({ from }) =>
                          reqDir.startsWith(from)
                        );
                        if (remoteServer) {
                          proxy(req, res, remoteServer);
                          return true;
                        }
                      }

                      return false;
                    },
                    ...pkg.dev.server,
                  },
                  pkg.dev.apis
                );
                // console.log("reload", devResult);
                reload = devResult.reload;
              } else {
                reload("[app rebuild ok]");
              }
            } else {
              console.log("build error", result.errors);
            }
          });
        },
      },
      ...options.plugins,
    ],
  };

  const ctx = await esbuild.context(devOptions);
  await ctx.watch();
  console.info("start watching ".padEnd(64, "."));
} else if (mode == "pub") {
  const { reload } = dev({
    port: pkg.pub.server.port,
    root: pkg.target,
    home: `/${start}/`,
    response(filePath, res, { reqDir, fileName, extName }) {
      if (fs.existsSync(filePath)) {
        return false;
      }

      res.setHeader("Content-Type", `${mime.getType(filePath)};charset=utf-8`);

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
} else if (mode == "prod") {
  //发布编译
  //拷贝所有资源目录
  const copyTo = (from, subEntries, target, recursive = false) => {
    subEntries.forEach((copyFolder) => {
      const resourceDir = path.join(from, `./${copyFolder}`);
      const targetResourceDir = path.join(from, `./latest/${copyFolder}`);
      if (fs.existsSync(resourceDir)) {
        const dirStat = fs.statSync(resourceDir);

        fs.cpSync(
          resourceDir,
          path.join(target, path.relative(buildFrom, targetResourceDir)),
          {
            recursive: dirStat.isDirectory(),
          }
        );
      }
    });
    if (recursive) {
      fs.readdirSync(from)
        .filter((item) => {
          let filePath = path.join(from, item);
          let fileStat = fs.statSync(filePath);
          return fileStat.isDirectory() && !subEntries.includes(item);
        })
        .forEach((sub) => {
          copyTo(path.join(from, sub), [...subEntries], target, true);
        });
    }
  };

  copyTo(".", [...config.copyFolders, "index.html"], config.target);

  config.entryRoots.forEach((entryRoot) => {
    copyTo(
      entryRoot,
      [...config.copyFolders, "index.html"],
      config.target,
      true
    );
  });

  // console.log("build options", options);

  for (let entry of entryPoints) {
    let entryNames = "[dir]/../latest/[name]";
    let packagePath = path.join(entry, "../../package.json");
    let version = pkg.defaultVersion;
    if (entry.endsWith(".scss")) {
      entryNames = "[dir]/../../latest/css/[name]";
      packagePath = path.join(entry, "../../../package.json");
    }
    if (fs.existsSync(packagePath)) {
      try {
        let pkg = JSON.parse(fs.readFileSync(packagePath));
        version = pkg.version;
      } catch (exc) {
        console.log("load pkg error", pkg, exc);
      }
    }
    const result = await esbuild.build({
      ...options,
      outbase: buildFrom,
      outdir: config.target,
      entryPoints: [entry],
      entryNames,
      metafile: true, //对结果进行分析
    });
    for (let outfile in result.metafile.outputs) {
      let outdir = path.join(outfile, "../");
      let copydir = outdir.replace(/([\\//])latest([\\//])/, `$1${version}$2`);
      fs.cpSync(outdir, copydir, {
        recursive: true,
      });
    }
    console.info("entry build ok", entry);
    // console.log("build result", result);
  }

  console.log(`build  ok!`);
}
