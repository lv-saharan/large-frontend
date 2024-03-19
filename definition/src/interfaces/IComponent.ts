import { IComponentManifest } from "./IComponentManifest";
import { IRender } from "./IRender";
import { IResource } from "./IResource";
/**
 * 组件接口，
 */
export interface IComponent extends IResource {
  manifest: IComponentManifest;
  render: IRender;
  [key: string]: any;
}
