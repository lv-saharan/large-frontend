import { IContainer } from "../common/IContainer";
import { IApp } from "./IApp";
import { IAppRouteInfo } from "./IAppRouteInfo";

export interface IAppContainer extends IContainer {
  app: IApp;
  routeInfo: IAppRouteInfo;
}
