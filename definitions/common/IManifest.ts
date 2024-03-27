import { ResourceType } from "../type/ResourceType";
import { VersionType } from "../type/VersionType";
import { IManifestExtendInfo } from "./IManifestExtendInfo";

/**
 * 资源清单接口
 * 叫meta好还是？Manifest
 */
export interface IManifest {
  /**
   * 名称,资源唯一性标识
   */
  readonly name: string;

  /**
   * 显示名称
   */
  readonly displayName?: string;

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
  readonly definitionVersion: VersionType;
  /**
   * 扩展信息
   */
  readonly info?: IManifestExtendInfo;
}
