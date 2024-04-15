import { AssetType } from "../type";
import { IManifest } from "../common/IManifest";

/**
 * 资源清单
 */
export interface IAssetManifest extends IManifest {
  /**
   * 资源类型
   */
  assetType: AssetType;
  /**
   * 资源位置
   */
  src: string;
}
