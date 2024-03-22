import { IHost } from "./IHost";
import { IRegisterCsses } from "./IRegisterCsses";
import { IRegisterStyleSheets } from "./IRegisterStyleSheets";
import { IResource } from "./IResource";

export interface IContainer {
  /**
   * 注册css
   */
  registerCsses: IRegisterCsses;
  /**
   * 注册样式表
   */
  registerStyleSheets: IRegisterStyleSheets;
  /**
   * 宿主
   */
  readonly host: IHost;


  appendChild(child: HTMLElement): void;
}
