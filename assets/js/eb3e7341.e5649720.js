"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1626],{87485:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(76274),a=(r(76687),r(87485));const l={date:new Date("2023-12-05T00:00:00.000Z"),tags:["Web","Server"]},o="Web Server",i={permalink:"/note/blog/Web Server",source:"@site/blog/Web Server.md",title:"Web Server",description:"Apache",date:"2023-12-05T00:00:00.000Z",formattedDate:"December 5, 2023",tags:[{label:"Web",permalink:"/note/blog/tags/web"},{label:"Server",permalink:"/note/blog/tags/server"}],readingTime:.625,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2023-12-05T00:00:00.000Z",tags:["Web","Server"]},nextItem:{title:"Disk Usage Tool",permalink:"/note/blog/Disk Usage Tool"}},p={authorsImageUrls:[]},u=[{value:"Apache",id:"apache",level:2},{value:"Nginx",id:"nginx",level:2},{value:"Caddy",id:"caddy",level:2},{value:"Simple static files web server",id:"simple-static-files-web-server",level:2},{value:"For CLI",id:"for-cli",level:3},{value:"For <strong>node.js</strong>",id:"for-nodejs",level:3},{value:"For python",id:"for-python",level:3}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"apache"},"Apache"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flexible config"),(0,a.kt)("li",{parentName:"ul"},"C10K problem"),(0,a.kt)("li",{parentName:"ul"},"Popular")),(0,a.kt)("h2",{id:"nginx"},"Nginx"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fast"),(0,a.kt)("li",{parentName:"ul"},"Popular"),(0,a.kt)("li",{parentName:"ul"},"Conditional config not flexible"),(0,a.kt)("li",{parentName:"ul"},"Language: C")),(0,a.kt)("h2",{id:"caddy"},"Caddy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fast"),(0,a.kt)("li",{parentName:"ul"},"Language: Go"),(0,a.kt)("li",{parentName:"ul"},"Automatic apply TLS certification",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support ZeroSSL and Let's Encrypt"))),(0,a.kt)("li",{parentName:"ul"},"Support config using API")),(0,a.kt)("h2",{id:"simple-static-files-web-server"},"Simple static files web server"),(0,a.kt)("h3",{id:"for-cli"},"For CLI"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/svenstaro/miniserve"},"miniserve")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cross platform"),(0,a.kt)("li",{parentName:"ul"},"Self-contained (single executable file)"),(0,a.kt)("li",{parentName:"ul"},"Lightweight ( < 2MB for Windows / Linux x86 )")),(0,a.kt)("h3",{id:"for-nodejs"},"For ",(0,a.kt)("strong",{parentName:"h3"},"node.js")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/serve"},"vercel serve")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CLI"),(0,a.kt)("li",{parentName:"ul"},"API")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/http-party/http-server"},"http-server")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Not recommended"),(0,a.kt)("li",{parentName:"ul"},"Issue of lastest version (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/http-party/http-server/issues/634"},"Version 14 has error ERR_HTTP_HEADERS_SENT"),")")),(0,a.kt)("h3",{id:"for-python"},"For python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# python -m http.server [port]\npython -m http.server\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python built-in"),(0,a.kt)("li",{parentName:"ul"},"Crash if the request is not standard")))}c.isMDXComponent=!0}}]);