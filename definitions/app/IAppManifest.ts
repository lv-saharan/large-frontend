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
   * 标签化的自定义组件，可以不用render等方法
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

  /**
   * 扩展信息
   */
  readonly info?: IAppManifestExtendInfo;
}
