import { h, tag, render, Component } from "wpa";

import ContainerTag from "./container.tsx";

import apps from "./apps.json";

console.log("apps", apps);

const MainTag = "com.hh-main";

@tag(MainTag)
class MainApp extends Component {
  css = `
  :host{
    color: red;
  }
  ul{
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
  li{
    list-style: none;
  }
  `;
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
