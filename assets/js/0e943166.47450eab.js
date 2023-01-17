"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[727],{87485:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,f=d["".concat(u,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(76274),a=(n(76687),n(87485));const o={},l="Mount",i={unversionedId:"Linux/Mount",id:"Linux/Mount",title:"Mount",description:"Remount mount point in fstab",source:"@site/docs/Linux/Mount.md",sourceDirName:"Linux",slug:"/Linux/Mount",permalink:"/note/Linux/Mount",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Mount.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"LVM",permalink:"/note/Linux/LVM"},next:{title:"Network",permalink:"/note/Linux/Network"}},u={},s=[{value:"Remount mount point in <code>fstab</code>",id:"remount-mount-point-in-fstab",level:2},{value:"Lists all mounted filesystems",id:"lists-all-mounted-filesystems",level:2},{value:"Mount CIFS / SMB / Windows Shared Folder",id:"mount-cifs--smb--windows-shared-folder",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mount"},"Mount"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mount [-t <type>] { <source> | <device> } <directory>\n")),(0,a.kt)("h2",{id:"remount-mount-point-in-fstab"},"Remount mount point in ",(0,a.kt)("inlineCode",{parentName:"h2"},"fstab")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# rw: read-write\nmount -o remount[,rw] <directory>\n")),(0,a.kt)("h2",{id:"lists-all-mounted-filesystems"},"Lists all mounted filesystems"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# -l: lable\nmount [-l] [-t type]\n")),(0,a.kt)("p",null,"The most common ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," are ",(0,a.kt)("inlineCode",{parentName:"p"},"ext2 | ext3 | ext4 | xfs | btrfs | vfat | sysfs | proc | nfs | cifs")),(0,a.kt)("h2",{id:"mount-cifs--smb--windows-shared-folder"},"Mount CIFS / SMB / Windows Shared Folder"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"username=<username>")),(0,a.kt)("td",{parentName:"tr",align:null},"Username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"password=<password>")),(0,a.kt)("td",{parentName:"tr",align:null},"Password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"domain=<domain>")),(0,a.kt)("td",{parentName:"tr",align:null},"Domain")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vers=1.0")),(0,a.kt)("td",{parentName:"tr",align:null},"SMBv1 (Default)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vers=2.0")),(0,a.kt)("td",{parentName:"tr",align:null},"SMBv2.002 for Windows Vista SP1 and 2008")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vers=2.1")),(0,a.kt)("td",{parentName:"tr",align:null},"SMBv2.1 for Windows 7 and 2008R2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vers=3.0")),(0,a.kt)("td",{parentName:"tr",align:null},"SMBv3.0 for Windows 8 and 2012")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"noperm")),(0,a.kt)("td",{parentName:"tr",align:null},"Client bypass permission checks")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# mount.cifs = mount -t cifs\nmount.cifs -o <option>[,...] //<host>/<share name> <directory>\n")))}m.isMDXComponent=!0}}]);