var f="1.0.0";var x={get definitionVersion(){return f},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};var p="1.0.0";var hr=({registerCsses:r},n)=>{r&&r(`
  :host li{
    display:block;
    line-height:2;
    font-size:3rem;
    color:#333999;
  }
  
  `);let o=document.createElement("div");o.innerHTML="<h2>App 1</h2>";let m=document.createElement("ul");o.appendChild(m);for(let t in i){let e=document.createElement("li");e.innerText=`${t}:${i[t]}`,m.appendChild(e)}for(let t in n){let e=document.createElement("li");e.innerText=`setting-${t}:${n[t]}`,m.appendChild(e)}return o};function Vr(r){r.on("appMount",o=>{console.log("appMount",o)});let n=0;setInterval(()=>{r.emit("appMount",{"app-1":n++})},2e3)}var i={get name(){return"FIRST-APP"},get shortName(){return"APP-1"},get appType(){return"NATIVE"},get singleton(){return!1},get version(){return p},...x};export{i as manifest,Vr as mount,hr as render};
