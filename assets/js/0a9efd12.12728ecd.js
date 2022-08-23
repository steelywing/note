"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="SSL / TLS",l={unversionedId:"Note/Nginx/SSL",id:"Note/Nginx/SSL",title:"SSL / TLS",description:"DH param",source:"@site/docs/Note/Nginx/SSL.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/SSL",permalink:"/note/Note/Nginx/SSL",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/SSL.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"TLS SNI",permalink:"/note/Note/Nginx/SNI"},next:{title:"Variable",permalink:"/note/Note/Nginx/Variable"}},c={},p=[{value:"DH param",id:"dh-param",level:2},{value:"SSL offloading",id:"ssl-offloading",level:2},{value:"SSL recommend config",id:"ssl-recommend-config",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssl--tls"},"SSL / TLS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 443 ssl;\n    server_name www.example.com;\n\n    # The certificate file\n    # Support chained certificate\n    ssl_certificate www.example.com.crt;\n\n    # The private key file\n    ssl_certificate_key www.example.com.key;\n}\n")),(0,a.kt)("h2",{id:"dh-param"},"DH param"),(0,a.kt)("p",null,"Generate DH param file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl dhparam 4096 -out /etc/nginx/dhparam.pem\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"server {\n    ssl_dhparam /etc/nginx/dhparam.pem;\n}\n")),(0,a.kt)("h2",{id:"ssl-offloading"},"SSL offloading"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/note/Note/Nginx/Proxy#ssltls-offloading"},"SSL offloading")),(0,a.kt)("h2",{id:"ssl-recommend-config"},"SSL recommend config"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ssl-config.mozilla.org/"},"Mozilla SSL Configuration Generator")," (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/ssl-config-generator"},"GitHub"),")"))}u.isMDXComponent=!0}}]);