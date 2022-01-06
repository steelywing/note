"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2938],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9483:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={sidebar_label:"String"},c="String - PowerShell",s={unversionedId:"Windows/PowerShell/String",id:"Windows/PowerShell/String",title:"String - PowerShell",description:"Reference",source:"@site/docs/Windows/PowerShell/String.md",sourceDirName:"Windows/PowerShell",slug:"/Windows/PowerShell/String",permalink:"/note/Windows/PowerShell/String",editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/PowerShell/String.md",tags:[],version:"current",frontMatter:{sidebar_label:"String"},sidebar:"windows",previous:{title:"Registry",permalink:"/note/Windows/PowerShell/Registry"}},u=[{value:"Format string",id:"format-string",children:[],level:2},{value:"Filter string",id:"filter-string",children:[],level:2},{value:"Concatenate string",id:"concatenate-string",children:[],level:2},{value:"Command execution",id:"command-execution",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"string---powershell"},"String - PowerShell"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-string-substitutions?view=powershell-7.1"},"Reference"))),(0,i.kt)("h2",{id:"format-string"},"Format string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'<format> -f <value>[, ...]\n\n$a = "Life"\n$b = "great"\n\n"{0} is {1}" -f $a, $b\n"$a is $b"\n"${a} is ${b}"\n\n# Life is great\n')),(0,i.kt)("h2",{id:"filter-string"},"Filter string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'<command> | Select-String "<pattern>"\n')),(0,i.kt)("h2",{id:"concatenate-string"},"Concatenate string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"$a + ' ' + $b\n\"$a $b\"\n")),(0,i.kt)("h2",{id:"command-execution"},"Command execution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'"Date: $(Get-Date)"\n')))}d.isMDXComponent=!0}}]);