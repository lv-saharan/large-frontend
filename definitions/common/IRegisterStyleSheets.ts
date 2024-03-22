export interface IRegisterStyleSheets<T = unknown> {
  (...stylesheets: Array<string>): Promise<T> | void;
}
