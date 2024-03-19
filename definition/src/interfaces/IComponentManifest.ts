import { IManifest } from "./IManifest";

export interface IComponentManifest extends IManifest {
  /**
   * 组件标签
   */
  readonly tag: string;
  /**
   * 组件标签前缀
   */
  readonly tagPrexif: string;
}
