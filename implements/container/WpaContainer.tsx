import { AppType, IApp, IContainer, IHost } from "definitions";
import { isEmptyOrNullString } from "implements/common/Util";
import { h, tag, render, Component } from "wpa";

export const WpaContainerTag = "large-wpa-container";

@tag(WpaContainerTag)
class WpaContainer extends Component implements IContainer {
  appendChild(child: HTMLElement): void {
    this.shadowRoot.appendChild(child);
  }
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

  installed() {
    const app: IApp = this.props.app;
    if (
      typeof app.render === "function" &&
      app.manifest.appType !== AppType.PART
    ) {
      const el = app.render(this.props.props ?? {}, this);
      if (el instanceof HTMLElement) {
        this.appendChild(el);
      }
    }
  }
  render(props) {
    const app: IApp = props.app;
    if (
      typeof app.render !== "function" &&
      !isEmptyOrNullString(app.manifest.tag)
    ) {
      return h(app.manifest.tag, props.props ?? {});
    }
    if (app.manifest.appType == AppType.PART) {
      return app.render(props.props ?? {}, this);
    }
    return null;
  }
}
