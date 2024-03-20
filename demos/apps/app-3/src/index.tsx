import {
  AppType,
  IAppManifest,
  IRender,
  ResourceType,
  Version,
} from "definition";
import { h, tag, Component } from "wpa";

import { AppSharedInfo } from "../../app-shared-info";

export const render: IRender = (
  props,
  { registerCsses, registerStylesheets }
) => {
  registerCsses(`
  :host{
    color:red;
  }
  `);
  registerStylesheets(new URL("./css/app3.css", import.meta.url).href);
  return <div>第三个App定义</div>;
};
export const manifest: IAppManifest = {
  get name() {
    return "第三个App定义";
  },
  get shortName() {
    return "APP-3";
  },

  get appType() {
    return AppType.PART;
  },

  get singleton() {
    return false;
  },
  get version() {
    return "1.0.0";
  },
  ...AppSharedInfo,
};
