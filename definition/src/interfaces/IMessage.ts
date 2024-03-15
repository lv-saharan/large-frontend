import { off } from "process";

export interface IHandler<T = unknown> {
  (event: T, data: any): void;
}

/**
 * 监听消息接口
 */
export interface IOn<T = unknown> {
  (event: T, callback: IHandler): void;
}
/**
 * 取消监听消息接口
 */
export interface IOff<T = unknown> {
  (event: T, callback?: IHandler): void;
}
/**
 * 发送消息接口
 */
export interface IEmit<T = unknown> {
  (event: T, data?: any): void;
}
export interface IMessage {
  /**
   * 监听消息
   * @param event 需要支持 my-event.*这样的结构
   * @param callback
   */
  on: IOn;
  /**
   * 取消监听消息
   */
  off: IOff;
  /**
   * 发送消息
   */
  emit: IEmit;
}
 