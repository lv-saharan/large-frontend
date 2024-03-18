import { IDocument, IWindow } from "./IHost";
import { IMessageOff } from "./IMessageOff";

export interface IUnMount {
  ({ off }: { off: IMessageOff }): Promise<void> | void;
}

export interface IUnMount {
  ({
    off,
    element,
    container,
    window,
    document,
  }?: {
    off: IMessageOff;
    element: HTMLElement;
    container: HTMLElement;
    window?: IWindow;
    document?: IDocument;
  }): Promise<void> | void;
}
