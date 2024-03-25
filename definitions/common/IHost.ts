import { IApp } from "../app/IApp";
import { IAppRegisterInfo } from "../app/IAppRegisterInfo";
import {
  ILoadApps,
  ILoadAssets,
  ILoadComponents,
  ILoadCsses,
  ILoadFunctions,
  ILoad,
  ILoadConfigs,
} from "./ILoad";
import { IRegisterApps } from "./IRegisterApps";

export interface IWindow {}

export interface IDocument {}

export interface IHost {
  /**
   * 所有App注册信息，树状结构
   */
  getRegisteredApps: <T extends IAppRegisterInfo>() => T[];

  /**
   * 注册应用，应用是可以有多级树状的
   */
  registerApps: IRegisterApps;

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
  routeTo: <T>(path: string, params?: object) => Promise<T>;

  /**
   * 从一个地址加载应用
   */
  loadApps: ILoadApps;

  /**
   * 加载样式
   * 很多时候都是静态加载
   */
  loadCsses: ILoadCsses;
  /**
   * 加载资源
   * 很多时候都是静态加载
   */
  loadAssets: ILoadAssets;
  /**
   * 加载组件
   * 很多时候都是静态加载
   */
  loadComponents: ILoadComponents;
  /**
   * 加载函数
   * 很多时候都是静态加载
   */
  loadFunctions: ILoadFunctions;

  /**
   * 加载配置文件
   */
  loadConfigs: ILoadConfigs;
  /**
   * 加载IResource资源
   */
  load: ILoad;
}
