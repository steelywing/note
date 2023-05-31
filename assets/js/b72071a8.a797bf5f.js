"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6486],{87485:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var n=r(76687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(r),y=o,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(m,p(p({ref:t},i),{},{components:r})):n.createElement(m,p({ref:t},i))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(76274),o=(r(76687),r(87485));const a={sidebar_label:"Proxy"},p="Proxy - Apache",l={unversionedId:"Note/Apache/Proxy",id:"Note/Apache/Proxy",title:"Proxy - Apache",description:"Ref: Apache Module modproxy",source:"@site/docs/Note/Apache/Proxy.md",sourceDirName:"Note/Apache",slug:"/Note/Apache/Proxy",permalink:"/note/Note/Apache/Proxy",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Apache/Proxy.md",tags:[],version:"current",frontMatter:{sidebar_label:"Proxy"},sidebar:"note",previous:{title:"Load Balancer",permalink:"/note/Note/Apache/Load Balancer"},next:{title:"Rewrite",permalink:"/note/Note/Apache/Rewrite"}},s={},c=[{value:"Enable proxy module",id:"enable-proxy-module",level:2},{value:"Proxy request to backend server",id:"proxy-request-to-backend-server",level:2},{value:"<code>ProxyPass</code> to a HTTPS server",id:"proxypass-to-a-https-server",level:2},{value:"<code>ProxyPass</code> in <code>&lt;VirtualHost&gt;</code>",id:"proxypass-in-virtualhost",level:2}],i={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proxy---apache"},"Proxy - Apache"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy.html"},"Apache Module mod_proxy"))),(0,o.kt)("h2",{id:"enable-proxy-module"},"Enable proxy module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"a2enmod proxy\na2enmod proxy_http\n")),(0,o.kt)("h2",{id:"proxy-request-to-backend-server"},"Proxy request to backend server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},'ProxyPass "/" "http://<server>/"\n')),(0,o.kt)("p",null,"Proxy request that is start with ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/get")," get proxy to ",(0,o.kt)("inlineCode",{parentName:"li"},"http://<server>/get"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},'ProxyPass "/api/" "http://<server>/"\n')),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"Location")," response header from the backend server to proxy server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Most often required")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},'ProxyPass "/" "http://<server>/"\nProxyPassReverse "/" "http://<server>/"\n')),(0,o.kt)("h2",{id:"proxypass-to-a-https-server"},(0,o.kt)("inlineCode",{parentName:"h2"},"ProxyPass")," to a HTTPS server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},'SSLProxyEngine on\n\n# Check if the host from request URI match the CN of the server certificate\nSSLProxyCheckPeerName { on | off }\n\n# Checked if the remote server certificate is expired\nSSLProxyCheckPeerExpire { on | off }\n\nProxyPass "/" "https://<server>/"\nProxyPassReverse "/" "https://<server>/"\n')),(0,o.kt)("h2",{id:"proxypass-in-virtualhost"},(0,o.kt)("inlineCode",{parentName:"h2"},"ProxyPass")," in ",(0,o.kt)("inlineCode",{parentName:"h2"},"<VirtualHost>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},"<VirtualHost *:443>\n    SSLEngine on\n    ServerName host.example.com\n    ProxyPass\n</VirtualHost>\n")),(0,o.kt)("p",null,"If no ",(0,o.kt)("inlineCode",{parentName:"p"},"SSLEngine on"),", Apache get this error"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Oops, no RSA or DSA server certificate found for ...\n")))}u.isMDXComponent=!0}}]);