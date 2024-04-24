import {
  AppType,
  IAppContainer,
  IAppManifest,
  IContainer,
  IRender,
  ResourceType,
  DefinitionVersion,
} from "definitions";
import { h, tag, Component } from "wpa";

import { AppSharedInfo } from "../../app-shared-info";

import { c1 } from "/components/basic-ui/1.0.0";

import { c1 as c1_1 } from "/components/basic-ui";

import { app as appIcon } from "/assets/icons";

import { manifest as secondManifest } from "./second";

import { AssetContainerTag } from "/containers/base";
export const render: IRender = (container: IAppContainer) => {
  container.registerCsses(`
    :host{
      color:red;
    }
    .asset{
      background:#ccc;
      color:black;
      font-size:2rem;
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
      <a href={`#${container.routeInfo.path}/${secondManifest.path}`}>
        <h3>
          <img src={appIcon.manifest.src} style={{ width: "3rem" }} />
          进入应用3的子应用
        </h3>
      </a>
      <div class="asset">
        <h2>导入一个资源</h2>
        {Object.entries(appIcon.manifest).map(([key, value]) => (
          <div>
            {key}:{value}
          </div>
        ))}
        <AssetContainerTag
          asset={appIcon}
          props={{ width: 100 }}
        ></AssetContainerTag>
      </div>
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
