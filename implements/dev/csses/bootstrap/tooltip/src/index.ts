import { ICss } from "definitions";
import cssContent from "../../scss/tooltip.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "tooltip" },
};
css.cssss.replace(cssContent);
export default css;
