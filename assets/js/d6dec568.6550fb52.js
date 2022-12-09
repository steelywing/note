"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1073],{7485:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,g=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(6274),o=(n(6687),n(7485));const l={},i="Rollup.js",a={unversionedId:"Programming/JavaScript/Rollup",id:"Programming/JavaScript/Rollup",title:"Rollup.js",description:"- Cannot mix using CommonJS require() and ES module import in the same one JS file",source:"@site/docs/Programming/JavaScript/Rollup.md",sourceDirName:"Programming/JavaScript",slug:"/Programming/JavaScript/Rollup",permalink:"/note/Programming/JavaScript/Rollup",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/JavaScript/Rollup.md",tags:[],version:"current",frontMatter:{},sidebar:"programming",previous:{title:"Promise",permalink:"/note/Programming/JavaScript/Promise"},next:{title:"Python",permalink:"/note/Programming/Python/"}},p={},u=[{value:"IIFE",id:"iife",level:2},{value:"Run",id:"run",level:2},{value:"Using SystemJS",id:"using-systemjs",level:2},{value:"Import plain JS",id:"import-plain-js",level:2}],m={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rollupjs"},"Rollup.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cannot mix using CommonJS ",(0,o.kt)("inlineCode",{parentName:"li"},"require()")," and ES module ",(0,o.kt)("inlineCode",{parentName:"li"},"import")," in the same one JS file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import")," can import ES module"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import")," can import CommonJS using ",(0,o.kt)("inlineCode",{parentName:"li"},"@rollup/plugin-commonjs"))),(0,o.kt)("h2",{id:"iife"},"IIFE"),(0,o.kt)("p",null,"Immediately-Invoked Function Expression"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No Code Splitting")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="rollup.config.js"',title:'"rollup.config.js"'},"import resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\nimport { terser } from 'rollup-plugin-terser';\n\n// `npm run build` -> `production` is true\n// `npm run watch` -> `production` is false\nconst production = !process.env.ROLLUP_WATCH;\n\nconst plugins = [\n    resolve(), // find date-fns in node_modules\n    commonjs(), // converts date-fns to ES modules\n    production && terser() // minify, but only in production\n];\n\nexport default [\n    {\n        input: 'src/main.js',\n        output: {\n            file: 'public/bundle.js',\n            format: 'iife',\n            sourcemap: true\n        },\n        plugins: plugins,\n    },\n    /* \n    {\n        input: ...,\n        output: ...,\n    }\n    */\n];\n")),(0,o.kt)("admonition",{title:"Reference",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/rollup/rollup-starter-app/blob/master/rollup.config.js"},"rollup-starter-app"))),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-c")),(0,o.kt)("td",{parentName:"tr",align:null},"Use config file",(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"rollup.config.js"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-w")),(0,o.kt)("td",{parentName:"tr",align:null},"Watch mode")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rollup -c [rollup.config.js] [-w]\n")),(0,o.kt)("admonition",{title:"Reference",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/#configuration-files"},"Configuration Files"))),(0,o.kt)("h2",{id:"using-systemjs"},"Using SystemJS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compatible"),(0,o.kt)("li",{parentName:"ul"},"Code Splitting")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev systemjs\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="rollup.config.js"',title:'"rollup.config.js"'},"import resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\nimport { terser } from 'rollup-plugin-terser';\n\nconst production = !process.env.ROLLUP_WATCH;\n\nconst plugins = [\n    resolve(),\n    commonjs(),\n    production && terser(), // minify\n];\n\nexport default [\n    {\n        input: ['page.js', /*...*/],\n        output: {\n            dir: 'dist/',\n            format: 'system',\n            sourcemap: true,\n        },\n        plugins: plugins,\n    },\n];\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title=".html"',title:'".html"'},"<script src=\"node_modules/systemjs/dist/s.min.js\"><\/script>\n\n<script>\nSystem.import('dist/page.js');\n<\/script>\n")),(0,o.kt)("h2",{id:"import-plain-js"},"Import plain JS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'plain.js';\n")))}s.isMDXComponent=!0}}]);