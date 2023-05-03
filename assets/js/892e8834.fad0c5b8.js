"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6558],{87485:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(76687);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(r),u=l,d=p["".concat(c,".").concat(u)]||p[u]||k[u]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function u(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},38862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var n=r(76274),l=(r(76687),r(87485));const a={tags:["Windows","File System"]},i="Symbolic link / Hard link on Windows",o={permalink:"/note/blog/Symbolic link and Hard link",source:"@site/blog/Symbolic link and Hard link.md",title:"Symbolic link / Hard link on Windows",description:"Symbolic link",date:"2023-05-03T09:00:16.000Z",formattedDate:"May 3, 2023",tags:[{label:"Windows",permalink:"/note/blog/tags/windows"},{label:"File System",permalink:"/note/blog/tags/file-system"}],readingTime:.775,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["Windows","File System"]},prevItem:{title:"Steam Client WebHelper use high CPU",permalink:"/note/blog/Steam high CPU"},nextItem:{title:"Windows host name resolution order",permalink:"/note/blog/Windows host-name resolution order"}},c={authorsImageUrls:[]},m=[{value:"Symbolic link",id:"symbolic-link",level:2},{value:"Hard link",id:"hard-link",level:2},{value:"Create symbolic link",id:"create-symbolic-link",level:2},{value:"Create symbolic link for directory",id:"create-symbolic-link-for-directory",level:2},{value:"Create hard link",id:"create-hard-link",level:2},{value:"Create hard link for directory",id:"create-hard-link-for-directory",level:2}],s={toc:m};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"symbolic-link"},"Symbolic link"),(0,l.kt)("p",null,"AKA SymLink / Soft link"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Symbolic link contains the text of target path"),(0,l.kt)("li",{parentName:"ul"},"If target move / remove, the link is broken")),(0,l.kt)("h2",{id:"hard-link"},"Hard link"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hard link is meta data of the file, that is ",(0,l.kt)("a",{parentName:"li",href:"/Linux/inode/"},"inode")," on Linux"),(0,l.kt)("li",{parentName:"ul"},"If target move / remove, the link is broken")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ref: ",(0,l.kt)("inlineCode",{parentName:"p"},"mklink")," only available on ",(0,l.kt)("inlineCode",{parentName:"p"},"cmd"),", not on ",(0,l.kt)("inlineCode",{parentName:"p"},"PowerShell"))),(0,l.kt)("h2",{id:"create-symbolic-link"},"Create symbolic link"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd",metastring:'title="cmd"',title:'"cmd"'},"mklink <link> <source>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},'New-Item -ItemType SymbolicLink -Path "<link>" -Target "<source>"\n')),(0,l.kt)("h2",{id:"create-symbolic-link-for-directory"},"Create symbolic link for directory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd",metastring:'title="cmd"',title:'"cmd"'},"mklink /d <link> <source>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},'New-Item -ItemType SymbolicLink -Path "<link>" -Target "<source>"\n')),(0,l.kt)("h2",{id:"create-hard-link"},"Create hard link"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd",metastring:'title="cmd"',title:'"cmd"'},"mklink /h <link> <source>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},'New-Item -ItemType HardLink -Path "<link>" -Target "<source>"\n')),(0,l.kt)("h2",{id:"create-hard-link-for-directory"},"Create hard link for directory"),(0,l.kt)("p",null,"AKA Directory Junction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},'New-Item -ItemType Junction -Path "<link>" -Target "<source>"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd",metastring:'title="cmd"',title:'"cmd"'},"mklink /j <link> <source>\n")))}k.isMDXComponent=!0}}]);