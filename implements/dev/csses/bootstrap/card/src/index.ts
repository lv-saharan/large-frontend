import { ICss } from "definitions";
import cssContent from "../../scss/card.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "card" },
};
css.cssss.replace(cssContent);
export default css;
