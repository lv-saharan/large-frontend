import { IComponentManifest, ResourceType, DefinitionVersion } from "definitions";
import { version } from "../package.json";
const TagPrefix = "com.hh.ui.basic";

export function createManifest(name: string): IComponentManifest {
  return {
    tag: `${TagPrefix}-${name}-${version}`,
    name,
    version,
    resourceType: ResourceType.COMPONENT,
    definitionVersion: DefinitionVersion,
    info: {
      group: "basic",
      author: "jun",
      org: "lv",
    },
  };
}
