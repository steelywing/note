"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},i="Install Nginx",o={unversionedId:"Note/Nginx/Install",id:"Note/Nginx/Install",title:"Install Nginx",description:"Nginx repository",source:"@site/docs/Note/Nginx/Install.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/Install",permalink:"/note/Note/Nginx/Install",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/Install.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Access control",permalink:"/note/Note/Nginx/AccessControl"},next:{title:"Proxy",permalink:"/note/Note/Nginx/Proxy"}},s={},p=[{value:"Nginx repository",id:"nginx-repository",level:2},{value:"Nginx official repository",id:"nginx-official-repository",level:3},{value:"CentOS EPEL repository",id:"centos-epel-repository",level:3},{value:"Install Nginx",id:"install-nginx-1",level:2},{value:"Allow HTTP / HTTPS traffic in firewall",id:"allow-http--https-traffic-in-firewall",level:2},{value:"Start Nginx",id:"start-nginx",level:2},{value:"Auto start",id:"auto-start",level:2},{value:"Restart Nginx",id:"restart-nginx",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-nginx"},"Install Nginx"),(0,a.kt)("h2",{id:"nginx-repository"},"Nginx repository"),(0,a.kt)("h3",{id:"nginx-official-repository"},"Nginx official repository"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"},"Official wiki"))),(0,a.kt)("p",null,"Red Hat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:"file=/etc/yum.repos.d/nginx.repo",file:"/etc/yum.repos.d/nginx.repo"},"[nginx]\nname=nginx repo\nbaseurl=https://nginx.org/packages/rhel/$releasever/$basearch/\ngpgcheck=0\nenabled=1\n")),(0,a.kt)("p",null,"CentOS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:"file=/etc/yum.repos.d/nginx.repo",file:"/etc/yum.repos.d/nginx.repo"},"[nginx]\nname=nginx repo\nbaseurl=https://nginx.org/packages/centos/$releasever/$basearch/\ngpgcheck=0\nenabled=1\n")),(0,a.kt)("p",null,"Ubuntu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=/etc/apt/sources.list.d/nginx.list",file:"/etc/apt/sources.list.d/nginx.list"},"# Replace $release with your corresponding Ubuntu release.\n# Ubuntu 18 = bionic\n# Ubuntu 20 = focal\n# Ubuntu 22 = jammy\n\ndeb https://nginx.org/packages/ubuntu/ $release nginx\ndeb-src https://nginx.org/packages/ubuntu/ $release nginx\n")),(0,a.kt)("h3",{id:"centos-epel-repository"},"CentOS EPEL repository"),(0,a.kt)("p",null,"Less update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install epel-release\n")),(0,a.kt)("h2",{id:"install-nginx-1"},"Install Nginx"),(0,a.kt)("p",null,"Red Hat / CentOS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install nginx\n")),(0,a.kt)("p",null,"Ubuntu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install nginx\n")),(0,a.kt)("h2",{id:"allow-http--https-traffic-in-firewall"},"Allow HTTP / HTTPS traffic in firewall"),(0,a.kt)("p",null,"Red Hat / CentOS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo firewall-cmd --permanent --zone=public --add-service=http\nsudo firewall-cmd --permanent --zone=public --add-service=https\nsudo firewall-cmd --reload\n")),(0,a.kt)("h2",{id:"start-nginx"},"Start Nginx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start nginx\n")),(0,a.kt)("h2",{id:"auto-start"},"Auto start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl { enable | disable } nginx\n")),(0,a.kt)("h2",{id:"restart-nginx"},"Restart Nginx"),(0,a.kt)("p",null,"Method 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart nginx\n")),(0,a.kt)("p",null,"Method 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -s reload\n")))}u.isMDXComponent=!0}}]);