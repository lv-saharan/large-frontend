import { ICss } from "definitions";
import cssContent from "../../scss/containers.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "containers" },
};
css.cssss.replace(cssContent);
export default css;
