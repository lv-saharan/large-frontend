import { IManifest } from "./IManifest";

export interface IAssetManifest extends IManifest {
  /**
   * 资源地址
   */
  readonly src: string;
}
