import { IApp } from "../app";
import { ICss } from "../css";
import { IAsset } from "../asset";
import { IComponent } from "../component";
import { IFunction } from "../function";
import { IResource } from "./IResource";
import { IConfig } from "../config";

/**
 * IResource loader
 * 应用开发中App、CSS、Function、Config 会被经常动态使用
 * 其他资源静态使用多
 * <K> 可以实例化时 load<IApp>
 */
export interface ILoad {
  <K extends IResource = IResource>(src: string): Promise<Array<K>>;
}
/**
 * IApp Loader
 */
export interface ILoadApps {
  (src: string): Promise<Array<IApp>>;
}
/**
 * CSSStyleSheet Loader
 */
export interface ILoadCsses {
  (src: string): Promise<Array<ICss>>;
}

/**
 * IAsset Loader
 */
export interface ILoadAssets {
  (src: string): Promise<Array<IAsset>>;
}

/**
 * IComponent Loader
 */
export interface ILoadComponents {
  (src: string): Promise<Array<IComponent>>;
}

/**
 * IFunction Loader
 */
export interface ILoadFunctions {
  (src: string): Promise<Array<IFunction>>;
}

/**
 * IConfig Loader
 */
export interface ILoadConfigs {
  (src: string): Promise<Array<IConfig>>;
}
