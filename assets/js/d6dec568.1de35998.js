"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1073],{28008:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=s(75366),i=s(26192);const o={},t="Rollup.js",l={id:"Programming/JavaScript/Rollup",title:"Rollup.js",description:"- Cannot mix using CommonJS require() and ES module import in the same one JS file",source:"@site/docs/Programming/JavaScript/Rollup.md",sourceDirName:"Programming/JavaScript",slug:"/Programming/JavaScript/Rollup",permalink:"/note/Programming/JavaScript/Rollup",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Programming/JavaScript/Rollup.md",tags:[],version:"current",frontMatter:{},sidebar:"programming",previous:{title:"Promise",permalink:"/note/Programming/JavaScript/Promise"},next:{title:"PHP",permalink:"/note/Programming/PHP/"}},c={},d=[{value:"IIFE",id:"iife",level:2},{value:"Run",id:"run",level:2},{value:"Using SystemJS",id:"using-systemjs",level:2},{value:"Import plain JS",id:"import-plain-js",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"rollupjs",children:"Rollup.js"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Cannot mix using CommonJS ",(0,r.jsx)(e.code,{children:"require()"})," and ES module ",(0,r.jsx)(e.code,{children:"import"})," in the same one JS file"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"import"})," can import ES module"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"import"})," can import CommonJS using ",(0,r.jsx)(e.code,{children:"@rollup/plugin-commonjs"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"iife",children:"IIFE"}),"\n",(0,r.jsx)(e.p,{children:"Immediately-Invoked Function Expression"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"No Code Splitting"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",metastring:'title="rollup.config.js"',children:"import resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\nimport { terser } from 'rollup-plugin-terser';\n\n// `npm run build` -> `production` is true\n// `npm run watch` -> `production` is false\nconst production = !process.env.ROLLUP_WATCH;\n\nconst plugins = [\n    resolve(), // find date-fns in node_modules\n    commonjs(), // converts date-fns to ES modules\n    production && terser() // minify, but only in production\n];\n\nexport default [\n    {\n        input: 'src/main.js',\n        output: {\n            file: 'public/bundle.js',\n            format: 'iife',\n            sourcemap: true\n        },\n        plugins: plugins,\n    },\n    /* \n    {\n        input: ...,\n        output: ...,\n    }\n    */\n];\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["Ref: ",(0,r.jsx)(e.a,{href:"https://github.com/rollup/rollup-starter-app/blob/master/rollup.config.js",children:"rollup-starter-app"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"run",children:"Run"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"-c"})}),(0,r.jsxs)(e.td,{children:["Use config file",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(e.code,{children:"rollup.config.js"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"-w"})}),(0,r.jsx)(e.td,{children:"Watch mode"})]})]})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"rollup -c [rollup.config.js] [-w]\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["Ref: ",(0,r.jsx)(e.a,{href:"https://rollupjs.org/guide/en/#configuration-files",children:"Configuration Files"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"using-systemjs",children:"Using SystemJS"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Compatible"}),"\n",(0,r.jsx)(e.li,{children:"Code Splitting"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npm install --save-dev systemjs\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",metastring:'title="rollup.config.js"',children:"import resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\nimport { terser } from 'rollup-plugin-terser';\n\nconst production = !process.env.ROLLUP_WATCH;\n\nconst plugins = [\n    resolve(),\n    commonjs(),\n    production && terser(), // minify\n];\n\nexport default [\n    {\n        input: ['page.js', /*...*/],\n        output: {\n            dir: 'dist/',\n            format: 'system',\n            sourcemap: true,\n        },\n        plugins: plugins,\n    },\n];\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",metastring:'title=".html"',children:"<script src=\"node_modules/systemjs/dist/s.min.js\"><\/script>\n\n<script>\nSystem.import('dist/page.js');\n<\/script>\n"})}),"\n",(0,r.jsx)(e.h2,{id:"import-plain-js",children:"Import plain JS"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"import 'plain.js';\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},26192:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>t});var r=s(97049);const i={},o=r.createContext(i);function t(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);