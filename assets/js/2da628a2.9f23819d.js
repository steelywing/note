"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[173],{7485:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(6274),a=(n(6687),n(7485));const o={},l="TLS SNI",s={unversionedId:"Note/Nginx/SNI",id:"Note/Nginx/SNI",title:"TLS SNI",description:"TLS Server Name Indication",source:"@site/docs/Note/Nginx/SNI.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/SNI",permalink:"/note/Note/Nginx/SNI",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/SNI.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Redirect / Rewrite",permalink:"/note/Note/Nginx/Redirect"},next:{title:"SSL / TLS",permalink:"/note/Note/Nginx/SSL"}},i={},p=[{value:"Check SNI support",id:"check-sni-support",level:2},{value:"Example config",id:"example-config",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tls-sni"},"TLS SNI"),(0,a.kt)("p",null,"TLS Server Name Indication"),(0,a.kt)("p",null,"SNI allows browser to pass requested server name during the SSL handshake"),(0,a.kt)("h2",{id:"check-sni-support"},"Check SNI support"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/configuring_https_servers.html"},"Ref"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ nginx -V\n...\nTLS SNI support enabled\n...\n")),(0,a.kt)("p",null,"Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"error_log")," that without"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nginx was built with SNI support, however, now it is linked\ndynamically to an OpenSSL library which has no tlsext support,\ntherefore SNI is not available\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If Nginx does not support TLS SNI, Nginx will use default server certificate for all request")),(0,a.kt)("h2",{id:"example-config"},"Example config"),(0,a.kt)("p",null,"Create self signed certificate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'openssl req -x509 -newkey rsa -nodes -keyout default.key -days 36500 -out default.crt -subj "/CN=example.org"\n\nopenssl req -x509 -newkey rsa -nodes -keyout a.key -days 36500 -out a.crt -subj "/CN=a.example.org"\n\nopenssl req -x509 -newkey rsa -nodes -keyout b.key -days 36500 -out b.crt -subj "/CN=b.example.org"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'    server {\n        listen       443 ssl default_server;\n        server_name  "";\n\n        ssl_certificate      default.crt;\n        ssl_certificate_key  default.key;\n\n        add_header "Content-Type" "text/plain";\n        return 200 "default page";\n    }\n\n    server {\n        listen       443 ssl;\n        server_name  a.example.org;\n\n        ssl_certificate      a.crt;\n        ssl_certificate_key  a.key;\n\n        add_header "Content-Type" "text/plain";\n        return 200 "a.example.org page";\n    }\n\n    server {\n        listen       443 ssl;\n        server_name  b.example.org;\n\n        ssl_certificate      b.crt;\n        ssl_certificate_key  b.key;\n\n        add_header "Content-Type" "text/plain";\n        return 200 "b.example.org page";\n    }\n')),(0,a.kt)("p",null,"Test SNI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Use -v to see the certificate\n\n$ curl --insecure --resolve "a.example.org:443:127.0.0.1" https://a.example.org\n\na.example.org page\n\n$ curl --insecure --resolve "b.example.org:443:127.0.0.1" https://b.example.org\n\nb.example.org page\n\n$ curl --insecure https://127.0.0.1\n\ndefault page\n')))}u.isMDXComponent=!0}}]);