import {
  AppType,
  IAppContainer,
  IAppManifest,
  IRender,
  ResourceType,
  Version,
} from "definitions";
import { h, tag, Component } from "wpa";

import { AppSharedInfo } from "../../app-shared-info";

export const render: IRender = (container: IAppContainer) => {
  container.registerCsses(`
    :host{
      color:blue;
    }
    `);
  container.registerStyleSheets(
    new URL("./css/app3.css", import.meta.url).href
  );
  return (
    <div>
      App3.2定义
      <a href={`#${container.routeInfo.path}`}>App3.1</a>
    </div>
  );
};
export const manifest: IAppManifest = {
  get path() {
    return "2";
  },
  get name() {
    return "第三个App-2定义";
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
