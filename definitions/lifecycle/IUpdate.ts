import { IContainer } from "definitions/common";

export interface IUpdate {
  (container: IContainer, props: any): Promise<any> | any;
}
