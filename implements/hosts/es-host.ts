import { IApp, IAppRegisterInfo, IHost, IRegisterApps } from "definition";
import {
  loadApps,
  loadAssets,
  loadComponents,
  loadCsses,
  loadFunctions,
} from "../loaders/es-loader";

const registerdApps: Array<IAppRegisterInfo & { readonly apps: IApp[] }> = [];
const isEmptyOrNull = (str: string | null): boolean => {
  return str == null || str.trim() === "";
};

export const host: IHost = {
  async registerApps(...apps) {
    registerdApps.push(
      ...(await Promise.all(
        apps.map(async (app) => {
          const iapps = await this.loadApps(app.src);
          return { ...app, apps: iapps };
        })
      ))
    );

    console.log("register....",registerdApps);
  },
  getApps(key) {
    return registerdApps.find(info=>info.key==key).apps;
  },
  loadApps,
  loadAssets,
  loadComponents,
  loadCsses,
  loadFunctions,
};
