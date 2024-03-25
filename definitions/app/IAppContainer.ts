import { IContainer } from "../common/IContainer";
import { IApp } from "./IApp";
import { IAppRegisterInfo } from "./IAppRegisterInfo";

export interface IAppContainer extends IContainer {
  app: IApp;
  registerInfo: IAppRegisterInfo;
}
