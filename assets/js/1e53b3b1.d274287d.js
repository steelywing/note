"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[198],{6112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(75366),i=t(26192);const o={},s="OpenVPN",c={id:"Network/OpenVPN/README",title:"OpenVPN",description:"CCD",source:"@site/docs/Network/OpenVPN/README.md",sourceDirName:"Network/OpenVPN",slug:"/Network/OpenVPN/",permalink:"/note/Network/OpenVPN/",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/OpenVPN/README.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"Interface",permalink:"/note/Network/Interface"},next:{title:"Static Key",permalink:"/note/Network/OpenVPN/Static Key"}},l={},d=[{value:"CCD",id:"ccd",level:2},{value:"Site to Site",id:"site-to-site",level:2},{value:"Server side",id:"server-side",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"openvpn",children:"OpenVPN"}),"\n",(0,r.jsx)(n.h2,{id:"ccd",children:"CCD"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"client-config-dir <path>\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Client-specific configuration"}),"\n",(0,r.jsx)(n.li,{children:"When client connected, OpenVPN will look in this directory for a file having the same name as the client's X509 common name, and add to server config"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"site-to-site",children:"Site to Site"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://community.openvpn.net/openvpn/wiki/RoutedLans",children:"OpenVPN"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://openwrt.org/docs/guide-user/services/vpn/openvpn/extras",children:"OpenWRT"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.netgate.com/pfsense/en/latest/troubleshooting/openvpn-iroute.html",children:"pfSense"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Server: ",(0,r.jsx)(n.code,{children:"10.10.0.0/24"})]}),"\n",(0,r.jsxs)(n.li,{children:["Client 1: ",(0,r.jsx)(n.code,{children:"10.10.1.0/24"})]}),"\n",(0,r.jsxs)(n.li,{children:["Client 2: ",(0,r.jsx)(n.code,{children:"10.10.2.0/24"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"server-side",children:"Server side"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# server.ovpn\n\n# ...\n\n# Add route to server kernel\n# Route this network from kernel to OpenVPN\nroute 10.10.1.0 255.255.255.0\nroute 10.10.2.0 255.255.255.0\n\n# Tell client to route this network over the VPN\npush "route 10.10.0.0 255.255.255.0"\npush "route 10.10.1.0 255.255.255.0"\npush "route 10.10.2.0 255.255.255.0"\n\n# Allow Client to Client\nclient-to-client\n\nclient-config-dir ccd\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use CCD to add ",(0,r.jsx)(n.code,{children:"iroute"})]}),"\n",(0,r.jsxs)(n.li,{children:["Without ",(0,r.jsx)(n.code,{children:"iroute"}),", OpenVPN doesn't know where to forward the client network, and OpenVPN will drop the packet"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"iroute"})," must be in CDC context, OpenVPN need to know which client own the network"]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"iroute x.x.x.x"})," match ",(0,r.jsx)(n.code,{children:'push "route x.x.x.x"'}),", OpenVPN will not push the route"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# ./ccd/<Client 1 X509 common name>\n\niroute 10.10.2.0 255.255.255.0\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# ./ccd/<Client 2 X509 common name>\n\niroute 10.10.3.0 255.255.255.0\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"WireGuard VPN is simpler"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},26192:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(97049);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);