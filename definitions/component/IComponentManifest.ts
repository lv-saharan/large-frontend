import { IManifest } from "../common";
import { IComponentManifestExtendInfo } from "./IComponentManifestExtendInfo";

/**
 * 组件清单
 */

export interface IComponentManifest extends IManifest {
  /**
   * 组件标签
   */
  readonly tag: string;
  /**
   * 组件扩展信息
   */
  readonly info: IComponentManifestExtendInfo;
}
