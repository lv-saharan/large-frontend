import { IContainer } from "definitions/common";
import { IComponent } from "./IComponent";

/**
 * 组件容器
 */
export interface IComponentContainer extends IContainer {
  component: IComponent;
}
