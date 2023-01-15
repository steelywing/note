"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8402],{7485:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(6687);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6790:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(6274),a=(t(6687),t(7485));const o={slug:".",sidebar_position:0},i="JavaScript",l={unversionedId:"Programming/JavaScript/README",id:"Programming/JavaScript/README",title:"JavaScript",description:"Remove URL query",source:"@site/docs/Programming/JavaScript/README.md",sourceDirName:"Programming/JavaScript",slug:"/Programming/JavaScript/",permalink:"/note/Programming/JavaScript/",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/JavaScript/README.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:".",sidebar_position:0},sidebar:"programming",previous:{title:"NameSpace",permalink:"/note/Programming/C-Sharp/NameSpace"},next:{title:"Browser Automation",permalink:"/note/Programming/JavaScript/BrowserAutomation"}},p={},s=[{value:"Remove URL query",id:"remove-url-query",level:2},{value:"URL for browser",id:"url-for-browser",level:2},{value:"Absolute URL for browser",id:"absolute-url-for-browser",level:2},{value:"Metric prefix",id:"metric-prefix",level:2},{value:"Performance / Benchmark",id:"performance--benchmark",level:2},{value:"HTTP Server",id:"http-server",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript"},"JavaScript"),(0,a.kt)("h2",{id:"remove-url-query"},"Remove URL query"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/location#Example_5_Send_a_string_of_data_to_the_server_by_modifying_the_search_property"},"Reference")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"location.search = '';\n")),(0,a.kt)("p",null,"Using relative URL\n(",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1808"},"Reference RFC1808"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<a href="?">\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"location = '?';\n")),(0,a.kt)("h2",{id:"url-for-browser"},"URL for browser"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/medialize/URI.js"},"https://github.com/medialize/URI.js")),(0,a.kt)("h2",{id:"absolute-url-for-browser"},"Absolute URL for browser"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://davidwalsh.name/get-absolute-url"},"Reference")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var getAbsUrl = (function() {\n  var a;\n\n  return function(url) {\n    if (!a) {\n      a = document.createElement('a');\n    }\n    a.href = url;\n    return a.href;\n  };\n})();\n")),(0,a.kt)("h2",{id:"metric-prefix"},"Metric prefix"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Number.prototype.prefix = function (precision, base) {\n\n  var units = ' K M G T P E Z Y'.split(' ');\n\n  if (typeof precision === 'undefined') {\n    precision = 2;\n  }\n\n  if (typeof base === 'undefined') {\n    base = 1000;\n  }\n\n  if (this == 0 || !isFinite(this)) {\n    return this.toFixed(precision) + units[0];\n  }\n\n  var power = Math.floor(Math.log(Math.abs(this)) / Math.log(base));\n  // Make sure not larger than max prefix\n  power = Math.min(power, units.length - 1);\n\n  return (this / Math.pow(base, power)).toFixed(precision) + units[power];\n};\n")),(0,a.kt)("h2",{id:"performance--benchmark"},"Performance / Benchmark"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function benchmark(run) {\n  var start = performance.now();\n  run();\n  return performance.now() - start;\n}\n")),(0,a.kt)("h2",{id:"http-server"},"HTTP Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/http-party/http-server/issues/634"},"Version 14 has error ERR_HTTP_HEADERS_SENT"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g http-server@13\n\nhttp-server .\n")))}u.isMDXComponent=!0}}]);