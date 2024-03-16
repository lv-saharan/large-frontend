import { ILoadApp, IApp } from "definition";

export const loadApp: ILoadApp = (src) => {
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
    const appLoadErrorEvent =new CustomEvent("appLoadError",{detail:exc})
    window.dispatchEvent(appLoadErrorEvent)
  }

`;
  iframeDocument.head.appendChild(iframeScript);

  return new Promise((resolve, reject) => {
    iframeWindow.addEventListener("appLoad", (e) => {
      resolve(e["detail"]);
    });

    iframeWindow.addEventListener("appLoadError", (e) => {
      reject(e["detail"]);
    });
  });
};
