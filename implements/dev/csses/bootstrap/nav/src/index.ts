import { ICss } from "definitions";
import cssContent from "../../scss/nav.scss";
import navBarCssContent from "../../scss/navbar.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "nav" },
};
css.cssss.replace(`${cssContent}
${navBarCssContent}`);
export default css;
