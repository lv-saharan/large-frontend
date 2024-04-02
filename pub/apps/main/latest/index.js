var C=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var v=(n,t)=>{for(var e in t)C(n,e,{get:t[e],enumerable:!0})};var u=(n,t,e,o)=>{for(var a=o>1?void 0:o?b(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(a=(o?r(t,e,a):r(a))||a);return o&&a&&C(t,e,a),a};import{h as m,tag as M,render as y,Component as H,classNames as U}from"/libs/wpa/1.0.13/wpa.js";import{config as $}from"/configs/apps/";var p=n=>n==null||n.trim()==="",h=(n,t=" ")=>p(n)?n:n.replace(new RegExp(`(^${t}+)|(${t}+$)`,"g"),"");var I={};v(I,{load:()=>P});var P=async n=>{n.endsWith("/")&&(n+="index.js");let{default:t,...e}=await import(n);return[...Array.isArray(t)?t:[t],e].filter(o=>o?.manifest)};import{Component as S}from"/libs/wpa/1.0.13/wpa.js";var x=class extends S{constructor(){super(...arguments);this.props={host:null};this.registerCsses=(...e)=>{this.cssss=e,this.updateStyle()};this.registerStyleSheets=(...e)=>{this.stylesheets=e,this.updateStyle()}}get host(){return this.props.host}render(e){}};import{h as T,tag as k}from"/libs/wpa/1.0.13/wpa.js";var E="large-wpa-app-container",c=class extends x{constructor(){super(...arguments);this.props={app:null,props:null,host:null}}get routeInfo(){return this.app.routeInfo}get element(){return this.shadowRoot.querySelector("*")}get app(){return this.props.app}get appProps(){return this.props.props??{}}installed(){let e=this.app;if(typeof e.render=="function"&&e.manifest.appType!=="PART"){let o=e.render(this,this.appProps);o instanceof HTMLElement&&this.shadowRoot.appendChild(o)}}render(e){let o=this.app;return typeof o.render!="function"&&!p(o.manifest.tag)?T(o.manifest.tag,this.appProps):o.manifest.appType=="PART"?o.render(this,this.appProps):null}};c.css=`
  :host{
    display: block;

  }
  `,c=u([k(E)],c);var g=class{constructor(t){this.registerdApps=[];this.loadedApps=[];this.onRouteCallbacks=[];this.onBeforeRouteCallbacks=[];this.onAfterRouteCallbacks=[];this.onRoute=(...t)=>{this.onRouteCallbacks.push(...t)};this.onBeforeRoute=(...t)=>{this.onBeforeRouteCallbacks.push(...t)};this.onAfterRoute=(...t)=>{this.onAfterRouteCallbacks.push(...t)};this.load=t,this.loadApps=t,this.loadAssets=t,this.loadComponents=t,this.loadCsses=t,this.loadFunctions=t,this.loadConfigs=t,window.addEventListener("hashchange",async e=>{let o=await this.getAppByRoute(this.currPath);if(o){let[a,i]=this.currPath.split("?"),r={};p(i)||(r=i.split("&").reduce((s,f)=>{let[d,w]=f.split("=");return s[d]=w,s},{}));for(let s of this.onBeforeRouteCallbacks)if(s(o,a,r)===!1)return;this.loadedApps.every(s=>s.manifest!==o.manifest)&&this.loadedApps.push(o);for(let s of this.onRouteCallbacks)s(o,a,r);for(let s of this.onAfterRouteCallbacks)s(o,a,r)}this.activeApp=o??this.activeApp})}get currPath(){return p(location.hash)?"/":location.hash.substring(1)}registerApps(...t){for(let e of t)p(e.src)||this.registerdApps.push(e),Array.isArray(e.children)&&this.registerApps(...e.children)}async getAppByRoute(t){if(p(t))return Promise.resolve(null);let e=t;t=`${h(t,"/")}/`;let o=this.registerdApps.filter(r=>{let s=r.route??r.path;return typeof s=="string"?t.startsWith(`${h(s,"/")}/`):s.test(e)}).reduce((r,s)=>r==null||(s.priority??0)>=(r.priority??0)?s:r,null);if(o==null)return Promise.resolve(null);let a;try{a=await this.loadApps(o.src)}catch{return Promise.resolve(null)}let i=(a??[]).filter(r=>p(r.manifest.path)||t.includes(`/${h(r.manifest.path,"/")}/`)).sort((r,s)=>{let f=p(r.manifest.path)?Number.MAX_VALUE:t.indexOf(r.manifest.path),d=p(s.manifest.path)?Number.MAX_VALUE:t.indexOf(s.manifest.path);return f!==d?f-d:(f=p(r.manifest.path)?0:r.manifest.path.split("/").length,d=p(s.manifest.path)?0:s.manifest.path.split("/").length,d-f)});if(i.length>0){let r=i[0];return r.routeInfo=o,r}return null}routeTo(t,e){let o=new URLSearchParams;if(e)for(let i in e)e.hasOwnProperty(i)&&o.set(i,e[i]);let a=`#${t}${o.size?`?${o.toString()}`:""}`;a!==location.hash?location.hash=a:window.dispatchEvent(new HashChangeEvent("hashchange"))}};var R=`@charset "UTF-8";
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
}`;var L=`html {
  font-size: 13.3333333333vw;
}`;var O=`html {
  font-size: 0.5208333333vw;
}

body {
  margin: 0;
}`;var F=E,{load:V}=I,l=new g(V),B="/app-1",A=class extends H{constructor(){super(...arguments);this.css=R}async install(){this.menus=$.menus,l.registerApps(...this.menus),l.onRoute((e,o,a)=>{this.updateSelf()}),l.routeTo(l.currPath)}get path(){return p(location.hash)?B:location.hash.substring(1)}buildNavs(e){return m("ul",null,e.map(o=>m("li",null,m("a",{href:`#${o.path}`},o.name),o.children&&this.buildNavs(o.children))))}render(){return m(m.f,null,m("aside",null,this.buildNavs(this.menus)),m("main",null,l.loadedApps.map(e=>m(F,{app:e,host:l,class:U("app-container",{hidden:l.activeApp.manifest!==e.manifest})}))))}};A=u([M("simple-app")],A);y(m("simple-app",{"theme-css":L}),document.body);y(m("style",null,O),document.head);
