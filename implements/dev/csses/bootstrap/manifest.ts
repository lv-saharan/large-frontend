import { DefinitionVersion, ICssManifest, ResourceType } from "definitions";
import { version } from "./package.json";
const manifest: ICssManifest = {
  name: "bootstrap",
  resourceType: ResourceType.CSS,
  version,
  definitionVersion: DefinitionVersion,
};

export default manifest;
