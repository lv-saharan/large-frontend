import { AssetType } from "definition/types/AssetType";
import { IAssetManifest } from "./IAssetManifest";
import { IResource } from "./IResource";

export interface IAsset extends IResource {
  manifest: IAssetManifest;
  content: AssetType;
}
