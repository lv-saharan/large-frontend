import { IAppManifest } from "./IAppManifest";
import { IRender } from "./IRender";
import { IMount } from "./IMount";
import { IUnMount } from "./IUnMount";
import { IResource } from "./IResource";

export interface IApp extends IResource {
  manifest: IAppManifest;
  render?: IRender;
  mount?: IMount;
  unMount?: IUnMount;
  [key: string]: any;
}
