"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3574],{7485:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(6274),a=(n(6687),n(7485));const l={},o="Permission",i={unversionedId:"Linux/System",id:"Linux/System",title:"Permission",description:"Reference",source:"@site/docs/Linux/System.md",sourceDirName:"Linux",slug:"/Linux/System",permalink:"/note/Linux/System",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/System.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Sieve",permalink:"/note/Linux/Sieve"},next:{title:"Trap",permalink:"/note/Linux/Trap"}},s={},p=[{value:"How to use <code>SysRq</code>",id:"how-to-use-sysrq",level:2},{value:"Command key",id:"command-key",level:2},{value:"Disable <code>SysRq</code>",id:"disable-sysrq",level:2},{value:"Enable all function of <code>SysRq</code>",id:"enable-all-function-of-sysrq",level:2},{value:"Reboot",id:"reboot",level:2},{value:"SELinux",id:"selinux",level:2},{value:"AppArmor",id:"apparmor",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permission"},"Permission"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/File_permissions_and_attributes"},"Reference")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Permission"),(0,a.kt)("th",{parentName:"tr",align:null},"Effect on file"),(0,a.kt)("th",{parentName:"tr",align:null},"Effect on directory"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"r")),(0,a.kt)("td",{parentName:"tr",align:null},"Read"),(0,a.kt)("td",{parentName:"tr",align:null},"List directory's contents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"w")),(0,a.kt)("td",{parentName:"tr",align:null},"Write"),(0,a.kt)("td",{parentName:"tr",align:null},"Create, Rename, Delete directory's contents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x")),(0,a.kt)("td",{parentName:"tr",align:null},"Execute"),(0,a.kt)("td",{parentName:"tr",align:null},"Access (Read, Write, Execute) directory's contents",(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("em",{parentName:"td"},"If any directory in the path does not have the ",(0,a.kt)("inlineCode",{parentName:"em"},"x")," bit set, the final file or folder cannot be accessed either, regardless of its permissions"))))),(0,a.kt)("h1",{id:"sysrq"},(0,a.kt)("inlineCode",{parentName:"h1"},"SysRq")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/torvalds/linux/blob/master/Documentation/admin-guide/sysrq.rst"},"Reference")),(0,a.kt)("h2",{id:"how-to-use-sysrq"},"How to use ",(0,a.kt)("inlineCode",{parentName:"h2"},"SysRq")),(0,a.kt)("p",null,"Hold ",(0,a.kt)("kbd",null,"Alt"),", press ",(0,a.kt)("kbd",null,"SysRq"),", press ",(0,a.kt)("inlineCode",{parentName:"p"},"<command key>"),", press ",(0,a.kt)("inlineCode",{parentName:"p"},"<command key>"),", ..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo <command key> > /proc/sysrq-trigger\n")),(0,a.kt)("h2",{id:"command-key"},"Command key"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"b")),(0,a.kt)("td",{parentName:"tr",align:null},"Reboot")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"e")),(0,a.kt)("td",{parentName:"tr",align:null},"Send a SIGTERM to all processes, except for init.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"h")),(0,a.kt)("td",{parentName:"tr",align:null},"Help")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"i")),(0,a.kt)("td",{parentName:"tr",align:null},"Send a SIGKILL to all processes, except for init.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"o")),(0,a.kt)("td",{parentName:"tr",align:null},"Power off")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"r")),(0,a.kt)("td",{parentName:"tr",align:null},"Turns off keyboard raw mode and sets it to XLATE.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"s")),(0,a.kt)("td",{parentName:"tr",align:null},"Will attempt to sync all mounted filesystems.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"u")),(0,a.kt)("td",{parentName:"tr",align:null},"Will attempt to remount all mounted filesystems read-only.")))),(0,a.kt)("h2",{id:"disable-sysrq"},"Disable ",(0,a.kt)("inlineCode",{parentName:"h2"},"SysRq")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 0 > /proc/sys/kernel/sysrq\n")),(0,a.kt)("h2",{id:"enable-all-function-of-sysrq"},"Enable all function of ",(0,a.kt)("inlineCode",{parentName:"h2"},"SysRq")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 1 > /proc/sys/kernel/sysrq\n")),(0,a.kt)("h2",{id:"reboot"},"Reboot"),(0,a.kt)("kbd",null,"Alt")," + ",(0,a.kt)("kbd",null,"SysRq")," + ",(0,a.kt)("kbd",null,"r")," + ",(0,a.kt)("kbd",null,"e")," + ",(0,a.kt)("kbd",null,"k")," + ",(0,a.kt)("kbd",null,"s")," + ",(0,a.kt)("kbd",null,"u")," + ",(0,a.kt)("kbd",null,"b"),(0,a.kt)("h1",{id:"reset-root-password"},"Reset ",(0,a.kt)("inlineCode",{parentName:"h1"},"root")," password"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/Reset_lost_root_password"},"Reference")),(0,a.kt)("h1",{id:"security"},"Security"),(0,a.kt)("h2",{id:"selinux"},"SELinux"),(0,a.kt)("p",null,"RedHat use SELinux by default"),(0,a.kt)("h2",{id:"apparmor"},"AppArmor"),(0,a.kt)("p",null,"Debian / Ubuntu use AppArmor by default"))}u.isMDXComponent=!0}}]);