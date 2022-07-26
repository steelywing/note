"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6283],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function m(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1678:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(7462),l=(t(7294),t(3905));const a={sidebar_label:"Array"},o="Array - PowerShell",i={unversionedId:"Windows/PowerShell/Array",id:"Windows/PowerShell/Array",title:"Array - PowerShell",description:"- Reference",source:"@site/docs/Windows/PowerShell/Array.md",sourceDirName:"Windows/PowerShell",slug:"/Windows/PowerShell/Array",permalink:"/note/Windows/PowerShell/Array",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/PowerShell/Array.md",tags:[],version:"current",frontMatter:{sidebar_label:"Array"},sidebar:"windows",previous:{title:"Basic",permalink:"/note/Windows/PowerShell/"},next:{title:"Network",permalink:"/note/Windows/PowerShell/Network"}},c={},s=[{value:"Range",id:"range",level:2},{value:"Count",id:"count",level:2},{value:"Get element",id:"get-element",level:2},{value:"Set element",id:"set-element",level:2},{value:"Slice",id:"slice",level:2},{value:"Iteration",id:"iteration",level:2},{value:"Filter",id:"filter",level:2}],u={toc:s};function p(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"array---powershell"},"Array - PowerShell"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays"},"Reference")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"help about_Arrays")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$array = <value>, <value>[, ...]\n$array = @([<value>[, ...]])\n")),(0,l.kt)("h2",{id:"range"},"Range"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$array = <start>..<end>\n")),(0,l.kt)("h2",{id:"count"},"Count"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$array.Count\n")),(0,l.kt)("h2",{id:"get-element"},"Get element"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$array[<index>]\n")),(0,l.kt)("h2",{id:"set-element"},"Set element"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$array[<index>] = <value>\n")),(0,l.kt)("h2",{id:"slice"},"Slice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$array[<index>..<index>]\n")),(0,l.kt)("h2",{id:"iteration"},"Iteration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"foreach ($element in $array) {\n    # $element\n}\n\n$array.ForEach({\n    # $PSItem == $_ == <current element>\n})\n")),(0,l.kt)("h2",{id:"filter"},"Filter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'$array.Where({\n    # $PSItem == $_ == <current element>\n    \n    # Filter out if expression is [0, "", $false, $null]\n})\n')))}p.isMDXComponent=!0}}]);