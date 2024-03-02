"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1796],{94441:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(75366),i=r(26192);const s={},l="HP / H3C",c={id:"Network/H3C",title:"HP / H3C",description:"System view / level",source:"@site/docs/Network/H3C.md",sourceDirName:"Network",slug:"/Network/H3C",permalink:"/note/Network/H3C",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/H3C.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"FortiGate",permalink:"/note/Network/FortiGate"},next:{title:"Interface",permalink:"/note/Network/Interface"}},a={},d=[{value:"System view / level",id:"system-view--level",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Enable telnet",id:"enable-telnet",level:2},{value:"Host name",id:"host-name",level:2},{value:"VLAN",id:"vlan",level:2},{value:"Authenticate",id:"authenticate",level:2},{value:"Create local user",id:"create-local-user",level:3},{value:"Remove local user",id:"remove-local-user",level:3},{value:"Enable user authentication",id:"enable-user-authentication",level:3},{value:"Enable password authentication",id:"enable-password-authentication",level:3},{value:"Interface IP address",id:"interface-ip-address",level:2},{value:"Access / Trunk",id:"access--trunk",level:2},{value:"PoE",id:"poe",level:2},{value:"Route",id:"route",level:2},{value:"Timezone",id:"timezone",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hp--h3c",children:"HP / H3C"}),"\n",(0,t.jsx)(n.h2,{id:"system-view--level",children:"System view / level"}),"\n",(0,t.jsx)(n.p,{children:"Enter system view"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<H3C> sys[tem-view]\n[H3C]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return to user view"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] quit\n<H3C>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Show configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] dis[play] [cur]rent-configuration\n"})}),"\n",(0,t.jsx)(n.p,{children:"Save configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] save\n"})}),"\n",(0,t.jsx)(n.h2,{id:"enable-telnet",children:"Enable telnet"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] telnet server enable\n"})}),"\n",(0,t.jsx)(n.h2,{id:"host-name",children:"Host name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] sysname [host name]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vlan",children:"VLAN"}),"\n",(0,t.jsx)(n.p,{children:"Create VLAN"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] vlan <VLAN ID> [ to <VLAN ID> ]\n"})}),"\n",(0,t.jsx)(n.p,{children:"VLAN name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[Switch-vlan] name <name>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"authenticate",children:"Authenticate"}),"\n",(0,t.jsx)(n.p,{children:"Use local user authentication"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] scheme { local | none  }\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-local-user",children:"Create local user"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] local-user <user name>\n[H3C-luser-<user name>] password cipher <password>\n[H3C-luser-<user name>] service-type ssh telnet terminal\n[H3C-luser-<user name>] authorization-attribute level 3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"remove-local-user",children:"Remove local user"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] undo local-user <user name>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"enable-user-authentication",children:"Enable user authentication"}),"\n",(0,t.jsx)(n.p,{children:"Console"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] user-interface aux 0\n[H3C-ui-aux0] authentication-mode scheme\n"})}),"\n",(0,t.jsx)(n.p,{children:"VTY ( telnet / SSH )"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] user-interface vty 0 15\n[H3C-ui-vty0-15] authentication-mode scheme\n"})}),"\n",(0,t.jsx)(n.h3,{id:"enable-password-authentication",children:"Enable password authentication"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C-ui-<UI>] user privilege level 3\n[H3C-ui-<UI>] set authentication password cipher <password>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-ip-address",children:"Interface IP address"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] int[erface] vlan[-interface] <VLAN ID>\n[H3C-Vlan-interface] ip address <IP address> <Net mask>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"access--trunk",children:"Access / Trunk"}),"\n",(0,t.jsx)(n.p,{children:"Trunk"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] int[erface] E[thernet]<ID>\n[H3C-Ethernet<ID>] port link-type trunk\n[H3C-Ethernet<ID>] port trunk permit vlan { all | <VLAN ID> ... }\n"})}),"\n",(0,t.jsx)(n.p,{children:"Access"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] int[erface] E[thernet]<ID>\n[H3C-Ethernet<ID>] port link-type access\n[H3C-Ethernet<ID>] port access vlan <VLAN ID>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"poe",children:"PoE"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C-Ethernet<ID>] [undo] poe enable\n"})}),"\n",(0,t.jsx)(n.h2,{id:"route",children:"Route"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] ip route-static <Dest IP address> <Dest net mask> <Next hop IP address>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"timezone",children:"Timezone"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[H3C] clock timezone <timezone name> add <HH>:00:00\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},26192:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var t=r(97049);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);