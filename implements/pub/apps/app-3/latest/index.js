var I=Object.defineProperty;var i=(o,t)=>{for(var m in t)I(o,m,{get:t[m],enumerable:!0})};var x={};i(x,{manifest:()=>c,render:()=>u});var s="1.0.0";import{h as r}from"/libs/wpa/";var n={get definitionVersion(){return s},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};import{c1 as A}from"/components/basic-ui/1.0.0/";import{c1 as l}from"/components/basic-ui/";import{app as p}from"/assets/icons/";var a={};i(a,{manifest:()=>f,render:()=>g});import{h as e}from"/libs/wpa/";import{app as d}from"/assets/icons/";var g=o=>(o.registerCsses(`
    :host{
      color:blue;
    }
    a{
      color:red;
    }
    `),o.registerStyleSheets(new URL("./css/app3.css",import.meta.url).href),e("div",null,e("h2",null,"应用3的子应用"),e("a",{href:`#${o.routeInfo.path}`},e("h3",null," ",e("img",{src:d.manifest.src,style:{width:"3rem"}}),"返回应用3主应用")))),f={get path(){return"2"},get name(){return"第三个App-2定义"},get shortName(){return"APP-3"},get appType(){return"PART"},get singleton(){return!1},get version(){return"1.0.0"},...n};import{AssetContainerTag as C}from"/containers/base/";var u=o=>(o.registerCsses(`
    :host{
      color:red;
    }
    .asset{
      background:#ccc;
      color:black;
      font-size:2rem;
    }
    `),o.registerStyleSheets(new URL("./css/app3.css",import.meta.url).href),r("div",null,"第三个App3 定义，使用自定义组件的多个版本",r("button",{class:"btn btn-primary"},"hello"),r("fieldset",null,r("legend",null,"C1 组件1.0.0"),r(A.manifest.tag,null)),r("fieldset",null,r("legend",null,"C1 组件1.0.1"),r(l.manifest.tag,null)),r("a",{href:`#${o.routeInfo.path}/${f.path}`},r("h3",null,r("img",{src:p.manifest.src,style:{width:"3rem"}}),"进入应用3的子应用")),r("div",{class:"asset"},r("h2",null,"导入一个资源"),Object.entries(p.manifest).map(([t,m])=>r("div",null,t,":",m)),r(C,{asset:p,props:{width:100}})))),c={get name(){return"第三个App定义"},get shortName(){return"APP-3"},get appType(){return"PART"},get singleton(){return!1},get version(){return"1.0.0"},...n};export{x as First,a as Second};
