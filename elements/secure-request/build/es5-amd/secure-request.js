define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.SecureRequest = void 0;
  function _templateObject_99f03f20d70411e8a905cb5f0fe2ea4f() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_99f03f20d70411e8a905cb5f0fe2ea4f = function() {
      return data;
    };
    return data;
  }
  var SecureRequest = (function(_PolymerElement) {
    babelHelpers.inherits(SecureRequest, _PolymerElement);
    function SecureRequest() {
      babelHelpers.classCallCheck(this, SecureRequest);
      return babelHelpers.possibleConstructorReturn(
        this,
        (SecureRequest.__proto__ || Object.getPrototypeOf(SecureRequest)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      SecureRequest,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                SecureRequest.prototype.__proto__ ||
                  Object.getPrototypeOf(SecureRequest.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              SecureRequest.haxProperties,
              SecureRequest.tag,
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
              _templateObject_99f03f20d70411e8a905cb5f0fe2ea4f()
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
                title: "Secure request",
                description: "Automated conversion of secure-request/",
                icon: "icons:android",
                color: "green",
                groups: ["Request"],
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
            return "secure-request";
          }
        }
      ]
    );
    return SecureRequest;
  })(_polymerElement.PolymerElement);
  _exports.SecureRequest = SecureRequest;
  window.customElements.define(SecureRequest.tag, SecureRequest);
});
