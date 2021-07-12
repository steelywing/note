(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8402],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1330:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),l=["components"],o={slug:".",sidebar_label:"Basic",sidebar_position:0},c="JavaScript",u={unversionedId:"Programming/JavaScript/README",id:"Programming/JavaScript/README",isDocsHomePage:!1,title:"JavaScript",description:"Remove URL query",source:"@site/docs/Programming/JavaScript/README.md",sourceDirName:"Programming/JavaScript",slug:"/Programming/JavaScript/",permalink:"/note/Programming/JavaScript/",editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/JavaScript/README.md",version:"current",sidebarPosition:0,frontMatter:{slug:".",sidebar_label:"Basic",sidebar_position:0}},p=[{value:"Remove URL query",id:"remove-url-query",children:[]},{value:"URL for browser",id:"url-for-browser",children:[]},{value:"Absolute URL for browser",id:"absolute-url-for-browser",children:[]},{value:"Metric prefix",id:"metric-prefix",children:[]},{value:"Performance / Benchmark",id:"performance--benchmark",children:[]},{value:"Promise",id:"promise",children:[]}],s={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"javascript"},"JavaScript"),(0,i.kt)("h2",{id:"remove-url-query"},"Remove URL query"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/location#Example_5_Send_a_string_of_data_to_the_server_by_modifying_the_search_property"},"Reference")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"location.search = '';\n")),(0,i.kt)("p",null,"Using relative URL\n(",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1808"},"Reference RFC1808"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="?">\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"location = '?';\n")),(0,i.kt)("h2",{id:"url-for-browser"},"URL for browser"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/medialize/URI.js"},"https://github.com/medialize/URI.js")),(0,i.kt)("h2",{id:"absolute-url-for-browser"},"Absolute URL for browser"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://davidwalsh.name/get-absolute-url"},"Reference")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var getAbsUrl = (function() {\n  var a;\n\n  return function(url) {\n    if (!a) {\n      a = document.createElement('a');\n    }\n    a.href = url;\n    return a.href;\n  };\n})();\n")),(0,i.kt)("h2",{id:"metric-prefix"},"Metric prefix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Number.prototype.prefix = function (precision, base) {\n\n  var units = ' K M G T P E Z Y'.split(' ');\n\n  if (typeof precision === 'undefined') {\n    precision = 2;\n  }\n\n  if (typeof base === 'undefined') {\n    base = 1000;\n  }\n\n  if (this == 0 || !isFinite(this)) {\n    return this.toFixed(precision) + units[0];\n  }\n\n  var power = Math.floor(Math.log(Math.abs(this)) / Math.log(base));\n  // Make sure not larger than max prefix\n  power = Math.min(power, units.length - 1);\n\n  return (this / Math.pow(base, power)).toFixed(precision) + units[power];\n};\n")),(0,i.kt)("h2",{id:"performance--benchmark"},"Performance / Benchmark"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function benchmark(run) {\n  var start = performance.now();\n  run();\n  return performance.now() - start;\n}\n")),(0,i.kt)("h2",{id:"promise"},"Promise"),(0,i.kt)("p",null,"Executor"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise"},"Reference"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var executor = (resolve, reject) => {\n    // ...\n};\nvar promise = new Promise(executor);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executor")," will be executed when ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise")," create",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-promise-executor"},"Reference")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolve")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"reject")," are callback function"),(0,i.kt)("li",{parentName:"ul"},"If call ",(0,i.kt)("inlineCode",{parentName:"li"},"resolve(value)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"promise")," will be fulfilled"),(0,i.kt)("li",{parentName:"ul"},"If call ",(0,i.kt)("inlineCode",{parentName:"li"},"reject(value)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"promise")," will be rejected"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executor")," doesn't need to return value")),(0,i.kt)("p",null,"Handler function"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolve(value)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reject(value)"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#return_value"},"Return value"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is not a ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise"),", the promise return ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,i.kt)("li",{parentName:"ul"},"If value is a ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise"),", it will be settled, and return the promise ",(0,i.kt)("inlineCode",{parentName:"li"},"value")),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"reject()")," is called, or value is reject, the promise will be rejected."),(0,i.kt)("li",{parentName:"ul"},"If call ",(0,i.kt)("inlineCode",{parentName:"li"},"resolve(Promise.reject(value))"),", the promise will be rejected."),(0,i.kt)("li",{parentName:"ul"},"If call ",(0,i.kt)("inlineCode",{parentName:"li"},"reject(Promise.resolve(value))"),", the promise will be rejected. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function onFulfilled(value) {\n    // ...\n}\n\nfunction onRejected(value) {\n    // ...\n}\n\nvar promise = new Promise(\n  (resolve, reject) => {\n    // ...\n  }\n);\npromise.then(onFulfilled, onRejected);\n")))}m.isMDXComponent=!0}}]);