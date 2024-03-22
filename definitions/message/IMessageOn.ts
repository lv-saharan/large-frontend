import { IMessageHandler } from "./IMessageHandler";

/**
 * 监听消息接口
 */

export interface IMessageOn<T = unknown> {
  (event: T, callback: IMessageHandler): void;
}
