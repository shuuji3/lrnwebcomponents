!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e=e||self).SimpleIcon={},e.litElement_js,e.simpleColors_js)}(this,function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function h(e,t,n){return(h=y()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&p(o,n.prototype),o}).apply(null,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,f(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,e)})(e)}function m(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){var t=y();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function w(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=function(e){a(n,d(HTMLElement));var t=b(n);function n(){var e;return o(this,n),(e=t.call(this)).iconsets={},e.needsHydrated=[],e}return c(n,null,[{key:"tag",get:function(){return"simple-iconset"}}]),c(n,[{key:"registerIconset",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"===r(n)?this.iconsets[e]=u({},n):"string"==typeof n&&(this.iconsets[e]=n),this.needsHydrated.length>0){var o=[];this.needsHydrated.forEach(function(e,n){e.setSrcByIcon(t)&&o.push(n)}),o.reverse().forEach(function(e){t.needsHydrated.splice(e,1)})}}},{key:"getIcon",value:function(e,t){var n=e.replaceAll("/","-").split(":");return 1===n.length&&(n=["icons",e]),2==n.length&&this.iconsets[n[0]]?"string"!=typeof this.iconsets[n[0]]&&this.iconsets[n[0]][n[1]]&&"function"!=typeof this.iconsets[n[0]][n[1]]?this.iconsets[n[0]][n[1]]:"".concat(this.iconsets[n[0]]).concat(n[1],".svg"):(t!=this&&this.needsHydrated.push(t),null)}}]),n}();customElements.define(j.tag,j),window.SimpleIconset=window.SimpleIconset||{},window.SimpleIconset.requestAvailability=function(){return null==window.SimpleIconset.instance&&(window.SimpleIconset.instance=document.createElement("simple-iconset")),document.body.appendChild(window.SimpleIconset.instance),window.SimpleIconset.instance};var S=window.SimpleIconset.requestAvailability();function x(){var e=g(['\n        :host {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          position: relative;\n          vertical-align: middle;\n          height: var(--simple-icon-height, 24px);\n          width: var(--simple-icon-width, 24px);\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        svg {\n          height: var(--simple-icon-height, 24px);\n          width: var(--simple-icon-width, 24px);\n        }\n        image {\n          height: var(--simple-icon-height, 24px);\n          width: var(--simple-icon-width, 24px);\n        }\n        :host([accent-color="white"]) {\n          --simple-colors-default-theme-accent-8: black;\n        }\n        :host([dark][accent-color="white"]) {\n          --simple-colors-default-theme-accent-8: white;\n        }\n        feFlood {\n          flood-color: var(\n            --simple-icon-color,\n            var(--simple-colors-default-theme-accent-8, #000000)\n          );\n        }\n        svg {\n          pointer-events: none;\n        }\n      ']);return x=function(){return e},e}function I(){var e=g(['<feFlood result="COLOR" />']);return I=function(){return e},e}function P(){var e=g(['\n      <svg xmlns="http://www.w3.org/2000/svg">\n        <filter\n          color-interpolation-filters="sRGB"\n          x="0"\n          y="0"\n          height="100%"\n          width="100%"\n        >\n          ','\n          <feComposite operator="in" in="COLOR" in2="SourceAlpha" />\n        </filter>\n        <image\n          xlink:href=""\n          width="100%"\n          height="100%"\n          focusable="false"\n          preserveAspectRatio="xMidYMid meet"\n        ></image>\n      </svg>\n    ']);return P=function(){return e},e}var R=function(e){a(i,n.SimpleColors);var r=b(i);function i(){var e;return o(this,i),(e=r.call(this)).noColorize=!1,e.accentColor="white",e}return c(i,[{key:"render",value:function(){return t.svg(P(),this.noColorize?"":t.svg(I()))}}],[{key:"tag",get:function(){return"simple-icon"}},{key:"styles",get:function(){return[].concat(w(v(f(i),"styles",this)),[t.css(x())])}},{key:"properties",get:function(){return u(u({},v(f(i),"properties",this)),{},{src:{type:String},noColorize:{type:Boolean,attribute:"no-colorize"},icon:{type:String,reflect:!0}})}}]),c(i,[{key:"firstUpdated",value:function(e){v(f(i.prototype),"firstUpdated",this)&&v(f(i.prototype),"firstUpdated",this).call(this,e);var t="f-"+Math.random().toString().slice(2,10);this.shadowRoot.querySelector("image").style.filter="url(#".concat(t,")"),this.shadowRoot.querySelector("filter").setAttribute("id",t)}},{key:"setSrcByIcon",value:function(e){return this.src=S.getIcon(this.icon,e),this.src}},{key:"updated",value:function(e){var t=this;v(f(i.prototype),"updated",this)&&v(f(i.prototype),"updated",this).call(this,e),e.forEach(function(e,n){"icon"==n&&(t[n]?t.setSrcByIcon(t):t.src=null),"src"==n&&t[n]&&t.shadowRoot.querySelector("image").setAttribute("xlink:href","".concat(t[n]))})}}]),i}();customElements.define(R.tag,R),e.SimpleIcon=R,Object.defineProperty(e,"__esModule",{value:!0})});
