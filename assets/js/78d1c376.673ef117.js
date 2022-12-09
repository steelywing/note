"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6703],{7485:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||c;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(6274),o=(n(6687),n(7485));const c={},a="Access control",s={unversionedId:"Note/Nginx/AccessControl",id:"Note/Nginx/AccessControl",title:"Access control",description:"Nginx use the first match",source:"@site/docs/Note/Nginx/AccessControl.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/AccessControl",permalink:"/note/Note/Nginx/AccessControl",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/AccessControl.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"MySQL",permalink:"/note/Note/MySQL"},next:{title:"Client IP address",permalink:"/note/Note/Nginx/ClientAddress"}},i={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"access-control"},"Access control"),(0,o.kt)("p",null,"Nginx use the first match"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    # { allow | deny } { <IP address> | <CIDR> | all }\n    deny   192.168.1.1;\n    allow  192.168.1.1/24;\n    deny   all;\n\n    # ...\n}\n")),(0,o.kt)("admonition",{title:"Reference",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/stream/ngx_stream_access_module.html"},"ngx_stream_access_module"))))}u.isMDXComponent=!0}}]);