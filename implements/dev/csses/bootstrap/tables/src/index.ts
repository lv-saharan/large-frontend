import { ICss } from "definitions";
import cssContent from "../../scss/tables.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "tables" },
};
css.cssss.replace(cssContent);
export default css;
