import {
  IFunction,
  IFunctionManifest,
  ResourceType,
  DefinitionVersion,
} from "definitions";
import pkg from "../package.json";

function format(date, format) {
  return date.toISOString();
}

const manifest = {
  name: "date-formatter",
  resourceType: ResourceType.FUNCTION,
  version: pkg.version,
  definitionVersion: DefinitionVersion,
};

export default Object.assign(format, { manifest });
