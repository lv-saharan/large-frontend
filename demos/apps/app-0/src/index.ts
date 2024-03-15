import { AppType, IAppManifest, IInit } from "definition";

export const render: IInit = ({ registerCsses }) => {
  let fontSize = 10;
  let intervalId = setInterval(() => {
    if(fontSize>60){
      clearInterval(intervalId);
    }
    registerCsses(
      `
    :host{
      display:block;
      color:red;
      font-size:${fontSize++}px;
    }
    `,
      () => {
        return `:host{
        background-color:green;
      }`;
      }
    );
  }, 1000);

  return "hello, world! app-0";
};

export const manifest: IAppManifest = {
  get name() {
    return "第一个App定义";
  },
  get shortName() {
    return "APP-0";
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
    return "app -0 的简单事例";
  },
  get singleton() {
    return false;
  },
};
