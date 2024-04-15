import { ICssManifest } from "./ICssManifest";
import { IResource } from "../common";

/**
 * CSS Resource
 */
export interface ICss extends IResource<ICssManifest> {
  css: CSSStyleSheet;
}
