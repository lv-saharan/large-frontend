import { IMessageOn } from "./IMessageOn";
import { IMessageEmit } from "./IMessageEmit";
import { IDocument, IWindow } from "./IHost";

export interface IMount {
  ({
    on,
    emit,
    element,
    container,
    window,
    document,
  }?: {
    on?: IMessageOn;
    emit?: IMessageEmit;
    element: HTMLElement;
    container: HTMLElement;
    window?: IWindow;
    document?: IDocument;
  }): Promise<void> | void;
}
