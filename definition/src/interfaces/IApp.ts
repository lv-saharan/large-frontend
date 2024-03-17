import { IOn, IOff, IEmit } from "./IMessage";
import { IRegisterCsses } from "./IRegisterCsses";
import { IRegisterStyleSheets } from "./IRegisterStyleSheets";
import { IRegisterSripts } from "./IRegisterScripts";
import { IAppManifest } from "./IAppManifest";
import { IWindow, IDocument } from "./IHost";

/**
 * 创建自己的对象
 */
export interface IRender {
  (
    {
      registerCsses,
      registerScripts,
      registerStylesheets,
      window,
      document,
    }: {
      registerCsses?: IRegisterCsses;
      registerScripts?: IRegisterSripts;
      registerStylesheets?: IRegisterStyleSheets;
      window?: IWindow;
      document?: IDocument;
    },
    props: any
  ): Promise<any> | any;
}

export interface IMount {
  ({ on, emit }: { on: IOn; emit: IEmit }, props?: any): void | Promise<void>;
}

export interface IUnMount {
  ({ off }: { off: IOff }, props: any): void | Promise<void>;
}

export interface IApp {
  manifest: IAppManifest;
  render?: IRender;
  mount?: IMount;
  unMount?: IUnMount;
}
