(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[252],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1518:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),c=["components"],i={},l={unversionedId:"ESXi",id:"ESXi",isDocsHomePage:!1,title:"ESXi",description:"Reset license",source:"@site/docs/ESXi.md",sourceDirName:".",slug:"/ESXi",permalink:"/ESXi",editUrl:"https://github.com/steelywing/note/edit/master/docs/ESXi.md",version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"Dictionary",permalink:"/Dictionary"},next:{title:"File System",permalink:"/FileSystem"}},s=[{value:"Reset license",id:"reset-license",children:[]},{value:"Cron",id:"cron",children:[]},{value:"VM",id:"vm",children:[{value:"Show all VM",id:"show-all-vm",children:[]},{value:"Power on VM",id:"power-on-vm",children:[]},{value:"Reboot VM",id:"reboot-vm",children:[]}]},{value:"SSH public key",id:"ssh-public-key",children:[]},{value:"Create partition table",id:"create-partition-table",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"reset-license"},"Reset license"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nrm /etc/vmware/license.cfg\ncp /etc/vmware/.#license.cfg /etc/vmware/license.cfg\n/etc/init.d/vpxa restart\n")),(0,o.kt)("h2",{id:"cron"},"Cron"),(0,o.kt)("p",null,"Default ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/spool/cron/crontabs/root")," is read only, use ",(0,o.kt)("inlineCode",{parentName:"p"},":w!")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"vi")," to save."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kill $(cat /var/run/crond.pid)\nvi /var/spool/cron/crontabs/root\ncrond\n")),(0,o.kt)("p",null,"ESXi will overwrite cron file on boot, change ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/rc.local.d/local.sh")," to update cron file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# /etc/rc.local.d/local.sh\nkill $(cat /var/run/crond.pid)\necho "* * * * * <cron job>" >> /var/spool/cron/crontabs/root\ncrond\n')),(0,o.kt)("h2",{id:"vm"},"VM"),(0,o.kt)("h3",{id:"show-all-vm"},"Show all VM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim-cmd vmsvc/getallvms\n")),(0,o.kt)("h3",{id:"power-on-vm"},"Power on VM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim-cmd vmsvc/power.on <VM ID>\n")),(0,o.kt)("h3",{id:"reboot-vm"},"Reboot VM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim-cmd vmsvc/power.reboot <VM ID>\n")),(0,o.kt)("h2",{id:"ssh-public-key"},"SSH public key"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kb.vmware.com/s/article/1002866"},"Reference")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/ssh/keys-<user name>/authorized_keys\n")),(0,o.kt)("h2",{id:"create-partition-table"},"Create partition table"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kb.vmware.com/s/article/1036609"},"Reference")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'partedUtil setptbl "/vmfs/devices/disks/<device>" { msdos | gpt }\n')))}u.isMDXComponent=!0}}]);