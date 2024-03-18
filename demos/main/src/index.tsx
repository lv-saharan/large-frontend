import { h, tag, render, Component } from "wpa";

import ContainerTag from "./container";

import css from "./index.scss";

import apps from "./apps.json";
import { IComponent, IComponentManifest } from "definition";

console.log("apps", apps);

const MainTag = "com.hh-main";

@tag(MainTag)
class MainApp extends Component {
  loadComponent(src) {
    return import(src);
  }
  basicUI: IComponent = null;
  async install() {
    this.basicUI = await this.loadComponent(
      "/demos/components/basic-ui/index.js"
    );
    console.log("basic-ui", this.basicUI);
  }
  css = css;
  render() {
    return (
      <div class="container">
        <fieldset>
          <legend>components</legend>
          <ul>
            {Object.values(this.basicUI.manifest.tags).map((Tag) => (
              <Tag></Tag>
            ))}
          </ul>
        </fieldset>
        <h1>Main App</h1>
        <ul>
          {apps.map((app) => (
            <li>
              <ContainerTag
                url={app.url}
                width={app.width}
                height={app.height}
                settings={app.settings}
              ></ContainerTag>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
render(<MainTag>Main App</MainTag>, "body");
