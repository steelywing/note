"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4997],{65774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(75366),i=n(26192);const o={},s="Redirect / Rewrite",c={id:"Note/Nginx/Rewrite",title:"Redirect / Rewrite",description:"Ref: Creating NGINX Rewrite Rules",source:"@site/docs/Note/Nginx/Rewrite.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/Rewrite",permalink:"/note/Note/Nginx/Rewrite",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/Rewrite.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Proxy",permalink:"/note/Note/Nginx/Proxy"},next:{title:"TLS SNI",permalink:"/note/Note/Nginx/SNI"}},a={},l=[{value:"Redirect HTTP to HTTPS",id:"redirect-http-to-https",level:2},{value:"Redirect all to correct domain name",id:"redirect-all-to-correct-domain-name",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"redirect--rewrite",children:"Redirect / Rewrite"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Ref: ",(0,r.jsx)(t.a,{href:"https://www.nginx.com/blog/creating-nginx-rewrite-rules/",children:"Creating NGINX Rewrite Rules"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"redirect-http-to-https",children:"Redirect HTTP to HTTPS"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-nginx",children:"server {\n    listen 80;\n    server_name example.com;\n\n    return 301 https://www.example.com$request_uri;\n    # or\n    return 301 https://$host$request_uri;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"redirect-all-to-correct-domain-name",children:"Redirect all to correct domain name"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-nginx",children:'server {\n    listen 80 default_server;\n    listen 443 ssl default_server;\n    # Use the underscore or empty name to avoid matching a real domain name \n    server_name "";\n    return 301 $scheme://www.example.com;\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},26192:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(97049);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);