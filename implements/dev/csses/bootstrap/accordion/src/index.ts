import { ICss } from "definitions";
import cssContent from "../../scss/accordion.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "accordion" },
};
css.cssss.replace(cssContent);
export default css;
