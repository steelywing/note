"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5066],{87485:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(76687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,y=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(y,p(p({ref:t},s),{},{components:r})):n.createElement(y,p({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(76274),o=(r(76687),r(87485));const a={sidebar_label:"Dump / Export / Import"},p="Dump / Export / Import - MySQL",l={unversionedId:"Note/MySQL/Dump",id:"Note/MySQL/Dump",title:"Dump / Export / Import - MySQL",description:"Export / Dump",source:"@site/docs/Note/MySQL/Dump.md",sourceDirName:"Note/MySQL",slug:"/Note/MySQL/Dump",permalink:"/note/Note/MySQL/Dump",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/MySQL/Dump.md",tags:[],version:"current",frontMatter:{sidebar_label:"Dump / Export / Import"},sidebar:"note",previous:{title:"MySQL",permalink:"/note/Note/MySQL/"},next:{title:"select",permalink:"/note/Note/MySQL/select"}},i={},u=[{value:"Export / Dump",id:"export--dump",level:2},{value:"Export with <code>gzip</code>",id:"export-with-gzip",level:3},{value:"Import",id:"import",level:2}],s={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dump--export--import---mysql"},"Dump / Export / Import - MySQL"),(0,o.kt)("h2",{id:"export--dump"},"Export / Dump"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"PowerShell output redirect ( ",(0,o.kt)("inlineCode",{parentName:"p"},"mysqldump > file.sql")," ) will use UTF-16, MySQL cannot import UTF-16")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},'mysqldump [-u <user>] [-p]\n    { --all-databases | <database> [<table> [...]] }\n    [ --where="<where clause>" ]\n    [ --events | --skip-events ]\n    [ --routines | --skip-routines ]\n    [ --triggers | --skip-triggers ]\n    --result-file=<file.sql>\n')),(0,o.kt)("h3",{id:"export-with-gzip"},"Export with ",(0,o.kt)("inlineCode",{parentName:"h3"},"gzip")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump <database> | gzip [-9] > <file.sql.gz>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html"},"mysqldump"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/mysqldump-stored-programs.html"},"Dumping Stored Programs"))),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql [-u <user>] [-p] <database> < <file.sql>\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"use <database>;\nsource <file>;\n")))}m.isMDXComponent=!0}}]);