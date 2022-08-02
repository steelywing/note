"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="DNS",c={unversionedId:"Network/Cisco IOS/DNS",id:"Network/Cisco IOS/DNS",title:"DNS",description:"Disable domain name lookup in global mode",source:"@site/docs/Network/Cisco IOS/DNS.md",sourceDirName:"Network/Cisco IOS",slug:"/Network/Cisco IOS/DNS",permalink:"/note/Network/Cisco IOS/DNS",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco IOS/DNS.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"DHCP",permalink:"/note/Network/Cisco IOS/DHCP"},next:{title:"Date / Time",permalink:"/note/Network/Cisco IOS/DateTime"}},l={},p=[{value:"Disable domain name lookup in global mode",id:"disable-domain-name-lookup-in-global-mode",level:2},{value:"Device name",id:"device-name",level:2},{value:"Device domain",id:"device-domain",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dns"},"DNS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# ip name-server <DNS IP address> ...\n")),(0,o.kt)("h2",{id:"disable-domain-name-lookup-in-global-mode"},"Disable domain name lookup in global mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# no ip domain-lookup\n")),(0,o.kt)("h2",{id:"device-name"},"Device name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# hostname <host name>\n")),(0,o.kt)("h2",{id:"device-domain"},"Device domain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# ip domain-name <domain>\n")))}s.isMDXComponent=!0}}]);