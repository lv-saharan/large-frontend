var s=Object.defineProperty;var m=(r,p)=>{for(var f in p)s(r,f,{get:p[f],enumerable:!0})};var e={};m(e,{manifest:()=>A,render:()=>I});var n="1.0.0";import{h as x}from"/node_modules/wpa/dist/wpa.js";var o={get definitionVersion(){return n},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};var I=r=>(r.registerCsses(`
    :host{
      color:red;
    }
    `),r.registerStyleSheets(new URL("./css/app3.css",import.meta.url).href),x("div",null,"第三个App3 定义",x("a",{href:`#${r.routeInfo.path}/2`},"App3.2"))),A={get name(){return"第三个App定义"},get shortName(){return"APP-3"},get appType(){return"PART"},get singleton(){return!1},get version(){return"1.0.0"},...o};var t={};m(t,{manifest:()=>u,render:()=>E});import{h as i}from"/node_modules/wpa/dist/wpa.js";var E=r=>(r.registerCsses(`
    :host{
      color:blue;
    }
    `),r.registerStyleSheets(new URL("./css/app3.css",import.meta.url).href),i("div",null,"App3.2定义",i("a",{href:`#${r.routeInfo.path}`},"App3.1"))),u={get path(){return"2"},get name(){return"第三个App-2定义"},get shortName(){return"APP-3"},get appType(){return"PART"},get singleton(){return!1},get version(){return"1.0.0"},...o};var kr=[e,t];export{kr as default};
