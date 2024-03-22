import { IMessageOn } from "../message/IMessageOn";
import { IMessageEmit } from "../message/IMessageEmit";
import { IDocument, IWindow } from "../common/IHost";
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
