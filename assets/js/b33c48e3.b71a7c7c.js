(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6258],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,b=s["".concat(c,".").concat(d)]||s[d]||f[d]||i;return n?r.createElement(b,u(u({ref:t},p),{},{components:n})):r.createElement(b,u({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4424:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),u=["components"],a={},c="GRUB",l={unversionedId:"Linux/GRUB",id:"Linux/GRUB",isDocsHomePage:!1,title:"GRUB",description:"Reference",source:"@site/docs/Linux/GRUB.md",sourceDirName:"Linux",slug:"/Linux/GRUB",permalink:"/note/Linux/GRUB",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/GRUB.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Disk Benchmark",permalink:"/note/Linux/Disk Benchmark"},next:{title:"Jobs",permalink:"/note/Linux/Jobs"}},p=[{value:"Show GRUB when boot",id:"show-grub-when-boot",children:[]},{value:"Update GRUB config",id:"update-grub-config",children:[]},{value:"GRUB auto-generate config file",id:"grub-auto-generate-config-file",children:[]},{value:"GRUB option file",id:"grub-option-file",children:[]},{value:"Set GRUB default to last selected option",id:"set-grub-default-to-last-selected-option",children:[]}],f={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grub"},"GRUB"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://help.ubuntu.com/community/Grub2"},"Reference"))),(0,i.kt)("h2",{id:"show-grub-when-boot"},"Show GRUB when boot"),(0,i.kt)("p",null,"Hold ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," when boot"),(0,i.kt)("h2",{id:"update-grub-config"},"Update GRUB config"),(0,i.kt)("p",null,"Find all OS, update GRUB config, install GRUB to MBR / UEFI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"update-grub\n")),(0,i.kt)("h2",{id:"grub-auto-generate-config-file"},"GRUB auto-generate config file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/boot/grub/grub.cfg\n")),(0,i.kt)("h2",{id:"grub-option-file"},"GRUB option file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/etc/default/grub\n")),(0,i.kt)("h2",{id:"set-grub-default-to-last-selected-option"},"Set GRUB default to last selected option"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# /etc/default/grub\nGRUB_DEFAULT=saved\nGRUB_SAVEDEFAULT=true\n")))}s.isMDXComponent=!0}}]);