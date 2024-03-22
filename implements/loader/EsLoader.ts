import { ILoad } from "definitions";

export const load: ILoad = async (src: string) => {
  if (src.endsWith("/")) {
    src += "index.js";
  }
  const { default: resources = [], ...resource } = await import(src);
  return [...resources, resource].filter((r) => r.manifest);
};
