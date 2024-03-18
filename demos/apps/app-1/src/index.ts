import {
  AppType,
  IAppManifest,
  IRender,
  ResourceType,
  Version,
} from "definition";

export const render: IRender = ({ registerCsses }, props) => {
  registerCsses(`
  :host{
    display:block;
    line-height:1.5;
    font-size:14px;
    color:#333;
  }`);
  const app = document.createElement("div");

  const ul = document.createElement("ul");

  app.appendChild(ul);

  for (let key in manifest) {
    const li = document.createElement("li");
    li.innerText = `${key}:${manifest[key]}`;
    ul.appendChild(li);
  }

  for (let key in props) {
    const li = document.createElement("li");
    li.innerText = `setting-${key}:${props[key]}`;
    ul.appendChild(li);
  }
  document.body.innerHTML = "<h1>111</h1>";
  alert(123);
  return app;
};

export const manifest: IAppManifest = {
  get name() {
    return "第1个App定义";
  },
  get shortName() {
    return "APP-1";
  },

  get appType() {
    return AppType.NATIVE;
  },
  get author() {
    return "ljj";
  },
  get phone() {
    return "12345";
  },
  get description() {
    return "app -1";
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
