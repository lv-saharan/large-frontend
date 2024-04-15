import {
  IConfigManifest,
  ResourceType,
  DefinitionVersion,
  IAppRouteInfo,
} from "definitions";

export interface IAppConfig {
  menus: Array<IAppRouteInfo>;
}

export const manifest: IConfigManifest = {
  name: "app-config",
  resourceType: ResourceType.CONFIG,
  version: "1.0.0",
  definitionVersion: DefinitionVersion,
};

export const config: IAppConfig = {
  menus: [
    {
      name: "应用1",
      path: "/app-1",
      route: /^\/(app\-1)?/,
      src: "/apps/app-1/",
      params: {
        pageNum: 1,
        pageSize: 10,
      },
    },
    {
      name: "应用2",
      path: "/app-2",
      src: "/apps/app-2/",
      children: [
        {
          name: "应用2.2",
          path: "/app-2/2",
          src: "/apps/app-2.2/",
        },
      ],
    },
    {
      name: "应用3",
      path: "/app-3",
      src: "/apps/app-3/",
    },

    {
      name: "应用5：Vue2",
      path: "/app-5",
      src: "/apps/app-5/",
    },
  ],
};
