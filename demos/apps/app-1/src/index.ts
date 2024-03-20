import {
  AppType,
  IAppManifest,
  IRender,
} from "definition";

import { AppSharedInfo } from "../../appSharedInfo";

export const render: IRender = (props, { registerCsses }) => {
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
    li.innerText = `${key}:${manifest[key]}`;
    ul.appendChild(li);
  }

  for (let key in props) {
    const li = document.createElement("li");
    li.innerText = `setting-${key}:${props[key]}`;
    ul.appendChild(li);
  }
  document.body.innerHTML = "<h1>111</h1>";
  alert(123);
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
