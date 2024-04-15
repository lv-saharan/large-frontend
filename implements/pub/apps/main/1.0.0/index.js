var b=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var p=(n,i,e,o)=>{for(var t=o>1?void 0:o?v(i,e):i,m=n.length-1,l;m>=0;m--)(l=n[m])&&(t=(o?l(i,e,t):l(t))||t);return o&&t&&b(i,e,t),t};import{h as s,tag as y,render as u,Component as w,classNames as x}from"/libs/wpa/latest/wpa.js";import{config as A}from"/configs/apps/";import{currencyFormatter as h,dateFormatter as g}from"/functions/formatter/";import C from"/hosts/base/";import{esLoad as R}from"/functions/loader/";import{AppContainerTag as I}from"/containers/base/";var d=`@charset "UTF-8";
:host {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

aside {
  width: 50rem;
  font-size: 3rem;
}
aside ul {
  padding-left: 6rem;
}
aside ul li {
  list-style: none;
  line-height: 2;
}
aside a {
  color: white;
}

main {
  flex: 3; /* 主内容区域占据更多空间 */
  padding: 16px;
  background-color: white;
}

.app-container {
  display: block;
  height: 100%;
  overflow: auto;
}
.app-container.hidden {
  display: none;
}`;var c=`demo-5 {
  font-size: 2.5rem;
}`;var f=`html {
  font-size: 0.5208333333vw;
}

body {
  margin: 0;
  background-color: rgb(45, 45, 45);
  color: white;
}`;console.log(h.manifest,g.manifest);console.log(h(123),g(new Date));var a=new C(R);var r=class extends w{constructor(){super(...arguments);this.css=d}async install(){this.menus=A.menus,a.registerApps(...this.menus),a.onRoute((e,o,t)=>{console.log("onRoute",e,o,t),this.updateSelf()}),a.onBeforeRoute((e,o,t)=>{if(console.log("onBeforeRoute",e,o,t),e.manifest.name==="SECOND-APP")return confirm("是否进入SECOND App？")}),a.routeTo(a.activePath)}buildNavs(e){return s("ul",null,e.map(o=>s("li",null,s("a",{href:`#${o.path}`},o.name),o.children&&this.buildNavs(o.children))))}render(){return s(s.f,null,s("aside",null,this.buildNavs(this.menus)),s("main",null,a.loadedApps.map(e=>s(I,{app:e,host:a,class:x("app-container",{hidden:a.activeApp.manifest!==e.manifest})}))))}};r=p([y("simple-app")],r);u(s("simple-app",{"theme-css":c}),document.body);u(s("style",null,f),document.head);
