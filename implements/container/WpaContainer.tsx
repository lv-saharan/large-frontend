import { AppType, IApp, IContainer, IHost, IResource } from "definitions";
import { isEmptyOrNullString } from "implements/common/Util";
import { h, tag, render, Component } from "wpa";

export const WpaContainerTag = "large-wpa-container";

@tag(WpaContainerTag)
export class WpaContainer extends Component implements IContainer {
  props = { host: null as IHost };
  get host(): IHost {
    return this.props.host;
  }

  registerCsses = (...csses) => {
    this.cssss = csses;
    this.updateStyle();
  };
  registerStyleSheets = (...stylesheets) => {
    this.stylesheets = stylesheets;
    this.updateStyle();
  };

  render(props) {}
}
