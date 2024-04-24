import {
  IApp,
  IFunctionManifest,
  ILoad,
  ResourceType,
  DefinitionVersion,
} from "definitions";
import pkg from "../package.json";

export const load: ILoad = async <T>(src: string) => {
  // if (src.endsWith("/")) {
  //   src += "index.js";
  // }
  const exports = await import(src);
  const resources = new Set();
  //整体导出一个资源
  if (exports.manifest) {
    resources.add(exports);
  } else {
    for (let key in exports) {
      const module = exports[key];
      if (module.manifest) {
        resources.add(module);
      }
    }
  }
  return [...resources] as T[];
};

const manifest: IFunctionManifest = {
  name: "esLoader",
  version: pkg.version,
  definitionVersion: DefinitionVersion,
  resourceType: ResourceType.FUNCTION,
};

Object.assign(load, { manifest });
