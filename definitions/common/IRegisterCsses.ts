import { CssEntryType } from "../type/CssEntryType";

export interface IRegisterCsses<T = unknown> {
  (...csses: Array<CssEntryType>): Promise<T> | void;
}
