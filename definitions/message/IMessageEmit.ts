/**
 * 发送消息接口
 */

export interface IMessageEmit<T extends string | symbol> {
  (event: T, data?: any): void;
}
