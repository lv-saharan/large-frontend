import { IMessageOn } from "./IMessageOn";
import { IMessageEmit } from "./IMessageEmit";
import { IDocument, IWindow } from "./IHost";
export interface IMountExtendArgs {
  on?: IMessageOn;
  emit?: IMessageEmit;
  element: HTMLElement;
  container: HTMLElement;
  window?: IWindow;
  document?: IDocument;
}
export interface IMount {
  (args: IMountExtendArgs): Promise<void> | void;
}
