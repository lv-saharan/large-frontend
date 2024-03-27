import { AssetType } from "definitions/type/AssetType";
import { IAssetManifest } from "./IAssetManifest";
import { IResource } from "../common/IResource";
import { IRender } from "definitions/lifecycle";
import { IAssetContainer } from "./IAssetContainer";
/**
 *各种资源
 *IMAGE，VIDEO，AUDIO，STYLESHEET，ATTACHMENT
 */
export interface IAsset extends IResource<IAssetManifest> {
  /**
   * 资源可以有自己的render
   */
  render?: IRender;
}
