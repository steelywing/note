"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9182],{60106:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(75366),i=t(26192);const r={},s="Maintenance mode",o={id:"Note/Nginx/Maintenance",title:"Maintenance mode",description:"For HTML only maintenance page",source:"@site/docs/Note/Nginx/Maintenance.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/Maintenance",permalink:"/note/Note/Nginx/Maintenance",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/Maintenance.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Mail proxy",permalink:"/note/Note/Nginx/MailProxy"},next:{title:"Proxy",permalink:"/note/Note/Nginx/Proxy"}},c={},l=[{value:"For HTML only maintenance page",id:"for-html-only-maintenance-page",level:2},{value:"Allow specify IP address bypass",id:"allow-specify-ip-address-bypass",level:3},{value:"For web page with asset file",id:"for-web-page-with-asset-file",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"maintenance-mode",children:"Maintenance mode"}),"\n",(0,a.jsx)(e.h2,{id:"for-html-only-maintenance-page",children:"For HTML only maintenance page"}),"\n",(0,a.jsx)(e.p,{children:"No CSS, JS, ..."}),"\n",(0,a.jsx)(e.p,{children:"Method 1 - named location"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-nginx",children:'location = @maintenance {\n    root html/;\n    # `break`: use this `location` block\n    rewrite ^ "/maintenance.html" break;\n}\n\nlocation / {\n    error_page 503 @maintenance;\n    return 503;\n\n    # ...\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"Method 2 - internal location"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-nginx",children:"location = /maintenance.html {\n    internal;\n    root html/;\n\n    # if direct access this location, return 503\n    error_page 404 =503 /maintenance.html;\n}\n\nlocation / {\n    error_page 503 /maintenance.html;\n    return 503;\n\n    # ...\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["See also ",(0,a.jsxs)(e.a,{href:"/note/Note/Nginx/Location#internal-location",children:[(0,a.jsx)(e.code,{children:"internal"})," location"]})]}),"\n",(0,a.jsx)(e.h3,{id:"allow-specify-ip-address-bypass",children:"Allow specify IP address bypass"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-nginx",children:"geo $bypass_maintenance {\n    # default return maintenance page\n    default         0;\n\n    # allow this to access\n    10.0.0.0/24     1;\n}\n\nserver {\n    location = /maintenance.html {\n        internal;\n\n        # if direct access, return 503\n        error_page 404 =503 /50x.html;\n\n        root html/;\n    }\n\n    location / {\n        error_page 503 /maintenance.html;\n        if ($bypass_maintenance = 0) {\n            return 503;\n        }\n\n        # ...\n    }\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["See also ",(0,a.jsxs)(e.a,{href:"/note/Note/Nginx/Location#internal-location",children:[(0,a.jsx)(e.code,{children:"internal"})," location"]})]}),"\n",(0,a.jsx)(e.h2,{id:"for-web-page-with-asset-file",children:"For web page with asset file"}),"\n",(0,a.jsx)(e.p,{children:"If web page with asset file (CSS, JS, ...)"}),"\n",(0,a.jsx)(e.p,{children:"Flow:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["if URI is ",(0,a.jsx)(e.code,{children:"/"}),", ",(0,a.jsx)(e.code,{children:"return 503"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["internal redirect to ",(0,a.jsx)(e.code,{children:"<maintenance page>"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["if URI found in ",(0,a.jsx)(e.code,{children:"maintenance"})," asset directory, return file with status ",(0,a.jsx)(e.code,{children:"200"})]}),"\n",(0,a.jsxs)(e.li,{children:["redirect all other request to ",(0,a.jsx)(e.code,{children:"/"})]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-nginx",children:"# for handle maintenance web page\nserver {\n    listen unix:/var/run/maintenance.nginx.sock;\n\n    # for Windows\n    # listen 8000;\n    \n    location @index {\n        # use redirect because if URI has sub-folder ($uri == /path/path/),\n        # the relative path for asset file (CSS, JS, ...) will be incorrect\n        rewrite ^ / redirect;\n    }\n\n    location = / {\n        # maintenance page URI\n        error_page 503 /maintenance.html;\n\n        return 503;\n    }\n\n    # use RegExp because it has higher priority\n    location / {\n        root html/maintenance/;\n\n        # redirect all URI to index (503) page (except asset URI),\n        # asset URI still return status 200\n        try_files $uri @index;\n    }\n}\n\n# original server block\nserver {\n    listen 80;\n    location / {\n        proxy_pass http://unix:/var/run/maintenance.nginx.sock:;\n\n        # for Windows\n        # proxy_pass http://127.0.0.1:8000;\n    }\n\n    # ...\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"Allow specify IP address bypass"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-nginx",children:"geo $bypass_maintenance {\n    default         0;\n    10.0.0.0/24     1;\n}\n\n# ...\n\nserver {\n    location / {\n        if ($bypass_maintenance = 0) {\n            proxy_pass http://unix:/var/run/maintenance.nginx.sock:;\n        }\n\n        # ...\n    }\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},26192:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>s});var a=t(97049);const i={},r=a.createContext(i);function s(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);