define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/iron-icons/editor-icons.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js","./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js"],function(_exports,_polymerLegacy,_simpleColors,_HAXWiring,_schemaBehaviors,_paperCard,_paperIconButton,_editorIcons,_ironIcons,_paperTooltip,_a11yBehaviors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SelfCheck=void 0;function _templateObject_3e72c83034dc11e99e82d9dd25228083(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style is=\"custom-style\" include=\"simple-colors\">\n      :host {\n        display: block;\n        margin: 15px 0;\n        --self-check-question-color: var(\n          --simple-colors-default-theme-grey-1,\n          #fff\n        );\n        --self-check-question-text: var(\n          --simple-colors-default-theme-grey-12,\n          #000\n        );\n        --self-check-heading-color: var(\n          --simple-colors-default-theme-accent-8,\n          #444\n        );\n        --self-check-heading-text: var(\n          --simple-colors-default-theme-grey-1,\n          #fff\n        );\n        --self-check-answer-color: var(\n          --simple-colors-default-theme-light-green-8,\n          #00762e\n        );\n        --self-check-answer-text: var(\n          --simple-colors-default-theme-grey-1,\n          #fff\n        );\n      }\n      [hidden] {\n        display: none !important;\n      }\n\n      paper-card {\n        width: 100%;\n        color: var(--self-check-question-text);\n        background-color: var(--self-check-question-color);\n        overflow: hidden;\n      }\n\n      paper-icon-button#checkbtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -10px;\n      }\n\n      .check_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      paper-icon-button#closeBtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -16px;\n      }\n\n      .close_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      iron-icon#questionmark {\n        width: 35px;\n        height: 35px;\n        padding: 5px;\n        color: #ffffff;\n      }\n\n      .heading {\n        text-transform: uppercase;\n        font-size: 22px;\n        margin: 10px;\n        color: #ffffff;\n      }\n\n      #header_wrap {\n        color: var(--self-check-heading-text);\n        background-color: var(--self-check-heading-color);\n        display: inline-flex;\n        width: 100%;\n        margin: -20px 0 0;\n      }\n\n      #question_wrap {\n        color: var(--self-check-question-text);\n        background-color: var(--self-check-question-color);\n        position: relative;\n      }\n\n      .question {\n        font-size: 16px;\n        padding: 15px 15px;\n      }\n\n      :host([correct]) .question {\n        display: none;\n      }\n\n      #answer_wrap {\n        visibility: hidden;\n        opacity: 0;\n        color: var(--self-check-answer-text);\n        background-color: var(--self-check-answer-color);\n        border-top: 2px solid var(--self-check-answer-text);\n        width: 100%;\n        top: 0;\n        transition: all 0.2s ease;\n        left: calc(100%);\n        position: absolute;\n      }\n\n      :host([correct]) #answer_wrap {\n        visibility: visible;\n        opacity: 1;\n        position: relative;\n        left: 0;\n      }\n\n      .answer {\n        font-size: 16px;\n        padding: 15px;\n        line-height: 19.2px;\n      }\n\n      #quote_start {\n        display: inline-flex;\n        transform: rotateY(180deg);\n      }\n\n      #quote_end {\n        display: inline-flex;\n      }\n\n      .triangle {\n        width: 0;\n        height: 0;\n        border-left: 20px solid transparent;\n        border-right: 20px solid transparent;\n        border-bottom: 20px solid var(--self-check-heading-color);\n        position: relative;\n        top: -20px;\n        left: -1px;\n      }\n\n      .more_info {\n        display: inline;\n      }\n\n      .more_info a {\n        color: var(--self-check-answer-text);\n      }\n\n      .more_info a:hover {\n        text-decoration: none;\n      }\n    </style>\n\n    <paper-card image$=\"[[image]]\" alt$=\"[[alt]]\">\n      <div class=\"triangle\"></div>\n      <div id=\"header_wrap\">\n        <iron-icon id=\"questionmark\" icon=\"icons:help\"></iron-icon>\n        <div class=\"heading\">[[title]]</div>\n      </div>\n      <div id=\"question_wrap\">\n        <div class=\"question\" aria-hidden$=\"[[correct]]\">\n          <slot name=\"question\"></slot>\n          <div class=\"check_button\">\n            <paper-icon-button\n              controls=\"answer_wrap\"\n              aria-label=\"Reveal Answer\"\n              id=\"checkBtn\"\n              icon=\"icons:check-circle\"\n              on-click=\"openAnswer\"\n              noink\n            >\n            </paper-icon-button>\n            <paper-tooltip aria-hidden=\"true\" for=\"checkBtn\" position=\"left\">\n              Reveal Answer\n            </paper-tooltip>\n          </div>\n        </div>\n\n        <div id=\"answer_wrap\" aria-hidden$=\"[[!correct]]\" aria-live=\"polite\">\n          <div class=\"answer\">\n            <slot></slot>\n            <div class=\"more_info\" hidden$=\"[[!link]]\">\n              <a href$=\"[[link]]\" target=\"_blank\">More info...</a>\n            </div>\n            <div class=\"close_button\">\n              <paper-icon-button\n                aria-label=\"Close\"\n                id=\"closeBtn\"\n                icon=\"icons:close\"\n                on-click=\"openAnswer\"\n                noink\n              >\n              </paper-icon-button>\n              <paper-tooltip aria-hidden=\"true\" for=\"closeBtn\" position=\"left\">\n                Close\n              </paper-tooltip>\n            </div>\n          </div>\n        </div>\n      </div>\n    </paper-card>\n  "]);_templateObject_3e72c83034dc11e99e82d9dd25228083=function _templateObject_3e72c83034dc11e99e82d9dd25228083(){return data};return data}var SelfCheck=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_3e72c83034dc11e99e82d9dd25228083()),is:"self-check",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema,A11yBehaviors.A11y,_simpleColors.SimpleColors],properties:{title:{type:String,value:"Self-Check"},question:{type:String,value:""},image:{type:String,value:"",reflectToAttribute:!0},alt:{type:String,value:"",reflectToAttribute:!0},link:{type:String,reflectToAttribute:!0},correct:{type:Boolean,value:!1,reflectToAttribute:!0}},openAnswer:function openAnswer(e){this.correct=!this.correct},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Self-Check",description:"The user will be able to complete a self-check.",icon:"icons:check-circle",color:"orange",groups:["Image","Assessment"],handles:[{type:"image",source:"image",title:"question",description:"answer"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the element",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"link",title:"More link",description:"Link to additional information",inputMethod:"textfield",validationType:"url",icon:"icons:link"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield"},{property:"accentColor",title:"Accent Color",description:"The accent color of the self-check",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark Theme",description:"Enable Dark Theme",inputMethod:"boolean",icon:"icons:invert-colors"},{property:"image",title:"Image",description:"The image of the element",inputMethod:"textfield",validationType:"url"},{property:"link",title:"More link",description:"Link to additional information",inputMethod:"textfield",validationType:"url"},{property:"alt",title:"Alt Text",description:"Add alt text to the image",inputMethod:"alt"},{slot:"question",title:"Question to ask",description:"This is where you enter a question for the self-check.",inputMethod:"code-editor",required:!0},{slot:"",title:"Answer",description:"This is where you enter a question for the self-check.",inputMethod:"code-editor",required:!0}],advanced:[]}};this.setHaxProperties(props)}});_exports.SelfCheck=SelfCheck});