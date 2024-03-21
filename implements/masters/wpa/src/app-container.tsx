import {
  AppType,
  IApp,
  IAppContainer,
  IRegisterCsses,
  IRegisterStyleSheets,
} from "definition";
import { isEmptyOrNullString } from "implements/common/util";
import { h, tag, render, Component } from "wpa";

export const AppContainerTag = "large-app-container";

@tag(AppContainerTag)
class AppContainer extends Component implements IAppContainer {
  registerCsses = (...csses) => {
    this.cssss = csses;
    return this.updateStyle();
  };
  regsiterStyleSheets = (...stylesheets) => {
    this.stylesheets = stylesheets;
    return this.updateStyle();
  };

  installed() {
    const app: IApp = this.props.app;
    if (
      typeof app.render === "function" &&
      app.manifest.appType !== AppType.PART
    ) {
      const el = app.render(this.props.props ?? {}, {
        registerCsses: this.registerCsses,
        registerStylesheets: this.regsiterStyleSheets,
        container: this.shadowRoot,
      });
      if (el instanceof HTMLElement) {
        this.shadowRoot.appendChild(el);
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
      return app.render(props.props ?? {}, {
        registerCsses: this.registerCsses,
        registerStylesheets: this.regsiterStyleSheets,
        container: this.shadowRoot,
      });
    }
    return null;
  }
}
