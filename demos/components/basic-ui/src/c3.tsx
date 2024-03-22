import { h, tag, Component } from "wpa";

import { createManifest } from "./util";
import { IRender, IUpdate } from "definitions";

export const manifest = createManifest("c3");

let count = 1;
setInterval(() => {
  count++;
}, 1000);
export const render: IRender = (props) => {
  const el = document.createElement("div");
  el.innerText = props?.text + " :" + count;
  el.addEventListener("click", (e) => {
    update(el, props);
  });
  return el;
};
export const update: IUpdate = (el, props) => {
  el.innerText = props?.text + " :" + count;
  return el;
};
