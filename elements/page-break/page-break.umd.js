!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/i18n-manager/lib/I18NMixin.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-iconset.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/i18n-manager/lib/I18NMixin.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-iconset.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).PageBreak={},e.lit,e.schemaBehaviors_js,e.I18NMixin_js,null,null,e.simpleIconset_js)}(this,(function(e,t,n,r,a,i,o){"use strict";function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function m(e,t,n){return(m=g()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&f(a,n.prototype),a}).apply(null,arguments)}function v(e){var t="function"==typeof Map?new Map:void 0;return(v=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return m(e,arguments,d(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){var t=g();return function(){var n,r=d(e);if(t){var a=d(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function E(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=function(e){b(n,e);var t=w(n);function n(){var e;return s(this,n),(e=t.call(this)).breaks=[],e}return p(n,[{key:"elementsBetween",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page-break",n=arguments.length>2?arguments[2]:void 0,r=[];for(e=e.nextElementSibling;e&&!e.matches(t);)!n||e.matches(n)?(r.push(e),e=e.nextElementSibling):e=e.nextElementSibling;return r}},{key:"betweenElementsQuery",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",n=[];switch(t){case"headings":this.breaks.forEach((function(t){n=[].concat(E(n),E(e.elementsBetween(t,"page-break","h1,h2,h3,h4,h5,h6")))}));break;case"noheadings":this.breaks.forEach((function(t){n=[].concat(E(n),E(e.elementsBetween(t,"page-break",":not(h1,h2,h3,h4,h5,h6)")))}));break;case"titles":this.breaks.forEach((function(t){n=[].concat(E(n),E(e.elementsBetween(t,"page-break","[data-page-break-title]")))}));break;case"notitles":this.breaks.forEach((function(t){n=[].concat(E(n),E(e.elementsBetween(t,"page-break",":not([data-page-break-title])")))}));break;case"all":this.breaks.forEach((function(t){n=[].concat(E(n),E(e.elementsBetween(t)))}))}return n}},{key:"connectedCallback",value:function(){window.addEventListener("page-break-registration",this.registerPageBreak.bind(this))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("page-break-registration",this.registerPageBreak.bind(this))}},{key:"registerPageBreak",value:function(e){var t=this;"add"===e.detail.action?this.breaks.find((function(t){return t===e.detail.value}))||this.breaks.push(e.detail.value):this.breaks.map((function(n,r){n===e.detail.value&&t.breaks.splice(r,1)})),this.breaks.forEach((function(e){t.elementsBetween(e,"page-break","h1,h2,h3,h4,h5,h6").forEach((function(t){var n=(t.getAttribute("data-original-level")?new Number(t.getAttribute("data-original-level").replace("H","")):new Number(t.tagName.replace("H","")))+e.depth;n=n>6?6:n;var r=document.createElement("h".concat(n));r.setAttribute("data-original-level",t.tagName);for(var a=0,i=t.attributes.length;a<i;++a)r.setAttribute(t.attributes.item(a).nodeName,t.attributes.item(a).nodeValue);r.innerHTML=t.innerHTML,t.parentNode.replaceChild(r,t),e.target=r}))}))}}]),n}(v(HTMLElement));window.PageBreakManager=window.PageBreakManager||{},window.PageBreakManager.requestAvailability=function(){return window.PageBreakManager.instance||(window.PageBreakManager.instance=document.createElement("page-break-manager"),document.body.appendChild(window.PageBreakManager.instance)),window.PageBreakManager.instance},window.customElements.define("page-break-manager",j);var O,S=window.PageBreakManager.requestAvailability(),P=o.SimpleIconsetStore.getIcon("editor:format-page-break"),B=function(e){b(r,e);var n=w(r);function r(){var e;return s(this,r),(e=n.call(this)).t={newPage:"New page"},e.title=e.t.newPage,e.path="#",e.published=!0,e.lock=!1,e.depth=0,e.uuid=null,e._haxState=!1,e}return p(r,[{key:"connectedCallback",value:function(){var e=this;k(d(r.prototype),"connectedCallback",this).call(this),this.nextElementSibling&&this.nextElementSibling.tagName&&["H1","H2","H3","H4","H5","H6"].includes(this.nextElementSibling.tagName)?(this.title=this.nextElementSibling.innerText,this.target=this.nextElementSibling):setTimeout((function(){e.nextElementSibling&&e.nextElementSibling.tagName&&["H1","H2","H3","H4","H5","H6"].includes(e.nextElementSibling.tagName)?(e.title=e.nextElementSibling.innerText,e.target=e.nextElementSibling):(e.target=document.createElement("h2"),e.target.innerText=e.title,e.target.setAttribute("data-hax-lock","data-hax-lock"),e.parentNode.insertBefore(e.target,e.nextElementSibling))}),100),this.observer=new MutationObserver((function(){e.title!=e.target.innerText&&(e.__moUpdate=!0,e.title=e.target.innerText)})),this.setupTargetData(this.target),window.dispatchEvent(new CustomEvent("page-break-registration",{composed:!0,bubbles:!0,cancelable:!0,detail:{value:this,action:"add"}})),window.dispatchEvent(new CustomEvent("page-break-change",{composed:!0,bubbles:!0,cancelable:!0,detail:{value:this}}))}},{key:"disconnectedCallback",value:function(){window.dispatchEvent(new CustomEvent("page-break-registration",{detail:{value:this,action:"remove"}})),window.dispatchEvent(new CustomEvent("page-break-change",{composed:!0,bubbles:!0,cancelable:!0,detail:{value:this}})),this.observer.disconnect(),k(d(r.prototype),"disconnectedCallback",this).call(this)}},{key:"setupTargetData",value:function(e){this.target&&this.observer.disconnect(),this.target=e,this.target.setAttribute("data-page-break-title","data-page-break-title"),this.observer.observe(this.target,{characterData:!0,childList:!0,subtree:!0})}},{key:"updated",value:function(e){var t=this;k(d(r.prototype),"updated",this)&&k(d(r.prototype),"updated",this).call(this,e),e.forEach((function(e,n){t.target&&("title"===n&&t[n]&&(t.__moUpdate?t.__moUpdate=!1:t.title!=t.target.innerText&&(t.target.innerText=t.title)),["title","parent","path"].includes(n)&&window.dispatchEvent(new CustomEvent("page-break-change",{composed:!0,bubbles:!0,cancelable:!0,detail:{value:t}})),t.lock&&"lock"===n?S.elementsBetween(t).forEach((function(e){e.setAttribute("data-hax-lock","data-hax-lock")})):!t.lock&&"lock"===n&&e&&S.elementsBetween(t).forEach((function(e){e.removeAttribute("data-hax-lock")})),!t._haxState&&"depth"===n&&t.depth>=0&&S.elementsBetween(t,"page-break","h1,h2,h3,h4,h5,h6").forEach((function(e){var n=(e.getAttribute("data-original-level")?new Number(e.getAttribute("data-original-level").replace("H","")):new Number(e.tagName.replace("H","")))+t.depth;n=n>6?6:n;var r=document.createElement("h".concat(n));r.setAttribute("data-original-level",e.tagName);for(var a=0,i=e.attributes.length;a<i;++a)r.setAttribute(e.attributes.item(a).nodeName,e.attributes.item(a).nodeValue);r.innerHTML=e.innerHTML,e.parentNode.replaceChild(r,e),t.setupTargetData(r)})),"_haxState"===n&&void 0!==e&&(t._haxState?S.elementsBetween(t,"page-break","h1,h2,h3,h4,h5,h6").forEach((function(e){if(e.getAttribute("data-original-level")){for(var n=new Number(e.getAttribute("data-original-level").replace("H","")),r=document.createElement("h".concat(n)),a=0,i=e.attributes.length;a<i;++a)r.setAttribute(e.attributes.item(a).nodeName,e.attributes.item(a).nodeValue);r.innerHTML=e.innerHTML,e.parentNode.replaceChild(r,e),t.setupTargetData(r)}})):S.elementsBetween(t,"page-break","h1,h2,h3,h4,h5,h6").forEach((function(e){var n=(e.getAttribute("data-original-level")?new Number(e.getAttribute("data-original-level").replace("H","")):new Number(e.tagName.replace("H","")))+t.depth;n=n>6?6:n;var r=document.createElement("h".concat(n));r.setAttribute("data-original-level",e.tagName);for(var a=0,i=e.attributes.length;a<i;++a)r.setAttribute(e.attributes.item(a).nodeName,e.attributes.item(a).nodeValue);r.innerHTML=e.innerHTML,e.parentNode.replaceChild(r,e),t.setupTargetData(r)}))))}))}},{key:"firstUpdated",value:function(e){k(d(r.prototype),"firstUpdated",this)&&k(d(r.prototype),"firstUpdated",this).call(this,e),this.style.backgroundImage='url("'.concat(P,'")');var t=document.createElement("hr");t.classList.add("mid"),this.shadowRoot.appendChild(t)}},{key:"haxHooks",value:function(){return{editModeChanged:"haxeditModeChanged"}}},{key:"haxeditModeChanged",value:function(e){this._haxState=e}}],[{key:"tag",get:function(){return"page-break"}},{key:"properties",get:function(){return c(c({},k(d(r),"properties",this)),{},{title:{type:String,reflect:!0},path:{type:String},parent:{type:String,reflect:!0},published:{type:Boolean,reflect:!0},lock:{type:Boolean,reflect:!0},depth:{type:Number,reflect:!0},uuid:{type:String,reflect:!0},_haxState:{type:Boolean}})}},{key:"styles",get:function(){return[t.css(O||(e=['\n        :host {\n          display: none;\n        }\n        :host([data-hax-layout]),\n        :host([data-hax-ray]) {\n          display: block;\n          margin: 20px 0;\n          padding: 20px;\n          opacity: 0.2;\n          background-position: center;\n          background-repeat: no-repeat;\n          transition: all 0.2s linear;\n        }\n        .mid {\n          border: none;\n          border-top: 2px solid #cccccc;\n          overflow: visible;\n          margin: 4px 0 0 0;\n          padding: 0;\n          height: 0;\n        }\n        :host(:hover) {\n          opacity: 1;\n        }\n        :host(:hover) .mid::before {\n          font-weight: bold;\n          content: "Page break";\n          color: #000000;\n          background-color: #ffffff;\n          font-size: 16px;\n          left: calc(50% - 2.5em);\n          top: -16px;\n          position: relative;\n          height: 0;\n          line-height: 36px;\n        }\n      '],n||(n=e.slice(0)),O=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))))];var e,n}},{key:"haxProperties",get:function(){return new URL("./lib/page-break.haxProperties.json","undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("page-break.umd.js",document.baseURI).href).href}}]),r}(r.I18NMixin(n.SchemaBehaviors(t.LitElement)));customElements.define(B.tag,B),e.PageBreak=B,Object.defineProperty(e,"__esModule",{value:!0})}));