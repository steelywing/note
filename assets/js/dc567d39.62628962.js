"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[878],{3833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=t(75366),r=t(26192);const d={},a="Client IP address",i={id:"Note/Nginx/ClientAddress",title:"Client IP address",description:"Get client IP address from header",source:"@site/docs/Note/Nginx/ClientAddress.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/ClientAddress",permalink:"/note/Note/Nginx/ClientAddress",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/ClientAddress.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"CLI - Nginx",permalink:"/note/Note/Nginx/CLI"},next:{title:"Install - Nginx",permalink:"/note/Note/Nginx/Install"}},o={},l=[{value:"Get client IP address from header",id:"get-client-ip-address-from-header",level:2},{value:"Map IP address",id:"map-ip-address",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"client-ip-address",children:"Client IP address"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nginx",children:"# Client IP address\n$remote_addr\n"})}),"\n",(0,s.jsx)(n.h2,{id:"get-client-ip-address-from-header",children:"Get client IP address from header"}),"\n",(0,s.jsxs)(n.p,{children:["For Nginx behind proxy, use ",(0,s.jsx)(n.a,{href:"/note/Note/Nginx/Proxy#real-ip-address",children:"Real IP address"})]}),"\n",(0,s.jsx)(n.h2,{id:"map-ip-address",children:"Map IP address"}),"\n",(0,s.jsx)(n.p,{children:"Map IP address to value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nginx",children:"geo [$<address>] $<variable> {\n    [default <value>;]\n    [<IP address> <value>;]\n    [<CIDR> <value>;]\n}\n\ngeo $local {\n    default         0;\n    10.0.0.0/8      1;\n    192.168.0.0/16  1;\n}\n\nif ($local) {\n    # ...\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},26192:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(97049);const r={},d=s.createContext(r);function a(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);