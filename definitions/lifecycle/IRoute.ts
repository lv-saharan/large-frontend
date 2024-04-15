import { IApp } from "../app";

export interface IOnRouteCallback {
  (app: IApp, path: string, params?: object): boolean | void;
}

export interface IOnRoute {
  (...callbacks: IOnRouteCallback[]): void;
}

export interface IOnBeforeRoute {
  (...callbacks: IOnRouteCallback[]): void;
}

export interface IOnAfterRoute {
  (...callbacks: IOnRouteCallback[]): void;
}
