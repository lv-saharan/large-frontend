import { IComponentManifest, Version, ResourceType } from "definition";
import { C1Tag } from "./c1";
import { C2Tag } from "./c2";
export const manifest: IComponentManifest = {
  get name() {
    return "UI 组件";
  },
  tags: {
    c1: C1Tag,
    c2: C2Tag,
  },

  get author() {
    return "ljj";
  },
  get phone() {
    return "12345";
  },
  get description() {
    return "";
  },

  get version() {
    return "1.0.0";
  },
  get definitionVersion() {
    return Version;
  },
  get resourceType() {
    return ResourceType.COMPONENT;
  },
};
