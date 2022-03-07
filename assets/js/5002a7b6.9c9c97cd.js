"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6476],{3905:function(e,n,r){r.d(n,{Zo:function(){return m},kt:function(){return g}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},m=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,f=u["".concat(l,".").concat(g)]||u[g]||s[g]||o;return r?t.createElement(f,c(c({ref:n},m),{},{components:r})):t.createElement(f,c({ref:n},m))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5899:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var t=r(3117),a=r(102),o=(r(7294),r(3905)),c=["components"],i={},l=void 0,p={unversionedId:"Programming/C-Sharp/NameSpace",id:"Programming/C-Sharp/NameSpace",title:"NameSpace",description:"NameSpace",source:"@site/docs/Programming/C-Sharp/NameSpace.md",sourceDirName:"Programming/C-Sharp",slug:"/Programming/C-Sharp/NameSpace",permalink:"/note/Programming/C-Sharp/NameSpace",editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/C-Sharp/NameSpace.md",tags:[],version:"current",frontMatter:{},sidebar:"programming",previous:{title:"Generic",permalink:"/note/Programming/C-Sharp/Generic"},next:{title:"Basic",permalink:"/note/Programming/JavaScript/"}},m=[{value:"NameSpace",id:"namespace",children:[],level:2}],s={toc:m};function u(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"namespace"},"NameSpace"),(0,o.kt)("p",null,"\u547d\u540d\u7a7a\u9593\uff0c\u7528\u4f86\u7d44\u7e54/\u5206\u9694\u547d\u540d\uff0c\u53ef\u4ee5\u9632\u6b62\u547d\u540d conflict"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"namespace NameSpace\n{\n    // ...\n}\n")),(0,o.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," \u547d\u540d\u7a7a\u9593\u88e1\u7684 class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nConsole.WriteLine("Hello, World!");\n// same as\nSystem.Console.WriteLine("Hello, World!");\n')),(0,o.kt)("p",null,"\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Generic")," (Alias) \u4f86\u5b58\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," \u547d\u540d\u7a7a\u9593"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using Generic = System.Collections.Generic;\nnew Generic::Dictionary<string, int>();\n")),(0,o.kt)("p",null,"\u5168\u57df\u547d\u540d\u7a7a\u9593 (Global / Top Level Name Space)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"global::\n")),(0,o.kt)("p",null,"\u5de2\u72c0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"// N1\nnamespace N1\n{\n    // N1.C1\n    class C1\n    {\n        // N1.C1.C2\n        class C2\n        {\n        }\n    }\n    // N1.N2\n    namespace N2\n    {\n        // N1.N2.C2\n        class C2\n        {\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);