import { ICss } from "definitions";
import cssContent from "../../scss/reboot.scss";
import scrollbarCssContent from "../../scss/scrollbar.scss";
import imagesCssContent from "../../scss/images.scss";
import transitionsCssContent from "../../scss/transitions.scss";
import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "reboot" },
};
css.cssss.replace(`${cssContent}
${scrollbarCssContent}
${imagesCssContent}
${transitionsCssContent}`);
export default css;