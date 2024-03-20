import { IRegisterCsses } from "./IRegisterCsses";
import { IRegisterStyleSheets } from "./IRegisterStyleSheets";

export interface IAppContainer {
  registerCsses: IRegisterCsses;
  regsiterStyleSheets: IRegisterStyleSheets;
}
