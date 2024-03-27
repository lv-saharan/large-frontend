import { IAppContainer, IApp } from "definitions/app";
import { IAssetContainer } from "definitions/asset/IAssetContainer";
import { IContainer } from "definitions/common";
import { IComponentContainer } from "definitions/component";

/**
 * 创建自己的对象
 */
export interface IRender {
  (container: IContainer, props: any): Promise<any> | any;
}
