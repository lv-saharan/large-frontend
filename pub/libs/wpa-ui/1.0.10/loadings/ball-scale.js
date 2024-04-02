var a=`
.loading {
  display: inline-block;
  width: var(--wp-loading-size);
  height: var(--wp-loading-size);
  border-radius: 100%;
  background-color: var(--wp-loading-color, #000);
  animation: ball-scale infinite linear 0.75s;
}

@keyframes ball-scale {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}`;var{h:i}=wpa,e={template:i("div",{class:"loading"}),css:a};export{e as default};
