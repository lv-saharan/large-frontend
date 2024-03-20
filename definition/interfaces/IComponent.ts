import { IComponentManifest } from "./IComponentManifest";
import { IMount } from "./IMount";
import { IRender } from "./IRender";
import { IResource } from "./IResource";
import { IUnMount } from "./IUnMount";
import { IUpdate } from "./IUpdate";
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
