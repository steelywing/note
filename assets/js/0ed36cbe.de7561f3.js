"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8402],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7554:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=t(3117),a=t(102),l=(t(7294),t(3905)),i=["components"],o={slug:".",sidebar_label:"Basic",sidebar_position:0},p="JavaScript",c={unversionedId:"Programming/JavaScript/README",id:"Programming/JavaScript/README",title:"JavaScript",description:"Remove URL query",source:"@site/docs/Programming/JavaScript/README.md",sourceDirName:"Programming/JavaScript",slug:"/Programming/JavaScript/",permalink:"/note/Programming/JavaScript/",editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/JavaScript/README.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:".",sidebar_label:"Basic",sidebar_position:0},sidebar:"programming",previous:{title:"NameSpace",permalink:"/note/Programming/C-Sharp/NameSpace"},next:{title:"Browser Automation",permalink:"/note/Programming/JavaScript/BrowserAutomation"}},u=[{value:"Remove URL query",id:"remove-url-query",children:[],level:2},{value:"URL for browser",id:"url-for-browser",children:[],level:2},{value:"Absolute URL for browser",id:"absolute-url-for-browser",children:[],level:2},{value:"Metric prefix",id:"metric-prefix",children:[],level:2},{value:"Performance / Benchmark",id:"performance--benchmark",children:[],level:2},{value:"Promise",id:"promise",children:[],level:2}],s={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"javascript"},"JavaScript"),(0,l.kt)("h2",{id:"remove-url-query"},"Remove URL query"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/location#Example_5_Send_a_string_of_data_to_the_server_by_modifying_the_search_property"},"Reference")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"location.search = '';\n")),(0,l.kt)("p",null,"Using relative URL\n(",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1808"},"Reference RFC1808"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<a href="?">\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"location = '?';\n")),(0,l.kt)("h2",{id:"url-for-browser"},"URL for browser"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/medialize/URI.js"},"https://github.com/medialize/URI.js")),(0,l.kt)("h2",{id:"absolute-url-for-browser"},"Absolute URL for browser"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://davidwalsh.name/get-absolute-url"},"Reference")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var getAbsUrl = (function() {\n  var a;\n\n  return function(url) {\n    if (!a) {\n      a = document.createElement('a');\n    }\n    a.href = url;\n    return a.href;\n  };\n})();\n")),(0,l.kt)("h2",{id:"metric-prefix"},"Metric prefix"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Number.prototype.prefix = function (precision, base) {\n\n  var units = ' K M G T P E Z Y'.split(' ');\n\n  if (typeof precision === 'undefined') {\n    precision = 2;\n  }\n\n  if (typeof base === 'undefined') {\n    base = 1000;\n  }\n\n  if (this == 0 || !isFinite(this)) {\n    return this.toFixed(precision) + units[0];\n  }\n\n  var power = Math.floor(Math.log(Math.abs(this)) / Math.log(base));\n  // Make sure not larger than max prefix\n  power = Math.min(power, units.length - 1);\n\n  return (this / Math.pow(base, power)).toFixed(precision) + units[power];\n};\n")),(0,l.kt)("h2",{id:"performance--benchmark"},"Performance / Benchmark"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function benchmark(run) {\n  var start = performance.now();\n  run();\n  return performance.now() - start;\n}\n")),(0,l.kt)("h2",{id:"promise"},"Promise"),(0,l.kt)("p",null,"Executor"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var executor = (resolve, reject) => {\n    // ...\n};\nvar promise = new Promise(executor);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"executor")," will be executed when ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise")," create",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-promise-executor"},"Reference")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resolve")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"reject")," are callback function"),(0,l.kt)("li",{parentName:"ul"},"If call ",(0,l.kt)("inlineCode",{parentName:"li"},"resolve(value)"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," will be fulfilled"),(0,l.kt)("li",{parentName:"ul"},"If call ",(0,l.kt)("inlineCode",{parentName:"li"},"reject(value)"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," will be rejected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"executor")," doesn't need to return value")),(0,l.kt)("p",null,"Handler function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resolve(value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reject(value)"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#return_value"},"Return value"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," is not a ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise"),", the promise return ",(0,l.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,l.kt)("li",{parentName:"ul"},"If value is a ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise"),", it will be settled, and return the promise ",(0,l.kt)("inlineCode",{parentName:"li"},"value")),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"reject()")," is called, or value is reject, the promise will be rejected."),(0,l.kt)("li",{parentName:"ul"},"If call ",(0,l.kt)("inlineCode",{parentName:"li"},"resolve(Promise.reject(value))"),", the promise will be rejected."),(0,l.kt)("li",{parentName:"ul"},"If call ",(0,l.kt)("inlineCode",{parentName:"li"},"reject(Promise.resolve(value))"),", the promise will be rejected. ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function onFulfilled(value) {\n    // ...\n}\n\nfunction onRejected(value) {\n    // ...\n}\n\nvar promise = new Promise(\n  (resolve, reject) => {\n    // ...\n  }\n);\npromise.then(onFulfilled, onRejected);\n")))}m.isMDXComponent=!0}}]);