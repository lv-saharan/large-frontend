import { AppType, IAppManifest, IRender } from "definition";
import { h, tag, Component } from "wpa";

export const render: IRender = (
  { registerCsses, registerScripts, registerStylesheets },
  props
) => {
  registerCsses(`
  :host{
    color:red;
  }
  `);
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
  get author() {
    return "ljj";
  },
  get phone() {
    return "12345";
  },
  get description() {
    return "app -3";
  },
  get singleton() {
    return false;
  },
};
