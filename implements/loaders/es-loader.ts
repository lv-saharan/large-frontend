import {
  ILoad,
  IResource,
  IApp,
  ILoadApps,
  ILoadCsses,
  ICss,
  ILoadAssets,
  IAsset,
  ILoadComponents,
  IComponent,
  IFunction,
  ILoadFunctions,
} from "definition";

export const load = async <T extends IResource>(src: string) => {
  if (src.endsWith("/")) {
    src += "index.js";
  }
  const { default: resources = [], ...resource } = await import(src);
  return [...resources, resource].filter((r) => r.manifest).map((r) => r as T);
};

export const loadApps: ILoadApps = load<IApp>;

export const loadCsses: ILoadCsses = load<ICss>;

export const loadAssets: ILoadAssets = load<IAsset>;

export const loadComponents: ILoadComponents = load<IComponent>;

export const loadFunctions: ILoadFunctions = load<IFunction>;
