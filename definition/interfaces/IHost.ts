import { IApp } from "./IApp";
import { IAsset } from "./IAsset";
import { IComponent } from "./IComponent";
import { ICss } from "./ICss";
import { IFunction } from "./IFunction";
import { IResource } from "./IResource";

export interface IWindow extends Window {}

export interface IDocument {}

export interface ILoad<T extends IResource> {
  (src: string): Promise<T[]>;
}
export interface ILoadApps extends ILoad<IApp> {}

export interface ILoadCsses extends ILoad<ICss> {}

export interface ILoadAssets extends ILoad<IAsset> {}

export interface ILoadComponents extends ILoad<IComponent> {}

export interface ILoadFunctions extends ILoad<IFunction> {}

export interface IAppRegisterInfo {
  key: string;
  src: string;
  route: string;
  [key: string]: any;
}
export interface IRegisterApps {
  (...apps: Array<IAppRegisterInfo>): void;
}
export interface IHost {
  /**
   * 注册应用
   */
  registerApps?: IRegisterApps;

  /**
   *根据注册的应用获取该应用IApp
   * @param key
   * @param name 一个注册中包含多个应用时需要path区分
   * @returns
   */
  getApp?: (key: string, name: string) => IApp;
  /**
   * 获取指定注册的应用列表
   * @param key
   * @returns
   */
  getApps?: (key: string) => IApp[];

  /**
   * 从一个地址加载应用
   */
  loadApps?: ILoadApps;

  /**
   * 路由到指定应用
   * @param route 支持多级路由
   * @returns
   */
  routeTo?: <T>(...route: string[]) => Promise<T>;

  /**
   * 加载样式
   * 很多时候都是静态加载
   */
  loadCsses?: ILoadCsses;
  /**
   * 加载资源
   * 很多时候都是静态加载
   */
  loadAssets?: ILoadAssets;
  /**
   * 加载组件
   * 很多时候都是静态加载
   */
  loadComponents?: ILoadComponents;
  /**
   * 加载函数
   * 很多时候都是静态加载
   */
  loadFunctions?: ILoadFunctions;
}
