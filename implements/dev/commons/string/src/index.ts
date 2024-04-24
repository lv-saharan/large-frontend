import {
  IFunction,
  IFunctionManifest,
  ResourceType,
  DefinitionVersion,
} from "definitions";
import pkg from "../package.json";

const manifest: IFunctionManifest = {
  name: null,
  resourceType: ResourceType.FUNCTION,
  version: pkg.version,
  definitionVersion: DefinitionVersion,
};

export const isNullOrEmpty = (str: string | null): boolean => {
  return str == null || str.trim() === "";
};

isNullOrEmpty.manifest = { ...manifest, name: "isNullOrEmpty" };

export const trim = (input: string, chars: string = " "): string => {
  if (isNullOrEmpty(input)) return input;

  const trimmed = input.replace(
    new RegExp(`(^${chars}+)|(${chars}+$)`, "g"),
    ""
  );
  return trimmed;
};

trim.manifest= {... manifest, name: "trim" };

export const trimStart = (input: string, chars: string = " "): string => {
  if (isNullOrEmpty(input)) return input;

  const trimmed = input.replace(new RegExp(`^${chars}+`, "g"), "");

  return trimmed;
};
trimStart.manifest =  { ...manifest, name: "trimStart" };

export const trimEnd = (input: string, chars: string = " "): string => {
  if (isNullOrEmpty(input)) return input;

  const trimmed = input.replace(new RegExp(`${chars}+$`, "g"), "");

  return trimmed;
};

 trimEnd.manifest = { ...manifest, name: "trimEnd" };
