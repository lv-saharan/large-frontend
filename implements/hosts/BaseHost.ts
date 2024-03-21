import {
  IApp,
  IAppRegisterInfo,
  IAsset,
  IComponent,
  ICss,
  IFunction,
  IHost,
  IResource,
} from "definition";
import { isEmptyOrNullString } from "implements/common/util";
type LoadType = <T extends IResource>(src: string) => Promise<T[]>;
export class BaseHost implements IHost {
  /**
   * 所有注册的App信息
   */
  private registerdApps: Array<IAppRegisterInfo> = [];
  /**
   * 已经加载的应用
   */
  private loadedApps: Array<IApp> = [];

  private readonly load: LoadType;
  constructor(load: LoadType) {
    this.load = load;
  }
  registerApps(...apps: IAppRegisterInfo[] | IAppRegisterInfo[][]) {
    this.registerdApps.push(...apps.flat());
  }
  getRegisteredApps<T extends IAppRegisterInfo>() {
    return this.registerdApps as T[];
  }
  getAppsByPath: (...path: string[]) => Promise<IApp[]>;
  async getAppByRoute(route: string) {
    if (isEmptyOrNullString(route)) return Promise.resolve(null);
    const matched = this.registerdApps
      .filter((app) => {
        const appRoute = app.route ?? app.path;
        if (typeof appRoute === "string") {
          return route.startsWith(appRoute);
        } else {
          return appRoute.test(route);
        }
      })
      .reduce((prev, curr) => {
        if (prev == null) return curr;
        return prev.priority ?? 0 > curr.priority ?? 0 ? prev : curr;
      }, null);

    if (matched == null) return Promise.resolve(null);

    const apps = await this.loadApps(matched.src);
    return apps
      .sort(
        (x, y) =>
          (isEmptyOrNullString(y.manifest.path) ? 0 : y.manifest.path.length) -
          (isEmptyOrNullString(x.manifest.path) ? 0 : x.manifest.path.length)
      )
      .find((app) => {
        if (isEmptyOrNullString(app.manifest.path)) return true;
        const fullpath = `${matched.path}/${app.manifest.path}`;
        if (typeof matched.route === "string") {
          return route.startsWith(fullpath);
        } else {
          return matched.route.test(fullpath);
        }
      });
  }
  routeTo?: <T>(path: string, params?: object) => Promise<T>;

  loadApps(src: string) {
    return this.load<IApp>(src);
  }
  loadCsses(src: string) {
    return this.load<ICss>(src);
  }
  loadAssets(src: string) {
    return this.load<IAsset>(src);
  }
  loadComponents(src: string) {
    return this.load<IComponent>(src);
  }
  loadFunctions(src: string) {
    return this.load<IFunction>(src);
  }
}
