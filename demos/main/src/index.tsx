import { h, tag, render, Component } from "wpa";

import ContainerTag from "./container";

import css from "./index.scss";

import apps from "./apps.json";
import { IComponent, IComponentManifest } from "definition";

console.log("apps", apps);

const MainTag = "com.hh-main";

@tag(MainTag)
class MainApp extends Component {
  private components: IComponent[] = [];
  async loadComponents(src) {
    const { default: components, ...component } = await import(src);
    if (component?.manifest) {
      this.components.push(component);
    }
    if (Array.isArray(components)) {
      this.components.push(...components.filter((item) => item.manifest));
    }

    console.log(this.components);
  }
  basicUI: IComponent = null;
  async install() {
    await this.loadComponents("/demos/components/basic-ui/index.js");
  }
  css = css;
  render() {
    return (
      <div class="container">
        <fieldset>
          <legend>components</legend>
          <ul>
            {this.components.map((item) => {
              return (
                <li>
                  {item.manifest.name}
                  <hr />
                  {item.render ? item.render() : <item.manifest.tag/>}
                </li>
              );
            })}
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
