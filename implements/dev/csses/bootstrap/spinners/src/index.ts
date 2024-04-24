import { ICss } from "definitions";
import cssContent from "../../scss/spinners.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "spinners" },
};
css.cssss.replace(cssContent);
export default css;
