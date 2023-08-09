"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9568],{87485:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(76274),r=(n(76687),n(87485));const o={tags:["Nginx","Proxy"]},l="Proxy",p={unversionedId:"Note/Nginx/Proxy",id:"Note/Nginx/Proxy",title:"Proxy",description:"Ref: Nginx reverse proxy",source:"@site/docs/Note/Nginx/Proxy.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/Proxy",permalink:"/note/Note/Nginx/Proxy",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/Proxy.md",tags:[{label:"Nginx",permalink:"/note/tags/nginx"},{label:"Proxy",permalink:"/note/tags/proxy"}],version:"current",frontMatter:{tags:["Nginx","Proxy"]},sidebar:"note",previous:{title:"Maintenance mode",permalink:"/note/Note/Nginx/Maintenance"},next:{title:"Redirect / Rewrite",permalink:"/note/Note/Nginx/Rewrite"}},i={},s=[{value:"If <code>proxy_pass</code> with URI",id:"if-proxy_pass-with-uri",level:2},{value:"If <code>proxy_pass</code> without URI",id:"if-proxy_pass-without-uri",level:2},{value:"Header",id:"header",level:2},{value:"Error",id:"error",level:2},{value:"SSL/TLS offloading",id:"ssltls-offloading",level:2},{value:"WebSocket",id:"websocket",level:2},{value:"Load balancing",id:"load-balancing",level:2},{value:"Real (Client) IP address",id:"real-client-ip-address",level:2},{value:"502 Bad Gateway",id:"502-bad-gateway",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"proxy"},"Proxy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"proxy_pass <scheme>://<host>[:port][/<URI>];\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/"},"Nginx reverse proxy"))),(0,r.kt)("h2",{id:"if-proxy_pass-with-uri"},"If ",(0,r.kt)("inlineCode",{parentName:"h2"},"proxy_pass")," with URI"),(0,r.kt)("p",null,"The part of URI matching the location is replaced by ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy_pass")," URI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location /path/ {\n    proxy_pass http://www.example.com/app/;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/page.html")," will be proxy to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://www.example.com/app/page.html")),(0,r.kt)("li",{parentName:"ul"},"Prefix ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/")," will be replaced by ",(0,r.kt)("inlineCode",{parentName:"li"},"/app/"))),(0,r.kt)("h2",{id:"if-proxy_pass-without-uri"},"If ",(0,r.kt)("inlineCode",{parentName:"h2"},"proxy_pass")," without URI"),(0,r.kt)("p",null,"The request URI is passed to the server same as client request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location /path/ {\n    proxy_pass http://www.example.com;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/page.html")," will be proxy to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://www.example.com/path/page.html"))),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#var_proxy_add_x_forwarded_for"},(0,r.kt)("inlineCode",{parentName:"a"},"X-Forwarded-For")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},'location / {\n    # Set "Host" header to the $host in request\n    proxy_set_header Host $host;\n\n    # Set "X-Real-IP" header to client IP address\n    proxy_set_header X-Real-IP $remote_addr;\n\n    # Add client IP address to "X-Forwarded-For" header\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    \n    proxy_pass http://localhost:8000;\n}\n')),(0,r.kt)("h2",{id:"error"},"Error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"an upstream response is buffered to a temporary file /var/cache/nginx/proxy_temp/XXXXXX while reading upstream\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://support.f5.com/csp/article/K48373902"},"K48373902"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Method 1"),(0,r.kt)("p",{parentName:"li"},"Increase both parameters by factor of two until warning stop appearing"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n    proxy_buffers 16 16k;\n    proxy_buffer_size 16k;\n\n    proxy_pass http://localhost:8000;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Method 2"),(0,r.kt)("p",{parentName:"li"},"Disable buffering"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n    proxy_buffering off;\n\n    proxy_pass http://localhost:8000;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    server_name www.example.com;\n\n    location / {\n        proxy_pass http://backends;\n    }\n}\n")),(0,r.kt)("h2",{id:"ssltls-offloading"},"SSL/TLS offloading"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com/blog/nginx-ssl/"},"SSL/TLS Offloading, Encryption, and Certificates with NGINX and NGINX Plus"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 443 ssl;\n    server_name www.example.com;\n\n    # The certificate file\n    # Support chained certificate\n    ssl_certificate www.example.com.crt;\n\n    # The private key file\n    ssl_certificate_key www.example.com.key;\n\n    location / {\n        proxy_pass http://10.0.0.1;\n    }\n}\n")),(0,r.kt)("h2",{id:"websocket"},"WebSocket"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/note/Note/Nginx/WebSocket"},"WebSocket Proxy")),(0,r.kt)("h2",{id:"load-balancing"},"Load balancing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/note/Note/Nginx/LoadBalancing"},"Load balancing")),(0,r.kt)("h2",{id:"real-client-ip-address"},"Real (Client) IP address"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"$remote_addr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$remote_port")," using header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"# set_real_ip_from  <proxy server IP address>[/<CIDR>];\n# Trusted address\nset_real_ip_from  10.0.0.1;\n\n# by default, Nginx use X-Real-IP header to set $remote_addr\n\n# Use X-Forwarded-For header to set $remote_addr\nreal_ip_header    X-Forwarded-For;\nreal_ip_recursive on;\n\n# Use X-Real-IP header to set $remote_addr\nreal_ip_header    X-Real-IP;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_realip_module.html"},"ngx_http_realip_module"))),(0,r.kt)("h2",{id:"502-bad-gateway"},"502 Bad Gateway"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com/blog/ensuring-application-availability-with-f5-dns-load-balancer-cloud-service-and-nginx-plus/"},"Ensuring Application Availability with F5 DNS Load Balancer Cloud Service and NGINX Plus"))),(0,r.kt)("p",null,"If Nginx cannot get response from backend server, Nginx will return ",(0,r.kt)("strong",{parentName:"p"},"502 Bad Gateway")))}d.isMDXComponent=!0}}]);