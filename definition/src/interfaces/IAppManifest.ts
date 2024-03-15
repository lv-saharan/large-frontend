import { AppType } from "../enums/AppType";
/**
 * 应用清单
 */
export interface IAppManifest {
  /**
   * 应用名称
   */
  readonly name: string;

  /**
   * 应用短名称，用于菜单、标签等
   */
  readonly shortName: string;

  /**
   * 应用类型
   */
  readonly appType: AppType;

  /**
   * 应用帮助文档地址
   */
  readonly helpUrl?: string;

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

  /**
   * 应用作者
   */
  readonly author: string;
  /**
   * 联系电话
   */
  readonly phone: string;
  /**
   * 应用描述
   */
  readonly description: string;

  /**
   * 扩展信息
   */
  readonly extendInfo?: any;
}
