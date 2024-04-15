var I=Object.defineProperty;var p=(o,e)=>{for(var t in e)I(o,t,{get:e[t],enumerable:!0})};var x={};p(x,{manifest:()=>C,render:()=>l});var i="1.0.0";import{h as r}from"/libs/wpa/latest/wpa.js";var n={get definitionVersion(){return i},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};import{c1 as E}from"/components/basic-ui/1.0.0/";import{c1 as A}from"/components/basic-ui/";import{app as a}from"/assets/icons//";var s={};p(s,{manifest:()=>m,render:()=>g});import{h as f}from"/libs/wpa/latest/wpa.js";var g=o=>(o.registerCsses(`
    :host{
      color:blue;
    }
    a{
      color:red;
    }
    `),o.registerStyleSheets(new URL("./css/app3.css",import.meta.url).href),f("div",null,f("h2",null,"应用3的子应用"),f("a",{href:`#${o.routeInfo.path}`},f("h3",null,"返回应用3主应用")))),m={get path(){return"2"},get name(){return"第三个App-2定义"},get shortName(){return"APP-3"},get appType(){return"PART"},get singleton(){return!1},get version(){return"1.0.0"},...n};import{AssetContainerTag as u}from"/containers/base//";var l=o=>(o.registerCsses(`
    :host{
      color:red;
    }
    .asset{
      background:#ccc;
      color:black;
      font-size:2rem;
    }
    `),o.registerStyleSheets(new URL("./css/app3.css",import.meta.url).href),r("div",null,"第三个App3 定义，使用自定义组件的多个版本",r("button",{class:"btn btn-primary"},"hello"),r("fieldset",null,r("legend",null,"C1 组件1.0.0"),r(E.manifest.tag,null)),r("fieldset",null,r("legend",null,"C1 组件1.0.1"),r(A.manifest.tag,null)),r("a",{href:`#${o.routeInfo.path}/${m.path}`},r("h3",null,"进入应用3的子应用")),r("div",{class:"asset"},r("h2",null,"导入一个资源"),Object.entries(a.manifest).map(([e,t])=>r("div",null,e,":",t)),r(u,{asset:a,props:{width:100}})))),C={get name(){return"第三个App定义"},get shortName(){return"APP-3"},get appType(){return"PART"},get singleton(){return!1},get version(){return"1.0.0"},...n};export{x as First,s as Second};
