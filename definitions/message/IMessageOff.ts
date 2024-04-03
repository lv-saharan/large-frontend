import { IMessageHandler } from "./IMessageHandler";

/**
 * 取消监听消息接口
 */

export interface IMessageOff<T extends string | symbol> {
  (event: T, callback?: IMessageHandler): void;
}
