"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8402],{86206:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(75366),s=n(26192);const i={slug:"."},a="JavaScript",o={id:"Programming/JavaScript/README",title:"JavaScript",description:"Remove URL query",source:"@site/docs/Programming/JavaScript/README.md",sourceDirName:"Programming/JavaScript",slug:"/Programming/JavaScript/",permalink:"/note/Programming/JavaScript/",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/JavaScript/README.md",tags:[],version:"current",frontMatter:{slug:"."},sidebar:"programming",previous:{title:"NameSpace",permalink:"/note/Programming/C-Sharp/NameSpace"},next:{title:"Browser Automation",permalink:"/note/Programming/JavaScript/BrowserAutomation"}},c={},l=[{value:"Remove URL query",id:"remove-url-query",level:2},{value:"URL for browser",id:"url-for-browser",level:2},{value:"Absolute URL for browser",id:"absolute-url-for-browser",level:2},{value:"Metric prefix",id:"metric-prefix",level:2},{value:"Performance / Benchmark",id:"performance--benchmark",level:2},{value:"Static Web Server",id:"static-web-server",level:2},{value:"<code>http-server</code>",id:"http-server",level:3},{value:"Vercel <code>serve</code>",id:"vercel-serve",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"javascript",children:"JavaScript"}),"\n",(0,t.jsx)(r.h2,{id:"remove-url-query",children:"Remove URL query"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/location#Example_5_Send_a_string_of_data_to_the_server_by_modifying_the_search_property",children:"Reference"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"location.search = '';\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Using relative URL\n(",(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc1808",children:"Reference RFC1808"}),")"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:'<a href="?">\n'})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"location = '?';\n"})}),"\n",(0,t.jsx)(r.h2,{id:"url-for-browser",children:"URL for browser"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/medialize/URI.js",children:"https://github.com/medialize/URI.js"})}),"\n",(0,t.jsx)(r.h2,{id:"absolute-url-for-browser",children:"Absolute URL for browser"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://davidwalsh.name/get-absolute-url",children:"Reference"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"var getAbsUrl = (function() {\n  var a;\n\n  return function(url) {\n    if (!a) {\n      a = document.createElement('a');\n    }\n    a.href = url;\n    return a.href;\n  };\n})();\n"})}),"\n",(0,t.jsx)(r.h2,{id:"metric-prefix",children:"Metric prefix"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"Number.prototype.prefix = function (precision, base) {\n\n  var units = ' K M G T P E Z Y'.split(' ');\n\n  if (typeof precision === 'undefined') {\n    precision = 2;\n  }\n\n  if (typeof base === 'undefined') {\n    base = 1000;\n  }\n\n  if (this == 0 || !isFinite(this)) {\n    return this.toFixed(precision) + units[0];\n  }\n\n  var power = Math.floor(Math.log(Math.abs(this)) / Math.log(base));\n  // Make sure not larger than max prefix\n  power = Math.min(power, units.length - 1);\n\n  return (this / Math.pow(base, power)).toFixed(precision) + units[power];\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"performance--benchmark",children:"Performance / Benchmark"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"function benchmark(run) {\n  var start = performance.now();\n  run();\n  return performance.now() - start;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"static-web-server",children:"Static Web Server"}),"\n",(0,t.jsx)(r.h3,{id:"http-server",children:(0,t.jsx)(r.code,{children:"http-server"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/http-party/http-server/issues/634",children:"Version 14 has error ERR_HTTP_HEADERS_SENT"})}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm i -g http-server@13\n\nhttp-server .\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"vercel-serve",children:["Vercel ",(0,t.jsx)(r.code,{children:"serve"})]}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://github.com/vercel/serve",children:"serve"})]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},26192:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var t=n(97049);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);