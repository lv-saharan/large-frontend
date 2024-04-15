/**
 * 注册应用信息
 *
 */
export interface IAppRouteInfo {
  /**
   * 应用的默认路径
   */

  readonly path: string;
  /**
   * App 对应的路由,如果路由不存在使用path代替
   */
  readonly route?: string | RegExp;

  /**
   * 参数
   */
  readonly params?: object;
  /**
   * App 对应的资源地址
   */
  readonly src: string;
  /**
   * App 路由优先级，数值越大优先级越改
   */
  readonly priority?: number;

  /**
   * 子路由
   */
  readonly children?: IAppRouteInfo[];

  /**
   * 自定义属性
   */
  readonly [key: string]: any;

}
