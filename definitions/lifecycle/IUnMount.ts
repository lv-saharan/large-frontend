import { IContainer } from "definitions/common";
import { IDocument, IWindow } from "../common/IHost";
import { IMessageOff } from "../message/IMessageOff";
import { IMessageEmit } from "definitions/message";

export interface IUnMount {
  (container: IContainer): Promise<void> | void;
}
