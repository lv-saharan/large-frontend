import { AppType, IApp, IContainer, IHost, IResource } from "definitions";
import { isEmptyOrNullString } from "implements/common/Util";
import { h, tag, render, Component } from "wpa";
import { css } from "wpa-ui";
export class WpaContainer extends Component implements IContainer {
  static css = [
    css.getCSSStyleSheets(
      "reboot",
      "tables",
      "utilities",
      "forms",
      "buttons",
      "button-group",
      "grid",
      "scrollbar",
      "card",
      "progress"
    ),
  ];
  get on() {
    return this.host.on;
  }
  get off() {
    return this.host.off;
  }
  get emit() {
    return this.host.emit;
  }
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
