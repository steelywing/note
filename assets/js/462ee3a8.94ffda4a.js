(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4728],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1569:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=["components"],o={},c="Zentyal",p={unversionedId:"Linux/Zentyal",id:"Linux/Zentyal",isDocsHomePage:!1,title:"Zentyal",description:"Add SSL certificate",source:"@site/docs/Linux/Zentyal.md",sourceDirName:"Linux",slug:"/Linux/Zentyal",permalink:"/note/Linux/Zentyal",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Zentyal.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"VPN",permalink:"/note/Linux/VPN"},next:{title:"awk",permalink:"/note/Linux/awk"}},u=[{value:"Add SSL certificate",id:"add-ssl-certificate",children:[]},{value:"Module / Service",id:"module--service",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"zentyal"},"Zentyal"),(0,l.kt)("h2",{id:"add-ssl-certificate"},"Add SSL certificate"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://doc.zentyal.org/en/ca.html"},"Reference"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Zentyal 4.0")),(0,l.kt)("p",null,"Web Admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Upload certificate, key, CA (Chain) certificate, full chain certificate to ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/zentyal/conf/ssl/"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Change the config file ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/share/zentyal/stubs/core/nginx.conf.mas")," to"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"ssl_certificate <% $zentyalconfdir %>ssl/<cert.pem>;\nssl_certificate_key <% $zentyalconfdir %>ssl/<key.pem>;\nssl_client_certificate <% $zentyalconfdir %>ssl/<chain.pem>;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Restart ",(0,l.kt)("inlineCode",{parentName:"p"},"webadmin")," service"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"/etc/init.d/zentyal webadmin restart\n")))),(0,l.kt)("p",null,"Mail"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Change the config file ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/share/zentyal/stubs/mail/main.cf.mas")," to"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"my $certFile = '/var/lib/zentyal/conf/ssl/<fullchain.pem>';\nmy $keyFile  = '/var/lib/zentyal/conf/ssl/<key.pem>';\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Change the config file ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/share/zentyal/stubs/mail/dovecot.conf.mas")," to"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"ssl_cert = </var/lib/zentyal/conf/ssl/<fullchain.pem>\nssl_key = </var/lib/zentyal/conf/ssl/<key.pem>\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Restart ",(0,l.kt)("inlineCode",{parentName:"p"},"mail")," service"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"/etc/init.d/zentyal mail restart\n")))),(0,l.kt)("h2",{id:"module--service"},"Module / Service"),(0,l.kt)("p",null,"<= Zentyal 4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/init.d/zentyal <module> { start | stop | status | enabled | restart }\n")),(0,l.kt)("p",null,"Zentyal 5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo zs <module> { start | stop | status | restart }\n")))}m.isMDXComponent=!0}}]);