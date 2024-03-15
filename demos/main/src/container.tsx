import { h, tag, render, Component } from "wpa";
import { AppType, IApp } from "definition";
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
    const app = (this.app = await import(`${this.props.url}/index.js`));
    console.log(app);
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
      const app = await this.app.render(
        {
          registerCsses: (csses) => {
            this.cssss = csses;
            this.updateStyle();
          },
        },
        this.props.settings
      );

      this.$app.appendChild(app);
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
