"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,c={unversionedId:"Note/ESXi",id:"Note/ESXi",title:"ESXi",description:"Reset license",source:"@site/docs/Note/ESXi.md",sourceDirName:"Note",slug:"/Note/ESXi",permalink:"/note/Note/ESXi",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/ESXi.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Dictionary",permalink:"/note/Note/Dictionary"},next:{title:"File System",permalink:"/note/Note/FileSystem"}},i={},s=[{value:"Reset license",id:"reset-license",level:2},{value:"Cron",id:"cron",level:2},{value:"VM",id:"vm",level:2},{value:"Show all VM",id:"show-all-vm",level:3},{value:"Power on VM",id:"power-on-vm",level:3},{value:"Reboot VM",id:"reboot-vm",level:3},{value:"SSH public key",id:"ssh-public-key",level:2},{value:"Create partition table",id:"create-partition-table",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reset-license"},"Reset license"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nrm /etc/vmware/license.cfg\ncp /etc/vmware/.#license.cfg /etc/vmware/license.cfg\n/etc/init.d/vpxa restart\n")),(0,a.kt)("h2",{id:"cron"},"Cron"),(0,a.kt)("p",null,"Default ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/spool/cron/crontabs/root")," is read only, use ",(0,a.kt)("inlineCode",{parentName:"p"},":w!")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"vi")," to save."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kill $(cat /var/run/crond.pid)\nvi /var/spool/cron/crontabs/root\ncrond\n")),(0,a.kt)("p",null,"ESXi will overwrite cron file on boot, change ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rc.local.d/local.sh")," to update cron file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# /etc/rc.local.d/local.sh\nkill $(cat /var/run/crond.pid)\necho "* * * * * <cron job>" >> /var/spool/cron/crontabs/root\ncrond\n')),(0,a.kt)("h2",{id:"vm"},"VM"),(0,a.kt)("h3",{id:"show-all-vm"},"Show all VM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vim-cmd vmsvc/getallvms\n")),(0,a.kt)("h3",{id:"power-on-vm"},"Power on VM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vim-cmd vmsvc/power.on <VM ID>\n")),(0,a.kt)("h3",{id:"reboot-vm"},"Reboot VM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vim-cmd vmsvc/power.reboot <VM ID>\n")),(0,a.kt)("h2",{id:"ssh-public-key"},"SSH public key"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kb.vmware.com/s/article/1002866"},"Reference")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/ssh/keys-<user name>/authorized_keys\n")),(0,a.kt)("h2",{id:"create-partition-table"},"Create partition table"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kb.vmware.com/s/article/1036609"},"Reference")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'partedUtil setptbl "/vmfs/devices/disks/<device>" { msdos | gpt }\n')))}u.isMDXComponent=!0}}]);