"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1339],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),i=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=i(e.components);return l.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=i(t),s=r,k=p["".concat(u,".").concat(s)]||p[s]||c[s]||o;return t?l.createElement(k,a(a({ref:n},m),{},{components:t})):l.createElement(k,a({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var i=2;i<o;i++)a[i]=t[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var l=t(7462),r=(t(7294),t(3905));const o={},a="Kernel",d={unversionedId:"Linux/Kernel",id:"Linux/Kernel",title:"Kernel",description:"Kernel info",source:"@site/docs/Linux/Kernel.md",sourceDirName:"Linux",slug:"/Linux/Kernel",permalink:"/note/Linux/Kernel",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Kernel.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Jobs",permalink:"/note/Linux/Jobs"},next:{title:"LVM",permalink:"/note/Linux/LVM"}},u={},i=[{value:"Kernel info",id:"kernel-info",level:2},{value:"Kernel module",id:"kernel-module",level:2},{value:"List module",id:"list-module",level:3},{value:"Add module",id:"add-module",level:3},{value:"Remove module",id:"remove-module",level:3},{value:"Add module and dependencies",id:"add-module-and-dependencies",level:3},{value:"Remove module and dependencies",id:"remove-module-and-dependencies",level:3},{value:"Blacklist module",id:"blacklist-module",level:3},{value:"Blacklist module even other modules depend on it",id:"blacklist-module-even-other-modules-depend-on-it",level:3}],m={toc:i};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kernel"},"Kernel"),(0,r.kt)("h2",{id:"kernel-info"},"Kernel info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"uname -a\n")),(0,r.kt)("h2",{id:"kernel-module"},"Kernel module"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"module-name")," is same as ",(0,r.kt)("inlineCode",{parentName:"p"},"module_name"))),(0,r.kt)("h3",{id:"list-module"},"List module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lsmod\n")),(0,r.kt)("h3",{id:"add-module"},"Add module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"insmod <module>\n")),(0,r.kt)("h3",{id:"remove-module"},"Remove module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rmmod <module>\n")),(0,r.kt)("h3",{id:"add-module-and-dependencies"},"Add module and dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"modprobe <module>\n")),(0,r.kt)("h3",{id:"remove-module-and-dependencies"},"Remove module and dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"modprobe -r <module>\n")),(0,r.kt)("h3",{id:"blacklist-module"},"Blacklist module"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/*.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blacklist <module>\n")),(0,r.kt)("h3",{id:"blacklist-module-even-other-modules-depend-on-it"},"Blacklist module even other modules depend on it"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/*.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"install <module> /bin/false\n")))}c.isMDXComponent=!0}}]);