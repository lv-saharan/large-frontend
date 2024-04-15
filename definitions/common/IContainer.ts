import { IMessage } from "../message";
import { IHost } from "./IHost";
import { IRegisterCsses } from "./IRegisterCsses";
import { IRegisterStyleSheets } from "./IRegisterStyleSheets";

/**
 * 容器接口
 */
export interface IContainer extends IMessage<string> {
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

  /**
   * 容器内绑定的元素
   */
  readonly element?: HTMLElement;
}
