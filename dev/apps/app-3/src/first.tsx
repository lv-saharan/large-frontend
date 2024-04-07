import {
  AppType,
  IAppContainer,
  IAppManifest,
  IContainer,
  IRender,
  ResourceType,
  Version,
} from "definitions";
import { h, tag, Component } from "wpa";

import { AppSharedInfo } from "../../app-shared-info";

import { c1 } from "/components/basic-ui/1.0.0";

import { c1 as c1_1 } from "/components/basic-ui";

export const render: IRender = (container: IAppContainer) => {
  container.registerCsses(`
    :host{
      color:red;
    }
    `);
  container.registerStyleSheets(
    new URL("./css/app3.css", import.meta.url).href
  );
  return (
    <div>
      第三个App3 定义，使用自定义组件的多个版本
      <button class="btn btn-primary">hello</button>
      <fieldset>
        <legend>C1 组件1.0.0</legend>
        <c1.manifest.tag />
      </fieldset>
      <fieldset>
        <legend>C1 组件1.0.1</legend>
        <c1_1.manifest.tag />
      </fieldset>
      <a href={`#${container.routeInfo.path}/2`}>App3.2</a>
    </div>
  );
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
