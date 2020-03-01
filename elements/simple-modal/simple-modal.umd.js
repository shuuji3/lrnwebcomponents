!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@polymer/paper-dialog/paper-dialog.js"),require("@polymer/polymer/lib/elements/custom-style.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@polymer/paper-dialog/paper-dialog.js","@polymer/polymer/lib/elements/custom-style.js"],n):n((e=e||self).SimpleModal={},e.litElement_js)}(this,function(e,n){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e,n,t){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=r(e)););return e}(e,n);if(o){var i=Object.getOwnPropertyDescriptor(o,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(){var e=p(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\npaper-dialog-scrollable:not(:defined) {\n  display: none;\n}\n\n:host paper-dialog ::slotted(*) {\n  font-size: 14px;\n  width: 100%;\n}\n\n#dialog {\n  display: flex;\n  flex-direction: column;\n  margin: 15px auto;\n  z-index: 1000;\n  height: var(--simple-modal-height, auto);\n  width: var(--simple-modal-width, auto);\n  min-width: var(--simple-modal-min-width, unset);\n  max-width: var(--simple-modal-max-width, unset);\n  min-height: var(--simple-modal-min-height, unset);\n  max-height: var(--simple-modal-max-height, unset);\n  border-radius: 0;\n}\n\n#titlebar {\n  margin-top: 0;\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--simple-modal-titlebar-color,#444);\n  background-color: var(--simple-modal-titlebar-background,#ddd);\n  border-radius: 0;\n  height: 64px;\n  line-height: 64px;\n}\n\n#headerbar {\n  margin: 0;\n  padding: 0 16px;\n  color: var(--simple-modal-header-color, #222);\n  background-color: var(--simple-modal-header-background, #ccc);\n}\n\nh2 {\n  margin-right: 8px;\n  padding: 0;\n  flex: auto;\n  font-size: 18px;\n  line-height: 18px;\n}\n\n#close {\n  top: 0;\n  border: var(--simple-modal-titlebar-button-border, none);\n  padding: var(--simple-modal-titlebar-button-padding, 10px 0);\n  min-width: unset;\n  text-transform: none;\n  color: var(--simple-modal-titlebar-color,#444);\n  background-color: transparent;\n}\n\n#close:focus {\n  opacity: 0.7;\n  outline: var(--simple-modal-titlebar-button-outline, 2px dotted grey);\n  outline-offset: var(--simple-modal-titlebar-button-outline-offset, 2px);\n}\n\n#close iron-icon {\n  width: var(--simple-modal-titlebar-icon-width, 16px);\n  height: var(--simple-modal-titlebar-icon-height, 16px);\n  color: var(--simple-modal-titlebar-color,#444);\n}\n\n#simple-modal-content {\n  flex-grow: 1;\n  padding: 8px 16px;\n  margin: 0;\n  color: var(--simple-modal-content-container-color, #222);\n  background-color: var(--simple-modal-content-container-background, #fff);\n}\n\n.buttons {\n  padding: 0;\n  margin: 0;\n  color: var(--simple-modal-buttons-color, unset);\n  background-color: var(--simple-modal-buttons-background, unset);\n}\n\n.buttons ::slotted(*) {\n  padding: 0;\n  margin: 0;\n  color: var(--simple-modal-button-color,--simple-modal-buttons-color);\n  background-color: var(--simple-modal-button-background,--simple-modal-buttons-background);\n}\n      "]);return u=function(){return e},e}function m(){var e=p(['\n\n<custom-style>\n  <style>\n  :host paper-dialog ::slotted(*) {\n    @apply --simple-modal-content;\n  }\n\n  #dialog {\n    @apply --simple-modal-dialog;\n  }\n\n  #titlebar {\n    @apply --simple-modal-top;\n  }\n\n  #headerbar {\n    @apply --simple-modal-headerbar;\n  }\n\n  h2 {\n    @apply --simple-modal-title;\n  }\n\n  #close {\n    @apply --simple-modal-close;\n  }\n\n  #close iron-icon {\n    @apply --simple-modal-close-icon;\n  }\n\n  #simple-modal-content {\n    --paper-dialog-scrollable: {\n      padding: 0;\n    }\n    @apply --simple-modal-content-container;\n  }\n  .buttons {\n    @apply --simple-modal-buttons;\n  }\n  .buttons ::slotted(*) {\n    @apply --simple-modal-button;\n  }\n  </style>\n</custom-style>\n<paper-dialog\n  id="dialog"\n  always-on-top\n  aria-describedby="simple-modal-content"\n  aria-label="','"\n  aria-labelledby="','"\n  aria-modal="true"\n  role="dialog"\n  ?opened="','"\n  @opened-changed="','"\n  ?modal="','"\n  with-backdrop>\n  <div id="titlebar">\n    <h2 id="simple-modal-title" ?hidden="','">','</h2>\n    <div></div>\n    <paper-button id="close" dialog-dismiss ?hidden="','" label="','">\n      <iron-icon aria-hidden="true" icon="','"></iron-icon>\n    </paper-button>\n  </div>\n  <div id="headerbar"><slot name="header"></slot></div>\n  <paper-dialog-scrollable id="simple-modal-content">\n    <slot name="content"></slot>\n  </paper-dialog-scrollable>\n  <div class="buttons">\n    <slot name="buttons"></slot>\n  </div>\n</paper-dialog>']);return m=function(){return e},e}var h=function(e){function o(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),(e=s(this,r(o).call(this))).title="",e.opened=!1,e.closeLabel="Close",e.closeIcon="close",e.modal=!1,setTimeout(function(){import("@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"),import("@polymer/paper-button/paper-button.js"),import("@polymer/iron-icons/iron-icons.js"),import("@polymer/iron-icon/iron-icon.js")},0),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(o,n.LitElement),i(o,[{key:"render",value:function(){return n.html(m(),this._getAriaLabel(this.title),this._getAriaLabelledby(this.title),this.opened,this.openedChangedEvent,this.modal,!this.title,this.title,!this.opened,this.closeLabel,this.closeIcon)}}],[{key:"styles",get:function(){return[n.css(u())]}},{key:"properties",get:function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach(function(n){l(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},c(r(o),"properties",this),{title:{type:String},opened:{type:Boolean,reflect:!0},closeLabel:{attribute:"close-label",type:String},closeIcon:{type:String,attribute:"close-icon"},invokedBy:{type:Object},modal:{type:Boolean}})}},{key:"tag",get:function(){return"simple-modal"}}]),i(o,[{key:"updated",value:function(e){var n=this;e.forEach(function(e,t){"opened"==t&&n._openedChanged(n[t])})}},{key:"firstUpdated",value:function(){this.shadowRoot.querySelector("#simple-modal-content").addEventListener("neon-animation-finish",this._ironOverlayClosed.bind(this))}},{key:"connectedCallback",value:function(){var e=this;c(r(o.prototype),"connectedCallback",this).call(this),setTimeout(function(){window.addEventListener("simple-modal-hide",e.close.bind(e)),window.addEventListener("simple-modal-show",e.showEvent.bind(e))},0)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("simple-modal-hide",this.close.bind(this)),window.removeEventListener("simple-modal-show",this.showEvent.bind(this)),c(r(o.prototype),"disconnectedCallback",this).call(this)}},{key:"_resizeContent",value:function(e){window.dispatchEvent(new Event("resize"))}},{key:"showEvent",value:function(e){var n=this;if(this.opened){for(;null!==this.firstChild;)this.removeChild(this.firstChild);setTimeout(function(){n.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)},100)}else this.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)}},{key:"show",value:function(e,n,t){var o,i=this,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,d=arguments.length>6&&void 0!==arguments[6]&&arguments[6],s=arguments.length>7&&void 0!==arguments[7]&&arguments[7];this.invokedBy=t,this.modal=s,this.title=e;var c=["header","content","buttons"];for(var p in l?this.setAttribute("id",l):this.removeAttribute("id"),this.setAttribute("style",""),r&&["--simple-modal-width","--simple-modal-height","--simple-modal-min-width","--simple-modal-min-height","--simple-modal-max-width","--simple-modal-max-height","--simple-modal-titlebar-color","--simple-modal-titlebar-background","--simple-modal-header-color","--simple-modal-header-background","--simple-modal-content-container-color","--simple-modal-content-container-background","--simple-modal-buttons-color","--simple-modal-buttons-background","--simple-modal-button-color","--simple-modal-button-background"].forEach(function(e){i.style.setProperty(e,r[e]||"unset")}),a?this.setAttribute("class",a):this.removeAttribute("class"),c)n[c[p]]&&((o=d?n[c[p]].cloneNode(!0):n[c[p]]).setAttribute("slot",c[p]),this.appendChild(o));setTimeout(function(){i.opened=!0,i.shadowRoot.querySelector("#close").focus(),i._resizeContent()},100)}},{key:"animationEnded",value:function(e){var n=this;for(this.title="";null!==this.firstChild;)this.removeChild(this.firstChild);this.invokedBy&&setTimeout(function(){n.invokedBy.focus()},500)}},{key:"close",value:function(){this.shadowRoot.querySelector("#dialog").close()}},{key:"openedChangedEvent",value:function(e){this.opened=e.detail.value}},{key:"_openedChanged",value:function(e){if("undefined"===t(e)||e){if(e){var n=new CustomEvent("simple-modal-opened",{bubbles:!0,cancelable:!0,detail:{opened:!0,invokedBy:this.invokedBy}});this.dispatchEvent(n)}}else{this.animationEnded();var o=new CustomEvent("simple-modal-closed",{bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(o)}}},{key:"_getAriaLabelledby",value:function(e){return e?"simple-modal-title":null}},{key:"_getAriaLabel",value:function(e){return e?null:"Modal Dialog"}},{key:"_ironOverlayClosed",value:function(e){e.preventDefault(),e.stopPropagation()}}]),o}();window.customElements.define(h.tag,h),window.SimpleModal=window.SimpleModal||{},window.SimpleModal.requestAvailability=function(){return window.SimpleModal.instance||(window.SimpleModal.instance=document.createElement("simple-modal"),document.body.appendChild(window.SimpleModal.instance)),window.SimpleModal.instance},e.SimpleModal=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-modal.umd.js.map
