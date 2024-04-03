import {
  IApp,
  IAppRouteInfo,
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
  IMessageEmit,
  IMessageOff,
  IMessageOn,
  IOnAfterRoute,
  IOnBeforeRoute,
  IOnRoute,
  IOnRouteCallback,
  IResource,
} from "definitions";
import { isEmptyOrNullString, trim, trimEnd } from "../common/Util";
import { AppRegisterInfo, MessageEventType } from "implements/common";
import mitt, { EventType, Handler } from "mitt";

export class BaseHost implements IHost {
  /**
   * 所有注册的App信息
   */
  private registerdApps: Array<IAppRouteInfo> = [];
  /**
   * 已经加载的应用
   */
  loadedApps: Array<IApp> = [];

  activeApp: IApp;

  private onRouteCallbacks: IOnRouteCallback[] = [];

  private onBeforeRouteCallbacks: IOnRouteCallback[] = [];

  private onAfterRouteCallbacks: IOnRouteCallback[] = [];

  get currPath() {
    return isEmptyOrNullString(location.hash)
      ? "/"
      : location.hash.substring(1);
  }
  private eventBus = mitt();

  constructor(load: ILoad) {
    this.load = load;
    this.loadApps = load<IApp>;
    this.loadAssets = load<IAsset>;
    this.loadComponents = load<IComponent>;
    this.loadCsses = load<ICss>;
    this.loadFunctions = load<IFunction>;
    this.loadConfigs = load<IConfig>;

    window.addEventListener("hashchange", async (e) => {
      const matched = await this.getAppByRoute(this.currPath);
      if (matched) {
        let [path, paramsString] = this.currPath.split("?");
        let params = {};
        if (!isEmptyOrNullString(paramsString)) {
          params = paramsString.split("&").reduce((prev, curr) => {
            const [key, value] = curr.split("=");
            prev[key] = value;
            return prev;
          }, {});
        }

        for (let cb of this.onBeforeRouteCallbacks) {
          if (cb(matched, path, params) === false) {
            console.log("beforeRoute canceled");
            return;
          }
        }
        if (this.loadedApps.every((app) => app.manifest !== matched.manifest)) {
          this.loadedApps.push(matched);
        }

        for (let cb of this.onRouteCallbacks) {
          cb(matched, path, params);
        }

        for (let cb of this.onAfterRouteCallbacks) {
          cb(matched, path, params);
        }
      } else {
        console.log("not found matched app");
      }

      this.activeApp = matched ?? this.activeApp;

      console.log("find route", matched);
    });
  }
  on: IMessageOn<EventType> = (type, callback) => {
    this.eventBus.on(type, callback as Handler);
  };
  off: IMessageOff<EventType> = (type) => {
    this.eventBus.off(type);
  };
  emit: IMessageEmit<EventType> = (type, data) => {
    this.eventBus.emit(type, data);
  };
  onRoute: IOnRoute = (...callbacks) => {
    this.onRouteCallbacks.push(...callbacks);
  };
  onBeforeRoute: IOnBeforeRoute = (...callbacks) => {
    this.onBeforeRouteCallbacks.push(...callbacks);
  };
  onAfterRoute: IOnAfterRoute = (...callbacks) => {
    this.onAfterRouteCallbacks.push(...callbacks);
  };

  load: ILoad;
  loadConfigs: ILoadConfigs;
  loadCsses: ILoadCsses;
  loadAssets: ILoadAssets;
  loadComponents: ILoadComponents;
  loadFunctions: ILoadFunctions;
  loadApps: ILoadApps;

  registerApps(...apps: AppRegisterInfo[]) {
    for (let info of apps) {
      if (!isEmptyOrNullString(info.src)) {
        this.registerdApps.push(info);
      }
      if (Array.isArray(info.children)) {
        this.registerApps(...info.children);
      }
    }
  }

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
    let apps: IApp[];
    try {
      apps = await this.loadApps(matched.src);
    } catch (exc) {
      console.error("App load error", exc);
      return Promise.resolve(null);
    }
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
      app.routeInfo = matched;
      return app;
    }
    return null;
  }
  routeTo(path: string, params?: object) {
    let searchParams = new URLSearchParams();
    if (params) {
      for (let key in params) {
        if (params.hasOwnProperty(key)) {
          searchParams.set(key, params[key]);
        }
      }
    }
    let newPath = `#${path}${
      searchParams.size ? `?${searchParams.toString()}` : ""
    }`;
    if (newPath !== location.hash) {
      location.hash = newPath;
    } else {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }
}
