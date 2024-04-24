var f="1.0.0";var i={version:"1.0.0"};var c=async n=>{let o=await import(n),r=new Set;if(o.manifest)r.add(o);else for(let t in o){let e=o[t];e.manifest&&r.add(e)}return[...r]},M={name:"esLoader",version:i.version,definitionVersion:f,resourceType:"FUNCTION"};Object.assign(c,{manifest:M});var s=new Map,I=async n=>{let o=n,r=null;if(s.has(o))r=s.get(o);else{let t=document.createElement("iframe");t.style.display="none",document.body.appendChild(t);let e=t.contentWindow,E=t.contentDocument,a=E.createElement("script");a.type="module",a.innerHTML=`
  try{
      const app = await import("${n}")
      const appLoadEvent =new CustomEvent("appLoad",{detail:app})
      window.dispatchEvent(appLoadEvent)
  }catch(exc){
    const appErrorEvent =new CustomEvent("appError",{detail:exc})
    window.dispatchEvent(appErrorEvent)
  }

`,E.head.appendChild(a),r=new Promise((l,N)=>{e.addEventListener("appLoad",p=>{let m=p.detail,x=new Set;if(m.manifest)x.add(m);else for(let O in m){let d=m[O];d.manifest&&x.add(d)}l([...x])}),e.addEventListener("appError",p=>{N(p)})}),s.set(o,r)}return await r},u={name:"iframeLoader",version:i.version,definitionVersion:f,resourceType:"FUNCTION"};Object.assign(I,{manifest:u});export{c as esLoad,I as iframeLoad};
