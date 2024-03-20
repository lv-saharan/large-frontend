import { IRegisterCsses } from "./IRegisterCsses";
import { IRegisterStyleSheets } from "./IRegisterStyleSheets";

export interface IComponentContainer {
  registerCsses: IRegisterCsses;
  regsiterStyleSheets: IRegisterStyleSheets;
}
