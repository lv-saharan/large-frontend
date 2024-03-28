import {
  AppType,
  IAppContainer,
  IAppManifest,
  IContainer,
  IRender,
  ResourceType,
  Version,
} from "definitions";
import { AppSharedInfo } from "../../app-shared-info";

export const render: IRender = (container: IContainer) => {
  container.registerCsses(`
    iframe{
      border:0;
      height:100%;
      width:100%;
    }
  `);
  const iframe = document.createElement("iframe");
  iframe.src = "/pub/configs/app-config.js";
  return iframe;
};
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
    return "1.0.0";
  },

  ...AppSharedInfo,
};
