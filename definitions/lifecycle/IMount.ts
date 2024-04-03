import { IMessageOn } from "../message/IMessageOn";
import { IMessageEmit } from "../message/IMessageEmit";
import { IDocument, IWindow } from "../common/IHost";
import { IContainer } from "definitions/common";

export interface IMount {
  (container: IContainer): Promise<void> | void;
}
