import { IApp } from "./IApp";
import { IAsset } from "./IAsset";
import { IComponent } from "./IComponent";
import { ICss } from "./ICss";

export interface IWindow extends Window {}

export interface IDocument {}

export interface ILoadApp {
  (src: string): Promise<IApp>;
}
export interface ILoadCss {
  (src: string): Promise<ICss>;
}
export interface ILoadAsset {
  (src: string): Promise<IAsset>;
}

export interface ILoadComponent {
  (src: string): Promise<IComponent>;
}
export interface IRegisterApp {
  (
    ...apps: Array<{
      id?: string;
      src: string;
      route: string;
      [key: string]: any;
    }>
  ): void;
}
export interface IHost {
  readonly apps?: IApp[];
  registerApp?: IRegisterApp;
  
  loadApp?: ILoadApp;
  routeTo?: <T>(route: string) => Promise<T>;

  loadCss?: ILoadCss;

  loadAsset?: ILoadAsset;

  loadComponent?: ILoadComponent;
}
