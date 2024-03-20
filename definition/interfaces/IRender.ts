import { IRenderExtendArgs } from "./IRenderExtendArgs";

/**
 * 创建自己的对象
 */
export interface IRender {
  (props: any, args?: IRenderExtendArgs): Promise<any> | any;
}
