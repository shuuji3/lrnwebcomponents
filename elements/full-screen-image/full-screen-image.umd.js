!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@polymer/iron-icons/hardware-icons.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@polymer/paper-icon-button/paper-icon-button.js","@polymer/iron-icons/hardware-icons.js"],n):n((e=e||self).FullScreenImage={},e.polymerElement_js,e.HAXWiring_js)}(this,function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,n){return(r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e,n,t){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=i(e)););return e}(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function c(){var e,n,t=(e=['\n<style>:host {\n  display: block;\n  font-variant-ligatures: common-ligatures;\n}\n:host([hidden]) {\n  display: none;\n}\nh2 {\n  font-size: 4em;\n  font-weight: 200;\n  margin: 0px !important;\n  line-height: 1em;\n  text-transform: lowercase;\n  color: white;\n  letter-spacing: -0.04em;\n  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;\n}\np {\n  font-weight: 400;\n  color: white;\n  line-height: 1.0em;\n  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  letter-spacing: 0.01em;\n  margin-top: 0;\n  margin-bottom: 1em;\n}\nimg {\n  position: absolute;\n  margin: 0px;\n  padding: 0px;\n  border: none;\n  width: 1239px;\n  height: 774.375px;\n  max-width: none;\n  z-index: -999999;\n  left: 0px;\n  top: -57.1875px;\n}\npaper-icon-button {\n  width: 75px;\n  height: 45px;\n  line-height: 45px;\n  bottom: 1px;\n  right: 0px;\n  display: block;\n  position: absolute;\n  text-align: center;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.fullpage-container {\n  display: block;\n}\n.image-wrapper {\n  left: 0px;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  overflow: hidden;\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  z-index: -999998;\n  position: absolute;\n}\n.overlay-container {\n  display: block;\n  position: absolute;\n  text-align: right;\n  padding: 0.1em 1.5em 0.1em 6.0em;\n  bottom: 60px;\n  right: 0px;\n  background-color: rgba(191, 147, 45, 0.7)\n}</style>\n<div class="fullpage-container">\n  <div class="overlay-container">\n    <h2>[[title]]</h2>\n    <p>[[subtitle]]</p>\n  </div>\n  <paper-icon-button id="down" icon="hardware:keyboard-arrow-down"></paper-icon-button>\n  <div class="image-wrapper">\n    <img id="img" src="[[source]]" />\n  </div>\n</div>'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return c=function(){return t},t}var s=function(e){function s(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),a(this,i(s).apply(this,arguments))}var p,u,d;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}(s,n.PolymerElement),p=s,d=[{key:"template",get:function(){return n.html(c())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Full screen-image",description:"full screen banner image with down arrow",icon:"icons:android",color:"green",groups:["Screen"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"}],configure:[{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"subtitle",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"}],advanced:[]}}}},{key:"properties",get:function(){return{title:{name:"title",type:"String",value:"",reflectToAttribute:!1,observer:!1},subtitle:{name:"subtitle",type:"String",value:"",reflectToAttribute:!1,observer:!1},source:{name:"source",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}},{key:"tag",get:function(){return"full-screen-image"}}],(u=[{key:"connectedCallback",value:function(){var e=this;l(i(s.prototype),"connectedCallback",this).call(this),this.HAXWiring=new t.HAXWiring,this.HAXWiring.setup(s.haxProperties,s.tag,this),this.$.down.addEventListener("click",function(n){e.nextElementSibling.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})})}},{key:"disconnectedCallback",value:function(){var e=this;l(i(s.prototype),"disconnectedCallback",this).call(this),this.$.down.removeEventListener("click",function(n){e.nextElementSibling.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})})}}])&&o(p.prototype,u),d&&o(p,d),s}();window.customElements.define(s.tag,s),e.FullScreenImage=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=full-screen-image.umd.js.map
