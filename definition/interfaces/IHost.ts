import { IApp } from "./IApp";
import { IAppRegisterInfo } from "./IAppRegisterInfo";
import { IAsset } from "./IAsset";
import { IComponent } from "./IComponent";
import { ICss } from "./ICss";
import { IFunction } from "./IFunction";
import { IResource } from "./IResource";

export interface IWindow extends Window {}

export interface IDocument {}
export interface ILoad<T = unknown> {
  <K>(src: string): Promise<Array<T extends IResource ? T : K>>;
}
export interface ILoadApps extends ILoad<IApp> {}

export interface ILoadCsses extends ILoad<ICss> {}

export interface ILoadAssets extends ILoad<IAsset> {}

export interface ILoadComponents extends ILoad<IComponent> {}

export interface ILoadFunctions extends ILoad<IFunction> {}

export interface IRegisterApps<T extends IAppRegisterInfo = IAppRegisterInfo> {
  (...apps: Array<T> | Array<Array<T>>): void;
}
export interface IHost {
  /**
   * 所有App注册信息，树状结构
   */
  getRegisteredApps: <T extends IAppRegisterInfo>() => T[];

  /**
   * 注册应用，应用是可以有多级树状的
   */
  registerApps?: IRegisterApps;

  /**
   * 获取路径对应的应用列表
   * @param path
   * @returns
   */
  getAppsByPath: (...path: string[]) => Promise<IApp[]>;

  /**
   * 根据路由获取应用，匹配最佳，优先级最高的路由
   * @param route 路由
   * @returns
   */
  getAppByRoute: (route: string) => Promise<IApp>;

  /**
   * 路由到指定路径
   * @param route
   * @param params 传递给路由的参数
   * @returns
   */
  routeTo?: <T>(path: string, params?: object) => Promise<T>;

  /**
   * 从一个地址加载应用
   */
  loadApps?: ILoadApps;

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
