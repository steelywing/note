"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9797],{7485:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),y=o,m=d["".concat(l,".").concat(y)]||d[y]||s[y]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(6274),o=(r(6687),r(7485));const a={},c="Directory Stack",i={unversionedId:"Linux/Directory Stack",id:"Linux/Directory Stack",title:"Directory Stack",description:"Reference",source:"@site/docs/Linux/Directory Stack.md",sourceDirName:"Linux",slug:"/Linux/Directory Stack",permalink:"/note/Linux/Directory Stack",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Directory Stack.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Date / Time",permalink:"/note/Linux/Date"},next:{title:"Disk Benchmark",permalink:"/note/Linux/Disk Benchmark"}},l={},u=[{value:"Push directory",id:"push-directory",level:2},{value:"Pop and change to the directory",id:"pop-and-change-to-the-directory",level:2},{value:"List directory stack",id:"list-directory-stack",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"directory-stack"},"Directory Stack"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/a/270437/104608"},"Reference"))),(0,o.kt)("p",null,"Directory / Folder Stack"),(0,o.kt)("h2",{id:"push-directory"},"Push directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pushd <directory>\n")),(0,o.kt)("h2",{id:"pop-and-change-to-the-directory"},"Pop and change to the directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"popd\n")),(0,o.kt)("h2",{id:"list-directory-stack"},"List directory stack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dirs [-v]\n")))}s.isMDXComponent=!0}}]);