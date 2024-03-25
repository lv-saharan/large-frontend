import { IMessageOn } from "../message/IMessageOn";
import { IMessageEmit } from "../message/IMessageEmit";
import { IDocument, IWindow } from "../common/IHost";
import { IContainer } from "definitions/common";
export interface IMountExtendArgs {
  on: IMessageOn;
  emit: IMessageEmit;
}
export interface IMount {
  (container: IContainer, args: IMountExtendArgs): Promise<void> | void;
}
