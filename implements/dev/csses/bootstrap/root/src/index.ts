import { ICss } from "definitions";
import cssContent from "../../scss/root.scss";

import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "root" },
};
css.cssss.replace(`${cssContent}`);
export default css;
