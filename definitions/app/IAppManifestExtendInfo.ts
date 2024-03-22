import { IManifestExtendInfo } from "../common/IManifestExtendInfo";


export interface IAppManifestExtendInfo extends IManifestExtendInfo {
  /**
   * 不同尺寸的图标
   */
  readonly icons?: Array<{ src: string; sizes: string; type: string; }> |
  undefined;
}
