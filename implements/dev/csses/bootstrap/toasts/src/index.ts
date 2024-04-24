import { ICss } from "definitions";
import cssContent from "../../scss/toasts.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "toasts" },
};
css.cssss.replace(cssContent);
export default css;
