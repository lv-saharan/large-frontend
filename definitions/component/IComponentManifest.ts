import { IManifest } from "../common";
import { IComponentManifestExtendInfo } from "./IComponentManifestExtendInfo";

export interface IComponentManifest extends IManifest {
  /**
   * 组件标签
   */
  readonly tag: string;
  readonly info: IComponentManifestExtendInfo;
}
