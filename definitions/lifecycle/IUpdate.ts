import { IContainer } from "definitions/common";

export interface IUpdate {
  (element: HTMLElement, props: any, container: IContainer): Promise<any> | any;
}
