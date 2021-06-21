(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9786],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return s}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),k=u(r),s=a,d=k["".concat(p,".").concat(s)]||k[s]||m[s]||l;return r?n.createElement(d,o(o({ref:e},c),{},{components:r})):n.createElement(d,o({ref:e},c))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4795:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=["components"],i={},p={unversionedId:"Network/README",id:"Network/README",isDocsHomePage:!1,title:"README",description:"Routing",source:"@site/docs/Network/README.md",sourceDirName:"Network",slug:"/Network/README",permalink:"/note/Network/README",editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/README.md",version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"Interface",permalink:"/note/Network/Interface"},next:{title:"Nginx",permalink:"/note/Nginx"}},u=[{value:"Routing",id:"routing",children:[{value:"Path selection",id:"path-selection",children:[]}]},{value:"Layer",id:"layer",children:[]},{value:"IGP (Interior Gateway Protocol)",id:"igp-interior-gateway-protocol",children:[]}],c={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"routing"},"Routing"),(0,l.kt)("h3",{id:"path-selection"},"Path selection"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Routing#Path_selection"},"Reference")),(0,l.kt)("p",null,"Priority"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Prefix-Length"),(0,l.kt)("p",{parentName:"li"},"Longer subnet masks are preferred")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Metric"),(0,l.kt)("p",{parentName:"li"},"Lower metric/cost is preferred"))),(0,l.kt)("h2",{id:"layer"},"Layer"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://tools.ietf.org/html/rfc1122"},"RFC1122")," (Internet Standard)"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://en.wikipedia.org/wiki/OSI_model"},"OSI Model")),(0,l.kt)("th",{parentName:"tr",align:null},"Internet Protocol Suite"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application"),(0,l.kt)("td",{parentName:"tr",align:null},"Application ",(0,l.kt)("br",null)," Presentation ",(0,l.kt)("br",null)," Session"),(0,l.kt)("td",{parentName:"tr",align:null},"BGP, DHCP, DNS, FTP, HTTP, HTTPS, IMAP, SMTP, LDAP, NTP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transport"),(0,l.kt)("td",{parentName:"tr",align:null},"Transport"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP, UDP, SCTP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Internet"),(0,l.kt)("td",{parentName:"tr",align:null},"Network"),(0,l.kt)("td",{parentName:"tr",align:null},"IPv4, IPv6, IPsec, ICMP, ICMPv6, IGMP, OSPF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Link"),(0,l.kt)("td",{parentName:"tr",align:null},"Data Link"),(0,l.kt)("td",{parentName:"tr",align:null},"ARP, NDP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Physical"),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE 802.11 (WiFi), 100BASE-TX, 1000BASE-T")))),(0,l.kt)("p",null,"OSI: Open Systems Interconnection"),(0,l.kt)("h2",{id:"igp-interior-gateway-protocol"},"IGP (Interior Gateway Protocol)"),(0,l.kt)("p",null,"\u5167\u90e8\u9598\u9053\u5354\u5b9a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Within an autonomous system")),(0,l.kt)("p",null,"Include"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RIP"),(0,l.kt)("li",{parentName:"ul"},"IGRP"),(0,l.kt)("li",{parentName:"ul"},"OSPF"),(0,l.kt)("li",{parentName:"ul"},"IS-IS")))}m.isMDXComponent=!0}}]);