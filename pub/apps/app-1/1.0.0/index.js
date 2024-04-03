var f="1.0.0";var x={get definitionVersion(){return f},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};var p="1.0.0";var Vr=({registerCsses:e},n)=>{e&&e(`
  :host li{
    display:block;
    line-height:1.5;
    font-size:14px;
    color:#333999;
  }`);let m=document.createElement("div"),t=document.createElement("ul");m.appendChild(t);for(let r in i){let o=document.createElement("li");o.innerText=`${r}:${i[r]}`,t.appendChild(o)}for(let r in n){let o=document.createElement("li");o.innerText=`setting-${r}:${n[r]}`,t.appendChild(o)}return m},i={get name(){return"FIRST-APP"},get shortName(){return"APP-1"},get appType(){return"NATIVE"},get singleton(){return!1},get version(){return p},...x};export{i as manifest,Vr as render};
