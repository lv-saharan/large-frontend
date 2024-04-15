import { IContainer } from "../common/IContainer";
import { IApp } from "./IApp";
import { IAppRouteInfo } from "./IAppRouteInfo";

export interface IAppContainer extends IContainer {
  /**
   * App 实例
   */
  readonly app: IApp;
  /**
   * 当前实例的路由信息
   */
  readonly routeInfo: IAppRouteInfo;
}
