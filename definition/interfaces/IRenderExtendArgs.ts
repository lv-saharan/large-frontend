import { IRegisterCsses } from "./IRegisterCsses";
import { IRegisterStyleSheets } from "./IRegisterStyleSheets";
import { IWindow, IDocument } from "./IHost";


export interface IRenderExtendArgs {
  registerCsses?: IRegisterCsses;
  registerStylesheets?: IRegisterStyleSheets;
  container: HTMLElement;
  window?: IWindow;
  document?: IDocument;
}
