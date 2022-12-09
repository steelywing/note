"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2103],{7485:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var r=n(6687);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=d(n),s=a,k=c["".concat(o,".").concat(s)]||c[s]||u[s]||l;return n?r.createElement(k,p(p({ref:e},m),{},{components:n})):r.createElement(k,p({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6746:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(6274),a=(n(6687),n(7485));const l={},p="TCP Dump",i={unversionedId:"Linux/tcpdump",id:"Linux/tcpdump",title:"TCP Dump",description:"Dump network traffic / packet",source:"@site/docs/Linux/tcpdump.md",sourceDirName:"Linux",slug:"/Linux/tcpdump",permalink:"/note/Linux/tcpdump",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/tcpdump.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"systemd",permalink:"/note/Linux/systemd"},next:{title:"tmux",permalink:"/note/Linux/tmux"}},o={},d=[{value:"List interface",id:"list-interface",level:2},{value:"Dump traffic",id:"dump-traffic",level:2}],m={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tcp-dump"},"TCP Dump"),(0,a.kt)("p",null,"Dump network traffic / packet"),(0,a.kt)("h2",{id:"list-interface"},"List interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tcpdump { -D | --list-interfaces }\n")),(0,a.kt)("h2",{id:"dump-traffic"},"Dump traffic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tcpdump [<option>] [<expression>]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-i {<interface>\\|any}")),(0,a.kt)("td",{parentName:"tr",align:null},"Listen on interface",(0,a.kt)("br",null),"Default: lowest numbered of interface list")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-n")),(0,a.kt)("td",{parentName:"tr",align:null},"Not resolve hostname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-nn")),(0,a.kt)("td",{parentName:"tr",align:null},"Not resolve hostname or port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-v")),(0,a.kt)("td",{parentName:"tr",align:null},"Verbose")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-w <file.pcap>")),(0,a.kt)("td",{parentName:"tr",align:null},"Write to file")))),(0,a.kt)("p",null,"Expression"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.tcpdump.org/manpages/pcap-filter.7.html"},"Reference"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Expression"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[src\\|dst] {host\\|ip} [not] <host>")),(0,a.kt)("td",{parentName:"tr",align:null},"Match ",(0,a.kt)("inlineCode",{parentName:"td"},"<host>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{host\\|ip} <host> and <host>")),(0,a.kt)("td",{parentName:"tr",align:null},"Match traffic between ",(0,a.kt)("inlineCode",{parentName:"td"},"<host>")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"<host>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[src\\|dst] net <IP address>[/<prefix length>]")),(0,a.kt)("td",{parentName:"tr",align:null},"Match IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<IP address>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<#>[.<#>[.<#>[.<#>]]]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[src\\|dst] port <port>")),(0,a.kt)("td",{parentName:"tr",align:null},"Port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[src\\|dst] portrange <port>-<port>")),(0,a.kt)("td",{parentName:"tr",align:null},"Port range")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{tcp\\|udp\\|icmp}")),(0,a.kt)("td",{parentName:"tr",align:null},"TCP / UDP / ICMP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vlan [VLAN ID]")),(0,a.kt)("td",{parentName:"tr",align:null},"VLAN",(0,a.kt)("br",null),"Default: all IEEE 802.1Q packet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{not\\|!} <expression>")),(0,a.kt)("td",{parentName:"tr",align:null},"not")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<expression> { and \\| && } <expression>")),(0,a.kt)("td",{parentName:"tr",align:null},"and")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<expression> { or \\| \\|\\| } <expression>")),(0,a.kt)("td",{parentName:"tr",align:null},"or")))))}u.isMDXComponent=!0}}]);