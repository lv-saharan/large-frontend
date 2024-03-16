import { h, tag, render, Component } from "wpa";

import ContainerTag from "./container";

import css from "./index.scss" ;

import apps from "./apps.json";

import { assert } from "console";

console.log("apps", apps);

const MainTag = "com.hh-main";

@tag(MainTag)
class MainApp extends Component {
  css = css;
  render() {
    return (
      <div class="container">
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
