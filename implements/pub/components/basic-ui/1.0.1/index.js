var N=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var a=(r,o)=>{for(var t in o)N(r,t,{get:o[t],enumerable:!0})};var n=(r,o,t,f)=>{for(var e=f>1?void 0:f?T(o,t):o,p=r.length-1,E;p>=0;p--)(E=r[p])&&(e=(f?E(o,t,e):E(e))||e);return f&&e&&N(o,t,e),e};var M={};a(M,{manifest:()=>c});import{h as V,tag as g,Component as l}from"/libs/wpa/latest/wpa.js";var O="1.0.0";var s="1.0.1";var U="com.hh.ui.basic";function m(r){return{tag:`${U}-${r}-${s}`,name:r,version:s,resourceType:"COMPONENT",definitionVersion:O,info:{group:"basic",author:"jun",org:"lv"}}}var c=m("c1"),x=class extends l{constructor(){super(...arguments);this.css=`
    h2 {
      color: blue;
    }
  `}render(){return V("h2",null,"C1:",c.version)}};x=n([g(c.tag)],x);var d={};a(d,{manifest:()=>C});import{h as R,tag as A,Component as h}from"/libs/wpa/latest/wpa.js";var C=m("c2"),i=class extends h{render(){return R("h2",null,"C2")}};i=n([A(C.tag)],i);var P={};a(P,{manifest:()=>v,render:()=>D,update:()=>u});var v=m("c3"),I=1;setInterval(()=>{I++},1e3);var D=(r,o)=>{let t=document.createElement("div");return t.innerText=o?.text+" :"+I,t.addEventListener("click",f=>{u(r,o)}),t},u=(r,o)=>(r.element.innerText=o?.text+" :"+I,r);export{M as c1,d as c2,P as c3};