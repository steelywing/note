"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9842],{87485:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var n=t(76687);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},i=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(y,c(c({ref:r},i),{},{components:t})):n.createElement(y,c({ref:r},i))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57875:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(76274),a=(t(76687),t(87485));const o={},c="Load Balancer",l={unversionedId:"Note/Apache/Load Balancer",id:"Note/Apache/Load Balancer",title:"Load Balancer",description:"Ref: Reverse Proxy Guide",source:"@site/docs/Note/Apache/Load Balancer.md",sourceDirName:"Note/Apache",slug:"/Note/Apache/Load Balancer",permalink:"/note/Note/Apache/Load Balancer",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Apache/Load Balancer.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"CLI",permalink:"/note/Note/Apache/CLI"},next:{title:"Proxy - Apache",permalink:"/note/Note/Apache/Proxy"}},p={},s=[{value:"Sticky session",id:"sticky-session",level:2}],i={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"load-balancer"},"Load Balancer"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ref: ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html"},"Reverse Proxy Guide"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ref: ",(0,a.kt)("a",{parentName:"p",href:"http://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html"},"Apache Module mod_proxy_balancer"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},'<Proxy "balancer://cluster">\n    BalancerMember "http://<server 1>"\n    BalancerMember "http://<server 2>"\n</Proxy>\nProxyPass "/" "balancer://cluster/"\nProxyPassReverse "/" "balancer://cluster/"\n')),(0,a.kt)("h2",{id:"sticky-session"},"Sticky session"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},'Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED\n<Proxy "balancer://cluster">\n    BalancerMember "http://<server 1>" route=1\n    BalancerMember "http://<server 2>" route=2\n</Proxy>\nProxyPass "/" "balancer://cluster/"\nProxyPassReverse "/" "balancer://cluster/"\n')))}u.isMDXComponent=!0}}]);