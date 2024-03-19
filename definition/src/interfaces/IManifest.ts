import { ResourceType } from "../types/ResourceType";

export interface IManifest {
  /**
   * 名称
   */
  readonly name: string;

  /**
   * 资源类型
   */
  readonly resourceType: ResourceType;

  /**
   * 版本
   */
  readonly version: string;

  /**
   * 定义版本
   * 确定一个应用使用的定义版本，对不同定义版本可以做兼容或检查
   */
  readonly definitionVersion: string;

  /**
   * 帮助文档地址
   */
  readonly helpUrl?: string;

  /**
   * 作者
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

 