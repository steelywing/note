"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6153],{87485:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(76274),a=(n(76687),n(87485));const o={},i="select",l={unversionedId:"Note/MySQL/select",id:"Note/MySQL/select",title:"select",description:"Select date from datetime with index",source:"@site/docs/Note/MySQL/select.md",sourceDirName:"Note/MySQL",slug:"/Note/MySQL/select",permalink:"/note/Note/MySQL/select",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/MySQL/select.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"User",permalink:"/note/Note/MySQL/User"},next:{title:"Access control",permalink:"/note/Note/Nginx/AccessControl"}},c={},s=[{value:"Select <code>date</code> from <code>datetime</code> with index",id:"select-date-from-datetime-with-index",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select"},(0,a.kt)("inlineCode",{parentName:"h1"},"select")),(0,a.kt)("h2",{id:"select-date-from-datetime-with-index"},"Select ",(0,a.kt)("inlineCode",{parentName:"h2"},"date")," from ",(0,a.kt)("inlineCode",{parentName:"h2"},"datetime")," with index"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from data\nwhere datetime >= '2000-01-01' and datetime < '2000-01-02'\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from data\nwhere datetime >= '2000-01-01' and datetime < date_add('2000-01-01', interval 1 day)\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from data\nwhere datetime between '2000-01-01 00:00:00' and '2000-01-01 23:59:59'\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date(datetime)")," cannot use index, that calculate ",(0,a.kt)("inlineCode",{parentName:"li"},"date()")," of all rows first"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"datetime like '2000-01-01%'")," cannot use index, that check all rows if the pattern matching first"))))}p.isMDXComponent=!0}}]);