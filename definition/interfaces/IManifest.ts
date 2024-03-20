import { ResourceType } from "../types/ResourceType";
import { VersionType } from "../types/VersionType";
import { IManifestExtendInfo } from "./IManifestExtendInfo";

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
  readonly definitionVersion: VersionType;
  /**
   * 扩展信息
   */
  readonly info: IManifestExtendInfo;
}
