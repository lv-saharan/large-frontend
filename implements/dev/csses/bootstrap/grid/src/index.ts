import { ICss } from "definitions";
import cssContent from "../../scss/grid.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "grid" },
};
css.cssss.replace(cssContent);
export default css;
