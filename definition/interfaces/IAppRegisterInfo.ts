export interface IAppRegisterInfo {
  /**
   * App 对应的路由
   */
  readonly route: string | RegExp;
  /**
   * App 导航路径，path 需要unique
   */
  readonly path: string;
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
   * 子应用
   */
  children?: IAppRegisterInfo[];
}
