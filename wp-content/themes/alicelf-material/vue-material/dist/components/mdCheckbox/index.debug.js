!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(d){if(c[d])return c[d].exports;var o=c[d]={exports:{},id:d,loaded:!1};return e[d].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var c={};return t.m=e,t.c=c,t.p="/",t(0)}({0:function(e,t,c){e.exports=c(76)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},76:function(e,t,c){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-checkbox",e.extend(n.default)),e.material.styles.push(i.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=c(240),n=d(r),a=c(207),i=d(a);e.exports=t.default},114:function(e,t,c){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=c(1),r=d(o);t.default={props:{name:String,value:[String,Boolean],id:String,disabled:Boolean},mixins:[r.default],data:function(){return{checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.checked),"md-disabled":this.disabled}}},watch:{value:function(){this.checked=this.value}},methods:{toggleCheck:function(e){this.disabled||(this.checked=!this.checked,this.$emit("change",this.checked,e),this.$emit("input",this.checked,e))}}},e.exports=t.default},195:function(e,t){},207:function(e,t){e.exports=".THEME_NAME.md-checkbox.md-checked .md-checkbox-container{background-color:ACCENT-COLOR;border-color:ACCENT-COLOR}.THEME_NAME.md-checkbox.md-checked .md-checkbox-container:after{border-color:ACCENT-CONTRAST}.THEME_NAME.md-checkbox.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-checkbox.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container{background-color:PRIMARY-COLOR;border-color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container:after{border-color:PRIMARY-CONTRAST}.THEME_NAME.md-checkbox.md-primary.md-checked .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container{background-color:WARN-COLOR;border-color:WARN-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container:after{border-color:WARN-CONTRAST}.THEME_NAME.md-checkbox.md-warn.md-checked .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-checkbox.md-disabled.md-checked .md-checkbox-container{background-color:rgba(0,0,0,0.26);border-color:transparent}.THEME_NAME.md-checkbox.md-disabled:not(.md-checked) .md-checkbox-container{border-color:rgba(0,0,0,0.26)}\n"},240:function(e,t,c){var d,o;c(195),d=c(114);var r=c(323);o=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(o=d=d.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=d},323:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"md-checkbox",class:[e.themeClass,e.classes]},[c("div",{directives:[{name:"md-ink-ripple",rawName:"v-md-ink-ripple",value:e.disabled,expression:"disabled"}],staticClass:"md-checkbox-container",attrs:{tabindex:"0"},on:{click:function(t){t.stopPropagation(),e.toggleCheck(t)}}},[c("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled,tabindex:"-1"},domProps:{value:e.value}})]),e._v(" "),e.$slots.default?c("label",{staticClass:"md-checkbox-label",attrs:{for:e.id||e.name}},[e._t("default")],2):e._e()])},staticRenderFns:[]}}})});
//# sourceMappingURL=index.debug.js.map