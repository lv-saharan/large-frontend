import { AppType } from "../types/AppType";
import { IManifest } from "./IManifest";

/**
 * 应用清单
 */
export interface IAppManifest extends IManifest {
  /**
   * 应用的标签
   */
  tag?: string;
  /**
   * 应用短名称，用于菜单、标签等
   */
  readonly shortName: string;

  /**
   * 应用类型
   */
  readonly appType: AppType;

  /**
   * 不同尺寸的图标
   */
  readonly icons?:
    | Array<{ src: string; sizes: string; type: string }>
    | undefined;

  /**
   * 是否是单例模式
   */
  readonly singleton: boolean;
}
