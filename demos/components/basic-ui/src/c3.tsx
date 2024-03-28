import { h, tag, Component } from "wpa";

import { createManifest } from "./util";
import { IRender, IUpdate } from "definitions";

export const manifest = createManifest("c3");

let count = 1;
setInterval(() => {
  count++;
}, 1000);
export const render: IRender = (container, props: { text: string }) => {
  const el = document.createElement("div");
  el.innerText = props?.text + " :" + count;
  el.addEventListener("click", (e) => {
    update(container, props);
  });
  return el;
};
export const update: IUpdate = (container, props) => {
  container.element.innerText = props?.text + " :" + count;
  return container;
};
