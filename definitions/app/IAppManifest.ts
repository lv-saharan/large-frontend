import { AppType } from "../type/AppType";
import { IManifest } from "../common/IManifest";
import { IAppManifestExtendInfo } from "./IAppManifestExtendInfo";

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
   * 应用类型
   */
  readonly appType: AppType;

  /**
   * 是否是单例模式
   */
  readonly singleton: boolean;
  

  readonly info?: IAppManifestExtendInfo;
}
