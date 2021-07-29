(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[914],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9009:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=["components"],c={sidebar_label:"Module"},i="Module - JavaScript",p={unversionedId:"Programming/JavaScript/Module",id:"Programming/JavaScript/Module",isDocsHomePage:!1,title:"Module - JavaScript",description:"IIFE",source:"@site/docs/Programming/JavaScript/Module.md",sourceDirName:"Programming/JavaScript",slug:"/Programming/JavaScript/Module",permalink:"/note/Programming/JavaScript/Module",editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/JavaScript/Module.md",version:"current",frontMatter:{sidebar_label:"Module"},sidebar:"programming",previous:{title:"Browser Automation",permalink:"/note/Programming/JavaScript/BrowserAutomation"},next:{title:"Basic",permalink:"/note/Programming/Python/"}},u=[{value:"IIFE",id:"iife",children:[]},{value:"AMD",id:"amd",children:[]},{value:"CommonJS",id:"commonjs",children:[]},{value:"UMD",id:"umd",children:[]},{value:"ESM",id:"esm",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"module---javascript"},"Module - JavaScript"),(0,a.kt)("h2",{id:"iife"},"IIFE"),(0,a.kt)("p",null,"Immediately Invoked Function Expression"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Used in Browser")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Glossary/IIFE"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// circle.js\n\nvar circle = (function () {\n    const { PI } = Math;\n    return {\n        pi: PI;\n        area: (r) => PI * (r ** 2);\n    };\n})();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="circle.js"><\/script>\n<script>\nconsole.log(circle.pi);\n<\/script>\n')),(0,a.kt)("h2",{id:"amd"},"AMD"),(0,a.kt)("p",null,"Asynchronous Module Definition"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Used in RequireJS")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"#uncommon")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://requirejs.org/docs/api.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// circle.js\n\ndefine('circle',\n    [ /* Dependency */ ],\n    function( /* Dependency */ ) {\n        const { PI } = Math;\n        return {\n            pi: PI,\n            area: (r) => PI * (r ** 2),\n        };\n    }\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"requirejs(['circle'], function(circle) {\n    console.log(circle.pi);\n});\n")),(0,a.kt)("h2",{id:"commonjs"},"CommonJS"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Used in Node.js")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"http://wiki.commonjs.org/wiki/Modules/1.1.1"},"Reference"))),(0,a.kt)("p",null,"File extension: ",(0,a.kt)("inlineCode",{parentName:"p"},".cjs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// circle.js\n\nconst { PI } = Math;\n\nexports.pi = PI;\nexports.area = (r) => PI * (r ** 2);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const circle = require('./circle.js');\nconsole.log(circle.pi);\n")),(0,a.kt)("h2",{id:"umd"},"UMD"),(0,a.kt)("p",null,"Universal Module Definition"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"#uncommon")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Used in Node.js, Browser")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/umdjs/umd"},"Reference"))),(0,a.kt)("p",null,"Uses AMD as a base, with special-casing added to handle CommonJS compatibility."),(0,a.kt)("h2",{id:"esm"},"ESM"),(0,a.kt)("p",null,"ECMAScript Module"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Used in Node.js, Browser")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},(0,a.kt)("inlineCode",{parentName:"a"},"import")),", ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"},(0,a.kt)("inlineCode",{parentName:"a"},"export")))),(0,a.kt)("p",null,"File extension: ",(0,a.kt)("inlineCode",{parentName:"p"},".mjs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// circle.mjs\n\nconst { PI } = Math;\n\nexport const pi = PI;\nexport function area(r) {\n    return PI * (r ** 2);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import * as circle from "./circle";\nconsole.log(circle.pi);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { pi, area } from "./circle";\nconsole.log(pi);\n')))}m.isMDXComponent=!0}}]);