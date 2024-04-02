var o="1.0.0";var t={get definitionVersion(){return o},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};var ur=e=>{e.registerCsses(`
    iframe{
      border:0;
      height:100%;
      width:100%;
    }
  `);let r=document.createElement("iframe");return r.src=import.meta.url,r},sr={get name(){return"SECOND-APP"},get shortName(){return"APP-2"},get appType(){return"IFRAME"},get singleton(){return!1},get version(){return"1.0.0"},...t};export{sr as manifest,ur as render};
