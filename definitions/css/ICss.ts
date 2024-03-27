import { ICssManifest } from "./ICssManifest";
import { IResource } from "../common/IResource";

/**
 * CSS Resource
 */
export interface ICss extends IResource<ICssManifest> {
  css: CSSStyleSheet;
}
