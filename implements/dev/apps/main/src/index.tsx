import { h, tag, render, Component, classNames } from "wpa";
import { config } from "/configs/apps";
import { currencyFormatter, dateFormatter } from "/functions/formatter";
import BaseHost from "/hosts/base";
import { esLoad } from "/functions/loader";
import { IAppRouteInfo } from "definitions";
import { AppContainerTag } from "/containers/base";
//集成函数
console.log(currencyFormatter.manifest, dateFormatter.manifest);
console.log(currencyFormatter(123), dateFormatter(new Date()));

import css from "./index.scss";

const host = new BaseHost(esLoad);

const home = "/app-1";

@tag("simple-app")
class SimpleApp extends Component {
  css = css;
  private menus: IAppRouteInfo[];

  async install() {
    //默认实现中的App 可以有子App
    //需要把子App也加载进来
    // const [appConfig] = await host.loadConfigs("/pub/configs/app-config.js");

    this.menus = config.menus;

    host.registerApps(...this.menus);

    host.onRoute((app, path, params) => {
      console.log("onRoute", app, path, params);
      this.updateSelf();
    });

    host.onBeforeRoute((app, path, params) => {
      console.log("onBeforeRoute", app, path, params);
      if (app.manifest.name === "SECOND-APP") {
        return confirm("是否进入SECOND App？");
      }
    });

    // console.log("config", appConfig);

    //路由到当前路径，或其他地址
    host.routeTo(host.activePath);
    // host.routeTo(home, { name: "home" });
  }

  private buildNavs(infos: IAppRouteInfo[]) {
    return (
      <ul>
        {infos.map((info) => (
          <li>
            <a href={`#${info.path}`}>{info.name}</a>
            {info.children && this.buildNavs(info.children)}
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
