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
   * 应用版本
   * 可以在加载时与配置进行校验
   */
  readonly appVersion: string;

  /**
   * 定义版本
   * 确定一个应用使用的定义版本，对不同定义版本可以做兼容或检查
   */
  readonly definitionVersion: string;

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
