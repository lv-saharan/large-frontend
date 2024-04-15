import { IAppManifest } from "./IAppManifest";
import { IRender } from "../lifecycle/IRender";
import { IMount } from "../lifecycle/IMount";
import { IUnMount } from "../lifecycle/IUnMount";
import { IResource } from "../common/IResource";
import { IUpdate } from "../lifecycle/IUpdate";
// import { IAppRouteInfo } from "./IAppRouteInfo";

/**
 * 定义App
 */
export interface IApp extends IResource<IAppManifest> {
  // /**
  //  * App 路由
  //  * 必要性如何？是否可以放在具体实现类
  //  * routeInfo 对于每个实例是不同的，同一个应用多次出现
  //  */
  // routeInfo?: IAppRouteInfo;
  /**
   * 渲染app
   */
  render?: IRender;
  /**
   * 更新app
   */
  update?: IUpdate;
  /**
   * 挂载app
   */
  mount?: IMount;
  /**
   * 卸载app
   */
  unMount?: IUnMount;
}
