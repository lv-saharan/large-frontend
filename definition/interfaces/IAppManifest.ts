import { AppType } from "../types/AppType";
import { IManifest } from "./IManifest";
import { IManifestExtendInfo } from "./IManifestExtendInfo";

export interface IAppManifestExtendInfo extends IManifestExtendInfo {
  /**
   * 不同尺寸的图标
   */
  readonly icons?:
    | Array<{ src: string; sizes: string; type: string }>
    | undefined;
}

/**
 * 应用清单
 */
export interface IAppManifest extends IManifest {
  /**
   * 子应用应用的路径
   */
  readonly path?: string;
  /**
   * 应用的标签
   */
  readonly tag?: string;
  /**
   * 应用短名称，用于菜单、标签等
   */
  readonly shortName: string;

  /**
   * 应用类型
   */
  readonly appType: AppType;

  /**
   * 是否是单例模式
   */
  readonly singleton: boolean;

  
  readonly info?: IAppManifestExtendInfo;

}