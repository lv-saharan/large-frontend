import { AppType, IAppContainer, IAppManifest, IRender } from "definitions";

import { AppSharedInfo } from "../../app-shared-info";

export const render: IRender = ({ registerCsses }, props) => {
  registerCsses &&
    registerCsses(`
  :host{
    display:block;
    line-height:1.5;
    font-size:14px;
    color:#333;
  }`);
  const app = document.createElement("div");

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
    return "1.0.0";
  },

  ...AppSharedInfo,
};
