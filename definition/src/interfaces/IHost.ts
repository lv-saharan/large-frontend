import { IApp } from "./IApp";

export interface IWindow extends Window {}

export interface IDocument {}

export interface ILoadApp {
  (src: string): Promise<IApp>;
}

export interface IHost {
  apps: IApp[];
  loadApp: ILoadApp;
  routeTo: <T>(app: IApp) => Promise<T>;
}
