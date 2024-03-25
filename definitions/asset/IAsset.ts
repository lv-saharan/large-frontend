import { AssetType } from "definitions/type/AssetType";
import { IAssetManifest } from "./IAssetManifest";
import { IResource } from "../common/IResource";
/**
 *各种资源
 *IMAGE，VIDEO，AUDIO，STYLESHEET，ATTACHMENT
 */
export interface IAsset extends IResource {
  manifest: IAssetManifest;
}
