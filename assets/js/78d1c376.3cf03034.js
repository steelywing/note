"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6703],{76481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var o=t(75366),s=t(26192);const c={},r="Access control",i={id:"Note/Nginx/AccessControl",title:"Access control",description:"Nginx use the first match",source:"@site/docs/Note/Nginx/AccessControl.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/AccessControl",permalink:"/note/Note/Nginx/AccessControl",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/AccessControl.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Nginx",permalink:"/note/Note/Nginx/"},next:{title:"CLI - Nginx",permalink:"/note/Note/Nginx/CLI"}},l={},a=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"access-control",children:"Access control"}),"\n",(0,o.jsx)(n.p,{children:"Nginx use the first match"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-nginx",children:"server {\n    # { allow | deny } { <IP address> | <CIDR> | all }\n    deny   192.168.1.1;\n    allow  192.168.1.1/24;\n    deny   all;\n\n    # ...\n}\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Ref: ",(0,o.jsx)(n.a,{href:"https://nginx.org/en/docs/stream/ngx_stream_access_module.html",children:"ngx_stream_access_module"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},26192:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var o=t(97049);const s={},c=o.createContext(s);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);