import {
  IApp,
  IAppRegisterInfo,
  IAsset,
  IComponent,
  IConfig,
  ICss,
  IFunction,
  IHost,
  ILoad,
  ILoadApps,
  ILoadAssets,
  ILoadComponents,
  ILoadConfigs,
  ILoadCsses,
  ILoadFunctions,
  IResource,
} from "definitions";
import { isEmptyOrNullString, trim, trimEnd } from "../common/Util";

export class BaseHost implements IHost {
  /**
   * 所有注册的App信息
   */
  private registerdApps: Array<IAppRegisterInfo> = [];
  /**
   * 已经加载的应用
   */
  private loadedApps: Array<IApp> = [];

  constructor(load: ILoad) {
    this.load = load;
    this.loadApps = load<IApp>;
    this.loadAssets = load<IAsset>;
    this.loadComponents = load<IComponent>;
    this.loadCsses = load<ICss>;
    this.loadFunctions = load<IFunction>;
    this.loadConfigs = load<IConfig>;
  }
  load: ILoad;
  loadConfigs: ILoadConfigs;
  loadCsses: ILoadCsses;
  loadAssets: ILoadAssets;
  loadComponents: ILoadComponents;
  loadFunctions: ILoadFunctions;
  loadApps: ILoadApps;

  registerApps(...apps: IAppRegisterInfo[]) {
    this.registerdApps.push(...apps.flat());
  }

  getRegisteredApps<T extends IAppRegisterInfo>() {
    return this.registerdApps as T[];
  }
  getAppsByPath: (...path: string[]) => Promise<IApp[]>;

  async getAppByRoute(route: string): Promise<IApp> {
    if (isEmptyOrNullString(route)) return Promise.resolve(null);
    const rawRoute = route;
    route = `${trim(route, "/")}/`;

    const matched = this.registerdApps
      .filter((app) => {
        const appRoute = app.route ?? app.path;
        if (typeof appRoute === "string") {
          return route.startsWith(`${trim(appRoute, "/")}/`);
        } else {
          return appRoute.test(rawRoute);
        }
      })
      .reduce((prev, curr) => {
        if (prev == null) return curr;
        //同样级别的后定义的覆盖先定义的
        return (curr.priority ?? 0) >= (prev.priority ?? 0) ? curr : prev;
      }, null);

    if (matched == null) return Promise.resolve(null);

    const apps = await this.loadApps(matched.src);

    const sortedApps = (apps ?? [])
      .filter(
        (app) =>
          isEmptyOrNullString(app.manifest.path) ||
          route.includes(`/${trim(app.manifest.path, "/")}/`)
      )
      .sort(
        //优先匹配最长且匹配最早的路径
        (x, y) => {
          //0:基于匹配的位置
          let xvalue = isEmptyOrNullString(x.manifest.path)
            ? Number.MAX_VALUE
            : route.indexOf(x.manifest.path);
          let yvalue = isEmptyOrNullString(y.manifest.path)
            ? Number.MAX_VALUE
            : route.indexOf(y.manifest.path);
          if (xvalue !== yvalue) {
            return xvalue - yvalue;
          }
          //1:基于路径的深度
          xvalue = isEmptyOrNullString(x.manifest.path)
            ? 0
            : x.manifest.path.split("/").length;
          yvalue = isEmptyOrNullString(y.manifest.path)
            ? 0
            : y.manifest.path.split("/").length;
          return yvalue - xvalue;
        }
      );

    if (sortedApps.length > 0) {
      const app = sortedApps[0];
      app.registerInfo = matched;
      return app;
    }
    return null;
  }
  routeTo: <T>(path: string, params?: object) => Promise<T>;
}
