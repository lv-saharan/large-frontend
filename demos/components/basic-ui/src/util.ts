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
    author: "ljj",
    phone: "123345",
    description: "basic ui",
    resourceType: ResourceType.COMPONENT,
    definitionVersion: Version,
    tagPrexif: TagPrefix,
  };
}
