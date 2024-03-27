import { IAppRouteInfo } from "../app/IAppRouteInfo";

/**
 * 注册应用接口
 */
export interface IRegisterApps<T extends IAppRouteInfo = IAppRouteInfo> {
  (...apps: Array<T>): void;
}
