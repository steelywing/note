"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1073],{87485:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(76687);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(76274),l=(n(76687),n(87485));const o={},a="Rollup.js",i={unversionedId:"Programming/JavaScript/Rollup",id:"Programming/JavaScript/Rollup",title:"Rollup.js",description:"- Cannot mix using CommonJS require() and ES module import in the same one JS file",source:"@site/docs/Programming/JavaScript/Rollup.md",sourceDirName:"Programming/JavaScript",slug:"/Programming/JavaScript/Rollup",permalink:"/note/Programming/JavaScript/Rollup",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/JavaScript/Rollup.md",tags:[],version:"current",frontMatter:{},sidebar:"programming",previous:{title:"Promise",permalink:"/note/Programming/JavaScript/Promise"},next:{title:"PHP",permalink:"/note/Programming/PHP/"}},p={},u=[{value:"IIFE",id:"iife",level:2},{value:"Run",id:"run",level:2},{value:"Using SystemJS",id:"using-systemjs",level:2},{value:"Import plain JS",id:"import-plain-js",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rollupjs"},"Rollup.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cannot mix using CommonJS ",(0,l.kt)("inlineCode",{parentName:"li"},"require()")," and ES module ",(0,l.kt)("inlineCode",{parentName:"li"},"import")," in the same one JS file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import")," can import ES module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import")," can import CommonJS using ",(0,l.kt)("inlineCode",{parentName:"li"},"@rollup/plugin-commonjs"))),(0,l.kt)("h2",{id:"iife"},"IIFE"),(0,l.kt)("p",null,"Immediately-Invoked Function Expression"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No Code Splitting")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="rollup.config.js"',title:'"rollup.config.js"'},"import resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\nimport { terser } from 'rollup-plugin-terser';\n\n// `npm run build` -> `production` is true\n// `npm run watch` -> `production` is false\nconst production = !process.env.ROLLUP_WATCH;\n\nconst plugins = [\n    resolve(), // find date-fns in node_modules\n    commonjs(), // converts date-fns to ES modules\n    production && terser() // minify, but only in production\n];\n\nexport default [\n    {\n        input: 'src/main.js',\n        output: {\n            file: 'public/bundle.js',\n            format: 'iife',\n            sourcemap: true\n        },\n        plugins: plugins,\n    },\n    /* \n    {\n        input: ...,\n        output: ...,\n    }\n    */\n];\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ref: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rollup/rollup-starter-app/blob/master/rollup.config.js"},"rollup-starter-app"))),(0,l.kt)("h2",{id:"run"},"Run"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-c")),(0,l.kt)("td",{parentName:"tr",align:null},"Use config file",(0,l.kt)("br",null),"Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"rollup.config.js"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-w")),(0,l.kt)("td",{parentName:"tr",align:null},"Watch mode")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rollup -c [rollup.config.js] [-w]\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ref: ",(0,l.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/#configuration-files"},"Configuration Files"))),(0,l.kt)("h2",{id:"using-systemjs"},"Using SystemJS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Compatible"),(0,l.kt)("li",{parentName:"ul"},"Code Splitting")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev systemjs\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="rollup.config.js"',title:'"rollup.config.js"'},"import resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\nimport { terser } from 'rollup-plugin-terser';\n\nconst production = !process.env.ROLLUP_WATCH;\n\nconst plugins = [\n    resolve(),\n    commonjs(),\n    production && terser(), // minify\n];\n\nexport default [\n    {\n        input: ['page.js', /*...*/],\n        output: {\n            dir: 'dist/',\n            format: 'system',\n            sourcemap: true,\n        },\n        plugins: plugins,\n    },\n];\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title=".html"',title:'".html"'},"<script src=\"node_modules/systemjs/dist/s.min.js\"><\/script>\n\n<script>\nSystem.import('dist/page.js');\n<\/script>\n")),(0,l.kt)("h2",{id:"import-plain-js"},"Import plain JS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import 'plain.js';\n")))}m.isMDXComponent=!0}}]);