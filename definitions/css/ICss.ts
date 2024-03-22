import { ICssManifest } from "./ICssManifest";
import { IResource } from "../common/IResource";

export interface ICss extends IResource {
  manifest: ICssManifest;
  css: CSSStyleSheet;
}
