import { ICss } from "definitions";
import cssContent from "../../scss/progress.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "progress" },
};
css.cssss.replace(cssContent);
export default css;
