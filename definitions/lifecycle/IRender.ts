import { IContainer } from "definitions/common";

/**
 * 创建自己的对象
 */
export interface IRender {
  (props: any, container: IContainer): Promise<any> | any;
}
