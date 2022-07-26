"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Unity",l={unversionedId:"Note/Unity",id:"Note/Unity",title:"Unity",description:"Monobehaviours doesn't use constructor",source:"@site/docs/Note/Unity.md",sourceDirName:"Note",slug:"/Note/Unity",permalink:"/note/Note/Unity",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Unity.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Unicode",permalink:"/note/Note/Unicode"},next:{title:"ffmpeg",permalink:"/note/Note/ffmpeg"}},p={},c=[{value:"Execution Order",id:"execution-order",level:2},{value:"<code>GameObject</code>",id:"gameobject",level:2},{value:"<code>Component</code>",id:"component",level:2},{value:"<code>Prefab</code>",id:"prefab",level:2}],u={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unity"},"Unity"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Monobehaviours")," doesn't use constructor"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://ilkinulas.github.io/development/unity/2016/05/30/monobehaviour-constructor.html"},"Reference")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"Awake()")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"Start()")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Vertex / Vertices / Point"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ede")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Edge / Line"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7dda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Face"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9762")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mesh / Polygon"),(0,a.kt)("td",{parentName:"tr",align:null},"\u591a\u9762\u9ad4\uff0cVertex / Edge / Face \u7684\u96c6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Concave"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7531 Face \u7d44\u6210\u7684\u591a\u9762\u9ad4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Convex"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7531 Vertex \u7d44\u6210\u7684\u591a\u9762\u9ad4")))),(0,a.kt)("h2",{id:"execution-order"},"Execution Order"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ExecutionOrder.html"},"Reference")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow Chart",src:n(227).Z,width:"1151",height:"2397"})),(0,a.kt)("h2",{id:"gameobject"},(0,a.kt)("inlineCode",{parentName:"h2"},"GameObject")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GameObject")," is containers for ",(0,a.kt)("inlineCode",{parentName:"li"},"Component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GameObject")," always has ",(0,a.kt)("inlineCode",{parentName:"li"},"Transform"),", cannot remove")),(0,a.kt)("h2",{id:"component"},(0,a.kt)("inlineCode",{parentName:"h2"},"Component")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Transform"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Mesh"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Light"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Camera"),", ... is ",(0,a.kt)("inlineCode",{parentName:"li"},"Component"))),(0,a.kt)("h2",{id:"prefab"},(0,a.kt)("inlineCode",{parentName:"h2"},"Prefab")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Template for collection of ",(0,a.kt)("inlineCode",{parentName:"li"},"GameObject")," with property"),(0,a.kt)("li",{parentName:"ul"},"Can keep property in different scene"),(0,a.kt)("li",{parentName:"ul"},"Can be instantiate"),(0,a.kt)("li",{parentName:"ul"},"Can be override property in different instance")))}m.isMDXComponent=!0},227:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/monobehaviour_flowchart-c57ede010c0a989359cb98585a4bfa0c.svg"}}]);