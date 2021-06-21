(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8396],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(n),m=p,d=h["".concat(c,".").concat(m)]||h[m]||i[m]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2845:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return i}});var r=n(2122),p=n(9756),a=(n(7294),n(3905)),l=["components"],o={},c={unversionedId:"Linux/CentOS",id:"Linux/CentOS",isDocsHomePage:!1,title:"CentOS",description:"Install PHP 7.0 on CentOS 7",source:"@site/docs/Linux/CentOS.md",sourceDirName:"Linux",slug:"/Linux/CentOS",permalink:"/note/Linux/CentOS",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/CentOS.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"CLI",permalink:"/note/Linux/CLI"},next:{title:"Date",permalink:"/note/Linux/Date"}},s=[{value:"Install PHP 7.0 on CentOS 7",id:"install-php-70-on-centos-7",children:[{value:"Using <code>mod_php</code>",id:"using-mod_php",children:[]},{value:"Using PHP FPM",id:"using-php-fpm",children:[]}]}],u={toc:s};function i(e){var t=e.components,n=(0,p.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-php-70-on-centos-7"},"Install PHP 7.0 on CentOS 7"),(0,a.kt)("h3",{id:"using-mod_php"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"mod_php")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://wiki.centos.org/HowTos/php7"},"Reference"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.nextcloud.com/server/13.0.0/admin_manual/installation/php_70_installation.html"},"Reference"))),(0,a.kt)("p",null,"Install the Software Collection repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install centos-release-scl\n")),(0,a.kt)("p",null,"Install the PHP 7.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install rh-php70 rh-php70-php rh-php70-php-fpm\n")),(0,a.kt)("p",null,"Find out ",(0,a.kt)("inlineCode",{parentName:"p"},"rh-php70-php")," (",(0,a.kt)("inlineCode",{parentName:"p"},"mod_php"),") installed files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"repoquery -l rh-php70-php\n")),(0,a.kt)("p",null,"List SCL packages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scl -l\n")),(0,a.kt)("p",null,"Enable PHP 7.0 on current shell session"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scl enable rh-php70-php\n")),(0,a.kt)("p",null,"Enable ",(0,a.kt)("inlineCode",{parentName:"p"},"mod_php")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /opt/rh/httpd24/root/etc/httpd/conf.d/rh-php70-php.conf /etc/httpd/conf.d/\n\nln -s /opt/rh/httpd24/root/etc/httpd/conf.modules.d/15-rh-php70-php.conf /etc/httpd/conf.modules.d/\n\nln -s /opt/rh/httpd24/root/etc/httpd/modules/librh-php70-php7.so /etc/httpd/modules/\n")),(0,a.kt)("p",null,"Restart Apache"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart httpd\n")),(0,a.kt)("h3",{id:"using-php-fpm"},"Using PHP FPM"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HTTPD/PHP-FPM"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install rh-php70-php-fpm\n")),(0,a.kt)("p",null,"Allow on SELinux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"semanage port -a -t http_port_t -p tcp 9000\n")),(0,a.kt)("p",null,"Enable PHP FPM service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable rh-php70-php-fpm\nsystemctl start rh-php70-php-fpm\n")))}i.isMDXComponent=!0}}]);