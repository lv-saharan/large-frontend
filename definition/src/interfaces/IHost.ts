import { IApp } from "./IApp";

export interface IWindow {}

export interface IDocument {}

export interface ILoadApp {
  (src: string): Promise<IApp>;
}
