var d = Object.defineProperty;
var T = Object.getOwnPropertyDescriptor;
var a = (r, o) => {
  for (var t in o) d(r, t, { get: o[t], enumerable: !0 });
};
var x = (r, o, t, f) => {
  for (
    var e = f > 1 ? void 0 : f ? T(o, t) : o, i = r.length - 1, E;
    i >= 0;
    i--
  )
    (E = r[i]) && (e = (f ? E(o, t, e) : E(e)) || e);
  return f && e && d(o, t, e), e;
};
var I = {};
a(I, { manifest: () => c });
import { h as V, tag as g, Component as R } from "/libs/wpa/";
var C = "1.0.0";
var s = "1.0.0";
var U = "com.hh.ui.basic";
function m(r) {
  return {
    tag: `${U}-${r}-${s}`,
    name: r,
    version: s,
    resourceType: "COMPONENT",
    definitionVersion: C,
    info: { group: "basic", author: "jun", org: "lv" },
  };
}
var c = m("c1"),
  n = class extends R {
    render() {
      return V("h2", null, "C1:", c.version);
    }
  };
n = x([g(c.tag)], n);
var N = {};
a(N, { manifest: () => u });
import { h as l, tag as A, Component as h } from "/libs/wpa/";
var u = m("c2"),
  p = class extends h {
    render() {
      return l("h2", null, "C2");
    }
  };
p = x([A(u.tag)], p);
var M = {};
a(M, { manifest: () => v, render: () => F, update: () => P });
var v = m("c3"),
  O = 1;
setInterval(() => {
  O++;
}, 1e3);
var F = (r, o) => {
    let t = document.createElement("div");
    return (
      (t.innerText = o?.text + " :" + O),
      t.addEventListener("click", (f) => {
        P(r, o);
      }),
      t
    );
  },
  P = (r, o) => ((r.element.innerText = o?.text + " :" + O), r);
var Zr = [I, N, M];
export { I as c1, N as c2, M as c3, Zr as default };
