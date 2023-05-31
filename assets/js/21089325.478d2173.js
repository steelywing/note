"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[914],{87485:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(76274),o=(n(76687),n(87485));const a={sidebar_label:"Module"},l="Module - JavaScript",c={unversionedId:"Programming/JavaScript/Module",id:"Programming/JavaScript/Module",title:"Module - JavaScript",description:"IIFE",source:"@site/docs/Programming/JavaScript/Module.md",sourceDirName:"Programming/JavaScript",slug:"/Programming/JavaScript/Module",permalink:"/note/Programming/JavaScript/Module",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/JavaScript/Module.md",tags:[],version:"current",frontMatter:{sidebar_label:"Module"},sidebar:"programming",previous:{title:"Bundler",permalink:"/note/Programming/JavaScript/Bundler"},next:{title:"Promise",permalink:"/note/Programming/JavaScript/Promise"}},i={},p=[{value:"IIFE",id:"iife",level:2},{value:"AMD",id:"amd",level:2},{value:"CommonJS",id:"commonjs",level:2},{value:"UMD",id:"umd",level:2},{value:"ESM",id:"esm",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"module---javascript"},"Module - JavaScript"),(0,o.kt)("h2",{id:"iife"},"IIFE"),(0,o.kt)("p",null,"Immediately Invoked Function Expression"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used in Browser")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Glossary/IIFE"},"Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// circle.js\n\nvar circle = (function () {\n    const { PI } = Math;\n    return {\n        pi: PI;\n        area: (r) => PI * (r ** 2);\n    };\n})();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="circle.js"><\/script>\n<script>\nconsole.log(circle.pi);\n<\/script>\n')),(0,o.kt)("h2",{id:"amd"},"AMD"),(0,o.kt)("p",null,"Asynchronous Module Definition"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used in RequireJS")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"#uncommon")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://requirejs.org/docs/api.html"},"Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// circle.js\n\ndefine('circle',\n    [ /* Dependency */ ],\n    function( /* Dependency */ ) {\n        const { PI } = Math;\n        return {\n            pi: PI,\n            area: (r) => PI * (r ** 2),\n        };\n    }\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"requirejs(['circle'], function(circle) {\n    console.log(circle.pi);\n});\n")),(0,o.kt)("h2",{id:"commonjs"},"CommonJS"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used in Node.js")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"http://wiki.commonjs.org/wiki/Modules/1.1.1"},"Reference"))),(0,o.kt)("p",null,"File extension: ",(0,o.kt)("inlineCode",{parentName:"p"},".cjs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// circle.js\n\nconst { PI } = Math;\n\nexports.pi = PI;\nexports.area = (r) => PI * (r ** 2);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const circle = require('./circle.js');\nconsole.log(circle.pi);\n")),(0,o.kt)("h2",{id:"umd"},"UMD"),(0,o.kt)("p",null,"Universal Module Definition"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"#uncommon")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used in Node.js, Browser")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/umdjs/umd"},"Reference"))),(0,o.kt)("p",null,"Uses AMD as a base, with special-casing added to handle CommonJS compatibility."),(0,o.kt)("h2",{id:"esm"},"ESM"),(0,o.kt)("p",null,"ECMAScript Module"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used in Node.js, Browser")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},(0,o.kt)("inlineCode",{parentName:"a"},"import")),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"},(0,o.kt)("inlineCode",{parentName:"a"},"export")))),(0,o.kt)("p",null,"File extension: ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// circle.mjs\n\nconst { PI } = Math;\n\nexport const pi = PI;\nexport function area(r) {\n    return PI * (r ** 2);\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import * as circle from "./circle";\nconsole.log(circle.pi);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { pi, area } from "./circle";\nconsole.log(pi);\n')))}s.isMDXComponent=!0}}]);