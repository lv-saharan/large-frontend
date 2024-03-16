import { ILoadApp, IApp } from "definition";

export const loadApp: ILoadApp = (src: string) => {
  return import(src);
};
