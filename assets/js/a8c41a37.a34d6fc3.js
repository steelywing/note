"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9568],{7485:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,p(p({ref:t},c),{},{components:n})):r.createElement(h,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(6274),a=(n(6687),n(7485));const o={},p="Proxy",l={unversionedId:"Note/Nginx/Proxy",id:"Note/Nginx/Proxy",title:"Proxy",description:"Nginx reverse proxy",source:"@site/docs/Note/Nginx/Proxy.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/Proxy",permalink:"/note/Note/Nginx/Proxy",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/Proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Maintenance mode",permalink:"/note/Note/Nginx/Maintenance"},next:{title:"Redirect / Rewrite",permalink:"/note/Note/Nginx/Redirect"}},i={},s=[{value:"<code>proxy_pass</code> with URI",id:"proxy_pass-with-uri",level:2},{value:"<code>proxy_pass</code> without URI",id:"proxy_pass-without-uri",level:2},{value:"Header",id:"header",level:2},{value:"Error",id:"error",level:2},{value:"Load balancing",id:"load-balancing",level:2},{value:"SSL/TLS offloading",id:"ssltls-offloading",level:2},{value:"WebSocket",id:"websocket",level:2},{value:"Real IP address",id:"real-ip-address",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"proxy"},"Proxy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"proxy_pass <scheme>://<host>[:port][/<URI>];\n")),(0,a.kt)("admonition",{title:"Reference",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/"},"Nginx reverse proxy"))),(0,a.kt)("h2",{id:"proxy_pass-with-uri"},(0,a.kt)("inlineCode",{parentName:"h2"},"proxy_pass")," with URI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"location /path/ {\n    proxy_pass http://www.example.com/app/;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request ",(0,a.kt)("inlineCode",{parentName:"li"},"/path/page.html")," will be proxy to ",(0,a.kt)("inlineCode",{parentName:"li"},"http://www.example.com/app/page.html")),(0,a.kt)("li",{parentName:"ul"},"Prefix ",(0,a.kt)("inlineCode",{parentName:"li"},"/path/")," will be replaced by ",(0,a.kt)("inlineCode",{parentName:"li"},"/app/"))),(0,a.kt)("h2",{id:"proxy_pass-without-uri"},(0,a.kt)("inlineCode",{parentName:"h2"},"proxy_pass")," without URI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"location /path/ {\n    proxy_pass http://www.example.com;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request ",(0,a.kt)("inlineCode",{parentName:"li"},"/path/page.html")," will be proxy to ",(0,a.kt)("inlineCode",{parentName:"li"},"http://www.example.com/path/page.html"))),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#var_proxy_add_x_forwarded_for"},(0,a.kt)("inlineCode",{parentName:"a"},"X-Forwarded-For")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},'location / {\n    # Set "Host" header to the $host in request\n    proxy_set_header Host $host;\n\n    # Set "X-Real-IP" header to client IP address\n    proxy_set_header X-Real-IP $remote_addr;\n\n    # Add client IP address to "X-Forwarded-For" header\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    \n    proxy_pass http://localhost:8000;\n}\n')),(0,a.kt)("h2",{id:"error"},"Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"an upstream response is buffered to a temporary file /var/cache/nginx/proxy_temp/XXXXXX while reading upstream\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://support.f5.com/csp/article/K48373902"},"Ref"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Method 1"),(0,a.kt)("p",{parentName:"li"},"Increase both parameters by factor of two until warning stop appearing"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n    proxy_buffers 16 16k;\n    proxy_buffer_size 16k;\n\n    proxy_pass http://localhost:8000;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Method 2"),(0,a.kt)("p",{parentName:"li"},"Disable buffering"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n    proxy_buffering off;\n\n    proxy_pass http://localhost:8000;\n}\n")),(0,a.kt)("h2",{id:"load-balancing"},"Load balancing"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/load_balancing.html"},"Ref"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream backends {\n    # Method 1 (Default)\n    # round-robin\n\n    # Method 2\n    # request is assigned to least-connected server\n    least_conn;\n\n    # Method 3\n    # based on the client IP address\n    ip_hash;\n\n    # default <weight> = 1\n    # server <host> [weight=<weight>]\n    server 10.0.0.1:80 weight=4;\n    server 10.0.0.2:80;\n    # ...\n}\n\nserver {\n    listen 80;\n    server_name www.example.com;\n\n    location / {\n        proxy_pass http://backends;\n    }\n}\n")),(0,a.kt)("h2",{id:"ssltls-offloading"},"SSL/TLS offloading"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/blog/nginx-ssl/"},"Ref"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 443 ssl;\n    server_name www.example.com;\n\n    # The certificate file\n    # Support chained certificate\n    ssl_certificate www.example.com.crt;\n\n    # The private key file\n    ssl_certificate_key www.example.com.key;\n\n    location / {\n        proxy_pass http://10.0.0.1;\n    }\n}\n")),(0,a.kt)("h2",{id:"websocket"},"WebSocket"),(0,a.kt)("p",null,"Proxy ",(0,a.kt)("inlineCode",{parentName:"p"},"ws://example.com/ws/")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"ws://localhost:7890/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"map $http_upgrade $connection_upgrade {\n    default upgrade;\n    ''      close;\n}\n\nserver {\n    listen 80;\n    server_name example.com;\n\n    # ...\n\n    location /ws/ {\n        proxy_pass http://localhost:7890/;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n        proxy_set_header Host $host;\n    }\n}\n")),(0,a.kt)("admonition",{title:"Reference",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/blog/websocket-nginx/"},"Nginx WebSocket"))),(0,a.kt)("p",null,"Proxy all WebSocket traffic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},'map $http_upgrade $connection_upgrade {\n    default upgrade;\n    \'\'      close;\n}\n\nserver {\n    listen 80;\n    server_name example.com;\n\n    location /websocket/ {\n        internal;\n\n        proxy_pass http://localhost:7890/;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n        proxy_set_header Host $host;\n    }\n\n    location / {\n        set $websocket 1;\n        if ($http_connection !~* "upgrade") {\n            set $websocket 0;\n        }\n        if ($http_upgrade !~* "websocket") {\n            set $websocket 0;\n        }\n        if ($websocket) {\n            rewrite ^ /websocket$uri last;\n        }\n\n        # ...\n    }\n}\n')),(0,a.kt)("h2",{id:"real-ip-address"},"Real IP address"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"$remote_addr")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$remote_port")," using header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"# set_real_ip_from  <proxy server IP address>[/<CIDR>];\n# Trusted address\nset_real_ip_from  10.0.0.1;\n\n# Use X-Forwarded-For header\nreal_ip_header    X-Forwarded-For;\nreal_ip_recursive on;\n\n# Use X-Real-IP (Default)\nreal_ip_header    X-Real-IP;\n")),(0,a.kt)("admonition",{title:"Reference",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_realip_module.html"},"ngx_http_realip_module"))))}d.isMDXComponent=!0}}]);