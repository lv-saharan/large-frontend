import { AppType, IApp, IContainer, IHost, IResource } from "definitions";
import { IAssetContainer } from "definitions/asset/IAssetContainer";
import { isEmptyOrNullString } from "implements/common/Util";
import { h, tag, render, Component } from "wpa";
import { WpaContainer } from "./WpaContainer";

export const WpaAssetContainerTag = "large-wpa-asset-container";

@tag(WpaAssetContainerTag)
export class WpaAssetContainer
  extends WpaContainer
  implements IAssetContainer {
    
  }
