var f="1.0.0";var x={get definitionVersion(){return f},get resourceType(){return"APP"},get info(){return{get author(){return"saharan"},get org(){return"lv"}}}};var Ur=({registerCsses:p})=>{p(`
    li{
      border:0;
      color:blue;
      cursor:pointer;
      
    }
    li:hover{
      color:red;
      background:#ccddee;
    }
    .more{
      height:10px;
    }
  `);let o=document.createElement("div"),t=document.createElement("ul"),r=document.createElement("div");r.className="more",o.appendChild(t),o.appendChild(r);let i=1,e=new IntersectionObserver(E=>{E.forEach(I=>{if(I.isIntersecting){console.log("元素在视口中");for(let m=0;m<20;m++){let n=document.createElement("li");t.appendChild(n),n.innerHTML=`${i++}:${Math.floor(Math.random()*100)}`}e.unobserve(r),e.observe(r)}else console.log("元素不在视口中")})});return e.observe(r),o},br={get name(){return"SECOND.2-APP"},get shortName(){return"APP-2.2"},get appType(){return"NATIVE"},get singleton(){return!1},get version(){return"1.0.0"},...x};export{br as manifest,Ur as render};
