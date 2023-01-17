"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8991],{87485:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),f=a,d=g["".concat(c,".").concat(f)]||g[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(76274),a=(n(76687),n(87485));const i={tags:["Nginx","CLI"]},o="CLI - Nginx",l={unversionedId:"Note/Nginx/CLI",id:"Note/Nginx/CLI",title:"CLI - Nginx",description:"Start Nginx",source:"@site/docs/Note/Nginx/CLI.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/CLI",permalink:"/note/Note/Nginx/CLI",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/CLI.md",tags:[{label:"Nginx",permalink:"/note/tags/nginx"},{label:"CLI",permalink:"/note/tags/cli"}],version:"current",frontMatter:{tags:["Nginx","CLI"]},sidebar:"note",previous:{title:"Access control",permalink:"/note/Note/Nginx/AccessControl"},next:{title:"Client IP address",permalink:"/note/Note/Nginx/ClientAddress"}},c={},s=[{value:"Start Nginx",id:"start-nginx",level:2},{value:"Restart / Reload Nginx",id:"restart--reload-nginx",level:2},{value:"Test configuration",id:"test-configuration",level:2},{value:"Specify configuration file",id:"specify-configuration-file",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli---nginx"},"CLI - Nginx"),(0,a.kt)("h2",{id:"start-nginx"},"Start Nginx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx\n")),(0,a.kt)("h2",{id:"restart--reload-nginx"},"Restart / Reload Nginx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -s reload\n")),(0,a.kt)("h2",{id:"test-configuration"},"Test configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -t\n")),(0,a.kt)("h2",{id:"specify-configuration-file"},"Specify configuration file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -c <file>\n")))}p.isMDXComponent=!0}}]);