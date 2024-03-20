import { h, tag, render, Component } from "wpa";
import { AppType, IApp } from "definition";
import { loadApp } from "./iframe-loader";
// import { loadApp } from "./basic-loader";
const ContainerTag = "com.hh-container";
@tag(ContainerTag)
class AppContainer extends Component {
  css() {
    return `
    :host{
        color:blue;
        display:block;
        width:${this.props.width}px;
        height:${this.props.height}px;
        border:dotted 1px #ccc;
    }
    main{
      height:100%;
    }
    #app{
      height:80%;
      overflow:auto;
    }
    `;
  }
  static defaultProps = {
    url: null,
    width: null,
    height: null,
  };

  static propTypes = {
    url: String,
    width: Number,
    height: Number,
  };

  private app: IApp;
  private element: any;
  async install() {
    //目前只实现单应用模式
    this.app = (await loadApp(`${this.props.url}/index.js`)) as IApp;
    switch (this.app.manifest.definitionVersion as string) {
      case "1.0.0":
        break;
      case "2.0.0":
        break;
    }

    if (typeof this.app.render == "function") {
      this.element = await this.app.render(this.props.settings, {
        container: this.$app,
        registerCsses: (...csses) => {
          this.cssss = csses;
          return null;
        },
        registerStylesheets: (...stylesheets) => {
          this.stylesheets = stylesheets;
          return null;
        },
      });
    }
    console.log(this.app);
  }
  get $app() {
    return this.$("#app");
  }
  async installed() {
    switch (this.app.manifest.appType) {
      case AppType.IFRAME:
        break;
      case AppType.PART:
    }
    if (this.app.manifest.appType === AppType.PART) {
    } else {
      this.$app.appendChild(this.element);
    }
  }
  render(props) {
    return (
      <main>
        <h2>{props.settings?.title}</h2>
        <div id="app">
          {this.app.manifest.appType === AppType.PART ? this.element : null}
        </div>
      </main>
    );
  }
}

export default ContainerTag;
