import { IAssetManifest } from "./IAssetManifest";
import { IResource } from "./IResource";

export interface IAsset extends IResource {
  manifest: IAssetManifest;
  content: Blob | string | JSON | ArrayBuffer | object | Array<any>;
}
