export interface IMessageHandler<T = unknown> {
  (event: T, data: any): void;
}
