import { ICss } from "definitions";
import cssContent from "../../scss/buttons.scss";
import closeCssContent from "../../scss/close.scss";
import buttonGroupCssContent from "../../scss/button-group.scss";

import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "buttons" },
};
css.cssss.replace(`${cssContent}
${closeCssContent}
${buttonGroupCssContent}`);
export default css;
