import { IComponentManifest } from "./IComponentManifest";
import { IMount } from "../lifecycle/IMount";
import { IRender } from "../lifecycle/IRender";
import { IResource } from "../common/IResource";
import { IUnMount } from "../lifecycle/IUnMount";
import { IUpdate } from "../lifecycle/IUpdate";
import { IComponentContainer } from "./IComponentContainer";
/**
 * 组件接口，
 */
export interface IComponent extends IResource {
  /**
   * 组件的配置
   */
  manifest: IComponentManifest;
  /**
   * 组件的渲染方法
   */
  render?: IRender;
  /**
   * 组件的更新方法
   */
  update?: IUpdate;
  /**
   * 组件的挂载方法
   */
  mount?: IMount;
  /**
   * 组件的卸载方法
   */
  unMount?: IUnMount;
}
