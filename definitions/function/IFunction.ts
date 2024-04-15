import { IFunctionManifest } from "./IFunctionManifest";
import { IResource } from "../common";

/**
 * 函数接口
 * 每一个函数需要有其描述文件和调用方法
 */
export interface IFunction extends IResource<IFunctionManifest> {
  /**
   * 执行函数
   * @param args
   * @returns
   */
  // exec: <T>(...args: any[]) => T;
  <T>(...args: any[]): T;
}
