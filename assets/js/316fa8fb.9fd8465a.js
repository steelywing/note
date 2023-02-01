"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6976],{87485:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(76687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(76274),o=(r(76687),r(87485));const i={},a="Section",l={unversionedId:"Note/Apache/Section",id:"Note/Apache/Section",title:"Section",description:"Sections order",source:"@site/docs/Note/Apache/Section.md",sourceDirName:"Note/Apache",slug:"/Note/Apache/Section",permalink:"/note/Note/Apache/Section",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Apache/Section.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Rewrite / Redirect URI",permalink:"/note/Note/Apache/Rewrite"},next:{title:"Blender",permalink:"/note/Note/Blender"}},c={},p=[{value:"Sections order",id:"sections-order",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"section"},"Section"),(0,o.kt)("h2",{id:"sections-order"},"Sections order"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/sections.html#merging"},"How the sections are merged"))),(0,o.kt)("p",null,"The order (priority / precedence) of merging is"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Directory>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},".htaccess"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Shortest to longest"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<DirectoryMatch>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},'<Directory "~">')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Files>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<FilesMatch>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the order in the configuration"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Location>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<LocationMatch>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the order in the configuration"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<If>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"in the order in the configuration")))),(0,o.kt)("p",null,"Sections having same priority are processed in the configuration file order."),(0,o.kt)("mermaid",{value:'graph TD\n    if("#lt;If#gt;")\n    --"[ override ]"--\x3e\n    location("#lt;Location#gt; #lt;LocationMatch#gt;")\n    --"[ override ]"--\x3e\n    files("#lt;Files#gt; #lt;FilesMatch#gt;")\n    --"[ override ]"--\x3e\n    directory-match("#lt;DirectoryMatch#gt; #lt;Directory #quot;~#quot;#gt;")\n    --"[ override ]"--\x3e\n    directory("#lt;Directory#gt; .htaccess")'}))}s.isMDXComponent=!0}}]);