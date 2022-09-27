"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3854],{7485:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?o.createElement(m,c(c({ref:t},s),{},{components:r})):o.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(6274),n=(r(6687),r(7485));const a={},c="Broadcast",i={unversionedId:"Network/Cisco IOS/Broadcast",id:"Network/Cisco IOS/Broadcast",title:"Broadcast",description:"Reference",source:"@site/docs/Network/Cisco IOS/Broadcast.md",sourceDirName:"Network/Cisco IOS",slug:"/Network/Cisco IOS/Broadcast",permalink:"/note/Network/Cisco IOS/Broadcast",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco IOS/Broadcast.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"ACL",permalink:"/note/Network/Cisco IOS/ACL"},next:{title:"DHCP",permalink:"/note/Network/Cisco IOS/DHCP"}},l={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"broadcast"},"Broadcast"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipapp/command/iap-cr-book/iap-i1.html"},"Reference"))),(0,n.kt)("p",null,"Allow broadcast to all other subnet"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Example"),(0,n.kt)("p",{parentName:"blockquote"},"From ",(0,n.kt)("inlineCode",{parentName:"p"},"10.0.0.1/24")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"10.10.10.255/24"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Switch(config-if)# ip directed-broadcast [<ACL ID>]\n")),(0,n.kt)("p",null,"Forward broadcast packet to other IP address / subnet"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Switch(config-if)# ip helper-address <IP address>\n")),(0,n.kt)("p",null,"Allow specified UDP port forward broadcast"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Default is all")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Switch(config)# ip forward-protocol udp [<port number>]\n")))}u.isMDXComponent=!0}}]);