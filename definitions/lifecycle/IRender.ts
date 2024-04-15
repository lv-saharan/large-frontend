import { IContainer } from "../common";

/**
 * 创建自己的对象
 */
export interface IRender {
  (container: IContainer, props: any): Promise<any> | any;
}
