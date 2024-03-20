import { h, tag, render, Component, classNames } from "wpa";

import { host } from "implements/hosts/es-host";
import css from "./index.scss";
import { IAppRegisterInfo } from "definition";
import { AppContainerTag } from "../../../implements/masters/wpa/src/app-container";
const [appConfig] = await host.loadAssets("../assets/apps.js");
console.log("config", appConfig);

await host.registerApps(...(appConfig.content as any[]));

@tag("simple-app")
class SimpleApp extends Component {
  css = css;
  config: any;
  async install() {
    window.addEventListener("hashchange", (e) => {
      this.updateSelf();
    });
  }
  get hash() {
    return location.hash;
  }
  render() {
    return (
      <>
        <aside>
          {(appConfig.content as IAppRegisterInfo[]).map((info) => (
            <div>
              <a href={`#${info.key}`} title={info.src}>
                {info.key}
              </a>
            </div>
          ))}
        </aside>
        <main>
          {(appConfig.content as IAppRegisterInfo[]).map((info) => (
            <AppContainerTag
              class={classNames("app-container", {
                hidden: !this.hash.startsWith(`#${info.key}`),
              })}
              apps={host.getApps(info.key)}
            />
          ))}
        </main>
      </>
    );
  }
}
render(<simple-app></simple-app>, document.body);
