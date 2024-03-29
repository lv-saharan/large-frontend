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
    //默认实现中的App 可以有子App
    //需要把子App也加载进来
    const [appConfig] = await host.loadConfigs("/pub/configs/app-config.js");

    this.menus = appConfig.config as Array<AppRegisterInfo>;
    host.registerApps(...this.menus);

    host.onRoute((app, path, params) => {
      console.log("onRoute", app, path, params);
      this.updateSelf();
    });

    console.log("config", appConfig);

    host.routeTo(home, { name: "ljj" });
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
          {host.loadedApps.map((app) => (
            <AppContainerTag
              app={app}
              host={host}
              class={classNames("app-container", {
                hidden: host.activeApp.manifest !== app.manifest,
              })}
            ></AppContainerTag>
          ))}
        </main>
      </>
    );
  }
}

/**
 * 主题样式
 */
import themeCss from "./theme.scss";
render(<simple-app theme-css={themeCss}></simple-app>, document.body);

/**
 * 全局样式
 */
import globalCss from "./global.scss";

render(<style>{globalCss}</style>, document.head);

