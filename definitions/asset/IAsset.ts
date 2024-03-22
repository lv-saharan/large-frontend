import { AssetType } from "definitions/type/AssetType";
import { IAssetManifest } from "./IAssetManifest";
import { IResource } from "../common/IResource";

export interface IAsset extends IResource {
  manifest: IAssetManifest;
  content: AssetType;
}
