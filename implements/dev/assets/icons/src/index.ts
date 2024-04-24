import {
  AssetType,
  IAsset,
  ResourceType,
  DefinitionVersion,
} from "definitions";
import pkg from "../package.json";

export const app: IAsset = {
  manifest: {
    assetType: AssetType.IMAGE,
    get src() {
      return new URL(`./images/app.png`, import.meta.url).href;
    },
    name: "app",
    resourceType: ResourceType.ASSET,
    version: pkg.version,
    definitionVersion: DefinitionVersion,
  },
};

