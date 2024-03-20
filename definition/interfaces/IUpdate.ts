import { IRenderExtendArgs } from "./IRenderExtendArgs";

export interface IUpdate {
  (element: HTMLElement, props: any, args?: IRenderExtendArgs):
    | Promise<any>
    | any;
}
