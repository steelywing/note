"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2999],{28891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var n=a(75366),c=a(26192);const o={},s="CLI",r={id:"Note/Apache/CLI",title:"CLI",description:"Ref: apachectl - Apache HTTP Server Control Interface",source:"@site/docs/Note/Apache/CLI.md",sourceDirName:"Note/Apache",slug:"/Note/Apache/CLI",permalink:"/note/Note/Apache/CLI",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Apache/CLI.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Authentication",permalink:"/note/Note/Apache/Authentication"},next:{title:"Load Balancer",permalink:"/note/Note/Apache/Load Balancer"}},d={},h=[{value:"Start Apache httpd daemon",id:"start-apache-httpd-daemon",level:2},{value:"Stop Apache httpd daemon",id:"stop-apache-httpd-daemon",level:2},{value:"Restart Apache httpd daemon",id:"restart-apache-httpd-daemon",level:2},{value:"Run configuration file syntax test",id:"run-configuration-file-syntax-test",level:2}];function i(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"cli",children:"CLI"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Ref: ",(0,n.jsx)(t.a,{href:"https://httpd.apache.org/docs/2.4/programs/apachectl.html",children:"apachectl - Apache HTTP Server Control Interface"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"start-apache-httpd-daemon",children:"Start Apache httpd daemon"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo apachectl start\n"})}),"\n",(0,n.jsx)(t.h2,{id:"stop-apache-httpd-daemon",children:"Stop Apache httpd daemon"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo apachectl stop\n"})}),"\n",(0,n.jsx)(t.h2,{id:"restart-apache-httpd-daemon",children:"Restart Apache httpd daemon"}),"\n",(0,n.jsxs)(t.p,{children:["Apache auto run ",(0,n.jsx)(t.code,{children:"configtest"})," before restart, if ",(0,n.jsx)(t.code,{children:"configtest"})," fail, Apache does not restart"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo apachectl restart\n"})}),"\n",(0,n.jsx)(t.h2,{id:"run-configuration-file-syntax-test",children:"Run configuration file syntax test"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo apachectl configtest\n"})})]})}function l(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},26192:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>s});var n=a(97049);const c={},o=n.createContext(c);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);