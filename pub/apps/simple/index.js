var C=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var O=(n,t)=>{for(var e in t)C(n,e,{get:t[e],enumerable:!0})};var u=(n,t,e,o)=>{for(var r=o>1?void 0:o?L(t,e):t,m=n.length-1,s;m>=0;m--)(s=n[m])&&(r=(o?s(t,e,r):s(r))||r);return o&&r&&C(t,e,r),r};import{h as i,tag as N,render as T,Component as S,classNames as M}from"/node_modules/wpa/dist/wpa.js";var p=n=>n==null||n.trim()==="",h=(n,t=" ")=>p(n)?n:n.replace(new RegExp(`(^${t}+)|(${t}+$)`,"g"),"");var I={};O(I,{load:()=>b});var b=async n=>{n.endsWith("/")&&(n+="index.js");let{default:t=[],...e}=await import(n);return[...t,e].filter(o=>o.manifest)};import{Component as w}from"/node_modules/wpa/dist/wpa.js";var g=class extends w{constructor(){super(...arguments);this.props={host:null};this.registerCsses=(...e)=>{this.cssss=e,this.updateStyle()};this.registerStyleSheets=(...e)=>{this.stylesheets=e,this.updateStyle()}}get host(){return this.props.host}render(e){}};import{h as y,tag as P}from"/node_modules/wpa/dist/wpa.js";var E="large-wpa-app-container",l=class extends g{constructor(){super(...arguments);this.props={app:null,props:null,host:null}}get routeInfo(){return this.app.routeInfo}get element(){return this.shadowRoot.querySelector("*")}get app(){return this.props.app}get appProps(){return this.props.props??{}}installed(){let e=this.app;if(typeof e.render=="function"&&e.manifest.appType!=="PART"){let o=e.render(this,this.appProps);o instanceof HTMLElement&&this.shadowRoot.appendChild(o)}}render(e){let o=this.app;return typeof o.render!="function"&&!p(o.manifest.tag)?y(o.manifest.tag,this.appProps):o.manifest.appType=="PART"?o.render(this,this.appProps):null}};l.css=`
  :host{
    display: block;

  }
  `,l=u([P(E)],l);var x=class{constructor(t){this.registerdApps=[];this.loadedApps=[];this.onRouteCallbacks=[];this.onBeforeRouteCallbacks=[];this.onAfterRouteCallbacks=[];this.onRoute=(...t)=>{this.onRouteCallbacks.push(...t)};this.onBeforeRoute=(...t)=>{this.onBeforeRouteCallbacks.push(...t)};this.onAfterRoute=(...t)=>{this.onAfterRouteCallbacks.push(...t)};this.load=t,this.loadApps=t,this.loadAssets=t,this.loadComponents=t,this.loadCsses=t,this.loadFunctions=t,this.loadConfigs=t,window.addEventListener("hashchange",async e=>{let o=await this.getAppByRoute(this.currPath);if(o){for(let r of this.onBeforeRouteCallbacks)if(r(o,this.currPath)===!1)return;this.loadedApps.every(r=>r.manifest!==o.manifest)&&this.loadedApps.push(o);for(let r of this.onRouteCallbacks)r(o,this.currPath);for(let r of this.onAfterRouteCallbacks)r(o,this.currPath)}this.currApp=o??this.currApp})}get currPath(){return p(location.hash)?"/app-1":location.hash.substring(1)}registerApps(...t){for(let e of t)p(e.src)||this.registerdApps.push(e),Array.isArray(e.children)&&this.registerApps(...e.children)}async getAppByRoute(t){if(p(t))return Promise.resolve(null);let e=t;t=`${h(t,"/")}/`;let o=this.registerdApps.filter(s=>{let a=s.route??s.path;return typeof a=="string"?t.startsWith(`${h(a,"/")}/`):a.test(e)}).reduce((s,a)=>s==null||(a.priority??0)>=(s.priority??0)?a:s,null);if(o==null)return Promise.resolve(null);let r;try{r=await this.loadApps(o.src)}catch{return Promise.resolve(null)}let m=(r??[]).filter(s=>p(s.manifest.path)||t.includes(`/${h(s.manifest.path,"/")}/`)).sort((s,a)=>{let d=p(s.manifest.path)?Number.MAX_VALUE:t.indexOf(s.manifest.path),c=p(a.manifest.path)?Number.MAX_VALUE:t.indexOf(a.manifest.path);return d!==c?d-c:(d=p(s.manifest.path)?0:s.manifest.path.split("/").length,c=p(a.manifest.path)?0:a.manifest.path.split("/").length,c-d)});if(m.length>0){let s=m[0];return s.routeInfo=o,s}return null}};var R=`@charset "UTF-8";
:host {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

aside {
  flex: 1; /* 侧边栏占据剩余空间 */
  padding: 16px;
  background-color: #f0f0f0;
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
}`;var k=E,{load:H}=I,f=new x(H),U="/app-1",A=class extends S{constructor(){super(...arguments);this.css=R;this.loadedApps=[];this.currApp=null}async install(){window.addEventListener("hashchange",async o=>{let r=await f.getAppByRoute(this.path);r&&this.loadedApps.every(m=>m.manifest!==r.manifest)&&this.loadedApps.push(r),this.currApp=r??this.currApp,this.updateSelf()});let[e]=await f.loadConfigs("/pub/configs/app-config.js");this.menus=e.config,f.registerApps(...this.menus),f.onRoute(o=>{}),this.currApp=await f.getAppByRoute(this.path),this.currApp&&this.loadedApps.push(this.currApp)}get path(){return p(location.hash)?U:location.hash.substring(1)}buildNavs(e){return i("ul",null,e.map(o=>i("li",null,i("a",{href:`#${o.path}`},o.name),o.children&&this.buildNavs(o.children))))}render(){return i(i.f,null,i("aside",null,this.buildNavs(this.menus)),i("main",null,this.loadedApps.map(e=>i(k,{app:e,host:f,class:M("app-container",{hidden:this.currApp.manifest!==e.manifest})}))))}};A=u([N("simple-app")],A);T(i("simple-app",null),document.body);
