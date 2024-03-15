import { AppType, IAppManifest, IInit } from "definition";

export const render: IInit = ({ registerCsses }) => {
  registerCsses(`
  :host{
    display:block;
    line-height:1.5;
    font-size:14px;
    color:blue;
  }`);
  const app = document.createElement("div");

  const ul = document.createElement("ul");

  app.appendChild(ul);

  for (let key in manifest) {
    const li = document.createElement("li");
    li.innerText = `${key}:${manifest[key]}`;
    ul.appendChild(li);
  }
  return app;
};

export const manifest: IAppManifest = {
  get name() {
    return "第二个App定义";
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
};