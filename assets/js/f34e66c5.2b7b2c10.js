"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2938],{87485:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(76687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(76274),o=(r(76687),r(87485));const a={sidebar_label:"String"},i="String - PowerShell",l={unversionedId:"Windows/PowerShell/String",id:"Windows/PowerShell/String",title:"String - PowerShell",description:"Ref: Everything you wanted to know about variable substitution in strings",source:"@site/docs/Windows/PowerShell/String.md",sourceDirName:"Windows/PowerShell",slug:"/Windows/PowerShell/String",permalink:"/note/Windows/PowerShell/String",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/PowerShell/String.md",tags:[],version:"current",frontMatter:{sidebar_label:"String"},sidebar:"windows",previous:{title:"Registry",permalink:"/note/Windows/PowerShell/Registry"},next:{title:"Task Scheduler",permalink:"/note/Windows/PowerShell/Task Scheduler"}},s={},c=[{value:"Format string",id:"format-string",level:2},{value:"Filter string",id:"filter-string",level:2},{value:"Concatenate string",id:"concatenate-string",level:2},{value:"Command execution",id:"command-execution",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"string---powershell"},"String - PowerShell"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-string-substitutions?view=powershell-7.1"},"Everything you wanted to know about variable substitution in strings"))),(0,o.kt)("h2",{id:"format-string"},"Format string"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'<format> -f <value>[, ...]\n\n$a = "Life"\n$b = "great"\n\n"{0} is {1}" -f $a, $b\n"$a is $b"\n"${a} is ${b}"\n\n# Life is great\n')),(0,o.kt)("h2",{id:"filter-string"},"Filter string"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'<command> | Select-String "<pattern>"\n')),(0,o.kt)("h2",{id:"concatenate-string"},"Concatenate string"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"$a + ' ' + $b\n\"$a $b\"\n")),(0,o.kt)("h2",{id:"command-execution"},"Command execution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'"Date: $(Get-Date)"\n')))}p.isMDXComponent=!0}}]);