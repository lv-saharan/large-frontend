import { IComponentManifest } from "./IComponentManifest";
import { IRender, IRenderComponent } from "./IRender";
import { IResource } from "./IResource";

/**
 * 组件接口，
 */
export interface IComponent extends IResource {
  manifest: IComponentManifest;
  render?: IRenderComponent;
  [key: string]: any;
}
