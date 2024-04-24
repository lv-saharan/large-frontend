import { ICss } from "definitions";
import cssContent from "../../scss/offcanvas.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "offcanvas" },
};
css.cssss.replace(cssContent);
export default css;
