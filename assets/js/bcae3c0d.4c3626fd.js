"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1339],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return s}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=i(t),s=l,f=p["".concat(u,".").concat(s)]||p[s]||m[s]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=p;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d.mdxType="string"==typeof e?e:l,a[1]=d;for(var i=2;i<o;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},873:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=t(3117),l=t(102),o=(t(7294),t(3905)),a=["components"],d={},u="Kernel",i={unversionedId:"Linux/Kernel",id:"Linux/Kernel",title:"Kernel",description:"Kernel info",source:"@site/docs/Linux/Kernel.md",sourceDirName:"Linux",slug:"/Linux/Kernel",permalink:"/note/Linux/Kernel",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Kernel.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Jobs",permalink:"/note/Linux/Jobs"},next:{title:"LVM",permalink:"/note/Linux/LVM"}},c=[{value:"Kernel info",id:"kernel-info",children:[],level:2},{value:"Kernel module",id:"kernel-module",children:[{value:"List module",id:"list-module",children:[],level:3},{value:"Add module",id:"add-module",children:[],level:3},{value:"Remove module",id:"remove-module",children:[],level:3},{value:"Add module and dependencies",id:"add-module-and-dependencies",children:[],level:3},{value:"Remove module and dependencies",id:"remove-module-and-dependencies",children:[],level:3},{value:"Blacklist module",id:"blacklist-module",children:[],level:3},{value:"Blacklist module even other modules depend on it",id:"blacklist-module-even-other-modules-depend-on-it",children:[],level:3}],level:2}],m={toc:c};function p(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kernel"},"Kernel"),(0,o.kt)("h2",{id:"kernel-info"},"Kernel info"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"uname -a\n")),(0,o.kt)("h2",{id:"kernel-module"},"Kernel module"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"module-name")," is same as ",(0,o.kt)("inlineCode",{parentName:"p"},"module_name"))),(0,o.kt)("h3",{id:"list-module"},"List module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"lsmod\n")),(0,o.kt)("h3",{id:"add-module"},"Add module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"insmod <module>\n")),(0,o.kt)("h3",{id:"remove-module"},"Remove module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rmmod <module>\n")),(0,o.kt)("h3",{id:"add-module-and-dependencies"},"Add module and dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"modprobe <module>\n")),(0,o.kt)("h3",{id:"remove-module-and-dependencies"},"Remove module and dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"modprobe -r <module>\n")),(0,o.kt)("h3",{id:"blacklist-module"},"Blacklist module"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/*.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"blacklist <module>\n")),(0,o.kt)("h3",{id:"blacklist-module-even-other-modules-depend-on-it"},"Blacklist module even other modules depend on it"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/*.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apacheconf"},"install <module> /bin/false\n")))}p.isMDXComponent=!0}}]);