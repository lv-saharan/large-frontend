/**
 * 动态创建或获取Css的方法
 */
export type GetCssFunction = () => CssEntryType;
/**
 * 可以注入CSS类型
 */
export type CssEntryType =
  | string
  | CSSStyleSheet
  | Array<CssEntryType>
  | Promise<CssEntryType>
  | GetCssFunction;

 
