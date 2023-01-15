"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[780],{7485:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,b=g["".concat(p,".").concat(d)]||g[d]||u[d]||a;return n?r.createElement(b,c(c({ref:t},s),{},{components:n})):r.createElement(b,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(6274),o=(n(6687),n(7485));const a={tags:["Nginx","Proxy","WebSocket"]},c="WebSocket Proxy - Nginx",i={unversionedId:"Note/Nginx/WebSocket",id:"Note/Nginx/WebSocket",title:"WebSocket Proxy - Nginx",description:"Proxy ws//localhost:7890/",source:"@site/docs/Note/Nginx/WebSocket.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/WebSocket",permalink:"/note/Note/Nginx/WebSocket",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/WebSocket.md",tags:[{label:"Nginx",permalink:"/note/tags/nginx"},{label:"Proxy",permalink:"/note/tags/proxy"},{label:"WebSocket",permalink:"/note/tags/web-socket"}],version:"current",frontMatter:{tags:["Nginx","Proxy","WebSocket"]},sidebar:"note",previous:{title:"Variable",permalink:"/note/Note/Nginx/Variable"},next:{title:"$host",permalink:"/note/Note/Nginx/host"}},p={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"websocket-proxy---nginx"},"WebSocket Proxy - Nginx"),(0,o.kt)("p",null,"Proxy ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://example.com/ws/")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://localhost:7890/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"map $http_upgrade $connection_upgrade {\n    default upgrade;\n    ''      close;\n}\n\nserver {\n    listen 80;\n    server_name example.com;\n\n    # ...\n\n    location /ws/ {\n        proxy_pass http://localhost:7890/;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n        proxy_set_header Host $host;\n    }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/blog/websocket-nginx/"},"Nginx WebSocket"))),(0,o.kt)("p",null,"Proxy all WebSocket traffic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},'map $http_upgrade $connection_upgrade {\n    default upgrade;\n    \'\'      close;\n}\n\nserver {\n    listen 80;\n    server_name example.com;\n\n    location /websocket/ {\n        internal;\n\n        proxy_pass http://localhost:7890/;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n        proxy_set_header Host $host;\n    }\n\n    location / {\n        set $websocket 1;\n        if ($http_connection !~* "upgrade") {\n            set $websocket 0;\n        }\n        if ($http_upgrade !~* "websocket") {\n            set $websocket 0;\n        }\n        if ($websocket) {\n            rewrite ^ /websocket$uri last;\n        }\n\n        # ...\n    }\n}\n')))}u.isMDXComponent=!0}}]);