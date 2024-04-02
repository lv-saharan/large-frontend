import { IConfigManifest, ResourceType, Version } from "definition";
import { AppRegisterInfo } from "implements";

export interface IAppConfig {
  menus: Array<AppRegisterInfo>;
}

export const manifest: IConfigManifest = {
  name: "app-config",
  resourceType: ResourceType.CONFIG,
  version: "1.0.0",
  definitionVersion: Version,
};

export const config: IAppConfig = {
  menus: [
    {
      name: "应用1",
      path: "/app-1",
      route: /^\/(app\-1)?/,
      src: "../app-1/",
    },
    {
      name: "应用2",
      path: "/app-2",
      src: "../app-2/",
      children: [
        {
          name: "应用2.2",
          path: "/app-2/2",
          src: "../app-2.2/",
        },
      ],
    },
    {
      name: "应用3",
      path: "/app-3",
      src: "../app-3/",
    },
    {
      name: "应用3.2",
      path: "/app-3/2",
      src: "../app-3/",
    },
    {
      name: "应用5：Vue2",
      path: "/app-5",
      src: "../app-5/",
    },
  ],
};
