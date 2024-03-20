import { IAppManifest } from "./IAppManifest";
import { IRender } from "./IRender";
import { IMount } from "./IMount";
import { IUnMount } from "./IUnMount";
import { IResource } from "./IResource";
import { IUpdate } from "./IUpdate";

export interface IApp extends IResource {
  manifest: IAppManifest;
  render?: IRender;
  update?: IUpdate;
  mount?: IMount;
  unMount?: IUnMount;
}
