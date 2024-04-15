import { AppType, IAppContainer, IAppManifest, IRender } from "definitions";

import { AppSharedInfo } from "../../app-shared-info";

import { version } from "../package.json";

export const render: IRender = ({ registerCsses }, props) => {
  registerCsses &&
    registerCsses(`
  :host li{
    display:block;
    line-height:2;
    font-size:3rem;
    color:#333999;
  }
  
  `);
  const app = document.createElement("div");
  app.innerHTML = "<h2>App 1</h2>";
  const ul = document.createElement("ul");

  app.appendChild(ul);

  for (let key in manifest) {
    const li = document.createElement("li");
    li.innerText = `${key}:${(manifest as any)[key] as string}`;
    ul.appendChild(li);
  }

  for (let key in props) {
    const li = document.createElement("li");
    li.innerText = `setting-${key}:${props[key]}`;
    ul.appendChild(li);
  }

  return app;
};
export function mount(container: IAppContainer) {
  container.on("appMount", (data) => {
    console.log("appMount", data);
  });
  let times = 0;
  setInterval(() => {
    container.emit("appMount", { "app-1": times++ });
  }, 2000);
}
export const manifest: IAppManifest = {
  get name() {
    return "FIRST-APP";
  },
  get shortName() {
    return "APP-1";
  },

  get appType() {
    return AppType.NATIVE;
  },

  get singleton() {
    return false;
  },
  get version() {
    return version;
  },

  ...AppSharedInfo,
};
