import {
  AppType,
  AssetType,
  IApp,
  IAsset,
  IContainer,
  IHost,
  IMessageEmit,
  IMessageOff,
  IMessageOn,
  IResource,
} from "definitions";
import { IAssetContainer } from "definitions/asset/IAssetContainer";
import { isNullOrEmpty } from "/functions/string";
import { h, tag, render, Component } from "wpa";
import { Container } from "./Container";

export const AssetContainerTag = "large-base-asset-container";

@tag(AssetContainerTag)
export class AssetContainer extends Container implements IAssetContainer {
  element?: HTMLElement;
  props = {
    asset: null as IAsset,
    props: null as any,
    host: null as IHost,
  };
  get asset(): IAsset {
    return this.props.asset;
  }
  get assetProps() {
    return this.props.props ?? {};
  }
  render(props: any) {
    switch (this.asset?.manifest.assetType) {
      case AssetType.IMAGE:
        return h("img", { ...this.assetProps, src: this.asset.manifest.src });
      case AssetType.AUDIO:
        return h("audio", { ...this.assetProps, src: this.asset.manifest.src });
      case AssetType.VIDEO:
        return h("video", { ...this.assetProps, src: this.asset.manifest.src });
      case AssetType.STYLESHEET:
        return h("link", {
          ...this.assetProps,
          href: this.asset.manifest.src,
          rel: "stylesheet",
        });
      case AssetType.ATTACHMENT:
        return h("a", {
          ...this.assetProps,
          href: this.asset.manifest.src,
          download: this.asset.manifest.name,
        });
      default:
        return <out>unknow asset type</out>;
    }
  }
}
