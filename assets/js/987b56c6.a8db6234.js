"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3154],{7485:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>N});var a=n(6687);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=m(n),N=r,c=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4626:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(6274),r=(n(6687),n(7485));const l={},i="Nmap",p={unversionedId:"Linux/Nmap",id:"Linux/Nmap",title:"Nmap",description:"Ref: Nmap Reference Guide",source:"@site/docs/Linux/Nmap.md",sourceDirName:"Linux",slug:"/Linux/Nmap",permalink:"/note/Linux/Nmap",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Nmap.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Network",permalink:"/note/Linux/Network"},next:{title:"Package management",permalink:"/note/Linux/Package management"}},o={},m=[{value:"Host",id:"host",level:2},{value:"Host discovery",id:"host-discovery",level:2},{value:"Scan",id:"scan",level:2}],d={toc:m};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nmap"},"Nmap"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://nmap.org/book/man.html"},"Nmap Reference Guide"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap <option>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-oG")),(0,r.kt)("td",{parentName:"tr",align:null},"Grep-able Output")))),(0,r.kt)("h2",{id:"host"},"Host"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<host>[/prefix]")),(0,r.kt)("td",{parentName:"tr",align:null},"Host or CIDR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10.0.0-255.0-255")),(0,r.kt)("td",{parentName:"tr",align:null},"Range")))),(0,r.kt)("h2",{id:"host-discovery"},"Host discovery"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"-PE -PS443 -PA80 -PP")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-Pn")),(0,r.kt)("td",{parentName:"tr",align:null},"No ping (Skip host discovery)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-PS<port list>")),(0,r.kt)("td",{parentName:"tr",align:null},"TCP SYN ping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-PA<port list>")),(0,r.kt)("td",{parentName:"tr",align:null},"TCP ACK ping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-PU<port list>")),(0,r.kt)("td",{parentName:"tr",align:null},"UDP ping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-PE")),(0,r.kt)("td",{parentName:"tr",align:null},"ICMP ping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-PP")),(0,r.kt)("td",{parentName:"tr",align:null},"ICMP timestamp request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-PR")),(0,r.kt)("td",{parentName:"tr",align:null},"ARP ping",(0,r.kt)("br",null),"Default: use on local ethernet")))),(0,r.kt)("h2",{id:"scan"},"Scan"),(0,r.kt)("p",null,"Default: scan most common 1,000 ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-p <port list>")),(0,r.kt)("td",{parentName:"tr",align:null},"Port scan",(0,r.kt)("br",null),(0,r.kt)("br",null),"Ex:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-p 1-1000"),(0,r.kt)("br",null),"UDP: 1-10, 20 / TCP: 100-200 / SCTP: 300",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-p U:1-10,20,T:100-200,S:300"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-F")),(0,r.kt)("td",{parentName:"tr",align:null},"Scan most common 100 ports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--top-ports <n>")),(0,r.kt)("td",{parentName:"tr",align:null},"Scan ",(0,r.kt)("inlineCode",{parentName:"td"},"<n>")," most common ports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-sn")),(0,r.kt)("td",{parentName:"tr",align:null},"Disable port scan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-sS")),(0,r.kt)("td",{parentName:"tr",align:null},"TCP SYN scan (Default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-sT")),(0,r.kt)("td",{parentName:"tr",align:null},"TCP connect scan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-sU")),(0,r.kt)("td",{parentName:"tr",align:null},"UDP scan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-T<0-5>")),(0,r.kt)("td",{parentName:"tr",align:null},"Timing template",(0,r.kt)("br",null),(0,r.kt)("br",null),"paranoid (0), sneaky (1), polite (2), normal (3), aggressive (4), and insane (5)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-sV")),(0,r.kt)("td",{parentName:"tr",align:null},"Version detection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-O")),(0,r.kt)("td",{parentName:"tr",align:null},"OS detection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-sC")),(0,r.kt)("td",{parentName:"tr",align:null},"Nmap Scripting Engine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-A")),(0,r.kt)("td",{parentName:"tr",align:null},"OS detection, Service / Version detection, Nmap Scripting Engine")))))}u.isMDXComponent=!0}}]);