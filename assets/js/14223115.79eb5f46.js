"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3248],{41970:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=r(75366),s=r(26192);const o={date:new Date("2024-02-16T00:00:00.000Z"),tags:["Python"]},c="Python Package Manager",l={permalink:"/note/blog/Python Package Manager",source:"@site/blog/Python Package Manager.md",title:"Python Package Manager",description:"Python \u7684 Deployment \u771f\u7684\u5f88\u96e3\uff0c\u505a\u6210\u8d8a\u4f86\u8d8a\u591a\u7684\u5de5\u5177\u60f3\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0cRye \u7684 Doc \u6709\u8a73\u7d30\u8aaa\u660e Python \u7684 Package Management / Version / Resolver \u554f\u984c",date:"2024-02-16T00:00:00.000Z",formattedDate:"February 16, 2024",tags:[{label:"Python",permalink:"/note/blog/tags/python"}],readingTime:.87,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2024-02-16T00:00:00.000Z",tags:["Python"]},unlisted:!1,prevItem:{title:"Install PyTorch CUDA via PDM",permalink:"/note/blog/PDM PyTorch"},nextItem:{title:"Web Server",permalink:"/note/blog/Web Server"}},i={authorsImageUrls:[]},a=[{value:"PDM",id:"pdm",level:2},{value:"Rye",id:"rye",level:2},{value:"Poetry",id:"poetry",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Python \u7684 Deployment \u771f\u7684\u5f88\u96e3\uff0c\u505a\u6210\u8d8a\u4f86\u8d8a\u591a\u7684\u5de5\u5177\u60f3\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0cRye \u7684 ",(0,t.jsx)(n.a,{href:"https://rye-up.com/philosophy/",children:"Doc"})," \u6709\u8a73\u7d30\u8aaa\u660e Python \u7684 Package Management / Version / Resolver \u554f\u984c"]}),"\n",(0,t.jsx)(n.p,{children:"Show which python is using"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'python -c "import sys; print(sys.prefix)"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"pdm",children:"PDM"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pdm-project.org/",children:"PDM"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Personal recommended"}),"\n",(0,t.jsxs)(n.li,{children:["Support ",(0,t.jsx)(n.code,{children:"pnpm"})," liked cache link"]}),"\n",(0,t.jsxs)(n.li,{children:["Support standard ",(0,t.jsx)(n.code,{children:"pyproject.toml"})]}),"\n",(0,t.jsx)(n.li,{children:"PDM use system python"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Enable ",(0,t.jsx)(n.code,{children:"pnpm"})," liked cache"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pdm config install.cache on\n"})}),"\n",(0,t.jsx)(n.h2,{id:"rye",children:"Rye"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://rye-up.com/",children:"Rye"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Personal recommended if ",(0,t.jsx)(n.code,{children:"pnpm"})," liked cache is not need"]}),"\n",(0,t.jsx)(n.li,{children:"Built by the creator of the Flask"}),"\n",(0,t.jsx)(n.li,{children:"Rye can manager multiple versions of Python"}),"\n",(0,t.jsxs)(n.li,{children:["Rye use ",(0,t.jsx)(n.a,{href:"https://github.com/indygreg/python-build-standalone",children:"Python Standalone Builds"})]}),"\n",(0,t.jsxs)(n.li,{children:["Rye replace ",(0,t.jsx)(n.code,{children:"python"})," command to auto use the specified version of ",(0,t.jsx)(n.code,{children:".python-version"})]}),"\n",(0,t.jsxs)(n.li,{children:["Rye does not have ",(0,t.jsx)(n.code,{children:"pip"})," command"]}),"\n",(0,t.jsxs)(n.li,{children:["Support standard ",(0,t.jsx)(n.code,{children:"pyproject.toml"})]}),"\n",(0,t.jsx)(n.li,{children:"Written in Rust"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Set Python version of project"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# rye pin <version>\nrye pin 3.10\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Install package dependencies of ",(0,t.jsx)(n.code,{children:"pyproject.toml"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"rye sync\n"})}),"\n",(0,t.jsx)(n.h2,{id:"poetry",children:"Poetry"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://python-poetry.org/",children:"Poetry"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},26192:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var t=r(97049);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);