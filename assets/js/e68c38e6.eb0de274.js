"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6457],{71486:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(75366),l=r(26192);const o={sidebar_label:"User"},t="User - MySQL",a={id:"Note/MySQL/User",title:"User - MySQL",description:"``",source:"@site/docs/Note/MySQL/User.md",sourceDirName:"Note/MySQL",slug:"/Note/MySQL/User",permalink:"/note/Note/MySQL/User",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/MySQL/User.md",tags:[],version:"current",frontMatter:{sidebar_label:"User"},sidebar:"note",previous:{title:"Troubleshooting",permalink:"/note/Note/MySQL/Troubleshooting"},next:{title:"select",permalink:"/note/Note/MySQL/select"}},c={},d=[{value:"Create user",id:"create-user",level:2},{value:"Display user",id:"display-user",level:2},{value:"Drop user",id:"drop-user",level:2},{value:"Allow <strong>root</strong> login with password",id:"allow-root-login-with-password",level:2}];function i(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"user---mysql",children:"User - MySQL"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"<host>"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"localhost | <IP address>[/<net mask>] | %\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"<IP address>[/<net mask>]"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"10.0.0.1\n10.0.0.0/255.255.255.0\n10.0.%\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"%"})," is wildcard"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"create-user",children:"Create user"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"create user '<user>'@'<host>' identified by '<password>';\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"create user alice@localhost identified by 'password';\n"})}),"\n",(0,n.jsx)(s.h2,{id:"display-user",children:"Display user"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"select user, host from mysql.user;\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"select * from mysql.user \\G\n"})}),"\n",(0,n.jsx)(s.h2,{id:"drop-user",children:"Drop user"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"drop user '<user>'@'<host>';\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"drop user alice@localhost;\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"allow-root-login-with-password",children:["Allow ",(0,n.jsx)(s.strong,{children:"root"})," login with password"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ALTER USER '<user>'@'<host>'\n    IDENTIFIED WITH { mysql_native_password | caching_sha2_password }\n    BY '<password>';\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"caching_sha2_password"})," is added in MySQL 8"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ALTER USER root@localhost\n    IDENTIFIED WITH mysql_native_password\n    BY 'password';\n"})})]})}function u(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},26192:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>t});var n=r(97049);const l={},o=n.createContext(l);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);