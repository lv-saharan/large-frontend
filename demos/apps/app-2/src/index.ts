import { AppType, IAppManifest, IInit } from "definition";

export const manifest: IAppManifest = {
  get name() {
    return "第三个App定义";
  },
  get shortName() {
    return "APP-2";
  },
  get startUrl() {
    return "https://www.baidu.com/";
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
