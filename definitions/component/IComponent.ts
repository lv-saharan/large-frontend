import { IComponentManifest } from "./IComponentManifest";
import { IMount } from "../lifecycle/IMount";
import { IRender } from "../lifecycle/IRender";
import { IResource } from "../common/IResource";
import { IUnMount } from "../lifecycle/IUnMount";
import { IUpdate } from "../lifecycle/IUpdate";
/**
 * 组件接口，
 */
export interface IComponent extends IResource {
  manifest: IComponentManifest;
  render?: IRender;
  update?: IUpdate;
  mount?: IMount;
  unMount?: IUnMount;
}
