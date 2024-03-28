import "./demo-5.js";

export const manifest = {
  get tag() {
    return "demo-5";
  },
  get name() {
    return "Vue-APP";
  },

  get appType() {
    return AppType.VUE;
  },

  get singleton() {
    return false;
  },
  get version() {
    return "1.0.0";
  },
};
