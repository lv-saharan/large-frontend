import { IContainer } from "../common";

export interface IUpdate {
  (container: IContainer, props: any): Promise<any> | any;
}
