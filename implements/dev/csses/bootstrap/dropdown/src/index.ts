import { ICss } from "definitions";
import cssContent from "../../scss/dropdown.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "dropdown" },
};
css.cssss.replace(cssContent);
export default css;
