var s=Object.defineProperty;var n=(r,f)=>{for(var m in f)s(r,m,{get:f[m],enumerable:!0})};var t={};n(t,{manifest:()=>E,render:()=>A});var x="1.0.0";import{h as o}from"/libs/wpa/latest/wpa.js";var e={get definitionVersion(){return x},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};import{c1 as I}from"/components/basic-ui/";var A=r=>(r.registerCsses(`
    :host{
      color:red;
    }
    `),r.registerStyleSheets(new URL("./css/app3.css",import.meta.url).href),o("div",null,"第三个App3 定义，使用自定义组件的多个版本",o("fieldset",null,o("legend",null,"C1 组件1.0.0"),o(I.manifest.tag,null)),o("a",{href:`#${r.routeInfo.path}/2`},"App3.2"))),E={get name(){return"第三个App定义"},get shortName(){return"APP-3"},get appType(){return"PART"},get singleton(){return!1},get version(){return"1.0.0"},...e};var p={};n(p,{manifest:()=>u,render:()=>g});import{h as i}from"/libs/wpa/latest/wpa.js";var g=r=>(r.registerCsses(`
    :host{
      color:blue;
    }
    `),r.registerStyleSheets(new URL("./css/app3.css",import.meta.url).href),i("div",null,"App3.2定义",i("a",{href:`#${r.routeInfo.path}`},"App3.1"))),u={get path(){return"2"},get name(){return"第三个App-2定义"},get shortName(){return"APP-3"},get appType(){return"PART"},get singleton(){return!1},get version(){return"1.0.0"},...e};var zr=[t,p];export{zr as default};
