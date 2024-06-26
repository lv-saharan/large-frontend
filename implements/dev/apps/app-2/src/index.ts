import {
  AppType,
  IAppContainer,
  IAppManifest,
  IContainer,
  IRender,
  ResourceType,
  DefinitionVersion,
} from "definitions";
import { AppSharedInfo } from "../../app-shared-info";

import * as icons from "/assets/icons";
export const render: IRender = (container: IContainer) => {
  container.registerCsses(`
    iframe{
      border:0;
      height:100%;
      width:100%;
    }
  `);
  const iframe = document.createElement("iframe");
  iframe.src = icons.app.manifest.src;
  return iframe;
};

import { version } from "../package.json";

export const manifest: IAppManifest = {
  get name() {
    return "SECOND-APP";
  },
  get shortName() {
    return "APP-2";
  },

  get appType() {
    return AppType.IFRAME;
  },

  get singleton() {
    return false;
  },
  get version() {
    return version;
  },

  ...AppSharedInfo,
};
