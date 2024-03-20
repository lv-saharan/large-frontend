import { IManifest } from "./IManifest";
import { IManifestExtendInfo } from "./IManifestExtendInfo";

export interface IComponentManifestExtendInfo extends IManifestExtendInfo {
  /**
   * 组件所属组
   */
  readonly group: string;
}
export interface IComponentManifest extends IManifest {
  /**
   * 组件标签
   */
  readonly tag: string;
  readonly info: IComponentManifestExtendInfo;
}
