"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9842],{23660:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=r(75366),a=r(26192);const o={},c="Load Balancer",s={id:"Note/Apache/Load Balancer",title:"Load Balancer",description:"Ref: Reverse Proxy Guide",source:"@site/docs/Note/Apache/Load Balancer.md",sourceDirName:"Note/Apache",slug:"/Note/Apache/Load Balancer",permalink:"/note/Note/Apache/Load Balancer",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Apache/Load Balancer.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"CLI",permalink:"/note/Note/Apache/CLI"},next:{title:"Proxy",permalink:"/note/Note/Apache/Proxy"}},l={},d=[{value:"Sticky session",id:"sticky-session",level:2}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"load-balancer",children:"Load Balancer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-apacheconf",children:'<Proxy "balancer://cluster">\n    BalancerMember "http://<server 1>"\n    BalancerMember "http://<server 2>"\n</Proxy>\nProxyPass "/" "balancer://cluster/"\nProxyPassReverse "/" "balancer://cluster/"\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Ref: ",(0,t.jsx)(n.a,{href:"https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html",children:"Reverse Proxy Guide"})]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Ref: ",(0,t.jsx)(n.a,{href:"http://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html",children:"Apache Module mod_proxy_balancer"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sticky-session",children:"Sticky session"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-apacheconf",children:'Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED\n<Proxy "balancer://cluster">\n    BalancerMember "http://<server 1>" route=1\n    BalancerMember "http://<server 2>" route=2\n</Proxy>\nProxyPass "/" "balancer://cluster/"\nProxyPassReverse "/" "balancer://cluster/"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},26192:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var t=r(97049);const a={},o=t.createContext(a);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);