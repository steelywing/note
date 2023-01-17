"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4149],{87485:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(76274),a=(r(76687),r(87485));const o={},l=void 0,i={unversionedId:"Linux/VPN",id:"Linux/VPN",title:"VPN",description:"IPSec",source:"@site/docs/Linux/VPN.md",sourceDirName:"Linux",slug:"/Linux/VPN",permalink:"/note/Linux/VPN",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/VPN.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"User",permalink:"/note/Linux/User"},next:{title:"Zentyal",permalink:"/note/Linux/Zentyal"}},s={},u=[{value:"IPSec",id:"ipsec",level:2},{value:"FreeS/WAN",id:"freeswan",level:3},{value:"strongSwan",id:"strongswan",level:3},{value:"Openswan",id:"openswan",level:3},{value:"Libreswan",id:"libreswan",level:3},{value:"NAT-T",id:"nat-t",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ipsec"},"IPSec"),(0,a.kt)("h3",{id:"freeswan"},(0,a.kt)("a",{parentName:"h3",href:"https://www.freeswan.org/"},"FreeS/WAN")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No longer in active development")),(0,a.kt)("h3",{id:"strongswan"},(0,a.kt)("a",{parentName:"h3",href:"https://www.strongswan.org/"},"strongSwan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fork from FreeS/WAN")),(0,a.kt)("h3",{id:"openswan"},(0,a.kt)("a",{parentName:"h3",href:"https://www.openswan.org/"},"Openswan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fork from FreeS/WAN 2.04")),(0,a.kt)("h3",{id:"libreswan"},(0,a.kt)("a",{parentName:"h3",href:"https://libreswan.org/"},"Libreswan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/libreswan/libreswan/blob/main/CREDITS"},"Fork from Openswan 2.6.38"))),(0,a.kt)("h3",{id:"nat-t"},"NAT-T"),(0,a.kt)("p",null,"Network address translation traversal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adds a layer of UDP encapsulation to IPsec packets")))}c.isMDXComponent=!0}}]);