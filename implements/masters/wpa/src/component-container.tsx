import {
  IComponentContainer,
  IRegisterCsses,
  IRegisterStyleSheets,
} from "definition";
import { h, tag, render, Component } from "wpa";

export const ComponentContainerTag = "large-component-container";

@tag(ComponentContainerTag)
class ComponentContainer extends Component implements IComponentContainer {
  registerCsses: IRegisterCsses<unknown>;
  regsiterStyleSheets: IRegisterStyleSheets<unknown>;
}
