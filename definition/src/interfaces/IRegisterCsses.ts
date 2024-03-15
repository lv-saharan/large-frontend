import { CssEntryType } from "../types";

export interface IRegisterCsses<T = unknown> {
  (...csses: Array<CssEntryType>): Promise<T>;
}
