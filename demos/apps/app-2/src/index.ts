import {
  AppType,
  IAppManifest,
  IRender,
  ResourceType,
  Version,
} from "definition";

export const render: IRender = (
  { registerCsses, registerScripts, registerStylesheets },
  props
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
  get version() {
    return "1.0.0";
  },
  get definitionVersion() {
    return Version;
  },
  get resourceType() {
    return ResourceType.APP;
  },
};
