"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5039],{7485:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(6274),o=(r(6687),r(7485));const a={tags:["Cisco","IOS","Date"]},i="Date / Time",c={unversionedId:"Network/Cisco/IOS/DateTime",id:"Network/Cisco/IOS/DateTime",title:"Date / Time",description:"Timezone",source:"@site/docs/Network/Cisco/IOS/DateTime.md",sourceDirName:"Network/Cisco/IOS",slug:"/Network/Cisco/IOS/DateTime",permalink:"/note/Network/Cisco/IOS/DateTime",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco/IOS/DateTime.md",tags:[{label:"Cisco",permalink:"/note/tags/cisco"},{label:"IOS",permalink:"/note/tags/ios"},{label:"Date",permalink:"/note/tags/date"}],version:"current",frontMatter:{tags:["Cisco","IOS","Date"]},sidebar:"network",previous:{title:"DNS",permalink:"/note/Network/Cisco/IOS/DNS"},next:{title:"Diagnostic",permalink:"/note/Network/Cisco/IOS/Diagnostic"}},s={},l=[{value:"NTP",id:"ntp",level:2}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"date--time"},"Date / Time"),(0,o.kt)("p",null,"Timezone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# clock timezone <timezone name> <timezone offset>\n")),(0,o.kt)("h2",{id:"ntp"},"NTP"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/bsm/command/bsm-xe-3se-3850-cr-book/bsm-xe-3se-3850-cr-book_chapter_00.html#wp1522568655"},"Reference"))),(0,o.kt)("p",null,"Stratum = Distance from the reference clock"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# ntp server <NTP server IP address>\n")),(0,o.kt)("p",null,"Set as NTP server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# ntp master [<stratum>]\n")))}m.isMDXComponent=!0}}]);