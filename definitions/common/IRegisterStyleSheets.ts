/**
 * 注册样式单接口
 */
export interface IRegisterStyleSheets<T = unknown> {
  (...stylesheets: Array<string>): Promise<T> | void;
}
