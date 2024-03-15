import { AppType, IAppManifest, IRender } from "definition";

export const render: IRender = (
  { registerCsses, registerScripts, registerStylesheets },
  props
) => {
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.baidu.com";
  return iframe;
};
export const manifest: IAppManifest = {
  get name() {
    return "第三个App定义";
  },
  get shortName() {
    return "APP-2";
  },

  get appType() {
    return AppType.IFRAME;
  },
  get author() {
    return "ljj";
  },
  get phone() {
    return "12345";
  },
  get description() {
    return "app -2 iframe baidu";
  },
  get singleton() {
    return false;
  },
};
