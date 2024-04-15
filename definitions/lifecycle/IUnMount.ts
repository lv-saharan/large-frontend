import { IContainer } from "../common";

export interface IUnMount {
  (container: IContainer): Promise<void> | void;
}
