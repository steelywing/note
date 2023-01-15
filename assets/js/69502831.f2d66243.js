"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3814],{7485:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(6274),a=(r(6687),r(7485));const i={},o="Partition",l={unversionedId:"Linux/Partition",id:"Linux/Partition",title:"Partition",description:"Partition table / Disk label",source:"@site/docs/Linux/Partition.md",sourceDirName:"Linux",slug:"/Linux/Partition",permalink:"/note/Linux/Partition",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Partition.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Package management",permalink:"/note/Linux/Package management"},next:{title:"Performance",permalink:"/note/Linux/Performance"}},p={},u=[{value:"Partition table / Disk label",id:"partition-table--disk-label",level:2},{value:"Reload partition table",id:"reload-partition-table",level:2},{value:"Partition command",id:"partition-command",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"partition"},"Partition"),(0,a.kt)("h2",{id:"partition-table--disk-label"},"Partition table / Disk label"),(0,a.kt)("p",null,"MBR (Master Boot Record) / DOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Max size 2 TiB (2\xb3\xb2 sectors \xd7 2\u2079 bytes per sector)"),(0,a.kt)("li",{parentName:"ul"},"Max 4 primary partition")),(0,a.kt)("p",null,"GPT (GUID Partition Table)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Max size 8 ZiB (2\u2076\u2074 sectors \xd7 2\u2079 bytes per sector)"),(0,a.kt)("li",{parentName:"ul"},"Unlimited partition (Windows support 128 partitions)")),(0,a.kt)("h2",{id:"reload-partition-table"},"Reload partition table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"partprobe /dev/<device>\n")),(0,a.kt)("h2",{id:"partition-command"},"Partition command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Fdisk"},(0,a.kt)("inlineCode",{parentName:"a"},"fdisk")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Common"),(0,a.kt)("li",{parentName:"ul"},"Not support GPT before ",(0,a.kt)("inlineCode",{parentName:"li"},"util-linux")," 2.23"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parted"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support GPT"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gdisk")," (GPT fdisk)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Support GPT")))))}s.isMDXComponent=!0}}]);