import { IDocument, IWindow } from "../common/IHost";
import { IMessageOff } from "../message/IMessageOff";

export interface IUnMountExtendArgs {
  off: IMessageOff;
  element: HTMLElement;
  container: HTMLElement;
  window?: IWindow;
  document?: IDocument;
}

export interface IUnMount {
  (args: IUnMountExtendArgs): Promise<void> | void;
}
