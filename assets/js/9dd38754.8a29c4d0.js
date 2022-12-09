"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2120],{7485:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(6687);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6719:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(6274),r=(n(6687),n(7485));const l={},i="iptables",p={unversionedId:"Linux/iptables",id:"Linux/iptables",title:"iptables",description:"Arch Linux iptables",source:"@site/docs/Linux/iptables.md",sourceDirName:"Linux",slug:"/Linux/iptables",permalink:"/note/Linux/iptables",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/iptables.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"inode",permalink:"/note/Linux/inode"},next:{title:"rsync",permalink:"/note/Linux/rsync"}},o={},d=[{value:"Flow",id:"flow",level:2},{value:"Policy",id:"policy",level:2},{value:"Rule",id:"rule",level:2},{value:"Extension",id:"extension",level:2},{value:"Redirect input to other port",id:"redirect-input-to-other-port",level:2},{value:"Masquerading",id:"masquerading",level:2},{value:"Rule",id:"rule-1",level:2}],m={toc:d};function s(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iptables"},"iptables"),(0,r.kt)("admonition",{title:"Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/iptables"},"Arch Linux iptables"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Verbose list rules"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iptables -v -L [<chain>]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"List rules"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iptables -S [<chain>]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dump iptables to file"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iptables-save > <file>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Restore iptables from file"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iptables-restore < <file>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Save iptables (Red Hat <= 6)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"service iptables save"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create new chain (User-defined)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iptables -N <chain>"))))),(0,r.kt)("h2",{id:"flow"},"Flow"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chains"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INPUT")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"OUTPUT")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"FORWARD")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"PREROUTING")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"POSTROUTING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tables"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"raw")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"filter")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"nat")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"mangle")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"security")," (Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"filter"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Targets"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ACCEPT")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"DROP")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"QUEUE")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"RETURN")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"REJECT")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"LOG"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.netfilter.org/documentation/HOWTO/packet-filtering-HOWTO-6.html"},"Ref"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If any chain says ",(0,r.kt)("inlineCode",{parentName:"li"},"DROP"),", it is killed there"),(0,r.kt)("li",{parentName:"ul"},"If chain says ",(0,r.kt)("inlineCode",{parentName:"li"},"ACCEPT"),", it continue process"),(0,r.kt)("li",{parentName:"ul"},"User-defined chains can not have a default policy"),(0,r.kt)("li",{parentName:"ul"},"If no rule is matched in a User-defined chain, the default behaviour is to jump back to the originating chain"))),(0,r.kt)("admonition",{title:"Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://stuffphilwrites.com/2014/09/iptables-processing-flowchart/"},"iptables Processing Flowchart"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"iptables flow chart",src:n(9194).Z,width:"561",height:"941"})),(0,r.kt)("h2",{id:"policy"},"Policy"),(0,r.kt)("p",null,"Policy = Default target"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"iptables -P <chain> <target>\n")),(0,r.kt)("h2",{id:"rule"},"Rule"),(0,r.kt)("admonition",{title:"Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.netfilter.org/documentation/HOWTO/packet-filtering-HOWTO-7.html"},"netfilter documentation"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-A")),(0,r.kt)("td",{parentName:"tr",align:null},"Append rule to chain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-I")),(0,r.kt)("td",{parentName:"tr",align:null},"Insert rule to ",(0,r.kt)("inlineCode",{parentName:"td"},"rule number")," position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-D")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete rule ",(0,r.kt)("inlineCode",{parentName:"td"},"rule number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-p")),(0,r.kt)("td",{parentName:"tr",align:null},"Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10.0.0.1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0.0.0/0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"10.0.0.0/24"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!")),(0,r.kt)("td",{parentName:"tr",align:null},"Not")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"iptables \n    { -A <chain> | -I <chain> [rule number] | -D <chain> [rule number] }\n    [[!] -i <interface>]\n    [[!] -o <interface>]\n    [[!] -s <src IP address>[/<prefix length>]]\n    [[!] -d <dest IP address>[/<prefix length>]]\n    [[!] -p {icmp|tcp|udp}]\n    [[!] --sport <src port>[,...]]\n    [[!] --dport <dest port>[,...]]\n    -j <target>\n")),(0,r.kt)("h2",{id:"extension"},"Extension"),(0,r.kt)("admonition",{title:"Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"http://ipset.netfilter.org/iptables-extensions.man.html"},"iptables-extensions"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"iptables <rule>\n    [-m state [!] --state { NEW | ESTABLISHED | RELATED }]\n    [-m conntrack \n        [[!] --ctstate { INVALID | NEW | ESTABLISHED | RELATED | UNTRACKED | SNAT | DNAT }]\n    ]\n    -j <target>\n")),(0,r.kt)("h2",{id:"redirect-input-to-other-port"},"Redirect input to other port"),(0,r.kt)("admonition",{title:"Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.netfilter.org/documentation/HOWTO/NAT-HOWTO-6.html"},"How To Mangle The Packets"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"iptables -t nat -A PREROUTING [-i <interface>] -p tcp --dport <from port> -j REDIRECT --to-port <to port>\n")),(0,r.kt)("h2",{id:"masquerading"},"Masquerading"),(0,r.kt)("admonition",{title:"Reference",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.netfilter.org/documentation/HOWTO/NAT-HOWTO-6.html"},"Masquerading"))),(0,r.kt)("p",null,"Source NAT"),(0,r.kt)("p",null,"Use the address of the interface the packet is going out as source address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"iptables -t nat -A POSTROUTING -o <interface> -j MASQUERADE\n")),(0,r.kt)("h2",{id:"rule-1"},"Rule"),(0,r.kt)("p",null,"Example rule"),(0,r.kt)("p",null,"Allow all established packet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n")),(0,r.kt)("p",null,"Allow TCP port 22 (SSH) connect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT\nsudo iptables -A OUTPUT -p tcp --sport 22 -m conntrack --ctstate ESTABLISHED -j ACCEPT\n")))}s.isMDXComponent=!0},9194:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/iptables-39c858e994151390b8948deabf167b1c.svg"}}]);