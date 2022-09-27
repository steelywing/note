"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6993],{7485:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),k=a,m=d["".concat(u,".").concat(k)]||d[k]||c[k]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(6274),a=(r(6687),r(7485));const l={},o="IDS / IPS",i={unversionedId:"Note/IDS IPS/README",id:"Note/IDS IPS/README",title:"IDS / IPS",description:"IDS",source:"@site/docs/Note/IDS IPS/README.md",sourceDirName:"Note/IDS IPS",slug:"/Note/IDS IPS/",permalink:"/note/Note/IDS IPS/",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/IDS IPS/README.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"HTTP",permalink:"/note/Note/HTTP"},next:{title:"Suricata",permalink:"/note/Note/IDS IPS/Suricata"}},u={},s=[{value:"IDS",id:"ids",level:2},{value:"IPS",id:"ips",level:2},{value:"Network-based",id:"network-based",level:2},{value:"Host-based",id:"host-based",level:2},{value:"OSSEC",id:"ossec",level:2},{value:"fail2ban",id:"fail2ban",level:2},{value:"Snort",id:"snort",level:2},{value:"Suricata",id:"suricata",level:2},{value:"Zeek",id:"zeek",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ids--ips"},"IDS / IPS"),(0,a.kt)("h2",{id:"ids"},"IDS"),(0,a.kt)("p",null,"Intrusion Detection System"),(0,a.kt)("h2",{id:"ips"},"IPS"),(0,a.kt)("p",null,"Intrusion Prevention Systems"),(0,a.kt)("h2",{id:"network-based"},"Network-based"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monitor network traffic"),(0,a.kt)("li",{parentName:"ul"},"Match network traffic to signatures (rules)")),(0,a.kt)("h2",{id:"host-based"},"Host-based"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Have access to the entire host"),(0,a.kt)("li",{parentName:"ul"},"Monitor network traffic"),(0,a.kt)("li",{parentName:"ul"},"Monitor files, logs")),(0,a.kt)("h2",{id:"ossec"},"OSSEC"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ossec.net/"},"OSSEC-HIDS")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Host-based"),(0,a.kt)("li",{parentName:"ul"},"Support server client (agent), local, hybrid mode")),(0,a.kt)("h2",{id:"fail2ban"},"fail2ban"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IPS"),(0,a.kt)("li",{parentName:"ul"},"Monitor logs")),(0,a.kt)("h2",{id:"snort"},"Snort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IDS / IPS"),(0,a.kt)("li",{parentName:"ul"},"Single-thread"),(0,a.kt)("li",{parentName:"ul"},"Network-based"),(0,a.kt)("li",{parentName:"ul"},"Use signatures"),(0,a.kt)("li",{parentName:"ul"},"Acquired by Cisco")),(0,a.kt)("h2",{id:"suricata"},"Suricata"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://suricata.io/"},"Suricata")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IDS / IPS"),(0,a.kt)("li",{parentName:"ul"},"Multi-thread"),(0,a.kt)("li",{parentName:"ul"},"Network-based"),(0,a.kt)("li",{parentName:"ul"},"Use signatures"),(0,a.kt)("li",{parentName:"ul"},"Support most Snort rules")),(0,a.kt)("h2",{id:"zeek"},"Zeek"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zeek.org/"},"Zeek")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IDS"),(0,a.kt)("li",{parentName:"ul"},"Use signatures"),(0,a.kt)("li",{parentName:"ul"},"Network-based")))}c.isMDXComponent=!0}}]);