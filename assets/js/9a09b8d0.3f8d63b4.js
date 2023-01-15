"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4402],{7485:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),y=o,f=m["".concat(i,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(6274),o=(r(6687),r(7485));const a={tags:["Linux","Debug","Monitor"]},l="Monitor process system call",c={permalink:"/note/blog/Monitor process system call",source:"@site/blog/Monitor process system call.md",title:"Monitor process system call",description:"Trace / Monitor process system call In Linux",date:"2023-01-15T18:56:43.000Z",formattedDate:"January 15, 2023",tags:[{label:"Linux",permalink:"/note/blog/tags/linux"},{label:"Debug",permalink:"/note/blog/tags/debug"},{label:"Monitor",permalink:"/note/blog/tags/monitor"}],readingTime:.225,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["Linux","Debug","Monitor"]},prevItem:{title:"Migrate to Blog",permalink:"/note/blog/Migrate to blog"},nextItem:{title:"Mount a path to a drive on Windows",permalink:"/note/blog/Mount path to drive"}},i={authorsImageUrls:[]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Trace / Monitor process system call In Linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Syntax"',title:'"Syntax"'},"# <system call> = { open | close | read | write | ... }\nstrace [-e trace={<system call>[,...]}] -p <PID>\n")),(0,o.kt)("p",null,"To trace ",(0,o.kt)("inlineCode",{parentName:"p"},"apache2")," process"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Syntax"',title:'"Syntax"'},"strace -p $(pidof -s apache2)\n")))}u.isMDXComponent=!0}}]);