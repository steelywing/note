"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8147],{87485:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,d=g["".concat(u,".").concat(m)]||g[m]||c[m]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},98212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(76274),a=(n(76687),n(87485));const l={},o="Log",i={unversionedId:"Linux/Log",id:"Linux/Log",title:"Log",description:"Kernel log",source:"@site/docs/Linux/Log.md",sourceDirName:"Linux",slug:"/Linux/Log",permalink:"/note/Linux/Log",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Log.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"LVM",permalink:"/note/Linux/LVM"},next:{title:"Mount",permalink:"/note/Linux/Mount"}},u={},s=[{value:"Kernel log",id:"kernel-log",level:2},{value:"lastlog",id:"lastlog",level:2},{value:"syslog",id:"syslog",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"log"},"Log"),(0,a.kt)("h2",{id:"kernel-log"},"Kernel log"),(0,a.kt)("p",null,"Show kernel log ring buffer"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-H")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"--human")),(0,a.kt)("td",{parentName:"tr",align:null},"human readable output")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"dmesg [-H]\n")),(0,a.kt)("h2",{id:"lastlog"},"lastlog"),(0,a.kt)("p",null,"Most recent login of user"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/lastlog")," is binary file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lastlog [-u <user>]\n")),(0,a.kt)("h2",{id:"syslog"},"syslog"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"syslog")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Ubuntu"',title:'"Ubuntu"'},"/var/log/syslog\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Red Hat"',title:'"Red','Hat"':!0},"/var/log/messages\n")))}c.isMDXComponent=!0}}]);