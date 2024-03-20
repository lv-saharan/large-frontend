import { IFunctionManifest } from "./IFunctionManifest";
import { IResource } from "./IResource";

/**
 * 函数接口
 * 每一个函数需要有其描述文件和调用方法
 */
export interface IFunction extends IResource {
  manifest: IFunctionManifest;
  exec: <T>(...args: any[]) => T;
}
