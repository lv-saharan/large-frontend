import { IContainer } from "../common";

export interface IMount {
  (container: IContainer): Promise<void> | void;
}
