import { IComponent } from "definition";
import { h, tag, render, Component } from "wpa";
const ComponentContainerTag = "com.hh.component-container";

@tag(ComponentContainerTag)
class ComponentContainer extends Component {
  component: IComponent;
  element: HTMLElement;
  async install() {
    let { component, ...props } = this.props;
    this.component = component as IComponent;
    this.element = await this.component.render({ text: "hello", ...props });
  }
  rendered() {
    this.shadowRoot.append(this.element);
  }
  update() {
    let { component, ...props } = this.props;
    super.update();
    if (typeof this.component.update === "function") {
      this.component.update(this.element, { text: "hello", ...props });
    }
  }
  render() {}
}

export default ComponentContainerTag;
