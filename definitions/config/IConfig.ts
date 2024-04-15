import { IConfigManifest } from "./IConfigManifest";
import { IResource } from "../common/IResource";
/**
 *配置信息
 */
export interface IConfig extends IResource<IConfigManifest> {
  config: any;
}
