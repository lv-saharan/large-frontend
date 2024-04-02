import { IManifestExtendInfo, ResourceType, Version } from "definitions";

export const AppSharedInfo = {
  get definitionVersion() {
    return Version;
  },
  get resourceType() {
    return ResourceType.APP;
  },
  get info(): IManifestExtendInfo {
    return {
      get author() {
        return "saharan";
      },

      get org() {
        return "lv";
      },
    };
  },
};
