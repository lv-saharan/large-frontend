export const manifest = {
  name: "app-config",
};
export const content = [
  {
    name: "应用1",
    path: "/app-1",
    route: /^\/(app\-1)?/,
    src: "/demos/apps/app-1/",
  },
  {
    name: "应用2",
    path: "/app-2",
    src: "/demos/apps/app-2/",
    children: [
      {
        name: "应用2.2",
        path: "/app-2/2",
        src: "/demos/apps/app-2.2/",
      },
    ],
  },
  {
    name: "应用3",
    path: "/app-3",
    src: "/demos/apps/app-3/",
  },
  {
    name: "应用3.2",
    path: "/app-3/2",
  },
];
