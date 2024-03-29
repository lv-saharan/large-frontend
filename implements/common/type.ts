import { IAppRegisterInfo, ILoad } from "definitions";

/**
 * 不同实现对于app的注册信息的要求不一样
 */
export type AppRegisterInfo = IAppRegisterInfo & {
  /**
   *显示名称
   */
  name: string;
 
  /**
   * 子节点
   */
  children?: AppRegisterInfo[];
};
