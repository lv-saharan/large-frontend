import { ICss } from "definitions";
import cssContent from "../../scss/alert.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "alert" },
};
css.cssss.replace(cssContent);
export default css;
