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
/**
 * 创建自己的对象
 */
export interface IRender {
  (props?: any, args?: IRenderExtendArgs): Promise<any> | any;
}
