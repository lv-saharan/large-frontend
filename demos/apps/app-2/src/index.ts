import {
  AppType,
  IAppManifest,
  IRender,
  ResourceType,
  Version,
} from "definition";
import { AppSharedInfo } from "../../appSharedInfo";

export const render: IRender = (
  props,
  { registerCsses, registerStylesheets }
) => {
  registerCsses(`
    iframe{
      border:0;
      height:36rem;
    }
  `);
  const iframe = document.createElement("iframe");
  iframe.src = "/demos/main/src/apps.json";
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
