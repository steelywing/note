"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,k=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},o="SSH tunnel",p={unversionedId:"Linux/SSH-Tunnel",id:"Linux/SSH-Tunnel",title:"SSH tunnel",description:"SSH tunnel / Port forward",source:"@site/docs/Linux/SSH-Tunnel.md",sourceDirName:"Linux",slug:"/Linux/SSH-Tunnel",permalink:"/note/Linux/SSH-Tunnel",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/SSH-Tunnel.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"SELinux",permalink:"/note/Linux/SELinux"},next:{title:"SSH",permalink:"/note/Linux/SSH"}},i={},s=[{value:"Option",id:"option",level:2},{value:"SSH client \u27a1 SSH server",id:"ssh-client--ssh-server",level:2},{value:"SSH server \u27a1 SSH client",id:"ssh-server--ssh-client",level:2},{value:"SOCKS",id:"socks",level:2},{value:"Example",id:"example",level:2},{value:"SSH tunnel on <code>localhost</code>",id:"ssh-tunnel-on-localhost",level:3},{value:"SSH reverse tunnel",id:"ssh-reverse-tunnel",level:3}],m={toc:s};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh-tunnel"},"SSH tunnel"),(0,a.kt)("p",null,"SSH tunnel / Port forward"),(0,a.kt)("p",null,"On SSH server, check ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowTcpForwarding")," is allow (",(0,a.kt)("inlineCode",{parentName:"p"},"yes"),"), default is allow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/etc/ssh/sshd_config"',title:'"/etc/ssh/sshd_config"'},"AllowTcpForwarding yes\n")),(0,a.kt)("h2",{id:"option"},"Option"),(0,a.kt)("p",null,"On SSH client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh [<option>] [<user>@]<SSH remote server host>\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-N")),(0,a.kt)("td",{parentName:"tr",align:null},"Do not execute a remote command")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-f")),(0,a.kt)("td",{parentName:"tr",align:null},"Run in background")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-p <port>")),(0,a.kt)("td",{parentName:"tr",align:null},"Port to connect to on the remote host")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"ssh-client--ssh-server"},"SSH client \u27a1 SSH server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"-L [<SSH client bind address>:]<SSH client port>:<remote server host>:<remote server port>\n")),(0,a.kt)("p",null,"Port forward from ",(0,a.kt)("inlineCode",{parentName:"p"},"<SSH client port>")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"<remote server host>:<remote server port>")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If bind address is empty or ",(0,a.kt)("inlineCode",{parentName:"li"},"*")," (",(0,a.kt)("inlineCode",{parentName:"li"},"[*]:<port>:<host>:<port>"),"), will bind to all interfaces.")),(0,a.kt)("h2",{id:"ssh-server--ssh-client"},"SSH server \u27a1 SSH client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"-R [<SSH server bind address>:]<SSH server port>:<local server host>:<local server port>\n")),(0,a.kt)("p",null,"Port forward from ",(0,a.kt)("inlineCode",{parentName:"p"},"<SSH server port>")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"<local server host>:<local server port>")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If bind address is empty or ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," (",(0,a.kt)("inlineCode",{parentName:"p"},"[*]:<port>:<host>:<port>"),"), will bind to all interfaces.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If no bind address colon (",(0,a.kt)("inlineCode",{parentName:"p"},"<port>:<host>:<port>"),"), will bind to loopback interface."))),(0,a.kt)("h2",{id:"socks"},"SOCKS"),(0,a.kt)("p",null,"Dynamic forward from local to remote"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -D [<local bind address>:]<local port> <user>@<SSH server>\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SSH Tunnel",src:n(1550).Z,width:"696",height:"352"})),(0,a.kt)("p",null,"Forward ",(0,a.kt)("em",{parentName:"p"},"SSH Client TCP port")," \u27a1 ",(0,a.kt)("em",{parentName:"p"},"SSH Server")," (NAT) \u27a1 ",(0,a.kt)("em",{parentName:"p"},"Destination address port")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# SSH Client\nssh -L :8000:10.0.2.2:80 10.0.1.2\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On ",(0,a.kt)("em",{parentName:"p"},"Client"),", open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.0.0.2:8000/"),", will port forward to ",(0,a.kt)("em",{parentName:"p"},"Remote Server")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.0.2.2:80/")))),(0,a.kt)("h3",{id:"ssh-tunnel-on-localhost"},"SSH tunnel on ",(0,a.kt)("inlineCode",{parentName:"h3"},"localhost")),(0,a.kt)("p",null,"Forward ",(0,a.kt)("em",{parentName:"p"},"SSH Server TCP port")," (NAT) \u27a1 ",(0,a.kt)("em",{parentName:"p"},"Destination address port")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# SSH Remote Server\nssh -L 8000:10.0.2.2:80 127.0.0.1\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On ",(0,a.kt)("em",{parentName:"p"},"SSH Client"),", open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.0.1.2:8000/"),", will port forward to ",(0,a.kt)("em",{parentName:"p"},"Remote Server")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.0.2.2:80/")))),(0,a.kt)("h3",{id:"ssh-reverse-tunnel"},"SSH reverse tunnel"),(0,a.kt)("p",null,"Forward ",(0,a.kt)("em",{parentName:"p"},"SSH Server TCP port")," \u27a1 ",(0,a.kt)("em",{parentName:"p"},"SSH Client")," (NAT) \u27a1 ",(0,a.kt)("em",{parentName:"p"},"Destination address port")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SSH Reverse Tunnel",src:n(3559).Z,width:"679",height:"352"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enable ",(0,a.kt)("inlineCode",{parentName:"p"},"GatewayPorts")," on SSH server"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"# /etc/ssh/sshd_config\nGatewayPorts yes\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# SSH Client\nssh -R :8000:10.0.2.2:80 10.0.1.1\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On ",(0,a.kt)("em",{parentName:"p"},"SSH Server"),", open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8000/")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.0.1.2:80/"),", will port forward to ",(0,a.kt)("em",{parentName:"p"},"Server")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.0.2.2:80/")))))}u.isMDXComponent=!0},3559:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SSH Reverse Tunnel-84a8291e8d6d046fc3c8f0fc31abe22a.png"},1550:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SSH Tunnel-3c8ea31e3e91d5c9bff501d9ad88d315.png"}}]);