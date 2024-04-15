import { IManifestExtendInfo, ResourceType, DefinitionVersion } from "definitions";

export const AppSharedInfo = {
  get definitionVersion() {
    return DefinitionVersion;
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
