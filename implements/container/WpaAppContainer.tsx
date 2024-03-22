import {
  AppType,
  IApp,
  IAppContainer,
  IAppRegisterInfo,
  IContainer,
  IHost,
} from "definitions";
import { isEmptyOrNullString } from "implements/common/Util";
import { h, tag, render, Component } from "wpa";
import { WpaContainer } from "./WpaContainer";

export const WpaAppContainerTag = "large-wpa-app-container";

@tag(WpaAppContainerTag)
class WpaAppContainer extends WpaContainer implements IAppContainer {
  props = {
    app: null as IApp,
    props: null as any,
    host: null as IHost,
  };
  get app(): IApp {
    return this.props.app;
  }
  get appProps() {
    return this.props.props ?? {};
  }
  installed() {
    const app = this.app;
    if (
      typeof app.render === "function" &&
      app.manifest.appType !== AppType.PART
    ) {
      const el = app.render(this.appProps, this);
      if (el instanceof HTMLElement) {
        this.shadowRoot.appendChild(el);
      }
    }
  }
  render(props) {
    const app = this.app;
    if (
      typeof app.render !== "function" &&
      !isEmptyOrNullString(app.manifest.tag)
    ) {
      return h(app.manifest.tag, this.appProps);
    }
    if (app.manifest.appType == AppType.PART) {
      return app.render(this.appProps, this);
    }
    return null;
  }
}
