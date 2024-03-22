import { ResourceType } from "../type/ResourceType";
import { VersionType } from "../type/VersionType";

export interface IManifestExtendInfo {
  /**
   * 作者
   */
  readonly author: string;
  /**
   * 所属组织
   */
  readonly org: string;
  /**
   * 联系电话
   */
  readonly phone?: string;
  /**
   * 应用描述
   */
  readonly description?: string;
  /**
   * 帮助文档地址
   */
  readonly helpUrl?: string;
  /**
   * 其他信息
   * 如所属业务系统
   */
  readonly [key: string]: any;
}
