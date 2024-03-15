import { IDocument, IWindow } from "./IHost";
/**
 * 初始化函数
 */
export interface IScript<T = unknown> {
  (window: IWindow, document: IDocument): Promise<T>;
}

export interface IRegisterSripts<T = unknown> {
  (...scripts: Array<IScript>): Promise<T>;
}
