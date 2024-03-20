import { CssEntryType } from "../types/CssEntryType";

export interface IRegisterCsses<T = unknown> {
  (...csses: Array<CssEntryType>): Promise<T>;
}
