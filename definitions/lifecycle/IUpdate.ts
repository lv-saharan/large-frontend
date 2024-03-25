import { IContainer } from "definitions/common";

export interface IUpdate {
  (props: any, container: IContainer): Promise<any> | any;
}
