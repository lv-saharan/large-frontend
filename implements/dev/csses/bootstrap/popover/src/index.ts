import { ICss } from "definitions";
import cssContent from "../../scss/popover.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "popover" },
};
css.cssss.replace(cssContent);
export default css;
