import { IComponentManifest, ResourceType, Version } from "definition";

const TagPrefix = "com.hh.ui.basic";

export function createManifest(
  name: string,
  version: string = "1.0.0"
): IComponentManifest {
  return {
    tag: `${TagPrefix}-${name}`,
    name,
    version,
    resourceType: ResourceType.COMPONENT,
    definitionVersion: Version,
    info: {
      group: "basic",
      author: "jun",
      org: "lv",
    },
  };
}
