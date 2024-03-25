"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[173],{15703:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(75366),r=s(26192);const i={},a="TLS SNI",l={id:"Note/Nginx/SNI",title:"TLS SNI",description:"TLS Server Name Indication",source:"@site/docs/Note/Nginx/SNI.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/SNI",permalink:"/note/Note/Nginx/SNI",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/SNI.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Redirect / Rewrite",permalink:"/note/Note/Nginx/Rewrite"},next:{title:"SSL / TLS",permalink:"/note/Note/Nginx/SSL"}},o={},c=[{value:"To check if Nginx supports SNI",id:"to-check-if-nginx-supports-sni",level:2},{value:"Testing",id:"testing",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tls-sni",children:"TLS SNI"}),"\n",(0,t.jsx)(n.p,{children:"TLS Server Name Indication"}),"\n",(0,t.jsx)(n.p,{children:"SNI allows browser to pass requested server name during the SSL handshake"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["To support multiple SSL ",(0,t.jsx)(n.code,{children:"server_name"})," ",(0,t.jsx)(n.code,{children:"server"})," section, Nginx version must support SNI"]})}),"\n",(0,t.jsx)(n.h2,{id:"to-check-if-nginx-supports-sni",children:"To check if Nginx supports SNI"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Ref: ",(0,t.jsx)(n.a,{href:"http://nginx.org/en/docs/http/configuring_https_servers.html",children:"Configuring HTTPS servers"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ nginx -V\n...\nTLS SNI support enabled\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check the ",(0,t.jsx)(n.code,{children:"error_log"})," that without"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"nginx was built with SNI support, however, now it is linked\ndynamically to an OpenSSL library which has no tlsext support,\ntherefore SNI is not available\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"If Nginx does not support TLS SNI, Nginx will use default server certificate for all request"})}),"\n",(0,t.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,t.jsx)(n.p,{children:"Create self signed certificate"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'openssl req -x509 -newkey rsa -nodes -keyout default.key -days 36500 -out default.crt -subj "/CN=example.org"\n\nopenssl req -x509 -newkey rsa -nodes -keyout a.key -days 36500 -out a.crt -subj "/CN=a.example.org"\n\nopenssl req -x509 -newkey rsa -nodes -keyout b.key -days 36500 -out b.crt -subj "/CN=b.example.org"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'server {\n    listen       443 ssl default_server;\n    server_name  "";\n\n    ssl_certificate      default.crt;\n    ssl_certificate_key  default.key;\n\n    default_type text/plain;\n    return 200 "default page";\n}\n\nserver {\n    listen       443 ssl;\n    server_name  a.example.org;\n\n    ssl_certificate      a.crt;\n    ssl_certificate_key  a.key;\n\n    default_type text/plain;\n    return 200 "a.example.org page";\n}\n\nserver {\n    listen       443 ssl;\n    server_name  b.example.org;\n\n    ssl_certificate      b.crt;\n    ssl_certificate_key  b.key;\n\n    default_type text/plain;\n    return 200 "b.example.org page";\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Test SNI"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"curl -v"})," to show the certificate"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl --insecure --resolve "a.example.org:443:127.0.0.1" https://a.example.org\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"a.example.org page\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl --insecure --resolve "b.example.org:443:127.0.0.1" https://b.example.org\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"b.example.org page\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl --insecure https://127.0.0.1\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"default page\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},26192:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(97049);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);