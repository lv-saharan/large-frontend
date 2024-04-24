import { ICss } from "definitions";
import cssContent from "../../scss/forms.scss";
import placeHoldersCssContent from "../../scss/placeholders.scss";

import manifest from "../../manifest";
const css: ICss = {
  cssss: new CSSStyleSheet(),
  manifest: { ...manifest, name: "forms" },
};
css.cssss.replace(`${cssContent}
${placeHoldersCssContent}`);
export default css;
