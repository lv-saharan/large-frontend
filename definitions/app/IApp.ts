import { IAppManifest } from "./IAppManifest";
import { IRender } from "../lifecycle/IRender";
import { IMount } from "../lifecycle/IMount";
import { IUnMount } from "../lifecycle/IUnMount";
import { IResource } from "../common/IResource";
import { IUpdate } from "../lifecycle/IUpdate";

export interface IApp extends IResource {
  manifest: IAppManifest;
  render?: IRender;
  update?: IUpdate;
  mount?: IMount;
  unMount?: IUnMount;
}
