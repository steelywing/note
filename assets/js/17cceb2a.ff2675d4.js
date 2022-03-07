"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5832],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?t.createElement(d,i(i({ref:r},s),{},{components:n})):t.createElement(d,i({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2546:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var t=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={},l="Generic",p={unversionedId:"Programming/C-Sharp/Generic",id:"Programming/C-Sharp/Generic",title:"Generic",description:"Generic Methods",source:"@site/docs/Programming/C-Sharp/Generic.md",sourceDirName:"Programming/C-Sharp",slug:"/Programming/C-Sharp/Generic",permalink:"/note/Programming/C-Sharp/Generic",editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/C-Sharp/Generic.md",tags:[],version:"current",frontMatter:{},sidebar:"programming",previous:{title:"Delegate",permalink:"/note/Programming/C-Sharp/Delegate"},next:{title:"NameSpace",permalink:"/note/Programming/C-Sharp/NameSpace"}},s=[{value:"Generic Methods",id:"generic-methods",children:[],level:2},{value:"Generic Class",id:"generic-class",children:[],level:2}],u={toc:s};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generic"},"Generic"),(0,o.kt)("h2",{id:"generic-methods"},"Generic Methods"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/generic-methods"},"Ref"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"void Swap<T>(ref T lhs, ref T rhs)\n{\n    T temp;\n    temp = lhs;\n    lhs = rhs;\n    rhs = temp;\n}\n\nint a = 1\nint b = 2\nSwap<int>(ref a, ref b)\n// a = 2, b = 1\n\n// same as\nSwap(ref a, ref b)\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u9650\u5236 ",(0,o.kt)("inlineCode",{parentName:"p"},"<T>")," \u7684 Base Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"T Max<T>(T lhs, T rhs) where T : System.IComparable<T>\n{\n    if (lhs.CompareTo(rhs) > 0)\n    {\n        return lhs;\n    }\n    else \n    {\n        return rhs;\n    }\n}\n")),(0,o.kt)("h2",{id:"generic-class"},"Generic Class"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics"},"Ref"))),(0,o.kt)("p",null,"Generic Class \u4f7f\u7528\u6bd4\u8f03\u5c11\uff0c\u56e0\u70ba .NET \u81ea\u5e36\u7684 Generic Class (",(0,o.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Set"),", ...) \u5df2\u5f88\u5be6\u7528\uff0c\u9664\u975e\u8981\u6709\u7279\u5225\u5be6\u4f5c\u9700\u6c42 (",(0,o.kt)("inlineCode",{parentName:"p"},"Serializable")," \u4e4b\u985e) \u624d\u6703\u7528\u5230"))}m.isMDXComponent=!0}}]);