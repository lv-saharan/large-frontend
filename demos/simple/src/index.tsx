import { h, tag, render, Component, classNames } from "wpa";

import { BaseHost } from "implements/hosts/BaseHost";

import css from "./index.scss";

import { AppRegisterInfo } from "implements/common/type";

import { AppContainerTag } from "implements/masters/wpa/src/app-container";
import { isEmptyOrNullString } from "implements/common/util";
import { IApp } from "definition";
import { load } from "implements/loaders/es-loader";

const host = new BaseHost(load);
const home = "app-1";
@tag("simple-app")
class SimpleApp extends Component {
  css = css;
  private config: any;
  private loadedApps: IApp[] = [];
  private currApp: IApp = null;
  async install() {
    window.addEventListener("hashchange", async (e) => {
      const matched = await host.getAppByRoute(this.path);
      if (
        matched &&
        this.loadedApps.every((app) => app.manifest !== matched.manifest)
      ) {
        this.loadedApps.push(matched);
      }
      this.currApp = matched ?? this.currApp;
      this.updateSelf();
    });

    const [appConfig] = await host.loadAssets("../assets/apps.js");

    console.log("config", appConfig);

    await host.registerApps(appConfig.content as Array<AppRegisterInfo>);

    /**
     * 首次进入
     */
    this.currApp = await host.getAppByRoute(this.path);
    if (this.currApp) {
      this.loadedApps.push(this.currApp);
    }
  }
  get path() {
    return isEmptyOrNullString(location.hash)
      ? home
      : location.hash.substring(1);
  }
  render() {
    return (
      <>
        <aside>
          {host.getRegisteredApps<AppRegisterInfo>().map((info) => (
            <div>
              <a href={`#${info.path}`} title={info.name}>
                {info.name}
              </a>
            </div>
          ))}
        </aside>
        <main>
          {this.loadedApps.map((app) => (
            <AppContainerTag
              app={app}
              class={classNames("app-container", {
                hidden: this.currApp.manifest !== app.manifest,
              })}
            ></AppContainerTag>
          ))}
        </main>
      </>
    );
  }
}
render(<simple-app></simple-app>, document.body);
