import { IAppRegisterInfo } from "../app/IAppRegisterInfo";

export interface IRegisterApps<T extends IAppRegisterInfo = IAppRegisterInfo> {
  (...apps: Array<T>): void;
}
