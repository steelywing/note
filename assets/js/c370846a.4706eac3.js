"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4997],{65774:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=r(75366),i=r(26192);const s={},c="Redirect / Rewrite",l={id:"Note/Nginx/Rewrite",title:"Redirect / Rewrite",description:"Ref: Creating NGINX Rewrite Rules",source:"@site/docs/Note/Nginx/Rewrite.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/Rewrite",permalink:"/note/Note/Nginx/Rewrite",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/Rewrite.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Proxy",permalink:"/note/Note/Nginx/Proxy"},next:{title:"TLS SNI",permalink:"/note/Note/Nginx/SNI"}},o={},d=[{value:"Redirect HTTP to HTTPS",id:"redirect-http-to-https",level:2},{value:"Redirect all to correct domain name",id:"redirect-all-to-correct-domain-name",level:2},{value:"<code>internal</code> location",id:"internal-location",level:2},{value:"Internal request / Internal redirect",id:"internal-request--internal-redirect",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"redirect--rewrite",children:"Redirect / Rewrite"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Ref: ",(0,t.jsx)(n.a,{href:"https://www.nginx.com/blog/creating-nginx-rewrite-rules/",children:"Creating NGINX Rewrite Rules"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"redirect-http-to-https",children:"Redirect HTTP to HTTPS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:"server {\n    listen 80;\n    server_name example.com;\n\n    return 301 https://www.example.com$request_uri;\n    # or\n    return 301 https://$host$request_uri;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"redirect-all-to-correct-domain-name",children:"Redirect all to correct domain name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:'server {\n    listen 80 default_server;\n    listen 443 ssl default_server;\n    # Use the underscore or empty name to avoid matching a real domain name \n    server_name "";\n    return 301 $scheme://www.example.com;\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"internal-location",children:[(0,t.jsx)(n.code,{children:"internal"})," location"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:"location ... {\n    internal;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"can only be accessed from internal requests"}),"\n",(0,t.jsxs)(n.li,{children:["return error status ",(0,t.jsx)(n.code,{children:"404"})," if that is external requests"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"internal-request--internal-redirect",children:"Internal request / Internal redirect"}),"\n",(0,t.jsx)(n.p,{children:"Internal requests are requests by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rewrite"})," directive"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"error_page"}),", ",(0,t.jsx)(n.code,{children:"index"}),", ",(0,t.jsx)(n.code,{children:"random_index"}),", and ",(0,t.jsx)(n.code,{children:"try_files"})," directives"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"X-Accel-Redirect"})," response header field from an upstream server"]}),"\n",(0,t.jsxs)(n.li,{children:["\u201cinclude virtual\u201d command of the ",(0,t.jsx)(n.code,{children:"ngx_http_ssi_module"})," module, by the ",(0,t.jsx)(n.code,{children:"ngx_http_addition_module"})," module directives, and by ",(0,t.jsx)(n.code,{children:"auth_request"})," and ",(0,t.jsx)(n.code,{children:"mirror"})," directives;"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},26192:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var t=r(97049);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);