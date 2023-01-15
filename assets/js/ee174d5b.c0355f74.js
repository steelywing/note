"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4751],{7485:(e,t,o)=>{o.d(t,{Zo:()=>g,kt:()=>m});var n=o(6687);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),c=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},g=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,d=u["".concat(a,".").concat(m)]||u[m]||p[m]||i;return o?n.createElement(d,l(l({ref:t},g),{},{components:o})):n.createElement(d,l({ref:t},g))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},680:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(6274),r=(o(6687),o(7485));const i={tags:["Cisco","IOS","Log"]},l="Log",s={unversionedId:"Network/Cisco/IOS/Log",id:"Network/Cisco/IOS/Log",title:"Log",description:"Monitor log in Telnet / SSH",source:"@site/docs/Network/Cisco/IOS/Log.md",sourceDirName:"Network/Cisco/IOS",slug:"/Network/Cisco/IOS/Log",permalink:"/note/Network/Cisco/IOS/Log",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco/IOS/Log.md",tags:[{label:"Cisco",permalink:"/note/tags/cisco"},{label:"IOS",permalink:"/note/tags/ios"},{label:"Log",permalink:"/note/tags/log"}],version:"current",frontMatter:{tags:["Cisco","IOS","Log"]},sidebar:"network",previous:{title:"Diagnostic",permalink:"/note/Network/Cisco/IOS/Diagnostic"},next:{title:"Login / Authenticate",permalink:"/note/Network/Cisco/IOS/LogIn"}},a={},c=[{value:"Monitor log in Telnet / SSH",id:"monitor-log-in-telnet--ssh",level:2},{value:"Monitor log in Console",id:"monitor-log-in-console",level:2},{value:"Display timestamp in log / debug",id:"display-timestamp-in-log--debug",level:2},{value:"Log to SysLog server",id:"log-to-syslog-server",level:2},{value:"Limit messages logged to the syslog server",id:"limit-messages-logged-to-the-syslog-server",level:2},{value:"Send log",id:"send-log",level:2}],g={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"log"},"Log"),(0,r.kt)("h2",{id:"monitor-log-in-telnet--ssh"},"Monitor log in Telnet / SSH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Switch# terminal [no] monitor\n")),(0,r.kt)("h2",{id:"monitor-log-in-console"},"Monitor log in Console"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Switch(config)# [no] logging console\n")),(0,r.kt)("h2",{id:"display-timestamp-in-log--debug"},"Display timestamp in log / debug"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Switch(config)# service timestamps { log | debug } datetime localtime\n")),(0,r.kt)("h2",{id:"log-to-syslog-server"},"Log to SysLog server"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_55_se/configuration/guide/scg_2960/swlog.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Switch(config)# logging <ip>\n")),(0,r.kt)("h2",{id:"limit-messages-logged-to-the-syslog-server"},"Limit messages logged to the syslog server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Switch(config)# logging trap <level>\n")),(0,r.kt)("h2",{id:"send-log"},"Send log"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Switch# send log <message>\n")))}p.isMDXComponent=!0}}]);