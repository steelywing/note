"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3496],{87485:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(76274),o=(n(76687),n(87485));const l={},a="Build from source",i={unversionedId:"Note/OpenSSL/Build",id:"Note/OpenSSL/Build",title:"Build from source",description:"CentOS",source:"@site/docs/Note/OpenSSL/Build.md",sourceDirName:"Note/OpenSSL",slug:"/Note/OpenSSL/Build",permalink:"/note/Note/OpenSSL/Build",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/OpenSSL/Build.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"OpenSSL",permalink:"/note/Note/OpenSSL/"},next:{title:"CA",permalink:"/note/Note/OpenSSL/CA"}},c={},s=[{value:"CentOS",id:"centos",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-from-source"},"Build from source"),(0,o.kt)("h2",{id:"centos"},"CentOS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dependency\nsudo yum -y install epel-release\nsudo yum install -y make gcc perl-core perl-Text-Template zlib-devel wget\n\nwget https://www.openssl.org/source/openssl-1.1.1q.tar.gz\n\ntar -zxf openssl-1.1.1q.tar.gz\ncd openssl-1.1.1q\n\n./config --prefix=/usr/local/ --openssldir=/etc/ssl --libdir=lib shared zlib-dynamic\nmake\nmake test\nmake install\n")))}u.isMDXComponent=!0}}]);