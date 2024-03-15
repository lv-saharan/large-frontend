import { IOn, IOff, IEmit } from "./IMessage";
import { IRegisterCsses } from "./IRegisterCsses";
import { IRegisterStyleSheets } from "./IRegisterStyleSheets";
import { IRegisterSripts } from "./IRegisterScripts";

export interface IInit {
  (
    {
      registerCsses,
      registerScripts,
      registerStylesheets,
    }: {
      registerCsses?: IRegisterCsses;
      registerScripts?: IRegisterSripts;
      registerStylesheets?: IRegisterStyleSheets;
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
