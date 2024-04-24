import { ICss } from "definitions";
import cssContent from "../../scss/modal.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "modal" },
};
css.cssss.replace(cssContent);
export default css;
