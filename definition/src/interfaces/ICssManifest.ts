import { IManifest } from "./IManifest";

export interface ICssManifest extends IManifest {
  /**
   * 资源地址
   */
  readonly src: string;
}
