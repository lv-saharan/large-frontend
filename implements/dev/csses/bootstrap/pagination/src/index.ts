import { ICss } from "definitions";
import cssContent from "../../scss/pagination.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "pagination" },
};
css.cssss.replace(cssContent);
export default css;
