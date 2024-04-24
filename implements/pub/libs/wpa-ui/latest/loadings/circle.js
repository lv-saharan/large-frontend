var r=`
:host {
  width: var(--wp-loading-size);
  height: var(--wp-loading-size);
}

.loading {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: calc(0.0666666667 * var(--wp-loading-size)) solid var(--wp-loading-color, #000);
  border-top-color: transparent;
  border-radius: 100%;
  animation: circle infinite 0.75s linear;
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}`;var{h:o}=wpa,e={template:o("div",{class:"loading"}),css:r};export{e as default};
