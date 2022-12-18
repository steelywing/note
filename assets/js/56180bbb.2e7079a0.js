"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6283],{7485:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(6687);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6611:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(6274),a=(t(6687),t(7485));const l={sidebar_label:"Array"},o="Array - PowerShell",i={unversionedId:"Windows/PowerShell/Array",id:"Windows/PowerShell/Array",title:"Array - PowerShell",description:"Ref: aboutArrays",source:"@site/docs/Windows/PowerShell/Array.md",sourceDirName:"Windows/PowerShell",slug:"/Windows/PowerShell/Array",permalink:"/note/Windows/PowerShell/Array",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/PowerShell/Array.md",tags:[],version:"current",frontMatter:{sidebar_label:"Array"},sidebar:"windows",previous:{title:"PowerShell",permalink:"/note/Windows/PowerShell/"},next:{title:"Network",permalink:"/note/Windows/PowerShell/Network"}},s={},c=[{value:"Range",id:"range",level:2},{value:"Count",id:"count",level:2},{value:"Get element",id:"get-element",level:2},{value:"Set element",id:"set-element",level:2},{value:"Slice",id:"slice",level:2},{value:"Iteration",id:"iteration",level:2},{value:"Filter",id:"filter",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"array---powershell"},"Array - PowerShell"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ref: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays"},"about_Arrays"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ref: ",(0,a.kt)("inlineCode",{parentName:"p"},"help about_Arrays"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$array = <value>, <value>[, ...]\n$array = @([<value>[, ...]])\n")),(0,a.kt)("h2",{id:"range"},"Range"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$array = <start>..<end>\n")),(0,a.kt)("h2",{id:"count"},"Count"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$array.Count\n")),(0,a.kt)("h2",{id:"get-element"},"Get element"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$array[<index>]\n")),(0,a.kt)("h2",{id:"set-element"},"Set element"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$array[<index>] = <value>\n")),(0,a.kt)("h2",{id:"slice"},"Slice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$array[<index>..<index>]\n")),(0,a.kt)("h2",{id:"iteration"},"Iteration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"foreach ($element in $array) {\n    # $element\n}\n\n$array.ForEach({\n    # $PSItem == $_ == <current element>\n})\n")),(0,a.kt)("h2",{id:"filter"},"Filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$array.Where({\n    # $PSItem == $_ == <current element>\n    \n    # Filter out if expression is [0, "", $false, $null]\n})\n')))}p.isMDXComponent=!0}}]);