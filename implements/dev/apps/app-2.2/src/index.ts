import {
  AppType,
  IAppManifest,
  IRender,
  ResourceType,
  DefinitionVersion,
} from "definitions";
import { AppSharedInfo } from "../../app-shared-info";

export const render: IRender = ({ registerCsses }) => {
  registerCsses(`
    h1{
      border:0;
      color:blue;
      height:36rem;
    }
  `);
  const h1 = document.createElement("h1");
  h1.innerHTML = "hello,2.2";
  return h1;
};
export const manifest: IAppManifest = {
  get name() {
    return "SECOND.2-APP";
  },
  get shortName() {
    return "APP-2.2";
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
