import { ICss } from "definitions";
import cssContent from "../../scss/utilities.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "utilities" },
};
css.cssss.replace(cssContent);
export default css;
