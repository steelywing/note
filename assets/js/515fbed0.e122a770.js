"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Network"},l="Network - Windows",i={unversionedId:"Windows/Network",id:"Windows/Network",title:"Network - Windows",description:"Host name resolution order",source:"@site/docs/Windows/Network.md",sourceDirName:"Windows",slug:"/Windows/Network",permalink:"/note/Windows/Network",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/Network.md",tags:[],version:"current",frontMatter:{sidebar_label:"Network"},sidebar:"windows",previous:{title:"Fix",permalink:"/note/Windows/Fix"},next:{title:"Registry",permalink:"/note/Windows/Registry"}},s={},p=[{value:"Host name resolution order",id:"host-name-resolution-order",level:2},{value:"Firewall",id:"firewall",level:2},{value:"Change default to block",id:"change-default-to-block",level:3},{value:"Network Profile",id:"network-profile",level:2},{value:"IP address conflict",id:"ip-address-conflict",level:2},{value:"Network monitor",id:"network-monitor",level:2},{value:"Network emulator",id:"network-emulator",level:2},{value:"Show TCP / UDP connection",id:"show-tcp--udp-connection",level:2},{value:"Reset (Repair) TCP/IP stack",id:"reset-repair-tcpip-stack",level:2},{value:"Reserve TCP/UDP port",id:"reserve-tcpudp-port",level:2},{value:"TCP/IP time-out",id:"tcpip-time-out",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network---windows"},"Network - Windows"),(0,o.kt)("h2",{id:"host-name-resolution-order"},"Host name resolution order"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-au/help/172218/microsoft-tcp-ip-host-name-resolution-order"},"Reference")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Self host name"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"hosts")," file (",(0,o.kt)("inlineCode",{parentName:"li"},"%SystemRoot%\\System32\\drivers\\etc\\hosts"),")"),(0,o.kt)("li",{parentName:"ol"},"DNS"),(0,o.kt)("li",{parentName:"ol"},"NBNS (NetBIOS Name Service) / LLMNR (Link-local Multicast Name Resolution)")),(0,o.kt)("h2",{id:"firewall"},"Firewall"),(0,o.kt)("h3",{id:"change-default-to-block"},"Change default to block"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.howtogeek.com/112564/how-to-create-advanced-firewall-rules-in-the-windows-firewall/"},"Reference"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Windows Firewall",src:r(3608).Z,width:"1273",height:"675"})),(0,o.kt)("h2",{id:"network-profile"},"Network Profile"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/note/Windows/PowerShell/Network#network-profile"},"PowerShell")),(0,o.kt)("h2",{id:"ip-address-conflict"},"IP address conflict"),(0,o.kt)("p",null,"Windows will use IP ",(0,o.kt)("inlineCode",{parentName:"p"},"169.254.0.0/16")," if IP address conflict"),(0,o.kt)("h2",{id:"network-monitor"},"Network monitor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sysinternals/downloads/tcpview"},"TCPView")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.wireshark.org/"},"WireShark")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.winpcap.org/windump/"},"WinDump"))),(0,o.kt)("h2",{id:"network-emulator"},"Network emulator"),(0,o.kt)("p",null,"Delay / Drop / Bandwidth ..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jagt/clumsy"},"clumsy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/basil00/Divert"},"WinDivert"))),(0,o.kt)("h2",{id:"show-tcp--udp-connection"},"Show TCP / UDP connection"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/note/Windows/PowerShell/Network#show-tcp-listening-port"},"PowerShell")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"netstat <option>\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Permission"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-a")),(0,o.kt)("td",{parentName:"tr",align:null},"Displays all connections and listening ports")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-n")),(0,o.kt)("td",{parentName:"tr",align:null},"Displays addresses and port numbers in numerical form")))),(0,o.kt)("h2",{id:"reset-repair-tcpip-stack"},"Reset (Repair) TCP/IP stack"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/help/299357/how-to-reset-tcp-ip-by-using-the-netshell-utility"},"Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/help/10741/windows-fix-network-connection-issues"},"Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"netsh winsock reset\nnetsh int[erface] ip[v4] reset\nnetsh int[erface] ipv6 reset\nipconfig /flushdns\n")),(0,o.kt)("h2",{id:"reserve-tcpudp-port"},"Reserve TCP/UDP port"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/2665809/you-cannot-exclude-ports-by-using-the-reservedports-registry-key-in-wi"},"Reference")),(0,o.kt)("p",null,"Add / Delete reserved port"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"netsh int[erface] ipv4 `\n    { add | delete } ex[cludedportrange] `\n    { [protocol=] tcp | udp } `\n    <start port> `\n    <number of ports> `\n    [ [store=] active | persistent ]\n")),(0,o.kt)("p",null,"Show reserved port"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"netsh int[erface] ipv4 `\n    show excludedportrange { tcp | udp }\n")),(0,o.kt)("h2",{id:"tcpip-time-out"},"TCP/IP time-out"),(0,o.kt)("p",null,"TCP/IP re-transmission time-out"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/topic/how-to-modify-the-tcp-ip-maximum-retransmission-time-out-7ae0982a-4963-fa7e-ee79-ff6d0da73db8"},"Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/topic/you-cannot-customize-some-tcp-configurations-by-using-the-netsh-command-in-windows-server-2008-r2-c1feebea-82a8-cb05-83c7-46ffb5fd9cec"},"Reference")))),(0,o.kt)("p",null,"Get"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"netsh interface tcp show global\n")),(0,o.kt)("p",null,"Set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"netsh interface tcp set global initialrto=<ms>\n")))}u.isMDXComponent=!0},3608:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/windows-firewall-dffca679be2f1e095a45a6756714d8f6.png"}}]);