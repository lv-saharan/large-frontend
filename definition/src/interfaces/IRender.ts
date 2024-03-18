import { IRegisterCsses } from "./IRegisterCsses";
import { IRegisterStyleSheets } from "./IRegisterStyleSheets";
import { IWindow, IDocument } from "./IHost";

/**
 * 创建自己的对象
 */
export interface IRender {
  (
    props: any,
    {
      registerCsses,
      registerStylesheets,
      container,
      window,
      document,
    }?: {
      registerCsses?: IRegisterCsses;
      registerStylesheets?: IRegisterStyleSheets;
      container: HTMLElement;
      window?: IWindow;
      document?: IDocument;
    }
  ): Promise<any> | any;
}

export interface IRenderComponent {
  (
    tag: string,
    props: any,
    {
      registerCsses,
      registerStylesheets,
      container,
      window,
      document,
    }?: {
      registerCsses?: IRegisterCsses;
      registerStylesheets?: IRegisterStyleSheets;
      container: HTMLElement;
      window?: IWindow;
      document?: IDocument;
    }
  ): Promise<any> | any;
}
