import { css, html } from "lit";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";

const QRCodeMixin = function (SuperClass) {
  return class extends SuperClass {
    constructor() {
      super();
      this.showQRCode = false;
      if (!this.t) {
        this.t = {};
      }
      if (this.t) {
        this.t = {
          ...this.t,
          currentPage: "Current page",
        };
      }
    }
    /**
     * life cycle, element is afixed to the DOM
     */
    firstUpdated(changedProperties) {
      if (super.firstUpdated) {
        super.firstUpdated(changedProperties);
      }
      this.qrcodebtn = this.shadowRoot.querySelector("#qrcodebtn");
      // hook up the pop over menu
      this.shadowRoot.querySelector("#qrcodepopover").target = this.qrcodebtn;
    }

    static get styles() {
      let styles = [];
      if (super.styles) {
        styles = super.styles;
      }
      return [
        ...styles,
        css`
          simple-popover:not(:defined) {
            display: none;
          }
          simple-popover {
            padding: 2px;
          }
          .qr-code-btn {
            --simple-icon-height: 24px;
            --simple-icon-width: 24px;
          }
        `,
      ];
    }

    QRCodeButton() {
      import("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js");
      import("@lrnwebcomponents/simple-popover/simple-popover.js");
      import("@lrnwebcomponents/simple-tooltip/simple-tooltip.js");
      return html`
        <simple-icon-button-lite
          .part="qr-code-btn ${this.editMode ? `edit-mode-active` : ``}"
          class="qr-code-btn"
          aria-label="${this.t.currentPage}"
          icon="hax:qr-code"
          @click="${this.QRCodeButtonToggle}"
          id="qrcodebtn"
        ></simple-icon-button-lite>
        <simple-tooltip for="qrcodebtn"> ${this.t.currentPage} </simple-tooltip>
        <simple-popover
          ?hidden="${!this.showQRCode}"
          id="qrcodepopover"
          position="right"
          auto
        >
          ${this.showQRCode
            ? html`<q-r
                modulesize="5"
                margin="2"
                title="${store.activeTitle}"
                data="${window.location.href}"
              ></q-r>`
            : ``}
        </simple-popover>
      `;
    }
    QRCodeButtonToggle(e) {
      this.showQRCode = !this.showQRCode;
    }
    static get properties() {
      let props = {};
      if (super.properties) {
        props = super.properties;
      }
      return {
        ...props,
        showQRCode: {
          type: Boolean,
        },
      };
    }
  };
};

export { QRCodeMixin };
