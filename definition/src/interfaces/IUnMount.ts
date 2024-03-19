import { IDocument, IWindow } from "./IHost";
import { IMessageOff } from "./IMessageOff";

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
