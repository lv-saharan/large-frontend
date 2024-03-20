import {
  ILoad,
  IResource,
  IApp,
  ILoadApps,
  ILoadCsses,
  ICss,
  ILoadAssets,
  IAsset,
  ILoadComponents,
  IComponent,
  IFunction,
  ILoadFunctions,
} from "definition";
const cache: Map<string, Promise<any[]>> = new Map();

export const load = async <T extends IResource>(src: string) => {
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
        const { default: resources = [], ...resource } = e["detail"];
        resolve([...resources, resource].filter((r) => r.manifest));
      });

      iframeWindow.addEventListener("appError", (e) => {
        reject(e);
      });
    }) as Promise<T[]>;

    cache.set(key, promise);
  }

  return await promise;
};

export const loadApps: ILoadApps = load<IApp>;

export const loadCsses: ILoadCsses = load<ICss>;

export const loadAssets: ILoadAssets = load<IAsset>;

export const loadComponents: ILoadComponents = load<IComponent>;

export const loadFunctions: ILoadFunctions = load<IFunction>;
