import { CssEntryType } from "../type/CssEntryType";

/**
 * 注册样式接口
 */
export interface IRegisterCsses<T = unknown> {
  (...csses: Array<CssEntryType>): Promise<T> | void;
}
