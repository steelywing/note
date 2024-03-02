"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2970],{75526:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var c=o(75366),t=o(26192);const r={},l="Access Control",s={id:"Note/Apache/Access Control",title:"Access Control",description:"Require Directive",source:"@site/docs/Note/Apache/Access Control.md",sourceDirName:"Note/Apache",slug:"/Note/Apache/Access Control",permalink:"/note/Note/Apache/Access Control",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Apache/Access Control.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Android",permalink:"/note/Note/Android"},next:{title:"Authentication",permalink:"/note/Note/Apache/Authentication"}},a={},d=[{value:"Require Directive",id:"require-directive",level:2},{value:"<code>Order</code> of <code>Allow</code> and <code>Deny</code>",id:"order-of-allow-and-deny",level:2}];function i(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"access-control",children:"Access Control"}),"\n",(0,c.jsx)(n.h2,{id:"require-directive",children:"Require Directive"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["Ref: ",(0,c.jsx)(n.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#require",children:"Require Directive"})]}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"order-of-allow-and-deny",children:[(0,c.jsx)(n.code,{children:"Order"})," of ",(0,c.jsx)(n.code,{children:"Allow"})," and ",(0,c.jsx)(n.code,{children:"Deny"})]}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"Deprecated"})," by ",(0,c.jsx)(n.code,{children:"Require"})]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-apache",children:"Order Allow, Deny\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// Pseudo code\n\nfunction isAllow(match_allow, match_deny) {\n    // Default\n    allow = false;\n\n    if (match_allow) {\n        allow = true;\n    }\n\n    if (match_deny) {\n        allow = false;\n    }\n\n    return allow;\n}\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-apache",children:"Order Deny, Allow\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"// Pseudo code\n\nfunction isAllow(match_allow, match_deny) {\n    // Default\n    allow = true;\n\n    if (match_deny) {\n        allow = false;\n    }\n\n    if (match_allow) {\n        allow = true;\n    }\n\n    return allow;\n}\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["Ref: ",(0,c.jsx)(n.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html",children:"Apache Module mod_access_compat"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},26192:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>l});var c=o(97049);const t={},r=c.createContext(t);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);