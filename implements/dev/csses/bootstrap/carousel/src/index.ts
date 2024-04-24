import { ICss } from "definitions";
import cssContent from "../../scss/carousel.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "carousel" },
};
css.cssss.replace(cssContent);
export default css;
