export const manifest = {
  name: "app-config",
};
export const config = [
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
  },
  {
    name: "应用5：Vue2",
    path: "/app-5",
    src: "../app-5/",
  },
];
