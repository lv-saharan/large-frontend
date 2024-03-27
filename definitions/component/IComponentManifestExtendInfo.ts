import { IManifestExtendInfo } from "../common";

/**
 * 组件清单扩展信息
 */
export interface IComponentManifestExtendInfo extends IManifestExtendInfo {
  /**
   * 组件分类
   */
  readonly classification?: string;
}
