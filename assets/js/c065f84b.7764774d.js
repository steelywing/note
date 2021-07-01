(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1341],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),y=l,m=d["".concat(s,".").concat(y)]||d[y]||p[y]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6141:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(2122),l=r(9756),a=(r(7294),r(3905)),i=["components"],o={},s="Registry",c={unversionedId:"Windows/PowerShell/Registry",id:"Windows/PowerShell/Registry",isDocsHomePage:!1,title:"Registry",description:"List available registry drive",source:"@site/docs/Windows/PowerShell/Registry.md",sourceDirName:"Windows/PowerShell",slug:"/Windows/PowerShell/Registry",permalink:"/note/Windows/PowerShell/Registry",editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/PowerShell/Registry.md",version:"current",frontMatter:{},sidebar:"windows",previous:{title:"Network",permalink:"/note/Windows/PowerShell/Network"},next:{title:"String",permalink:"/note/Windows/PowerShell/String"}},u=[{value:"List available registry drive",id:"list-available-registry-drive",children:[]},{value:"Key",id:"key",children:[{value:"List keys",id:"list-keys",children:[]},{value:"Create key",id:"create-key",children:[]},{value:"Delete key",id:"delete-key",children:[]}]},{value:"Value",id:"value",children:[{value:"Get values",id:"get-values",children:[]},{value:"Set value",id:"set-value",children:[]},{value:"Remove value",id:"remove-value",children:[]}]}],p={toc:u};function d(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"registry"},"Registry"),(0,a.kt)("h2",{id:"list-available-registry-drive"},"List available registry drive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-PSDrive -PSProvider Registry\n\ncd HKCU:\ncd HKLM:\n")),(0,a.kt)("p",null,"Using Registry provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ls Registry::\n\ncd Registry:: # Tab / Ctrl + Space\n")),(0,a.kt)("h2",{id:"key"},"Key"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-keys?view=powershell-7"},"Reference"))),(0,a.kt)("h3",{id:"list-keys"},"List keys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ls [<key path>]\n")),(0,a.kt)("h3",{id:"create-key"},"Create key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ni <key path>\n")),(0,a.kt)("h3",{id:"delete-key"},"Delete key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ri <key path>\n")),(0,a.kt)("h2",{id:"value"},"Value"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-entries?view=powershell-7"},"Reference"))),(0,a.kt)("h3",{id:"get-values"},"Get values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"gp <key path> [-Name <name>]\n")),(0,a.kt)("h3",{id:"set-value"},"Set value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"sp <key path>\n  -Name <name>\n  -Value <value>\n  [-Type { Binary | DWord | QWord | ExpandString | MultiString | String }]\n")),(0,a.kt)("h3",{id:"remove-value"},"Remove value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"rp <key path> -Name <name>\n")))}d.isMDXComponent=!0}}]);