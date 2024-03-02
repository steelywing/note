"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1626],{97684:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=r(75366),i=r(26192);const l={date:new Date("2023-12-05T00:00:00.000Z"),tags:["Web","Server"]},t="Web Server",o={permalink:"/note/blog/Web Server",source:"@site/blog/Web Server.md",title:"Web Server",description:"Apache",date:"2023-12-05T00:00:00.000Z",formattedDate:"December 5, 2023",tags:[{label:"Web",permalink:"/note/blog/tags/web"},{label:"Server",permalink:"/note/blog/tags/server"}],readingTime:.655,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2023-12-05T00:00:00.000Z",tags:["Web","Server"]},unlisted:!1,prevItem:{title:"Python Package Manager",permalink:"/note/blog/Python Package Manager"},nextItem:{title:"Disk Usage Tool",permalink:"/note/blog/Disk Usage Tool"}},a={authorsImageUrls:[]},c=[{value:"Apache",id:"apache",level:2},{value:"Nginx",id:"nginx",level:2},{value:"Caddy",id:"caddy",level:2},{value:"Simple static files web server",id:"simple-static-files-web-server",level:2},{value:"For CLI",id:"for-cli",level:3},{value:"For <strong>node.js</strong>",id:"for-nodejs",level:3},{value:"For python",id:"for-python",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"apache",children:"Apache"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Flexible config"}),"\n",(0,s.jsx)(n.li,{children:"C10K problem"}),"\n",(0,s.jsx)(n.li,{children:"Popular"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"nginx",children:"Nginx"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fast"}),"\n",(0,s.jsx)(n.li,{children:"Popular"}),"\n",(0,s.jsxs)(n.li,{children:["Conditional config not flexible (see ",(0,s.jsx)(n.a,{href:"/Note/Nginx/if/",children:"Nginx if"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Language: C"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"caddy",children:"Caddy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fast"}),"\n",(0,s.jsx)(n.li,{children:"Language: Go"}),"\n",(0,s.jsxs)(n.li,{children:["Automatic apply TLS certification","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Support ZeroSSL and Let's Encrypt"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Support config using API"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"simple-static-files-web-server",children:"Simple static files web server"}),"\n",(0,s.jsx)(n.h3,{id:"for-cli",children:"For CLI"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/svenstaro/miniserve",children:"miniserve"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cross platform"}),"\n",(0,s.jsx)(n.li,{children:"Self-contained (single executable file)"}),"\n",(0,s.jsx)(n.li,{children:"Lightweight ( < 2MB for Windows / Linux x86 )"}),"\n",(0,s.jsx)(n.li,{children:"Language: Rust"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"for-nodejs",children:["For ",(0,s.jsx)(n.strong,{children:"node.js"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/vercel/serve",children:"vercel serve"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CLI"}),"\n",(0,s.jsx)(n.li,{children:"API"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/http-party/http-server",children:"http-server"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Not recommended"}),"\n",(0,s.jsxs)(n.li,{children:["Issue of lastest version (see ",(0,s.jsx)(n.a,{href:"https://github.com/http-party/http-server/issues/634",children:"Version 14 has error ERR_HTTP_HEADERS_SENT"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"for-python",children:"For python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# python -m http.server [port]\npython -m http.server\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Python built-in"}),"\n",(0,s.jsx)(n.li,{children:"Crash if the request is not standard"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},26192:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var s=r(97049);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);