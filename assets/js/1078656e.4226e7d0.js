"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4003],{87485:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(76274),r=(n(76687),n(87485));const l={},o="SELinux",i={unversionedId:"Linux/SELinux",id:"Linux/SELinux",title:"SELinux",description:"Video Guide: Security-Enhanced Linux for mere mortals",source:"@site/docs/Linux/SELinux.md",sourceDirName:"Linux",slug:"/Linux/SELinux",permalink:"/note/Linux/SELinux",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/SELinux.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Performance",permalink:"/note/Linux/Performance"},next:{title:"SSH tunnel",permalink:"/note/Linux/SSH-Tunnel"}},u={},s=[{value:"Get SELinux status",id:"get-selinux-status",level:2},{value:"Set SELinux status",id:"set-selinux-status",level:2},{value:"View SELinux label",id:"view-selinux-label",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"View SELinux error and suggestion",id:"view-selinux-error-and-suggestion",level:3},{value:"Set context to default",id:"set-context-to-default",level:3},{value:"Add default context of a path",id:"add-default-context-of-a-path",level:3},{value:"Change context by reference",id:"change-context-by-reference",level:3},{value:"Create policy module for an app",id:"create-policy-module-for-an-app",level:3},{value:"Re-label the entire file system",id:"re-label-the-entire-file-system",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"selinux"},"SELinux"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Video Guide: ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/_WOKRaM-HI4"},"Security-Enhanced Linux for mere mortals"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enforcing"),(0,r.kt)("td",{parentName:"tr",align:null},"apply policy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Permissive"),(0,r.kt)("td",{parentName:"tr",align:null},"log but do not apply policy")))),(0,r.kt)("h2",{id:"get-selinux-status"},"Get SELinux status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"getenforce\n")),(0,r.kt)("p",null,"Status detail"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sestatus [-v]\n")),(0,r.kt)("h2",{id:"set-selinux-status"},"Set SELinux status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"setenforce { Enforcing | Permissive | 1 | 0 }\n")),(0,r.kt)("h2",{id:"view-selinux-label"},"View SELinux label"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ls -Z\nid -Z\nps -Z\nss -Z\nnetstat -Z\n")),(0,r.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yum install setroubleshoot setroubleshoot-server\nservice auditd restart\n\n# systemctl cannot restart, see https://bugzilla.redhat.com/show_bug.cgi?id=1026648\n# systemctl restart auditd.service\n")),(0,r.kt)("h3",{id:"view-selinux-error-and-suggestion"},"View SELinux error and suggestion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl\n")),(0,r.kt)("h3",{id:"set-context-to-default"},"Set context to default"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"moved (",(0,r.kt)("inlineCode",{parentName:"li"},"mv"),") file will not change context"),(0,r.kt)("li",{parentName:"ul"},"SELinux use config file ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/selinux/targeted/contexts/files/file_contexts")," to set default context")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-r")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"-R")),(0,r.kt)("td",{parentName:"tr",align:null},"recursive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-v")),(0,r.kt)("td",{parentName:"tr",align:null},"verbose, show changes in file labels")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"restorecon [<options>] <path>\n")),(0,r.kt)("h3",{id:"add-default-context-of-a-path"},"Add default context of a path"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"semanage fcontext -a -t <context type> <path RegExp>\n")),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"/www")," default context to ",(0,r.kt)("inlineCode",{parentName:"p"},"httpd_sys_content_t")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"\nrestorecon -v -R /web\n')),(0,r.kt)("p",null,"Set default context of ",(0,r.kt)("inlineCode",{parentName:"p"},"/web")," by reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SELinux will replace ",(0,r.kt)("inlineCode",{parentName:"li"},"/web")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/www/html")," when set default context")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"semanage fcontext -a -e /var/www/html /web\nrestorecon -v -R /web\n")),(0,r.kt)("h3",{id:"change-context-by-reference"},"Change context by reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"chcon --reference <reference path> <path>\n")),(0,r.kt)("h3",{id:"create-policy-module-for-an-app"},"Create policy module for an app"),(0,r.kt)("p",null,"Set mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"Permissive")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"setenforce 0\n")),(0,r.kt)("p",null,"Run the app"),(0,r.kt)("p",null,"Check the log"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl\n")),(0,r.kt)("p",null,"Follow the suggestion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"grep <app> /var/log/audit/audit.log | audit2allow -M <app>\nsemodule -i <app>.pp\n")),(0,r.kt)("p",null,"Set mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"Enforcing")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"setenforce 1\n")),(0,r.kt)("h2",{id:"re-label-the-entire-file-system"},"Re-label the entire file system"),(0,r.kt)("p",null,"Set mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"Permissive")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"setenforce 0\n")),(0,r.kt)("p",null,"Create a empty file ",(0,r.kt)("inlineCode",{parentName:"p"},".autorelabel")," in the root directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"touch /.autorelabel\n")),(0,r.kt)("p",null,"Reboot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"reboot\n")))}c.isMDXComponent=!0}}]);