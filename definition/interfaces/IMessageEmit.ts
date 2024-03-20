/**
 * 发送消息接口
 */

export interface IMessageEmit<T = unknown> {
  (event: T, data?: any): void;
}
