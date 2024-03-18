import { IMessageEmit } from "./IMessageEmit";
import { IMessageOff } from "./IMessageOff";
import { IMessageOn } from "./IMessageOn";

export interface IMessage {
  /**
   * 监听消息
   * @param event 需要支持 my-event.*这样的结构
   * @param callback
   */
  on: IMessageOn;
  /**
   * 取消监听消息
   */
  off: IMessageOff;
  /**
   * 发送消息
   */
  emit: IMessageEmit;
}
 