var a=`
.loading {
  margin: 0 calc(0.6666666667 * var(--wp-loading-size));
  display: inline-block;
  position: relative;
  width: calc(0.2 * var(--wp-loading-size));
  height: calc(0.3333333333 * var(--wp-loading-size));
  animation: rectangle infinite 1s ease-in-out -0.2s;
  background-color: var(--wp-loading-color, #000);
}

.loading:before,
.loading:after {
  position: absolute;
  width: calc(0.2 * var(--wp-loading-size));
  height: calc(0.3333333333 * var(--wp-loading-size));
  content: "";
  background-color: var(--wp-loading-color, #000);
}

.loading:before {
  left: calc(-0.4666666667 * var(--wp-loading-size));
  animation: rectangle infinite 1s ease-in-out -0.4s;
}

.loading:after {
  right: calc(-0.4666666667 * var(--wp-loading-size));
  animation: rectangle infinite 1s ease-in-out;
}

@keyframes rectangle {
  0%, 80%, 100% {
    height: calc(0.6666666667 * var(--wp-loading-size));
    box-shadow: 0 0 var(--wp-loading-color-a, #000);
  }
  40% {
    height: var(--wp-loading-size);
    box-shadow: 0 -20px var(--wp-loading-color-b, #000);
  }
}`;var{h:i}=wpa,n={template:i("div",{class:"loading"}),css:a};export{n as default};
