import { ICss } from "definitions";
import cssContent from "../../scss/list-group.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "list-group" },
};
css.cssss.replace(cssContent);
export default css;
