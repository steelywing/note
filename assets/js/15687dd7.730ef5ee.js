"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1042],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3350:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={},p="Unity",c={unversionedId:"Note/Unity",id:"Note/Unity",title:"Unity",description:"Monobehaviours doesn't use constructor",source:"@site/docs/Note/Unity.md",sourceDirName:"Note",slug:"/Note/Unity",permalink:"/note/Note/Unity",editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Unity.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Unicode",permalink:"/note/Note/Unicode"},next:{title:"iLO",permalink:"/note/Note/HP/iLO"}},u=[{value:"Execution Order",id:"execution-order",children:[],level:2},{value:"<code>GameObject</code>",id:"gameobject",children:[],level:2},{value:"<code>Component</code>",id:"component",children:[],level:2},{value:"<code>Prefab</code>",id:"prefab",children:[],level:2}],m={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unity"},"Unity"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Monobehaviours")," doesn't use constructor"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://ilkinulas.github.io/development/unity/2016/05/30/monobehaviour-constructor.html"},"Reference")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Awake()")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"Start()")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Vertex / Vertices / Point"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9ede")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Edge / Line"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7dda")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Face"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9762")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Mesh / Polygon"),(0,o.kt)("td",{parentName:"tr",align:null},"\u591a\u9762\u9ad4\uff0cVertex / Edge / Face \u7684\u96c6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Concave"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7531 Face \u7d44\u6210\u7684\u591a\u9762\u9ad4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Convex"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7531 Vertex \u7d44\u6210\u7684\u591a\u9762\u9ad4")))),(0,o.kt)("h2",{id:"execution-order"},"Execution Order"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ExecutionOrder.html"},"Reference")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow Chart",src:n(2276).Z})),(0,o.kt)("h2",{id:"gameobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"GameObject")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GameObject")," is containers for ",(0,o.kt)("inlineCode",{parentName:"li"},"Component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GameObject")," always has ",(0,o.kt)("inlineCode",{parentName:"li"},"Transform"),", cannot remove")),(0,o.kt)("h2",{id:"component"},(0,o.kt)("inlineCode",{parentName:"h2"},"Component")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Transform"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Mesh"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Light"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Camera"),", ... is ",(0,o.kt)("inlineCode",{parentName:"li"},"Component"))),(0,o.kt)("h2",{id:"prefab"},(0,o.kt)("inlineCode",{parentName:"h2"},"Prefab")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Template for collection of ",(0,o.kt)("inlineCode",{parentName:"li"},"GameObject")," with property"),(0,o.kt)("li",{parentName:"ul"},"Can keep property in different scene"),(0,o.kt)("li",{parentName:"ul"},"Can be instantiate"),(0,o.kt)("li",{parentName:"ul"},"Can be override property in different instance")))}d.isMDXComponent=!0},2276:function(e,t,n){t.Z=n.p+"assets/images/monobehaviour_flowchart-c57ede010c0a989359cb98585a4bfa0c.svg"}}]);