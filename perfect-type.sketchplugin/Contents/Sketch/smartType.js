var globalThis=this,global=this;function __skpm_run(e,n){globalThis.context=n;try{var t=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";o.r(t);o(1);var r=o(2);t.default=function(){var e=[];if(n.selection.count()>0){for(var t=0;t<n.selection.count();t++){var o=n.selection[t];"MSTextLayer"==o.className()&&e.push(o)}if(e.length>0)for(var i=0;i<e.length;i++){var u=e[i],c=u.fontSize(),a=Math.round(c*r.lineHeight()),s=u.frame().height(),l=-c/r.characterSpacing();u.setCharacterSpacing(l),s>=a?u.setLineHeight(a):n.document.showMessage("Err! Not a good idea on single line string")}else n.document.showMessage("Action can only be performed on a layer")}else n.document.showMessage("Action can only be performed on a layer")}},function(e,n){e.exports=require("sketch")},function(e,n){console.log(1.61),e.exports={lineHeight:function(){return 1.61},characterSpacing:function(){return 30}}}]);if("default"===e&&"function"==typeof t)t(n);else{if("function"!=typeof t[e])throw new Error('Missing export named "'+e+'". Your command should contain something like `export function " + key +"() {}`.');t[e](n)}}catch(o){if("undefined"==typeof process||!process.listenerCount||!process.listenerCount("uncaughtException"))throw o;process.emit("uncaughtException",o,"uncaughtException")}}globalThis.onRun=__skpm_run.bind(this,"default");