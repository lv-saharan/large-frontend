import { IApp } from "../app/IApp";
import { IAppRouteInfo } from "../app/IAppRouteInfo";
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
import { IOnAfterRoute, IOnBeforeRoute, IOnRoute } from "../lifecycle/IRoute";
import { IMessage } from "../message";

export interface IWindow extends Window {}

export interface IDocument {}

/**
 * 宿主，提供宿主相关的服务
 * 多个宿主可以同时存在
 *
 */
export interface IHost extends IMessage<string> {
  /**
   * 激活的应用
   */
  readonly activeApp: IApp;

  /**
   * 当前路径
   */
  readonly activePath: string;
  /**
   * 加载的应用
   */
  readonly loadedApps: IApp[];
  /**
   * 注册应用
   */
  registerApps: IRegisterApps;

  /**
   * 根据路由获取应用，匹配最佳，优先级最高的路由
   * @param route 路由
   * @returns
   */
  getAppByRoute: (route: string) => Promise<IApp>;

  /**
   * 获取App对应的路由信息
   * @param app
   * @returns
   */
  getAppRouteInfo: (app: IApp) => IAppRouteInfo;
  /**
   * 路由到指定路径
   * @param route
   * @param params 传递给路由的参数
   * @returns
   */
  routeTo: <T>(path: string, params?: object) => Promise<T> | void;

  /**
   * 发生路由
   */
  onRoute: IOnRoute;
  /**
   * 路由执行前
   */
  onBeforeRoute: IOnBeforeRoute;
  /**
   * 路由执行后
   */
  onAfterRoute: IOnAfterRoute;

  /**
   * 从一个地址加载应用
   */
  loadApps: ILoadApps;
}
