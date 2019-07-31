/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import{HAXWiring}from"./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";import"./node_modules/@lrnwebcomponents/responsive-utility/responsive-utility.js";import"./node_modules/@polymer/paper-button/paper-button.js";import"./node_modules/@polymer/iron-icons/iron-icons.js";import"./node_modules/@polymer/paper-tooltip/paper-tooltip.js";import"./lib/a11y-tab.js";/**
 * `a11y-tabs`
 * `accessible and responsive tabbed interface`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */class A11yTabs extends PolymerElement{// render function
static get template(){return html`
<style>:host {
  display: block;
  --a11y-tabs-border-radius: 2px;
  --a11y-tabs-justify-tabs: flex-start;
  --ally-tabs-wrap: unset;
  --a11y-tabs-background: white;
  --a11y-tabs-border-color: #ddd;
  --a11y-tabs-color: #222;
  --a11y-tabs-focus-color: #000;
  --a11y-tabs-faded-background: #eee;
  --a11y-tabs-button-padding: 0.7em 0.57em;
  --a11y-tabs-vertical-button-padding: unset;
  --a11y-tabs-horizontal-border-radius: unset;
  --a11y-tabs-vertical-border-radius: unset;
  --a11y-tabs-horizontal-button-padding: 2px 5px;
}
:host([vertical]) {
  border-radius: var(--a11y-tabs-vertical-border-radius, var(--a11y-tabs-border-radius));
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  @apply --a11y-tabs-vertical;
}
:host(:not([vertical])) {
  @apply --a11y-tabs-horizontal;
}
:host([hidden]) {
  display: none;
}
:host #tabs {
  align-items: stretch;
  flex-wrap: var(--ally-tabs-wrap, unset);
  margin: 0;
  display: flex;
  list-style: none;
  padding: 0;
  @apply --a11y-tabs-tabs;
}
:host([vertical]) #tabs {
  justify-content: var(--a11y-tabs-vertical-justify-tabs, var(--a11y-tabs-justify-tabs, flex-start));
  flex-wrap: var(--ally-tabs-vertical-wrap, var(--ally-tabs-wrap, unset));
  flex: 0 1 auto;
  flex-direction: column;
  @apply --a11y-tabs-vertical-tabs;
}
:host(:not([vertical])) #tabs {
  justify-content: var(--a11y-tabs-horizontal-justify-tabs, var(--a11y-tabs-justify-tabs, flex-start));
  @apply --a11y-tabs-horizontal-tabs;
}
:host #tabs .flag-type {
  position: absolute;
  left: -99999px;
  height: 0; 
  overflow: hidden;
}
:host #content {
  background-color: var(--a11y-tabs-background, white);
  border: 1px solid var(--a11y-tabs-border-color, #ddd);
  @apply --a11y-tabs-content;
}
:host([vertical]) #content {
  flex: 1 0 auto;
  border-left: none;
  @apply --a11y-tabs-vertical-content;
}
:host(:not([vertical])) #content {
  border-radius: var(--a11y-tabs-horizontal-border-radius, var(--a11y-tabs-border-radius));
  margin-top: -1px;
  @apply --a11y-tabs-horizontal-content;
}
:host paper-button {
  margin: 0;
  text-transform: unset;
  color: var(--a11y-tabs-color, #222);
  background-color: var(--a11y-tabs-faded-background, #eee);
  border: 1px solid var(--a11y-tabs-border-color, #ddd);
  padding: var(--a11y-tabs-button-padding, 0.7em 0.57em);
  @apply --a11y-tabs-button;
}
:host([vertical]) paper-button {
  border-radius: 0; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: none;
  padding: var(--a11y-tabs-vertical-button-padding, var(--a11y-tabs-button-padding));
  @apply --a11y-tabs-vertical-button;
}
:host(:not([vertical])) paper-button {
  width: 100%;
  border-bottom: none;
  border-radius: 
    var(--a11y-tabs-horizontal-border-radius, var(--a11y-tabs-border-radius))
    var(--a11y-tabs-horizontal-border-radius, var(--a11y-tabs-border-radius))
    0 
    0; 
  padding: var(--a11y-tabs-horizontal-button-padding, var(--a11y-tabs-button-padding));
  @apply --a11y-tabs-horizontal-button;
}
:host paper-button:active,
:host paper-button:focus,
:host paper-button:hover {
  color: var(--a11y-tabs-focus-color, #000);
  background-color: var(--a11y-tabs-faded-background, #eee);
}
:host paper-button:focus {
  @apply --a11y-tabs-button-focus;
}
:host paper-button:active {
  @apply --a11y-tabs-button-active;
}
:host paper-button:hover {
  @apply --a11y-tabs-button-hover;
}
:host paper-button[disabled] {
  color: var(--a11y-tabs-focus-color, #000);
  background-color: var(--a11y-tabs-background, white);
  @apply --a11y-tabs-active-button;
}
:host([vertical]) paper-button[disabled] {
  border-right: 1px solid white;
  @apply --a11y-tabs-vertical-active-button;
}
:host(:not([vertical])) paper-button[disabled] {
  border-bottom: 1px solid var(--a11y-tabs-background, white);
  @apply --a11y-tabs-horizontal-active-button;
}
:host #tabs span.label,
:host #tabs .flag-icon {
  margin-right: 8px;
}
:host([icons-only]) #tabs paper-button {
  justify-content: center;
}
:host([icons-only]) #tabs span.label {
  display:none;
}
:host(:not([icons-only])) #tabs paper-tooltip {
  display:none;
}
:host #tabs paper-button[flag] {
  @apply --a11y-tab-flagged-tab;
}
:host #tabs .flag-icon {
  @apply --a11y-tab-flag-icon;
}
</style>
<ul id="tabs">
  <template is="dom-repeat" items="[[__items]]" as="tab">
    <li>
      <paper-button 
        id$="[[tab.id]]-button" 
        flag$="[[tab.flag]]"
        disabled$="[[_isActiveTab(tab.id,activeTab)]]" 
        controls$="[[tab.id]]" 
        on-tap="_handleTab">
        <iron-icon 
          class="flag-icon" 
          hidden$="[[!tab.flagIcon]]" 
          icon$="[[tab.flagIcon]]">
        </iron-icon>
        <span class="label">[[tab.label]]</span> 
        <span 
          class="flag-type" 
          hidden!="[[!tab.flag]]">
          [[tab.flag]]
        </span>
        <iron-icon 
          class="icon" 
          hidden$="[[!tab.icon]]" 
          icon$="[[tab.icon]]">
        </iron-icon>
      </paper-button>
      <paper-tooltip for="[[tab.id]]-button">[[tab.label]]</paper-tooltip>
    </li>
  </template>
</ul>
<div id="content">
  <slot></slot>
</div>`}// haxProperty definition
static get haxProperties(){return}// properties available to the custom element for data binding
static get properties(){return{/**
   * the id of the active tab
   */activeTab:{name:"activeTab",type:"String",value:null,observer:"selectTab"},/**
   * whether the tabbed interface is disabled
   */disabled:{name:"disabled",type:"Boolean",value:!1,reflectToAttribute:!0},/**
   * whether the tabbed interface is hidden
   */hidden:{name:"hidden",type:"Boolean",value:!1,reflectToAttribute:!0},/**
   * the minimum breakpoint for showing tab text with icons, or
   * - use `0` to always show icons only
   * - use `-1` to always show text with icons
   */iconBreakpoint:{name:"iconBreakpoint",type:"Number",value:400,observer:"_breakpointChanged"},/**
   * whether the tabs show only icons (no text)
   */iconsOnly:{name:"iconsOnly",type:"Boolean",computed:"_showIcons(__hasIcons,iconBreakpoint,layoutBreakpoint,responsiveSize)",reflectToAttribute:!0},/**
   * unique identifier/anchor for the tabbed interface
   */id:{name:"id",type:"String",value:null,reflectToAttribute:!0,observer:"_idChanged"},/**
   * the minimum breakpoint for horizontal layout of tabs, or
   * - use `0` for horizontal-only
   * - use `-1` for vertical-only
   */layoutBreakpoint:{name:"layoutBreakpoint",type:"Number",value:600,observer:"_breakpointChanged"},/**
   * the size of the tabs,
   * where `xs` is the smaller breakpoint
   * and `xs` is the larger breakpoint
   */responsiveSize:{name:"responsiveSize",type:"String",value:"xs"},/**
   * whether the tabbed interface is in vertical layout mode
   */vertical:{name:"vertical",type:"Boolean",computed:"_isVertical(iconBreakpoint,layoutBreakpoint,responsiveSize)",reflectToAttribute:!0},/**
   * whether the tabbed interface has icons for each tab
   */__hasIcons:{name:"__hasIcons",type:"Boolean",value:!1},/**
   * an array of tab data based on slotted `a11y-tab` elements
   */__items:{name:"__items",type:"Array",value:[]},/**
   * a mutation observer to monitor slotted `a11y-tab` elements
   */__observer:{name:"__observer",type:"Object",value:null}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */static get tag(){return"a11y-tabs"}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){super.connectedCallback();let root=this,callback=function(mutationsList,observer){root.updateItems()};this.updateItems();this.__observer=new MutationObserver(callback);this.__observer.observe(this,{attributes:!1,childList:!0,subtree:!1});this.addEventListener("a11y-tab-changed",function(e){root.updateItems()});this.addEventListener("a11y-tab-previous",function(e){console.log("a11y-tab-previous",e)});window.ResponsiveUtility.requestAvailability();this._breakpointChanged()}/**
   * life cycle, element is removed from the DOM
   */disconnectedCallback(){let root=this;this.__observer.disconnect();this.removeEventListener("a11y-tab-changed",function(e){root.updateItems()});window.dispatchEvent(new CustomEvent("responsive-element-deleted",{bubbles:!0,cancelable:!0,composed:!0,detail:root}));super.disconnectedCallback()}/**
   * selects a tab
   * @param {string} id the active tab's id
   */selectTab(id){let tabs=this.querySelectorAll("a11y-tab"),selected=id&&this.querySelector(`a11y-tab#${id}`)?this.querySelector(`a11y-tab#${id}`):this.querySelector("a11y-tab");if(selected.id!==id){this.activeTab=selected.id;return}else if(tabs&&0<tabs.length){tabs.forEach(tab=>{tab.hidden=tab.id!==id})}}/**
   * updates the list of items based on slotted a11y-tab elements
   */updateItems(){this.set("__items",[]);let tabs=this.querySelectorAll("a11y-tab"),ctr=1;this.__hasIcons=!0;if(!this.id)this.id=this._generateUUID();if(tabs&&0<tabs.length)tabs.forEach(tab=>{this.push("__items",{id:tab.id||`tab-${ctr}`,flag:tab.flag,flagIcon:tab.flagIcon,icon:tab.icon,label:tab.label||`Tab ${ctr}`});if(!tab.icon)this.__hasIcons=!1;tab.__xOfY=`${ctr} of ${tabs.length}`;tab.__toTop=this.id});this.selectTab(this.activeTab)}/**
   * Observer activeTab for changes
   * @param {string} newValue the new active tab's id
   */_activeTabChanged(newValue){this.selectTab(newValue)}/**
   * handles any breakpoint changes
   * @param {event} e the tab change event
   */_breakpointChanged(e){let root=this,v=-1<this.layoutBreakpoint?this.layoutBreakpoint:0,i=-1<this.iconBreakpoint?this.iconBreakpoint:0,sm=i>v?v:i,md=i>v?i:v,lg=Math.max(i,v)+1,xl=Math.max(i,v)+2;window.dispatchEvent(new CustomEvent("responsive-element-deleted",{bubbles:!0,cancelable:!0,composed:!0,detail:root}));this.responsiveSize="xs";console.log("_breakpointChanged",this.layoutBreakpoint,this.iconBreakpoint,v,i,sm,md,lg,xl);window.dispatchEvent(new CustomEvent("responsive-element",{detail:{element:root,attribute:"responsive-size",relativeToParent:!0,sm:sm,md:md,lg:lg,xl:xl}}))}/**
   * generates a unique id
   * @returns {string } unique id
   */_generateUUID(){return"ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}/**
   * handles a tab being tapped and sets the new active tab
   * @param {event} e the tab tap event
   */_handleTab(e){if(e.model&&e.model.__data&&e.model.__data.tab)this.activeTab=e.model.__data.tab.id}/**
   * ensures that there is always an id for this tabbed interface so that we can link back to the top of it
   * @param {string} newValue the new id
   * @param {string} oldValue the old id
   */_idChanged(newValue,oldValue){if(!newValue)this.id="a11y-tabs"+this._generateUUID()}/**
   * determines if a given tab is active
   * @param {string} id the tab's id
   * @param {string} activeTab the active tab's id
   * @returns {boolean} if a given tab is active
   */_isActiveTab(id,activeTab){return id===activeTab}/**
   * determines if tabs should be in a vertical layout
   * @param {number} icon breakpoint for icon-only view
   * @param {number} layout breakpoint for vertical layout
   * @param {string} size the responsive size
   * @returns {boolean} if tabs should be in a vertical layout
   */_isVertical(icon,layout,size){return-1===layout||icon>layout?"xs"===size:-1<size.indexOf("s")}/**
   * determines if tabs should show icons only
   * @param {boolean} hasIcons does every tab have an icon?
   * @param {number} icon breakpoint for icon-only view
   * @param {number} layout breakpoint for vertical layout
   * @param {string} size the responsive size
   * @returns {boolean} if tabs should be in a vertical layout
   */_showIcons(hasIcons,icon,layout,size){return hasIcons&&-1!==icon&&("xs"===size||icon>layout&&"sm"===size)}}window.customElements.define(A11yTabs.tag,A11yTabs);export{A11yTabs};