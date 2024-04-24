var r=`
:host {
  --wp-loading-border: calc(5/30 * var(--wp-loading-size)) ;
}

.loading {
  display: inline-block;
  position: relative;
  width: var(--wp-loading-size);
  height: var(--wp-loading-size);
  border: calc(0.0666666667 * var(--wp-loading-size)) solid var(--wp-loading-color, #000);
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 100%;
  animation: arrow-circle infinite 0.75s linear;
}

.loading:before,
.loading:after {
  position: absolute;
  top: calc(0.8 * var(--wp-loading-size));
  left: calc(-0.0666666667 * var(--wp-loading-size));
  border-top: var(--wp-loading-border) solid var(--wp-loading-color, #000);
  border-right: var(--wp-loading-border) solid transparent;
  border-left: var(--wp-loading-border) solid transparent;
  content: "";
  transform: rotate(-30deg);
}

.loading:after {
  top: 0;
  left: calc(0.6833333333 * var(--wp-loading-size));
  transform: rotate(150deg);
}

@keyframes arrow-circle {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0);
  }
}`;var{h:o}=wpa,i={template:o("div",{class:"loading"}),css:r};export{i as default};
