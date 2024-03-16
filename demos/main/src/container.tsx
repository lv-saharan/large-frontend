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
  async install() {
    this.app = await loadApp(`${this.props.url}/index.js`);

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

    if (typeof this.app.render == "function") {
      let app = await this.app.render(
        {
          registerCsses: (...csses) => {
            this.cssss = csses;
            return this.updateStyle();
          },
          registerStylesheets: (...stylesheets) => {
            this.stylesheets = stylesheets;
            return this.updateStyle();
          },
        },
        this.props.settings
      );

      if (this.app.manifest.appType === AppType.PART) {
        render(app, this.$app);
      } else {
        this.$app.appendChild(app);
      }
    }
  }
  render(props) {
    return (
      <main>
        <h2>{props.settings?.title}</h2>
        <div id="app"></div>
      </main>
    );
  }
}

export default ContainerTag;
