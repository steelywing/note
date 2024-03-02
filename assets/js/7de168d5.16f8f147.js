"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9977],{3738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(75366),o=t(26192);const r={sidebar_label:"Key"},i="Key - OpenSSL",a={id:"Note/OpenSSL/Key",title:"Key - OpenSSL",description:"RSA key",source:"@site/docs/Note/OpenSSL/Key.md",sourceDirName:"Note/OpenSSL",slug:"/Note/OpenSSL/Key",permalink:"/note/Note/OpenSSL/Key",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/OpenSSL/Key.md",tags:[],version:"current",frontMatter:{sidebar_label:"Key"},sidebar:"note",previous:{title:"CSR",permalink:"/note/Note/OpenSSL/CSR"},next:{title:"X509",permalink:"/note/Note/OpenSSL/X509"}},c={},l=[{value:"RSA key",id:"rsa-key",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"key---openssl",children:"Key - OpenSSL"}),"\n",(0,s.jsx)(n.h2,{id:"rsa-key",children:"RSA key"}),"\n",(0,s.jsx)(n.p,{children:"Generating RSA key"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Default key lenght = 2048\nopenssl genrsa [-out <file.key>] [<key length>]\n"})}),"\n",(0,s.jsx)(n.p,{children:"View RSA key file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl rsa -in <file.key> -text -noout\n"})}),"\n",(0,s.jsx)(n.p,{children:"Extracting RSA public key"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl rsa -in <file.key> -pubout -out <public.key>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},26192:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(97049);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);