import { IAppRegisterInfo, ILoad } from "definition";

/**
 * 不同实现对于app的注册信息的要求不一样
 */
export type AppRegisterInfo = IAppRegisterInfo & {
  name: string;
};
