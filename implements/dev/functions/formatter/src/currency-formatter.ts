import {
  IFunction,
  IFunctionManifest,
  ResourceType,
  DefinitionVersion,
} from "definitions";
import pkg from "../package.json";

function format(value: number, format?: string) {
  return "¥" + value.toFixed(2);
}
const manifest: IFunctionManifest = {
  name: "currency-formatter",
  resourceType: ResourceType.FUNCTION,
  version: pkg.version,
  definitionVersion: DefinitionVersion,
};

export default Object.assign(format, { manifest }) as IFunction;
