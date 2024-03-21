import { IResource } from "definition";

export const load = async <T extends IResource>(src: string) => {
  if (src.endsWith("/")) {
    src += "index.js";
  }
  const { default: resources = [], ...resource } = await import(src);
  return [...resources, resource].filter((r) => r.manifest).map((r) => r as T);
};
