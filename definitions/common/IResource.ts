import { IManifest } from "./IManifest";

/**
 * Resource interface.
 */
export interface IResource<T extends IManifest = IManifest> {
  readonly manifest: T;
}
