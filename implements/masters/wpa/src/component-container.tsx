import {
  IComponentContainer,
  IRegisterCsses,
  IRegisterStyleSheets,
} from "definition";
import { h, tag, render, Component } from "wpa";

export const ComponentContainerTag = "large-component-container";

@tag(ComponentContainerTag)
class ComponentContainer extends Component implements IComponentContainer {
  registerCsses = (...csses) => {
    this.cssss = csses;
    return this.updateStyle();
  };
  regsiterStyleSheets = (...stylesheets) => {
    this.stylesheets = stylesheets;
    return this.updateStyle();
  };
}
