import pkg from "./dev-settings.json" assert { type: "json" };
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import fs from "fs";
import path from "path";
import { dev } from "local-dev-server";
import { tryFiles } from "./try-files.js";
const [mode, from, start] = process.argv.splice(2);

const buildFrom = from ?? "./dev";

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

console.log("Config", config);

function findEntryPoints(dirPath) {
  const dirStat = fs.statSync(dirPath);
  if (dirStat.isDirectory()) {
    //check src
    if (dirPath.endsWith("/css/src") || dirPath.endsWith("\\css\\src")) {
      fs.readdirSync(dirPath).forEach((file) => {
        if (file.endsWith(".scss")) {
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

console.log("EntryPoints", entryPoints);

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

const externalPlugin = {
  name: "external",
  setup(build) {
    for (let rule of externalRules) {
      build.onResolve({ filter: rule.filter }, (args) => {
        console.log(
          "find rule",
          rule,
          args.path.replace(rule.filter, rule.path)
        );
        return {
          path: args.path.replace(rule.filter, rule.path),
          external: true,
        };
      });
    }
  },
};

const options = {
  jsxFactory: "h",
  jsxFragment: "h.f",
  format: "esm",
  bundle: true,
  sourcemap: mode == "dev",
  drop: mode !== "dev" ? ["console"] : [], //发布后取消console输出
  dropLabels: mode !== "dev" ? ["DEV", "TEST"] : [], //发布去除这些标签代码
  minify: true,
  charset: "utf8",
  outbase: "/",
  external: pkg.externals,
  plugins: [
    // checkerPlugin,
    externalPlugin,
    sassPlugin({
      filter: /css[\/\\]src/,
      type: "css",
    }),
    sassPlugin({
      filter: /.(s[ac]ss|css)$/,
      type: "css-text",
    }),
  ],
  loader: {},
};

//create http server
if (mode == "dev") {
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
          build.onStart(() => {
            console.log(
              "starting build.............................................."
            );
          });
          build.onEnd((result) => {
            if (result.errors.length == 0) {
              buildResult = result;
              reload("[app rebuild ok]");
            } else {
              console.log("build error", result.errors);
            }
          });
        },
      },
      ...options.plugins,
    ],
  };
  let buildResult = null;

  const ctx = await esbuild.context(devOptions);
  const { reload } = dev(
    {
      root: buildFrom,
      home: `/${start}/`,
      response(filePath, res, { reqDir, fileName, extName }) {
        if (fs.existsSync(filePath)) {
          return false;
        }
        const outfile = buildResult?.outputFiles.find(
          (file) => file.path == filePath
        );
        let type = "text/html";
        if (/\.js$/.test(filePath)) {
          type = "application/javascript";
        }
        if (/\.css$/.test(filePath)) {
          type = "text/css";
        }
        res.setHeader("Content-Type", `${type};charset=utf-8`);

        if (outfile) {
          res.end(outfile.contents);
          return true;
        }

        const tryFilePath = tryFiles(
          reqDir.startsWith("/node_modules/") ? "." : pkg.target,
          { reqDir, fileName, extName }
        );

        //开发目录查找不到，进入pub目录查找
        if (fs.existsSync(tryFilePath)) {
          fs.createReadStream(tryFilePath).pipe(res);
          return true;
        }

        return false;
      },
      ...pkg.dev.server,
    },
    pkg.dev.apis
  );
  await ctx.watch();
  console.log("watching.........................................");
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
    // console.log("build result", result);
  }

  console.log(`build  ok!`);
}
