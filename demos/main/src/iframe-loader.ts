import { ILoadApp, IApp } from "definition";
const cache: Map<string, Promise<IApp>> = new Map();

export const loadApp: ILoadApp = (src) => {
  const key = src;
  if (cache.has(key)) {
    return cache.get(key);
  }
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  const iframeWindow = iframe.contentWindow;
  const iframeDocument = iframe.contentDocument;
  const iframeScript = iframeDocument.createElement("script");
  iframeScript.type = "module";
  iframeScript.innerHTML = `
  window.alert=()=>{}
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
  const promise = new Promise((resolve, reject) => {
    iframeWindow.addEventListener("appLoad", (e) => {
      resolve(e["detail"]);
    });

    iframeWindow.addEventListener("appError", (e) => {
      reject(e);
    });
  }) as Promise<IApp>;

  cache.set(key, promise);
  return promise;
};
