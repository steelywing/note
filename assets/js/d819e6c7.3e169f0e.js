"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9851],{30728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(75366),i=n(26192);const c={},o="Static Key",s={id:"Network/OpenVPN/Static Key",title:"Static Key",description:"Ref: Static Key Mini-HOWTO",source:"@site/docs/Network/OpenVPN/Static Key.md",sourceDirName:"Network/OpenVPN",slug:"/Network/OpenVPN/Static Key",permalink:"/note/Network/OpenVPN/Static Key",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/OpenVPN/Static Key.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"OpenVPN",permalink:"/note/Network/OpenVPN/"},next:{title:"WireGuard",permalink:"/note/Network/WireGuard"}},a={},l=[{value:"Generate a static key",id:"generate-a-static-key",level:2},{value:"Server config",id:"server-config",level:2},{value:"Client config",id:"client-config",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"static-key",children:"Static Key"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Ref: ",(0,r.jsx)(t.a,{href:"https://openvpn.net/community-resources/static-key-mini-howto/",children:"Static Key Mini-HOWTO"})]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"1 Client, 1 Server (P2P)"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"generate-a-static-key",children:"Generate a static key"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"openvpn --genkey --secret static.key\n"})}),"\n",(0,r.jsx)(t.h2,{id:"server-config",children:"Server config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-openvpn",children:"dev tun\nifconfig 10.0.0.1 10.0.0.2\nsecret static.key\n"})}),"\n",(0,r.jsx)(t.h2,{id:"client-config",children:"Client config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-openvpn",children:"remote <server host name / IP address>\ndev tun\nifconfig 10.0.0.2 10.0.0.1\nsecret static.key\n\n# route 192.168.0.0/16 to remote server\nroute 192.168.0.0 255.255.0.0\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},26192:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(97049);const i={},c=r.createContext(i);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);