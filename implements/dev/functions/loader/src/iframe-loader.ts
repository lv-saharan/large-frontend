import {
  IApp,
  IFunctionManifest,
  ILoad,
  ResourceType,
  DefinitionVersion,
} from "definitions";

const cache: Map<string, Promise<any[]>> = new Map();

export const load: ILoad = async <T>(src: string) => {
  if (src.endsWith("/")) {
    src += "index.js";
  }
  const key = src;

  let promise: Promise<T[]> = null;

  if (cache.has(key)) {
    promise = cache.get(key);
  } else {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    const iframeWindow = iframe.contentWindow;
    const iframeDocument = iframe.contentDocument;
    const iframeScript = iframeDocument.createElement("script");
    iframeScript.type = "module";
    iframeScript.innerHTML = `
  try{
      const app = await import("${src}")
      const appLoadEvent =new CustomEvent("appLoad",{detail:app})
      window.dispatchEvent(appLoadEvent)
  }catch(exc){
    const appErrorEvent =new CustomEvent("appError",{detail:exc})
    window.dispatchEvent(appErrorEvent)
  }

`;
    iframeDocument.head.appendChild(iframeScript);
    promise = new Promise((resolve, reject) => {
      iframeWindow.addEventListener("appLoad", (e) => {
        const exports = e["detail"];
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
        resolve([...resources] as T[]);
      });

      iframeWindow.addEventListener("appError", (e) => {
        reject(e);
      });
    });

    cache.set(key, promise);
  }

  return await promise;
};

import pkg from "../package.json";

const manifest: IFunctionManifest = {
  name: "iframeLoader",
  version: pkg.version,
  definitionVersion: DefinitionVersion,
  resourceType: ResourceType.FUNCTION,
};

Object.assign(load, { manifest });
