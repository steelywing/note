"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5832],{87485:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(76687);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9224:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(76274),a=(n(76687),n(87485));const o={},i="Generic",c={unversionedId:"Programming/C-Sharp/Generic",id:"Programming/C-Sharp/Generic",title:"Generic",description:"Generic Methods",source:"@site/docs/Programming/C-Sharp/Generic.md",sourceDirName:"Programming/C-Sharp",slug:"/Programming/C-Sharp/Generic",permalink:"/note/Programming/C-Sharp/Generic",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/C-Sharp/Generic.md",tags:[],version:"current",frontMatter:{},sidebar:"programming",previous:{title:"Delegate",permalink:"/note/Programming/C-Sharp/Delegate"},next:{title:"NameSpace",permalink:"/note/Programming/C-Sharp/NameSpace"}},s={},l=[{value:"Generic Methods",id:"generic-methods",level:2},{value:"Generic Class",id:"generic-class",level:2}],p={toc:l};function m(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generic"},"Generic"),(0,a.kt)("h2",{id:"generic-methods"},"Generic Methods"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/generic-methods"},"Ref"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"void Swap<T>(ref T lhs, ref T rhs)\n{\n    T temp;\n    temp = lhs;\n    lhs = rhs;\n    rhs = temp;\n}\n\nint a = 1\nint b = 2\nSwap<int>(ref a, ref b)\n// a = 2, b = 1\n\n// same as\nSwap(ref a, ref b)\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u9650\u5236 ",(0,a.kt)("inlineCode",{parentName:"p"},"<T>")," \u7684 Base Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"T Max<T>(T lhs, T rhs) where T : System.IComparable<T>\n{\n    if (lhs.CompareTo(rhs) > 0)\n    {\n        return lhs;\n    }\n    else \n    {\n        return rhs;\n    }\n}\n")),(0,a.kt)("h2",{id:"generic-class"},"Generic Class"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics"},"Ref"))),(0,a.kt)("p",null,"Generic Class \u4f7f\u7528\u6bd4\u8f03\u5c11\uff0c\u56e0\u70ba .NET \u81ea\u5e36\u7684 Generic Class (",(0,a.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),", ...) \u5df2\u5f88\u5be6\u7528\uff0c\u9664\u975e\u8981\u6709\u7279\u5225\u5be6\u4f5c\u9700\u6c42 (",(0,a.kt)("inlineCode",{parentName:"p"},"Serializable")," \u4e4b\u985e) \u624d\u6703\u7528\u5230"))}m.isMDXComponent=!0}}]);