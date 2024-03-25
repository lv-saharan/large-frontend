import { AssetType } from "definitions/type";
import { IManifest } from "../common/IManifest";

export interface IAssetManifest extends IManifest {
  assetType: AssetType;
  /**
   * 资源位置
   */
  src: string;
}
