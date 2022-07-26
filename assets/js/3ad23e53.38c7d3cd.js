"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9786],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(r),m=a,d=s["".concat(p,".").concat(m)]||s[m]||k[m]||l;return r?n.createElement(d,o(o({ref:e},c),{},{components:r})):n.createElement(d,o({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},186:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={id:"index",slug:".",sidebar_position:0},o="Network",i={unversionedId:"Network/index",id:"Network/index",title:"Network",description:"Routing",source:"@site/docs/Network/README.md",sourceDirName:"Network",slug:"/Network/",permalink:"/note/Network/",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/README.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",slug:".",sidebar_position:0},sidebar:"network",next:{title:"ASA",permalink:"/note/Network/Cisco/ASA"}},p={},u=[{value:"Routing",id:"routing",level:2},{value:"Path selection",id:"path-selection",level:3},{value:"Layer",id:"layer",level:2},{value:"IGP (Interior Gateway Protocol)",id:"igp-interior-gateway-protocol",level:2},{value:"CPE",id:"cpe",level:2}],c={toc:u};function k(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network"},"Network"),(0,a.kt)("h2",{id:"routing"},"Routing"),(0,a.kt)("h3",{id:"path-selection"},"Path selection"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Routing#Path_selection"},"Reference"))),(0,a.kt)("p",null,"Priority"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prefix-Length"),(0,a.kt)("p",{parentName:"li"},"Longer subnet masks are preferred")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Metric"),(0,a.kt)("p",{parentName:"li"},"Lower metric/cost is preferred"))),(0,a.kt)("h2",{id:"layer"},"Layer"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"https://tools.ietf.org/html/rfc1122"},"RFC1122")," (Internet Standard)"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"https://en.wikipedia.org/wiki/OSI_model"},"OSI Model")),(0,a.kt)("th",{parentName:"tr",align:null},"Internet Protocol Suite"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application"),(0,a.kt)("td",{parentName:"tr",align:null},"Application ",(0,a.kt)("br",null)," Presentation ",(0,a.kt)("br",null)," Session"),(0,a.kt)("td",{parentName:"tr",align:null},"BGP, DHCP, DNS, FTP, HTTP, HTTPS, IMAP, SMTP, LDAP, NTP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Transport"),(0,a.kt)("td",{parentName:"tr",align:null},"Transport"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP, UDP, SCTP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Internet"),(0,a.kt)("td",{parentName:"tr",align:null},"Network"),(0,a.kt)("td",{parentName:"tr",align:null},"IPv4, IPv6, IPsec, ICMP, ICMPv6, IGMP, OSPF")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Link"),(0,a.kt)("td",{parentName:"tr",align:null},"Data Link"),(0,a.kt)("td",{parentName:"tr",align:null},"ARP, NDP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Physical"),(0,a.kt)("td",{parentName:"tr",align:null},"IEEE 802.11 (WiFi), 100BASE-TX, 1000BASE-T")))),(0,a.kt)("p",null,"OSI: Open Systems Interconnection"),(0,a.kt)("h2",{id:"igp-interior-gateway-protocol"},"IGP (Interior Gateway Protocol)"),(0,a.kt)("p",null,"\u5167\u90e8\u9598\u9053\u5354\u5b9a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Within an autonomous system")),(0,a.kt)("p",null,"Include"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RIP"),(0,a.kt)("li",{parentName:"ul"},"IGRP"),(0,a.kt)("li",{parentName:"ul"},"OSPF"),(0,a.kt)("li",{parentName:"ul"},"IS-IS")),(0,a.kt)("h2",{id:"cpe"},"CPE"),(0,a.kt)("p",null,"Customer Premises Equipment"),(0,a.kt)("p",null,"\u7528\u6236\u7aef\u8a2d\u5099"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f4d\u65bc User \u7aef"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u65bc User \u8207 ISP \u9023\u63a5\u7684\u88dd\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ISP \u7684 Router\uff0c\u96fb\u8a71\u2026")))}k.isMDXComponent=!0}}]);