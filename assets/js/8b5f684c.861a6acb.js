(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7655],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3680:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={},c=void 0,p={unversionedId:"Note/Apache",id:"Note/Apache",isDocsHomePage:!1,title:"Apache",description:"Test configuration file syntax",source:"@site/docs/Note/Apache.md",sourceDirName:"Note",slug:"/Note/Apache",permalink:"/note/Note/Apache",editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Apache.md",version:"current",frontMatter:{},sidebar:"note",previous:{title:"Android",permalink:"/note/Note/Android"},next:{title:"Boot",permalink:"/note/Note/Boot"}},s=[{value:"Test configuration file syntax",id:"test-configuration-file-syntax",children:[]},{value:"Order",id:"order",children:[]},{value:"Sections order ( Priority / Precedence )",id:"sections-order--priority--precedence-",children:[]},{value:"Proxy",id:"proxy",children:[]},{value:"Load balancer",id:"load-balancer",children:[]},{value:"mod_rewrite",id:"mod_rewrite",children:[]},{value:"Client authentication",id:"client-authentication",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"test-configuration-file-syntax"},"Test configuration file syntax"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/programs/apachectl.html"},"Doc"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apachectl configtest\n")),(0,o.kt)("h2",{id:"order"},"Order"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Deprecated")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"Require"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html"},"Doc"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Order Allow, Deny")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Pseudo code\n\nfunction isAllow(match_allow, match_deny) {\n    // Default\n    allow = false;\n\n    if (match_allow) {\n        allow = true;\n    }\n\n    if (match_deny) {\n        allow = false;\n    }\n\n    return allow;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Order Deny, Allow")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Pseudo code\n\nfunction isAllow(match_allow, match_deny) {\n    // Default\n    allow = true;\n\n    if (match_deny) {\n        allow = false;\n    }\n\n    if (match_allow) {\n        allow = true;\n    }\n\n    return allow;\n}\n")),(0,o.kt)("h2",{id:"sections-order--priority--precedence-"},"Sections order ( Priority / Precedence )"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/sections.html#merging"},"Doc"))),(0,o.kt)("p",null,"The order of merging is"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Directory>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Shortest to longest"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<DirectoryMatch>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},'<Directory "~">')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Files>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<FilesMatch>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the order in the configuration"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Location>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<LocationMatch>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the order in the configuration"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<If>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"in the order in the configuration")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Pseudo code\n\nfunction getConfig(request) {\n    var config = {};\n    if (Directory.match(request)) {\n        Object.assign(config, Directory.config);\n    }\n    if (DirectoryMatch.match(request)) {\n        Object.assign(config, DirectoryMatch.config);\n    }\n    if (Files.match(request)) {\n        Object.assign(config, Files.config);\n    }\n    if (Location.match(request)) {\n        Object.assign(config, Location.config);\n    }\n    if (If.match(request)) {\n        Object.assign(config, If.config);\n    }\n    return config;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},(0,o.kt)("inlineCode",{parentName:"a"},"Object.assign reference"))),(0,o.kt)("p",null,"Sections having same priority are processed in the configuration file order."),(0,o.kt)("h2",{id:"proxy"},"Proxy"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy.html"},"Doc"))),(0,o.kt)("p",null,"Enable proxy module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"a2enmod proxy\na2enmod proxy_http\n")),(0,o.kt)("p",null,"Proxy request to backend server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'ProxyPass "/" "http://<server>/"\n')),(0,o.kt)("p",null,"Proxy request that is start with ",(0,o.kt)("inlineCode",{parentName:"p"},"/api")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'ProxyPass "/api" "http://<server>"\n')),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"Location")," response header from the backend server to proxy server"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Most often required")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'ProxyPass "/" "http://<server>/"\nProxyPassReverse "/" "http://<server>/"\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ProxyPass")," to a HTTPS server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'SSLProxyEngine on\n\n# Check if the host from request URI match the CN of the certificate\nSSLProxyCheckPeerName { on | off }\n\n# Checked if the remote server certificate is expired\nSSLProxyCheckPeerExpire { on | off }\n\nProxyPass "/" "https://<server>/"\nProxyPassReverse "/" "https://<server>/"\n')),(0,o.kt)("h2",{id:"load-balancer"},"Load balancer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Reference"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html"},"How To - Reverse Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html"},"Doc - Proxy Balancer")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'<Proxy "balancer://cluster">\n    BalancerMember "http://<server 1>"\n    BalancerMember "http://<server 2>"\n</Proxy>\nProxyPass "/" "balancer://cluster/"\nProxyPassReverse "/" "balancer://cluster/"\n')),(0,o.kt)("p",null,"Sticky session"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED\n<Proxy "balancer://cluster">\n    BalancerMember "http://<server 1>" route=1\n    BalancerMember "http://<server 2>" route=2\n</Proxy>\nProxyPass "/" "balancer://cluster/"\nProxyPassReverse "/" "balancer://cluster/"\n')),(0,o.kt)("h2",{id:"mod_rewrite"},"mod_rewrite"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/rewrite/intro.html"},"Intro")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html"},"Doc")))),(0,o.kt)("p",null,"Use PCRE to rewrite URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'RewriteEngine { on | off }\nRewriteCond "<test string>" "[!]<RegExp condition>" [<flags>]\nRewriteCond "<test string>" "[!]=<string condition>" [<flags>]\nRewriteRule "<RegExp pattern>" "<substitution>" [<flags>]\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritecond"},"Variable"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By default, the query string is passed through unchanged"),(0,o.kt)("li",{parentName:"ul"},"To replace query string, append ",(0,o.kt)("inlineCode",{parentName:"li"},"?<query>")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"<substitution>")),(0,o.kt)("li",{parentName:"ul"},"To combin original query string, use ",(0,o.kt)("inlineCode",{parentName:"li"},"[QSA]")," flag")),(0,o.kt)("p",null,"Redirect HTTP to HTTPS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'RewriteEngine on\nRewriteCond "%{HTTPS}" "=off"\nRewriteRule "^/?(.*)" "https://%{HTTP_HOST}/$1" [R,L]\n')),(0,o.kt)("p",null,"Debug"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},"LogLevel alert rewrite:trace3\n")),(0,o.kt)("h2",{id:"client-authentication"},"Client authentication"),(0,o.kt)("p",null,"Using certificate"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html"},"How To")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/mod/mod_ssl.html"},"Doc")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'SSLVerifyClient require\nSSLVerifyDepth 1\nSSLCACertificateFile "<ca.crt>"\n\n# Optional CRL\nSSLCARevocationCheck { chain | leaf | none }\nSSLCARevocationFile "<revocation.crl>"\n')))}d.isMDXComponent=!0}}]);