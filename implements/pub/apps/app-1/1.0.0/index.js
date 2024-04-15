var f="1.0.0";var x={get definitionVersion(){return f},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};var p="1.0.0";var Vr=({registerCsses:r},e)=>{r&&r(`
  :host li{
    display:block;
    line-height:2;
    font-size:3rem;
    color:#333999;
  }`);let n=document.createElement("div"),m=document.createElement("ul");n.appendChild(m);for(let o in i){let t=document.createElement("li");t.innerText=`${o}:${i[o]}`,m.appendChild(t)}for(let o in e){let t=document.createElement("li");t.innerText=`setting-${o}:${e[o]}`,m.appendChild(t)}return n};function hr(r){r.on("appMount",n=>{console.log("appMount",n)});let e=0;setInterval(()=>{r.emit("appMount",{"app-1":e++})},2e3)}var i={get name(){return"FIRST-APP"},get shortName(){return"APP-1"},get appType(){return"NATIVE"},get singleton(){return!1},get version(){return p},...x};export{i as manifest,hr as mount,Vr as render};
