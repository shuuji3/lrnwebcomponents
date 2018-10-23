define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.HaxBehaviors = void 0;
  function _templateObject_61b81830d6f011e8b07af9d166afe1a8() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_61b81830d6f011e8b07af9d166afe1a8 = function() {
      return data;
    };
    return data;
  }
  var HaxBehaviors = (function(_PolymerElement) {
    babelHelpers.inherits(HaxBehaviors, _PolymerElement);
    function HaxBehaviors() {
      babelHelpers.classCallCheck(this, HaxBehaviors);
      return babelHelpers.possibleConstructorReturn(
        this,
        (HaxBehaviors.__proto__ || Object.getPrototypeOf(HaxBehaviors)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      HaxBehaviors,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                HaxBehaviors.prototype.__proto__ ||
                  Object.getPrototypeOf(HaxBehaviors.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              HaxBehaviors.haxProperties,
              HaxBehaviors.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_61b81830d6f011e8b07af9d166afe1a8()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Hax behaviors",
                description: "Automated conversion of hax-behaviors/",
                icon: "icons:android",
                color: "green",
                groups: ["Behaviors"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "hax-behaviors";
          }
        }
      ]
    );
    return HaxBehaviors;
  })(_polymerElement.PolymerElement);
  _exports.HaxBehaviors = HaxBehaviors;
  window.customElements.define(HaxBehaviors.tag, HaxBehaviors);
});
