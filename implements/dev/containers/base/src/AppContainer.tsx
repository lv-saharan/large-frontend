import {
  AppType,
  IApp,
  IAppContainer,
  IAppRouteInfo,
  IHost,
} from "definitions";
import { isNullOrEmpty } from "/functions/string";
import { h, tag, render, Component } from "wpa";
import { Container } from "./Container";

export const AppContainerTag = "large-base-app-container";

@tag(AppContainerTag)
export class AppContainer extends Container implements IAppContainer {
  props = {
    app: null as IApp,
    props: null as any,
    host: null as IHost,
  };
  get routeInfo() {
    return this.host.getAppRouteInfo(this.app);
  }
  get element(): HTMLElement {
    return this.shadowRoot.querySelector("*");
  }

  get app(): IApp {
    return this.props.app;
  }
  get appProps() {
    return this.props.props ?? {};
  }
  installed() {
    super.installed();
    const app = this.app;
    if (
      typeof app.render === "function" &&
      app.manifest.appType !== AppType.PART
    ) {
      const el = app.render(this, this.appProps);
      if (el instanceof HTMLElement) {
        this.shadowRoot.appendChild(el);
      }
    }
    if (typeof app.mount === "function") {
      app.mount(this);
    }
  }
  render(props) {
    const app = this.app;
    if (typeof app.render !== "function" && !isNullOrEmpty(app.manifest.tag)) {
      return h(app.manifest.tag, this.appProps);
    }
    if (app.manifest.appType == AppType.PART) {
      return app.render(this, this.appProps);
    }
    return null;
  }

  uninstall(): void {
    super.uninstall();
    if (typeof this.app.unMount === "function") {
      this.app.unMount(this);
    }
  }
}
