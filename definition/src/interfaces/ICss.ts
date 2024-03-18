import { ICssManifest } from "./ICssManifest";
import { IResource } from "./IResource";

export interface ICss extends IResource {
  manifest: ICssManifest;
  fetch: <T = string | CSSStyleSheet>() => Promise<T>;
}
