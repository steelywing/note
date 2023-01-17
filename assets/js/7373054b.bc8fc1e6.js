"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5848],{87485:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(76687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(76274),n=(r(76687),r(87485));const l={tags:["Capture","Network","WireShark"]},i="WireShark long-term traffic capture",o={permalink:"/note/blog/WireShark dumpcap",source:"@site/blog/WireShark dumpcap.md",title:"WireShark long-term traffic capture",description:"- WireShark is slow when capture large amount of traffic",date:"2023-01-17T03:00:21.000Z",formattedDate:"January 17, 2023",tags:[{label:"Capture",permalink:"/note/blog/tags/capture"},{label:"Network",permalink:"/note/blog/tags/network"},{label:"WireShark",permalink:"/note/blog/tags/wire-shark"}],readingTime:.475,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["Capture","Network","WireShark"]},prevItem:{title:"Windows host name resolution order",permalink:"/note/blog/Windows host-name resolution order"},nextItem:{title:"iperf network speed test",permalink:"/note/blog/iperf"}},p={authorsImageUrls:[]},c=[{value:"List interfaces",id:"list-interfaces",level:2},{value:"Capture",id:"capture",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WireShark is slow when capture large amount of traffic"),(0,n.kt)("li",{parentName:"ul"},"WireShark include ",(0,n.kt)("inlineCode",{parentName:"li"},"dumpcap")," command to capture traffic in CLI, that is faster")),(0,n.kt)("h2",{id:"list-interfaces"},"List interfaces"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dumpcap -D\n")),(0,n.kt)("h2",{id:"capture"},"Capture"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-i <interface>")),(0,n.kt)("td",{parentName:"tr",align:null},"capture ",(0,n.kt)("inlineCode",{parentName:"td"},"<interface>"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-b filesize:<size KB>")),(0,n.kt)("td",{parentName:"tr",align:null},"switch to next file after ",(0,n.kt)("inlineCode",{parentName:"td"},"<size KB>"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-b duration:<second>")),(0,n.kt)("td",{parentName:"tr",align:null},"switch to next file after ",(0,n.kt)("inlineCode",{parentName:"td"},"<second>")," seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-b files:<total>")),(0,n.kt)("td",{parentName:"tr",align:null},"replace the oldest file after ",(0,n.kt)("inlineCode",{parentName:"td"},"<total>")," files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-f <filter>")),(0,n.kt)("td",{parentName:"tr",align:null},"filter packet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-w <file>")),(0,n.kt)("td",{parentName:"tr",align:null},"save to ",(0,n.kt)("inlineCode",{parentName:"td"},"<file>"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dumpcap -i 1 -b filesize:1000000 -b files:2 -w capture.pcap\n")))}s.isMDXComponent=!0}}]);