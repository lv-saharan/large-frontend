import { IApp, IAppRegisterInfo, IHost, IRegisterApps } from "definition";
import {
  loadApps,
  loadAssets,
  loadComponents,
  loadCsses,
  loadFunctions,
} from "../loaders/es-loader";

const registerdApps: Array<IAppRegisterInfo & { readonly apps: IApp[] }> = [];

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

    console.log(registerdApps);
  },
  loadApps,
  loadAssets,
  loadComponents,
  loadCsses,
  loadFunctions,
};
