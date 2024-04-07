var C=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var P=(r,t)=>{for(var e in t)C(r,e,{get:t[e],enumerable:!0})};var c=(r,t,e,o)=>{for(var n=o>1?void 0:o?b(t,e):t,p=r.length-1,s;p>=0;p--)(s=r[p])&&(n=(o?s(t,e,n):s(n))||n);return o&&n&&C(t,e,n),n};import{h as m,tag as H,render as L,Component as B,classNames as U}from"/libs/wpa/latest/wpa.js";import{config as $}from"/configs/apps/";var a=r=>r==null||r.trim()==="",h=(r,t=" ")=>a(r)?r:r.replace(new RegExp(`(^${t}+)|(${t}+$)`,"g"),"");var g={};P(g,{load:()=>N});var N=async r=>{r.endsWith("/")&&(r+="index.js");let{default:t,...e}=await import(r);return[...Array.isArray(t)?t:[t],e].filter(o=>o?.manifest)};import{Component as T}from"/libs/wpa/latest/wpa.js";var I=class extends T{constructor(){super(...arguments);this.props={host:null};this.registerCsses=(...e)=>{this.cssss=e,this.updateStyle()};this.registerStyleSheets=(...e)=>{this.stylesheets=e,this.updateStyle()}}get on(){return this.host.on}get off(){return this.host.off}get emit(){return this.host.emit}get host(){return this.props.host}render(e){}};import{h as S,tag as k}from"/libs/wpa/latest/wpa.js";var E="large-wpa-app-container",d=class extends I{constructor(){super(...arguments);this.props={app:null,props:null,host:null}}get routeInfo(){return this.app.routeInfo}get element(){return this.shadowRoot.querySelector("*")}get app(){return this.props.app}get appProps(){return this.props.props??{}}installed(){super.installed();let e=this.app;if(typeof e.render=="function"&&e.manifest.appType!=="PART"){let o=e.render(this,this.appProps);o instanceof HTMLElement&&this.shadowRoot.appendChild(o)}typeof e.mount=="function"&&e.mount(this)}render(e){let o=this.app;return typeof o.render!="function"&&!a(o.manifest.tag)?S(o.manifest.tag,this.appProps):o.manifest.appType=="PART"?o.render(this,this.appProps):null}uninstall(){super.uninstall(),typeof this.app.unMount=="function"&&this.app.unMount(this)}};d.css=`
  :host{
    display: block;

  }
  `,d=c([k(E)],d);function R(r){return{all:r=r||new Map,on:function(t,e){var o=r.get(t);o?o.push(e):r.set(t,[e])},off:function(t,e){var o=r.get(t);o&&(e?o.splice(o.indexOf(e)>>>0,1):r.set(t,[]))},emit:function(t,e){var o=r.get(t);o&&o.slice().map(function(n){n(e)}),(o=r.get("*"))&&o.slice().map(function(n){n(t,e)})}}}var x=class{constructor(t){this.registerdApps=[];this.loadedApps=[];this.onRouteCallbacks=[];this.onBeforeRouteCallbacks=[];this.onAfterRouteCallbacks=[];this.eventBus=R();this.on=(t,e)=>{this.eventBus.on(t,e)};this.off=t=>{this.eventBus.off(t)};this.emit=(t,e)=>{this.eventBus.emit(t,e)};this.onRoute=(...t)=>{this.onRouteCallbacks.push(...t)};this.onBeforeRoute=(...t)=>{this.onBeforeRouteCallbacks.push(...t)};this.onAfterRoute=(...t)=>{this.onAfterRouteCallbacks.push(...t)};this.load=t,this.loadApps=t,this.loadAssets=t,this.loadComponents=t,this.loadCsses=t,this.loadFunctions=t,this.loadConfigs=t,window.addEventListener("hashchange",async e=>{let o=await this.getAppByRoute(this.currPath);if(o){let[n,p]=this.currPath.split("?"),s={};a(p)||(s=p.split("&").reduce((i,l)=>{let[u,w]=l.split("=");return i[u]=w,i},{}));for(let i of this.onBeforeRouteCallbacks)if(i(o,n,s)===!1){console.log("beforeRoute canceled");return}this.loadedApps.every(i=>i.manifest!==o.manifest)&&this.loadedApps.push(o);for(let i of this.onRouteCallbacks)i(o,n,s);for(let i of this.onAfterRouteCallbacks)i(o,n,s)}else console.log("not found matched app");this.activeApp=o??this.activeApp,console.log("find route",o)})}get currPath(){return a(location.hash)?"/":location.hash.substring(1)}registerApps(...t){for(let e of t)a(e.src)||this.registerdApps.push(e),Array.isArray(e.children)&&this.registerApps(...e.children)}async getAppByRoute(t){if(a(t))return Promise.resolve(null);let e=t;t=`${h(t,"/")}/`;let o=this.registerdApps.filter(s=>{let i=s.route??s.path;return typeof i=="string"?t.startsWith(`${h(i,"/")}/`):i.test(e)}).reduce((s,i)=>s==null||(i.priority??0)>=(s.priority??0)?i:s,null);if(o==null)return Promise.resolve(null);let n;try{n=await this.loadApps(o.src)}catch(s){return console.error("App load error",s),Promise.resolve(null)}let p=(n??[]).filter(s=>a(s.manifest.path)||t.includes(`/${h(s.manifest.path,"/")}/`)).sort((s,i)=>{let l=a(s.manifest.path)?Number.MAX_VALUE:t.indexOf(s.manifest.path),u=a(i.manifest.path)?Number.MAX_VALUE:t.indexOf(i.manifest.path);return l!==u?l-u:(l=a(s.manifest.path)?0:s.manifest.path.split("/").length,u=a(i.manifest.path)?0:i.manifest.path.split("/").length,u-l)});if(p.length>0){let s=p[0];return s.routeInfo=o,s}return null}routeTo(t,e){let o=new URLSearchParams;if(e)for(let p in e)e.hasOwnProperty(p)&&o.set(p,e[p]);let n=`#${t}${o.size?`?${o.toString()}`:""}`;n!==location.hash?location.hash=n:window.dispatchEvent(new HashChangeEvent("hashchange"))}};var v=`@charset "UTF-8";
:host {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

aside {
  width: 50rem;
  font-size: 3rem;
  background-color: #c32727;
}
aside ul {
  padding-left: 6rem;
}
aside ul li {
  list-style: none;
}
aside a {
  color: black;
}

main {
  flex: 3; /* 主内容区域占据更多空间 */
  padding: 16px;
  background-color: #e0e0e0;
}

.app-container {
  display: block;
  height: 100%;
  overflow: auto;
}
.app-container.hidden {
  display: none;
}`;var y=`html {
  font-size: 13.3333333333vw;
}`;var O=`html {
  font-size: 0.5208333333vw;
}

body {
  margin: 0;
}`;var F=E,{load:V}=g,f=new x(V),W="/app-1",A=class extends B{constructor(){super(...arguments);this.css=v}async install(){this.menus=$.menus,f.registerApps(...this.menus),f.onRoute((e,o,n)=>{console.log("onRoute",e,o,n),this.updateSelf()}),f.routeTo(f.currPath)}get path(){return a(location.hash)?W:location.hash.substring(1)}buildNavs(e){return m("ul",null,e.map(o=>m("li",null,m("a",{href:`#${o.path}`},o.name),o.children&&this.buildNavs(o.children))))}render(){return m(m.f,null,m("aside",null,this.buildNavs(this.menus)),m("main",null,f.loadedApps.map(e=>m(F,{app:e,host:f,class:U("app-container",{hidden:f.activeApp.manifest!==e.manifest})}))))}};A=c([H("simple-app")],A);L(m("simple-app",{"theme-css":y}),document.body);L(m("style",null,O),document.head);
