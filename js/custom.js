!function a(i,l,f){function c(n,e){if(!l[n]){if(!i[n]){var r="function"==typeof require&&require;if(!e&&r)return r(n,!0);if(u)return u(n,!0);var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}var o=l[n]={exports:{}};i[n][0].call(o.exports,function(e){return c(i[n][1][e]||e)},o,o.exports,a,i,l,f)}return l[n].exports}for(var u="function"==typeof require&&require,e=0;e<f.length;e++)c(f[e]);return c}({1:[function(e,n,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.PrmExploreFooterAfterConfig={name:"prmExploreFooterAfter",config:{bindings:{parentCtrl:"<"},templateUrl:function(){var e=window.location.search.substring(1),n=e.indexOf("vid")+4,r=(e=e.substring(n)).indexOf("&"),t=e.substring(0,r);return window.location.port||(t=t.replace(":","-")),"custom/"+t+"/html/footer/footer.html"}}}},{}],2:[function(e,n,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PrmUserAreaExpandableAfterConfig=void 0;var t=function(e,n,r){return n&&o(e.prototype,n),r&&o(e,r),e};function o(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var a=e("../shared/viewName");var i=(t(l,[{key:"changeLanguage",value:function(){"da"===this.$location.search().lang?this.$location.search("lang","en"):this.$location.search("lang","da"),this.$window.location.href=this.$location.absUrl()}}]),l);function l(e,n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),this.$location=e,this.$window=n}i.$inject=["$location","$window"];r.PrmUserAreaExpandableAfterConfig={name:"prmUserAreaExpandableAfter",config:{bindings:{parentCtrl:"<"},reloadOnSearch:!1,controller:i,templateUrl:"custom/"+a.viewName+"/html/language/language.html"}}},{"../shared/viewName":5}],3:[function(e,n,r){"use strict";var t=e("./footer/prmExploreFooterAfter.component"),o=e("./navigation-header/navigation-header"),a=e("./language/prmUserAreaExpandableAfter.component");angular.module("viewCustom",["angularLoad"]),angular.module("viewCustom").component(t.PrmExploreFooterAfterConfig.name,t.PrmExploreFooterAfterConfig.config).component(o.PrmTopBarBeforeConfig.name,o.PrmTopBarBeforeConfig.config).component(a.PrmUserAreaExpandableAfterConfig.name,a.PrmUserAreaExpandableAfterConfig.config)},{"./footer/prmExploreFooterAfter.component":1,"./language/prmUserAreaExpandableAfter.component":2,"./navigation-header/navigation-header":4}],4:[function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}Object.defineProperty(r,"__esModule",{value:!0});var o=(function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(a,[{key:"$postLink",value:function(){var e=this.$element.parent().parent().parent();angular.element(e.children()[0]).append(this.$element.children()[0])}}]),a);function a(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),this.$element=e}o.$inject=["$element"];r.PrmTopBarBeforeConfig={name:"prmTopBarBefore",config:{bindings:{parentCtrl:"<"},controller:o,templateUrl:function(){var e=window.location.search.substring(1),n=e.indexOf("vid")+4,r=(e=e.substring(n)).indexOf("&"),t=e.substring(0,r);return window.location.port||(t=t.replace(":","-")),"custom/"+t+"/html/navigation-header/navigation-header.html"}}}},{}],5:[function(e,n,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.viewName="45KBDK_KGL:KGL"},{}]},{},[3]);
//# sourceMappingURL=custom.js.map