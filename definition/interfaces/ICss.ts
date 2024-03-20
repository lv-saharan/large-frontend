import { ICssManifest } from "./ICssManifest";
import { IResource } from "./IResource";

export interface ICss extends IResource {
  manifest: ICssManifest;
  css: CSSStyleSheet;
}
