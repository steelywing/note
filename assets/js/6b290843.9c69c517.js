"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7314],{87485:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(76274),o=(n(76687),n(87485));const a={},l="$host",i={unversionedId:"Note/Nginx/host",id:"Note/Nginx/host",title:"$host",description:"$host is in this order of precedence (from high to low):",source:"@site/docs/Note/Nginx/host.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/host",permalink:"/note/Note/Nginx/host",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/host.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"WebSocket Proxy - Nginx",permalink:"/note/Note/Nginx/WebSocket"},next:{title:"if",permalink:"/note/Note/Nginx/if"}},s={},p=[{value:"Host name from the request line",id:"host-name-from-the-request-line",level:2},{value:"Validation",id:"validation",level:2},{value:"Nginx testing config",id:"nginx-testing-config",level:3},{value:"When all exist ...",id:"when-all-exist-",level:3},{value:"When only <code>Host</code> header exist ...",id:"when-only-host-header-exist-",level:3},{value:"When none exist ...",id:"when-none-exist-",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"host"},(0,o.kt)("inlineCode",{parentName:"h1"},"$host")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$host")," is in this order of precedence (from high to low):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#host-name-from-the-request-line"},"Host name from the request line")," (rarely used)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"GET http://example.org/test/\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Host")," request header field")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"server_name")," (in Nginx config) matching a request, even if ",(0,o.kt)("inlineCode",{parentName:"p"},"server_name")," is wildcard (",(0,o.kt)("inlineCode",{parentName:"p"},"*.example.org"),")"))),(0,o.kt)("h2",{id:"host-name-from-the-request-line"},"Host name from the request line"),(0,o.kt)("p",null,"When open URL ",(0,o.kt)("inlineCode",{parentName:"p"},"http://example.org/test/")," ..."),(0,o.kt)("p",null,"Most browser send the request like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"GET /test/ HTTP/1.1\nHost: example.org\n")),(0,o.kt)("p",null,"Most browser doesn't send the request like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"GET http://example.org/test/ HTTP/1.1\n")),(0,o.kt)("h2",{id:"validation"},"Validation"),(0,o.kt)("h3",{id:"nginx-testing-config"},"Nginx testing config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},'server {\n    listen       80;\n    server_name  *.example.org;\n\n    location / {\n        default_type "text/plain";\n        return 200 "[host] = $host";\n    }\n}\n')),(0,o.kt)("h3",{id:"when-all-exist-"},"When all exist ..."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$host")," = host name from the request line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1 -v \\\n  --request-target http://request.example.org/test/ \\\n  --path-as-is \\\n  -H "Host: host.example.org"\n')),(0,o.kt)("p",null,"This command will"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to ",(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,o.kt)("li",{parentName:"ul"},"Send request path as ",(0,o.kt)("inlineCode",{parentName:"li"},"GET http://request.example.org/test/ HTTP/1.1")),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," header to ",(0,o.kt)("inlineCode",{parentName:"li"},"Host: host.example.org"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"*   Trying 127.0.0.1:80...\n* TCP_NODELAY set\n* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)\n> GET http://request.example.org/test/ HTTP/1.1\n> Host: host.example.org\n> User-Agent: curl/7.68.0\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Server: nginx/1.23.1\n< Date: Fri, 21 Oct 2022 02:00:56 GMT\n< Content-Type: text/plain\n< Content-Length: 28\n< Connection: keep-alive\n<\n* Connection #0 to host 127.0.0.1 left intact\n[host] = request.example.org\n")),(0,o.kt)("h3",{id:"when-only-host-header-exist-"},"When only ",(0,o.kt)("inlineCode",{parentName:"h3"},"Host")," header exist ..."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$host")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"Host")," header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1/test/ -v \\\n  -H "Host: host.example.org"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"*   Trying 127.0.0.1:80...\n* TCP_NODELAY set\n* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)\n> GET /test/ HTTP/1.1\n> Host: host.example.org\n> User-Agent: curl/7.68.0\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Server: nginx/1.23.1\n< Date: Fri, 21 Oct 2022 02:01:37 GMT\n< Content-Type: text/plain\n< Content-Length: 25\n< Connection: keep-alive\n<\n* Connection #0 to host 127.0.0.1 left intact\n[host] = host.example.org\n")),(0,o.kt)("h3",{id:"when-none-exist-"},"When none exist ..."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$host")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"server_name")," (in Nginx config)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# HTTP 1.1 must have Host header, so use HTTP 1.0\ncurl http://127.0.0.1/test/ -v -H "Host:" -0\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"*   Trying 127.0.0.1:80...\n* TCP_NODELAY set\n* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)\n> GET /test/ HTTP/1.0\n> User-Agent: curl/7.68.0\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Server: nginx/1.23.1\n< Date: Fri, 21 Oct 2022 02:02:20 GMT\n< Content-Type: text/plain\n< Content-Length: 22\n< Connection: close\n<\n* Closing connection 0\n[host] = *.example.org\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref: ",(0,o.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#var_host"},"ngx_http_core_module"))))}c.isMDXComponent=!0}}]);