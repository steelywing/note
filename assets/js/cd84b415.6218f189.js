"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1130],{7485:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(6687);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,h=c["".concat(o,".").concat(d)]||c[d]||g[d]||i;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(6274),a=(t(6687),t(7485));const i={},l="Install Nginx",s={unversionedId:"Note/Nginx/Install",id:"Note/Nginx/Install",title:"Install Nginx",description:"Nginx repository",source:"@site/docs/Note/Nginx/Install.md",sourceDirName:"Note/Nginx",slug:"/Note/Nginx/Install",permalink:"/note/Note/Nginx/Install",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Nginx/Install.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Client IP address",permalink:"/note/Note/Nginx/ClientAddress"},next:{title:"Load balancing",permalink:"/note/Note/Nginx/LoadBalancing"}},o={},p=[{value:"Nginx repository",id:"nginx-repository",level:2},{value:"Nginx official repository",id:"nginx-official-repository",level:3},{value:"CentOS EPEL repository",id:"centos-epel-repository",level:3},{value:"Install Nginx",id:"install-nginx-1",level:2},{value:"Allow HTTP / HTTPS traffic in firewall",id:"allow-http--https-traffic-in-firewall",level:2},{value:"Start Nginx",id:"start-nginx",level:2},{value:"Auto start",id:"auto-start",level:2},{value:"Restart Nginx",id:"restart-nginx",level:2},{value:"Build from source",id:"build-from-source",level:2}],u={toc:p};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-nginx"},"Install Nginx"),(0,a.kt)("h2",{id:"nginx-repository"},"Nginx repository"),(0,a.kt)("h3",{id:"nginx-official-repository"},"Nginx official repository"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/en/linux_packages.html"},"Official"))),(0,a.kt)("p",null,"CentOS / Red Hat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:"file=/etc/yum.repos.d/nginx.repo",file:"/etc/yum.repos.d/nginx.repo"},"[nginx-stable]\nname=nginx stable repo\nbaseurl=http://nginx.org/packages/centos/$releasever/$basearch/\ngpgcheck=1\nenabled=1\ngpgkey=https://nginx.org/keys/nginx_signing.key\nmodule_hotfixes=true\n\n[nginx-mainline]\nname=nginx mainline repo\nbaseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/\ngpgcheck=1\nenabled=0\ngpgkey=https://nginx.org/keys/nginx_signing.key\nmodule_hotfixes=true\n")),(0,a.kt)("p",null,"Ubuntu"),(0,a.kt)("p",null,"Method 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=/etc/apt/sources.list.d/nginx.list",file:"/etc/apt/sources.list.d/nginx.list"},"# Replace $release with your corresponding Ubuntu release.\n# Ubuntu 18 = bionic\n# Ubuntu 20 = focal\n# Ubuntu 22 = jammy\n\ndeb https://nginx.org/packages/ubuntu/ $release nginx\ndeb-src https://nginx.org/packages/ubuntu/ $release nginx\n")),(0,a.kt)("p",null,"Method 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Install the prerequisites\nsudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring\n\n# Import the GPG key\ncurl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \\\n    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null\n\n# Verify the GPG key\ngpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg\n\n# Add repository\necho "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \\\nhttp://nginx.org/packages/debian `lsb_release -cs` nginx" \\\n    | sudo tee /etc/apt/sources.list.d/nginx.list\n\nsudo apt update\nsudo apt install nginx\n')),(0,a.kt)("h3",{id:"centos-epel-repository"},"CentOS EPEL repository"),(0,a.kt)("p",null,"Less update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install epel-release\n")),(0,a.kt)("h2",{id:"install-nginx-1"},"Install Nginx"),(0,a.kt)("p",null,"Red Hat / CentOS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install nginx\n")),(0,a.kt)("p",null,"Ubuntu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install nginx\n")),(0,a.kt)("h2",{id:"allow-http--https-traffic-in-firewall"},"Allow HTTP / HTTPS traffic in firewall"),(0,a.kt)("p",null,"Red Hat / CentOS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo firewall-cmd --permanent --zone=public --add-service=http\nsudo firewall-cmd --permanent --zone=public --add-service=https\nsudo firewall-cmd --reload\n")),(0,a.kt)("h2",{id:"start-nginx"},"Start Nginx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start nginx\n")),(0,a.kt)("h2",{id:"auto-start"},"Auto start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl { enable | disable } nginx\n")),(0,a.kt)("h2",{id:"restart-nginx"},"Restart Nginx"),(0,a.kt)("p",null,"Method 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart nginx\n")),(0,a.kt)("p",null,"Method 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -s reload\n")),(0,a.kt)("h2",{id:"build-from-source"},"Build from source"),(0,a.kt)("p",null,"CentOS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Install dependency\nyum install -y make gcc perl-core pcre-devel zlib-devel wget\n\nOPENSSL=openssl-1.1.1q\n\n# Download OpenSSL\nwget https://www.openssl.org/source/$OPENSSL.tar.gz\ntar -zxf $OPENSSL.tar.gz\n\n# Download Nginx\nwget http://nginx.org/download/nginx-1.22.0.tar.gz\ntar -zxf nginx-1.22.0.tar.gz\n\n# Get original Nginx config\nnginx -V\n\ncd nginx-1.22.0\n\n# Nginx CentOS default config\n./configure \\\n    --with-openssl="../$OPENSSL" \\\n    --prefix=/etc/nginx \\\n    --sbin-path=/usr/sbin/nginx \\\n    --modules-path=/usr/lib64/nginx/modules \\\n    --conf-path=/etc/nginx/nginx.conf \\\n    --error-log-path=/var/log/nginx/error.log \\\n    --http-log-path=/var/log/nginx/access.log \\\n    --pid-path=/var/run/nginx.pid \\\n    --lock-path=/var/run/nginx.lock \\\n    --http-client-body-temp-path=/var/cache/nginx/client_temp \\\n    --http-proxy-temp-path=/var/cache/nginx/proxy_temp \\\n    --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \\\n    --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \\\n    --http-scgi-temp-path=/var/cache/nginx/scgi_temp \\\n    --user=nginx \\\n    --group=nginx \\\n    --with-compat \\\n    --with-file-aio \\\n    --with-threads \\\n    --with-http_addition_module \\\n    --with-http_auth_request_module \\\n    --with-http_dav_module \\\n    --with-http_flv_module \\\n    --with-http_gunzip_module \\\n    --with-http_gzip_static_module \\\n    --with-http_mp4_module \\\n    --with-http_random_index_module \\\n    --with-http_realip_module \\\n    --with-http_secure_link_module \\\n    --with-http_slice_module \\\n    --with-http_ssl_module \\\n    --with-http_stub_status_module \\\n    --with-http_sub_module \\\n    --with-http_v2_module \\\n    --with-mail \\\n    --with-mail_ssl_module \\\n    --with-stream \\\n    --with-stream_realip_module \\\n    --with-stream_ssl_module \\\n    --with-stream_ssl_preread_module\n\n# Build\nmake\nsudo make install\n')))}g.isMDXComponent=!0}}]);