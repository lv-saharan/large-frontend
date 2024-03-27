import { IApp, ICss, IAsset, IComponent, IFunction } from "definitions";
import { IResource } from "./IResource";
import { IConfig } from "definitions/config";

/**
 * IResource loader
 * 应用开发中App、CSS、Function、Config 会被经常动态使用
 * 其他资源静态使用多
 */
export interface ILoad<T = unknown> {
  <K>(src: string): Promise<Array<T extends IResource ? T : K>>;
}
/**
 * IApp Loader
 */
export interface ILoadApps extends ILoad<IApp> {}

/**
 * CSSStyleSheet Loader
 */
export interface ILoadCsses extends ILoad<ICss> {}

/**
 * IAsset Loader
 */
export interface ILoadAssets extends ILoad<IAsset> {}

/**
 * IComponent Loader
 */
export interface ILoadComponents extends ILoad<IComponent> {}

/**
 * IFunction Loader
 */
export interface ILoadFunctions extends ILoad<IFunction> {}

/**
 * IConfig Loader
 */
export interface ILoadConfigs extends ILoad<IConfig> {}
