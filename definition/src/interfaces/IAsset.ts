import { IAssetManifest } from "./IAssetManifest";
import { IResource } from "./IResource";

export interface IAsset extends IResource {
  manifest: IAssetManifest;
  fetch: <T = Blob | string | JSON | ArrayBuffer | FormData>() => Promise<T>;
}
