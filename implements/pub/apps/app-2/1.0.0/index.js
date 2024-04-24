var o="1.0.0";var t={get definitionVersion(){return o},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};import*as f from"/assets/icons/";var e="1.0.0";var Dr=m=>{m.registerCsses(`
    iframe{
      border:0;
      height:100%;
      width:100%;
    }
  `);let r=document.createElement("iframe");return r.src=f.app.manifest.src,r},Fr={get name(){return"SECOND-APP"},get shortName(){return"APP-2"},get appType(){return"IFRAME"},get singleton(){return!1},get version(){return e},...t};export{Fr as manifest,Dr as render};
