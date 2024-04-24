import { ICss } from "definitions";
import cssContent from "../../scss/breadcrumb.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "breadcrumb" },
};
css.cssss.replace(cssContent);
export default css;
