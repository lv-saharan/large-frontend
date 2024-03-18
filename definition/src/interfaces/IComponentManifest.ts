import { IManifest } from "./IManifest";

export interface IComponentManifest extends IManifest {
  /**
   * 组件可以一次导入多个标签
   */
  tags: {
    [key: string]: string;
  };
}
