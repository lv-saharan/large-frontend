import { IManifestExtendInfo } from "../common";


export interface IComponentManifestExtendInfo extends IManifestExtendInfo {
  /**
   * 组件所属组
   */
  readonly group: string;
}
