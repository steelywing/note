"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5848],{87485:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(76274),a=(r(76687),r(87485));const l={tags:["Capture","Network","WireShark"]},i="WireShark long-term traffic capture",o={permalink:"/note/blog/WireShark dumpcap",source:"@site/blog/WireShark dumpcap.md",title:"WireShark long-term traffic capture",description:"- WireShark is slow when capture large amount of traffic",date:"2023-06-21T04:09:42.000Z",formattedDate:"June 21, 2023",tags:[{label:"Capture",permalink:"/note/blog/tags/capture"},{label:"Network",permalink:"/note/blog/tags/network"},{label:"WireShark",permalink:"/note/blog/tags/wire-shark"}],readingTime:.475,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["Capture","Network","WireShark"]},prevItem:{title:"Windows host name resolution order",permalink:"/note/blog/Windows host-name resolution order"},nextItem:{title:"iperf network speed test",permalink:"/note/blog/iperf"}},p={authorsImageUrls:[]},c=[{value:"List interfaces",id:"list-interfaces",level:2},{value:"Capture",id:"capture",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WireShark is slow when capture large amount of traffic"),(0,a.kt)("li",{parentName:"ul"},"WireShark include ",(0,a.kt)("inlineCode",{parentName:"li"},"dumpcap")," command to capture traffic in CLI, that is faster")),(0,a.kt)("h2",{id:"list-interfaces"},"List interfaces"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dumpcap -D\n")),(0,a.kt)("h2",{id:"capture"},"Capture"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-i <interface>")),(0,a.kt)("td",{parentName:"tr",align:null},"capture ",(0,a.kt)("inlineCode",{parentName:"td"},"<interface>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-b filesize:<size KB>")),(0,a.kt)("td",{parentName:"tr",align:null},"switch to next file after ",(0,a.kt)("inlineCode",{parentName:"td"},"<size KB>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-b duration:<second>")),(0,a.kt)("td",{parentName:"tr",align:null},"switch to next file after ",(0,a.kt)("inlineCode",{parentName:"td"},"<second>")," seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-b files:<total>")),(0,a.kt)("td",{parentName:"tr",align:null},"replace the oldest file after ",(0,a.kt)("inlineCode",{parentName:"td"},"<total>")," files")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-f <filter>")),(0,a.kt)("td",{parentName:"tr",align:null},"filter packet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-w <file>")),(0,a.kt)("td",{parentName:"tr",align:null},"save to ",(0,a.kt)("inlineCode",{parentName:"td"},"<file>"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dumpcap -i 1 -b filesize:1000000 -b files:2 -w capture.pcap\n")))}s.isMDXComponent=!0}}]);