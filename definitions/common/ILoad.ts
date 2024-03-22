import { IApp, ICss, IAsset, IComponent, IFunction } from "definitions";
import { IResource } from "./IResource";

export interface ILoad<T = unknown> {
  <K>(src: string): Promise<Array<T extends IResource ? T : K>>;
}
export interface ILoadApps extends ILoad<IApp> {}

export interface ILoadCsses extends ILoad<ICss> {}

export interface ILoadAssets extends ILoad<IAsset> {}

export interface ILoadComponents extends ILoad<IComponent> {}

export interface ILoadFunctions extends ILoad<IFunction> {}
