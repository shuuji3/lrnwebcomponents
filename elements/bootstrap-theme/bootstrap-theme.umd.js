!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js"),require("lit"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSMobileMenu.js"),require("@lrnwebcomponents/bootstrap-theme/lib/BootstrapUserStylesMenuMixin.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSUserStylesMenu.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSThemeParts.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js"),require("@lrnwebcomponents/map-menu/map-menu.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/bootstrap-theme/lib/BootstrapBreadcrumb.js"),require("@lrnwebcomponents/bootstrap-theme/lib/BootstrapFooter.js"),require("@lrnwebcomponents/bootstrap-theme/lib/BootstrapSearch.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("mobx")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js","lit","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSMobileMenu.js","@lrnwebcomponents/bootstrap-theme/lib/BootstrapUserStylesMenuMixin.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSUserStylesMenu.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSThemeParts.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js","@lrnwebcomponents/map-menu/map-menu.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/bootstrap-theme/lib/BootstrapBreadcrumb.js","@lrnwebcomponents/bootstrap-theme/lib/BootstrapFooter.js","@lrnwebcomponents/bootstrap-theme/lib/BootstrapSearch.js","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","mobx"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).BootstrapTheme={},e.$$0,null,e.lit,e.HAXCMSLitElementTheme_js,e.HAXCMSMobileMenu_js,e.BootstrapUserStylesMenuMixin_js,null,e.HAXCMSThemeParts_js,null,null,null,null,null,null,null,e.haxcmsSiteStore_js,e.mobx)}(this,(function(e,t,n,o,r,s,i,a,l,c,h,p,m,u,d,b,f,g){"use strict";function v(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var y,k,x,w=v(t);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=M(e);if(t){var r=M(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return P(this,n)}}function B(e,t,n){return(B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function C(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function A(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(i,e);var t,n,r,s=q(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=s.call(this)).HAXCMSThemeSettings.autoScroll=!0,e.menuOpen=!0;var t=e.getBasePath(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("bootstrap-theme.umd.js",document.baseURI).href));return e._bootstrapPath=t+"bootstrap/dist/css/bootstrap.min.css",e._themeElements=[],e.colorTheme="0",e.searchTerm="",e.__siteTitle="",e.___pageTitle="",e.__siteImage="",e.__disposer=e.__disposer?e.__disposer:[],g.autorun((function(t){e.activeManifestIndex=g.toJS(f.store.activeManifestIndex),e.__siteTitle=g.toJS(f.store.manifest.title),e.__siteImage=g.toJS(f.store.manifest.metadata.author.image),e.__pageTitle=g.toJS(f.store.activeTitle),e.__disposer.push(t)})),e}return t=i,r=[{key:"tag",get:function(){return"bootstrap-theme"}},{key:"styles",get:function(){return[].concat(A(B(M(i),"styles",this)),[o.css(x||(x=C(['\n        /* var declaration and default styles */\n        :host {\n          --bootstrap-theme-link-color: #007bff;\n          --map-menu-item-a-color: var(--bootstrap-theme-link-color);\n          --bootstrap-theme-light-color: #000000;\n          --bootstrap-theme-light-background-color: #ffffff;\n          --bootstrap-theme-light-secondary-background-color: rgb(\n            242,\n            244,\n            244\n          );\n          --bootstrap-theme-light-secondary-color: rgb(233, 236, 239);\n          --bootstrap-theme-dark-background-color: #212121;\n          --bootstrap-theme-dark-secondary-background-color: #343a40;\n          --bootstrap-theme-dark-color: #ffffff;\n          --bootstrap-theme-palenight-background-color: rgb(13, 18, 41);\n          --bootstrap-theme-palenight-secondary-background-color: rgb(\n            26,\n            31,\n            54\n          );\n          --bootstrap-theme-palenight-color: #ffffff;\n          --site-menu-background-color: var(\n            --bootstrap-theme-light-secondary-background-color\n          );\n          display: block;\n          background-color: var(\n            --bootstrap-theme-light-secondary-background-color\n          );\n          --map-menu-item-height: 24px;\n          --map-menu-button-height: 34px;\n          --map-menu-header-button-min-height: 34px;\n          width: 100%;\n          display: flex;\n          padding: 0;\n          margin: 0;\n          min-height: 100vh;\n          flex-direction: column;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n        }\n        /* hidden styles */\n        :host([hidden]) {\n          display: none;\n        }\n        [hidden] {\n          display: none;\n        }\n        a {\n          color: #007bff;\n        }\n        /* menu styles */\n        :host([menu-open]) .menu-outline {\n          left: 0;\n          padding: 0 24px;\n        }\n\n        /* logged in responsiveness */\n        :host([is-logged-in][menu-open]) .menu-outline {\n          left: 48px;\n        }\n\n        .menu-outline {\n          position: fixed;\n          top: 50px;\n          left: -300px;\n          bottom: 0;\n          z-index: 1;\n          width: 300px;\n          height: 100%;\n          overflow: auto;\n          color: #364149;\n          background-color: var(\n            --bootstrap-theme-light-secondary-background-color\n          );\n          transition: left 250ms ease;\n        }\n\n        #haxcmsmobilemenubutton {\n          padding-left: 0;\n        }\n\n        #haxcmsmobilemenunav {\n          margin-top: 32px;\n        }\n\n        /* site title above menu */\n        .site-title {\n          border-bottom: 1px solid black;\n          background-color: var(\n            --bootstrap-theme-light-secondary-background-color\n          );\n          display: flex;\n          align-items: center;\n          height: 48px;\n          display: sticky;\n        }\n\n        .site-img {\n          display: inline-block;\n          width: 50px;\n          height: 50px;\n          border-radius: 50%;\n        }\n\n        :host([responsive-size="xs"]) .main-content,\n        :host([responsive-size="sm"]) .main-content {\n          overflow-x: hidden;\n        }\n        :host([responsive-size="xs"]) .menu-outline,\n        :host([responsive-size="sm"]) .menu-outline {\n          top: 0;\n        }\n        :host([responsive-size="xs"]) .site-header,\n        :host([responsive-size="sm"]) .site-header {\n          display: none;\n        }\n\n        :host([responsive-size="xs"]) .page-inner {\n          overflow-x: auto;\n        }\n\n        /* main content */\n        .site {\n          background-color: var(\n            --bootstrap-theme-light-secondary-background-color\n          );\n        }\n        .site-body {\n          position: absolute;\n          top: 0;\n          right: 0;\n          left: 0;\n          bottom: 0;\n          min-width: 400px;\n          overflow-y: auto;\n          transition: left 250ms ease;\n        }\n        .site-body .site-inner {\n          position: relative;\n          top: 0;\n          right: 0;\n          left: 0;\n          bottom: 0;\n          overflow-y: auto;\n        }\n        :host([menu-open]) .site-body {\n          left: 300px;\n        }\n        :host([is-logged-in][menu-open]) .site-body {\n          left: 348px;\n        }\n        :host([is-logged-in]) .site-body {\n          left: 48px;\n        }\n        :host([responsive-size="xs"]) .site-body,\n        :host([responsive-size="sm"]) .site-body {\n          overflow-x: hidden;\n          position: fixed;\n        }\n        :host([responsive-size="xs"]) .main-content,\n        :host([responsive-size="sm"]) .main-content {\n          overflow-x: hidden;\n        }\n        :host([responsive-size="xs"]) .site-inner {\n          max-width: 100vw;\n        }\n        :host([responsive-size="xs"]) .page-inner {\n          overflow-x: auto;\n        }\n        .page-wrapper {\n          position: relative;\n          outline: 0;\n        }\n        .main-content > :first-child {\n          margin-top: 0 !important;\n        }\n\n        /* header */\n        .pull-right {\n          float: right;\n        }\n        .btn-container {\n          z-index: 2;\n          height: 50px;\n          padding: 6px;\n        }\n        .navigation {\n          position: fixed;\n          top: 50px;\n          bottom: 0px;\n          margin: 0px 20px;\n          max-width: 150px;\n          min-width: 90px;\n          display: flex;\n          place-content: center;\n          flex-direction: column;\n          font-size: 40px;\n          color: rgb(204, 204, 204);\n          text-align: center;\n          transition: all 0.35s ease 0s;\n        }\n\n        /* header */\n        .site-header {\n          overflow: visible;\n          height: 50px;\n          padding: 0 8px;\n          z-index: 2;\n          font-size: 0.85em;\n          color: #7e888b;\n          background: 0 0;\n        }\n        .page-title {\n          display: inline-flex;\n          margin-left: 12px;\n          overflow: hidden;\n          margin-bottom: 0px;\n          vertical-align: middle;\n          word-break: break-all;\n          max-width: 77%;\n          height: 32px;\n          line-height: 32px;\n          overflow-wrap: break-word;\n          text-overflow: ellipsis;\n        }\n        /* Light Theme */\n        :host([color-theme="0"]) site-search {\n          color: #252737;\n          --site-search-result-background-color: transparent;\n          --site-search-result-background-color-hover: #f5f5f5;\n          --site-search-link-color-hover: #252737;\n          --site-search-link-text-color: #252737;\n          --site-search-link-color: #252737;\n          --site-search-result-color: #252737;\n        }\n\n        /* Dark Theme */\n        :host([color-theme="1"]) {\n          background-color: var(--bootstrap-theme-dark-background-color);\n          --simple-fields-background-color: transparent;\n          --map-menu-item-a-color: var(--bootstrap-theme-dark-color);\n          --haxcms-user-styles-color-theme-color-color: var(\n            --bootstrap-theme-dark-color\n          );\n          --hax-base-styles-a-color: var(--bootstrap-theme-link-color);\n          --haxcms-tooltip-background-color: var(--bootstrap-theme-dark-color);\n          --haxcms-tooltip-color: var(--bootstrap-theme-dark-background-color);\n          --site-menu-background-color: var(\n            --bootstrap-theme-dark-background-color\n          );\n          --simple-icon-color: var(--bootstrap-theme-dark-color);\n        }\n\n        :host([color-theme="1"]) site-search {\n          color: var(--bootstrap-theme-dark-color);\n          --site-search-result-background-color: var(\n            --bootstrap-theme-dark-secondary-background-color\n          );\n          --site-search-result-background-color-hover: var(\n            --bootstrap-theme-dark-secondary-background-color\n          );\n          --site-search-link-color-hover: var(--bootstrap-theme-dark-color);\n          --site-search-link-text-color: var(--bootstrap-theme-dark-color);\n          --site-search-link-color: var(--bootstrap-theme-dark-color);\n          --site-search-result-color: var(--bootstrap-theme-dark-color);\n        }\n\n        :host([color-theme="1"]) .site-title {\n          border-bottom: 1px solid var(--bootstrap-theme-dark-color);\n          background-color: var(--bootstrap-theme-dark-background-color);\n        }\n\n        :host([color-theme="1"]) .site {\n          background-color: var(--bootstrap-theme-dark-background-color);\n        }\n\n        :host([color-theme="1"]) .menu-outline {\n          background-color: var(--bootstrap-theme-dark-background-color);\n        }\n\n        :host([color-theme="1"]) .site-title {\n          color: #fff;\n        }\n\n        :host([color-theme="1"]) .page-title {\n          color: #fff;\n        }\n\n        :host([color-theme="1"]) .main-section {\n          color: var(--bootstrap-theme-dark-color);\n        }\n\n        :host([color-theme="1"]) #site-search-input {\n          background-color: var(\n            --bootstrap-theme-dark-secondary-background-color\n          );\n        }\n\n        :host([color-theme="1"]) .card {\n          background-color: var(\n            --bootstrap-theme-dark-secondary-background-color\n          );\n        }\n        :host([color-theme="1"]) .card h1 h2 h3 h4 h5 h6 p {\n          color: #fff;\n        }\n        :host([color-theme="1"]) .site-header .btn {\n          color: white;\n        }\n        :host([color-theme="1"]) .site-header .btn:hover,\n        :host([color-theme="1"]) .site-header .btn:focus,\n        :host([color-theme="1"]) .site-header .btn:active {\n          color: #fffff5;\n          background: none;\n        }\n\n        :host([color-theme="1"]) .site-header site-active-title {\n          color: #fff;\n        }\n\n        /* Palenight Theme */\n        :host([color-theme="2"]) {\n          background-color: var(--bootstrap-theme-palenight-background-color);\n          --simple-fields-background-color: transparent;\n          --map-menu-item-a-color: var(--bootstrap-theme-palenight-color);\n          --haxcms-user-styles-color-theme-color-color: var(\n            --bootstrap-theme-palenight-color\n          );\n          --hax-base-styles-a-color: var(--bootstrap-theme-link-color);\n          --haxcms-tooltip-background-color: var(\n            --bootstrap-theme-palenight-color\n          );\n          --haxcms-tooltip-color: var(\n            --bootstrap-theme-palenight-background-color\n          );\n          --site-menu-background-color: var(\n            --bootstrap-theme-palenight-background-color\n          );\n          --simple-icon-color: var(--bootstrap-theme-palenight-color);\n        }\n\n        :host([color-theme="2"]) site-search {\n          color: var(--bootstrap-theme-palenight-color);\n          --site-search-result-background-color: var(\n            --bootstrap-theme-palenight-secondary-background-color\n          );\n          --site-search-result-background-color-hover: var(\n            --bootstrap-theme-palenight-secondary-background-color\n          );\n          --site-search-link-color-hover: var(\n            --bootstrap-theme-palenight-color\n          );\n          --site-search-link-text-color: var(--bootstrap-theme-palenight-color);\n          --site-search-link-color: var(--bootstrap-theme-palenight-color);\n          --site-search-result-color: var(--bootstrap-theme-palenight-color);\n        }\n\n        :host([color-theme="2"]) .site-title {\n          border-bottom: 1px solid var(--bootstrap-theme-palenight-color);\n          background-color: var(--bootstrap-theme-palenight-background-color);\n          color: var(--bootstrap-theme-palenight-color);\n        }\n\n        :host([color-theme="2"]) .site {\n          background-color: var(--bootstrap-theme-palenight-background-color);\n        }\n\n        :host([color-theme="2"]) .menu-outline {\n          background-color: var(--bootstrap-theme-palenight-background-color);\n        }\n\n        :host([color-theme="2"]) .page-title {\n          color: var(--bootstrap-theme-palenight-color);\n        }\n\n        :host([color-theme="2"]) .main-section {\n          color: var(--bootstrap-theme-palenight-color);\n        }\n\n        :host([color-theme="2"]) #site-search-input {\n          background-color: var(\n            --bootstrap-theme-palenight-secondary-background-color\n          );\n        }\n\n        :host([color-theme="2"]) .card {\n          background-color: var(\n            --bootstrap-theme-palenight-secondary-background-color\n          );\n        }\n        :host([color-theme="2"]) .card h1 h2 h3 h4 h5 h6 p {\n          color: var(--bootstrap-theme-palenight-color);\n        }\n        :host([color-theme="2"]) .site-header .btn {\n          color: var(--bootstrap-theme-palenight-color);\n        }\n        :host([color-theme="2"]) .site-header .btn:hover,\n        :host([color-theme="2"]) .site-header .btn:focus,\n        :host([color-theme="2"]) .site-header .btn:active {\n          color: var(--bootstrap-theme-palenight-color);\n          background: none;\n        }\n\n        :host([color-theme="2"]) .site-header site-active-title {\n          color: #fff;\n        }\n      '])))])}},{key:"properties",get:function(){return _(_({},B(M(i),"properties",this)),{},{searchTerm:{type:String},menuOpen:{type:Boolean,attribute:"menu-open",reflect:!0},colorTheme:{type:String,attribute:"color-theme",reflect:!0}})}}],(n=[{key:"render",value:function(){return o.html(y||(y=C(['\n      <link rel="stylesheet" href="','" />\n      <div class="site ">\n        <div class="menu-outline">\n          <div class="site-title">\n            ',"\n            <h4>","</h4>\n          </div>\n          ",'\n        </div>\n        <div id="body" class="site-body">\n          <div id="top"></div>\n          <div class="site-inner">\n            <header\n              class="site-header"\n              role="navigation"\n              .part="','"\n            >\n              <div class="btn-container">\n                <div class="pull-right link-actions">\n                  <bootstrap-search\n                    part="search-btn"\n                    color-theme="','"\n                    @search-changed=','\n                  ></bootstrap-search>\n                </div>\n              </div>\n            </header>\n            <main class="page-wrapper" role="main">\n              <bootstrap-breadcrumb color-theme="','">\n              </bootstrap-breadcrumb>\n              <div class="container p-0 site-options">\n                ','\n                <site-print-button\n                  part="print-btn"\n                  class="btn js-toolbar-action"\n                ></site-print-button>\n                ','\n                <h3 class="display-6 page-title">','</h3>\n              </div>\n              <article class="shadow main-content container card mb-3">\n                <div class="normal main-section">\n                  <section class="p-2">\n                    <site-search\n                      hide-input\n                      search="','"\n                      ?hidden="','"\n                      @search-item-selected=','\n                    ></site-search>\n                  </section>\n                  <section\n                    class="p-2"\n                    id="contentcontainer"\n                    ?hidden="','"\n                  >\n                    <div id="slot">\n                      <slot id="main-content"></slot>\n                    </div>\n                  </section>\n                </div>\n              </article>\n            </main>\n            <footer>\n              <bootstrap-footer color-theme="','" part="footer">\n              </bootstrap-footer>\n            </footer>\n          </div>\n        </div>\n      </div>\n    '])),this._bootstrapPath,this.__siteImage?o.html(k||(k=C(['<img class="site-img" src='," />"])),this.__siteImage):"",this.__siteTitle,this.HAXCMSMobileMenu(),this.editMode?"edit-mode-active":"",this.colorTheme,this.searchChanged,this.colorTheme,this.HAXCMSMobileMenuButton(),this.BootstrapUserStylesMenu(),this.__pageTitle,this.searchTerm,""==this.searchTerm,this.searchItemSelected,""!=this.searchTerm,this.colorTheme)}},{key:"searchChanged",value:function(e){var t=this;e.detail.searchText?Promise.resolve(w).then((function(){t.searchTerm=e.detail.searchText})):this.searchTerm=""}},{key:"searchItemSelected",value:function(e){this.searchTerm=""}},{key:"_generateBootstrapLink",value:function(){this._bootstrapLink&&document.head.removeChild(this._bootstrapLink);var e=this.getBasePath(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("bootstrap-theme.umd.js",document.baseURI).href));console.log(e);var t=document.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e+"bootstrap/dist/css/bootstrap.min.css"),document.head.appendChild(t),t}},{key:"disconnectedCallback",value:function(){this._bootstrapLink&&document.head.removeChild(this._bootstrapLink),B(M(i.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(e){B(M(i.prototype),"firstUpdated",this)&&B(M(i.prototype),"firstUpdated",this).call(this,e),this._loadScripts(),this._bootstrapLink=this._generateBootstrapLink()}},{key:"_loadScripts",value:function(){var e=this.getBasePath(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("bootstrap-theme.umd.js",document.baseURI).href));window.ESGlobalBridge.requestAvailability().load("jquery",e+"jquery/dist/jquery.min.js"),window.addEventListener("es-bridge-jquery-loaded",this._jqueryLoaded.bind(this))}},{key:"_bootstrapLoaded",value:function(e){this._bootstrap=!0}},{key:"_loadBootstrap",value:function(){var e=this.getBasePath(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("bootstrap-theme.umd.js",document.baseURI).href));window.ESGlobalBridge.requestAvailability().load("bootstrap",e+"bootstrap/dist/js/bootstrap.bundle.min.js"),window.addEventListener("es-bridge-bootstrap-loaded",this._bootstrapLoaded.bind(this))}},{key:"_jqueryLoaded",value:function(e){this._jquery=!0,this._loadBootstrap()}},{key:"getBasePath",value:function(e){return e.substring(0,e.lastIndexOf("/@lrnwebcomponents/")+1)}},{key:"updated",value:function(e){B(M(i.prototype),"updated",this)&&B(M(i.prototype),"updated",this).call(this,e),e.forEach((function(e,t){}))}}])&&S(t.prototype,n),r&&S(t,r),i}(l.HAXCMSThemeParts(i.BootstrapUserStylesMenuMixin(s.HAXCMSMobileMenuMixin(r.HAXCMSLitElementTheme))));customElements.define(L.tag,L),e.BootstrapTheme=L,Object.defineProperty(e,"__esModule",{value:!0})}));
