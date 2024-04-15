var i="1.0.0";var f={version:"1.0.0"};var c=async o=>{o.endsWith("/")&&(o+="index.js");let r=await import(o),e=new Set;if(r.manifest)e.add(r);else for(let t in r){let n=r[t];n.manifest&&e.add(n)}return[...e]},L={name:"esLoader",version:f.version,definitionVersion:i,resourceType:"FUNCTION"};Object.assign(c,{manifest:L});var x=new Map,I=async o=>{o.endsWith("/")&&(o+="index.js");let r=o,e=null;if(x.has(r))e=x.get(r);else{let t=document.createElement("iframe");t.style.display="none",document.body.appendChild(t);let n=t.contentWindow,d=t.contentDocument,a=d.createElement("script");a.type="module",a.innerHTML=`
  try{
      const app = await import("${o}")
      const appLoadEvent =new CustomEvent("appLoad",{detail:app})
      window.dispatchEvent(appLoadEvent)
  }catch(exc){
    const appErrorEvent =new CustomEvent("appError",{detail:exc})
    window.dispatchEvent(appErrorEvent)
  }

`,d.head.appendChild(a),e=new Promise((l,N)=>{n.addEventListener("appLoad",p=>{let m=p.detail,s=new Set;if(m.manifest)s.add(m);else for(let O in m){let E=m[O];E.manifest&&s.add(E)}l([...s])}),n.addEventListener("appError",p=>{N(p)})}),x.set(r,e)}return await e},M={name:"iframeLoader",version:f.version,definitionVersion:i,resourceType:"FUNCTION"};Object.assign(I,{manifest:M});export{c as esLoad,I as iframeLoad};
