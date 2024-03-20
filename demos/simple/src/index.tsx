import { h, tag, render, Component } from "wpa";

import { host } from "implements/hosts/es-host";

@tag("simple-app")
class SimpleApp extends Component {
  config: any;
  async install() {
    const [appConfig] = await host.loadAssets("../assets/apps.js");

    host.registerApps(...(appConfig.content as any[]));
    console.log(appConfig);
  }
  render() {
    return <h1>hi</h1>;
  }
}
render(<simple-app></simple-app>, document.body);
