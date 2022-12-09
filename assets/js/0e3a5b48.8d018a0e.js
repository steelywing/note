"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8953],{7485:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(6274),o=(n(6687),n(7485));const l={},a="Disk Image / Clone",i={unversionedId:"Note/DiskTool",id:"Note/DiskTool",title:"Disk Image / Clone",description:"Acronis True Image",source:"@site/docs/Note/DiskTool.md",sourceDirName:"Note",slug:"/Note/DiskTool",permalink:"/note/Note/DiskTool",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/DiskTool.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Dictionary",permalink:"/note/Note/Dictionary"},next:{title:"ESXi",permalink:"/note/Note/ESXi"}},u={},c=[{value:"Acronis True Image",id:"acronis-true-image",level:2},{value:"Macrium Reflect",id:"macrium-reflect",level:2},{value:"CloneZilla",id:"clonezilla",level:2},{value:"AOMEI",id:"aomei",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"disk-image--clone"},"Disk Image / Clone"),(0,o.kt)("h2",{id:"acronis-true-image"},"Acronis True Image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bootable Linux"),(0,o.kt)("li",{parentName:"ul"},"Bootable Windows PE",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"32-Bit and 64-Bit"),(0,o.kt)("li",{parentName:"ul"},"Required Windows ADK (1.1GB) and Windows PE add-on (5.5GB)"))),(0,o.kt)("li",{parentName:"ul"},"OEM version is free")),(0,o.kt)("p",null,"ADK (Assessment and Deployment Kit)"),(0,o.kt)("h2",{id:"macrium-reflect"},"Macrium Reflect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Free"),(0,o.kt)("li",{parentName:"ul"},"Bootable Windows PE",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"32-Bit and 64-Bit"),(0,o.kt)("li",{parentName:"ul"},"No required Windows ADK and Windows PE add-on"))),(0,o.kt)("li",{parentName:"ul"},"When use ",(0,o.kt)("strong",{parentName:"li"},"Intelligent Sector Copy"),", cloned boot disk cannot boot"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Intelligent Sector Copy")," slower than ",(0,o.kt)("strong",{parentName:"li"},"All Sector Copy"))),(0,o.kt)("h2",{id:"clonezilla"},"CloneZilla"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open Source"),(0,o.kt)("li",{parentName:"ul"},"Bootable Linux")),(0,o.kt)("h2",{id:"aomei"},"AOMEI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Malware"),(0,o.kt)("li",{parentName:"ul"},"ADware")))}p.isMDXComponent=!0}}]);