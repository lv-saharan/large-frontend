import { h, tag, render, Component, classNames } from "wpa";
import { IApp } from "definitions";
import {
  AppRegisterInfo,
  isEmptyOrNullString,
  BaseHost,
  EsLoader,
} from "implements";

import { WpaAppContainerTag } from "implements";

import css from "./index.scss";

const AppContainerTag = WpaAppContainerTag;

const { load } = EsLoader;

const host = new BaseHost(load);

const home = "/app-1";

@tag("simple-app")
class SimpleApp extends Component {
  css = css;
  private menus: AppRegisterInfo[];
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
      console.log("find route", matched);
      this.updateSelf();
    });

    //默认实现中的App 可以有子App
    //需要把子App也加载进来
    const [appConfig] = await host.loadConfigs(
      "../shared/configs/app-config.js"
    );

    this.menus = appConfig.config as Array<AppRegisterInfo>;
    host.registerApps(...this.menus);

    console.log("config", appConfig);

    // await host.registerApps(infos);

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
  private buildNavs(infos: AppRegisterInfo[]) {
    return (
      <ul>
        {infos.map((info) => (
          <li>
            <a href={`#${info.path}`}>{info.name}</a>
            {info.children &&
              this.buildNavs(info.children as AppRegisterInfo[])}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <>
        <aside>{this.buildNavs(this.menus)}</aside>
        <main>
          {this.loadedApps.map((app) => (
            <AppContainerTag
              app={app}
              host={host}
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
