import { IContainer } from "definitions/common";
import { IComponent } from "./IComponent";

export interface IComponentContainer extends IContainer {
  component: IComponent;
}
