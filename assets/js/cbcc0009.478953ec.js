"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6601],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=l,k=c["".concat(u,".").concat(d)]||c[d]||s[d]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3964:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(3117),l=n(102),a=(n(7294),n(3905)),i=["components"],o={},u="File System",p={unversionedId:"Note/FileSystem",id:"Note/FileSystem",title:"File System",description:"Reference",source:"@site/docs/Note/FileSystem.md",sourceDirName:"Note",slug:"/Note/FileSystem",permalink:"/note/Note/FileSystem",editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/FileSystem.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"ESXi",permalink:"/note/Note/ESXi"},next:{title:"Firefox",permalink:"/note/Note/Firefox"}},m=[{value:"Journaling",id:"journaling",children:[],level:2},{value:"exFAT",id:"exfat",children:[],level:2},{value:"FAT32",id:"fat32",children:[],level:2},{value:"NTFS",id:"ntfs",children:[],level:2},{value:"BTRFS",id:"btrfs",children:[],level:2},{value:"XFS",id:"xfs",children:[],level:2},{value:"ZFS",id:"zfs",children:[],level:2},{value:"Resize file system",id:"resize-file-system",children:[],level:2}],s={toc:m};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-system"},"File System"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison"},"Reference")),(0,a.kt)("h2",{id:"journaling"},"Journaling"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Journaling_file_system"},"Reference")),(0,a.kt)("p",null,"Prevent being corrupted"),(0,a.kt)("h2",{id:"exfat"},"exFAT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No journaling"),(0,a.kt)("li",{parentName:"ul"},"Max volume size 128 PiB"),(0,a.kt)("li",{parentName:"ul"},"Max file size 16 EiB"),(0,a.kt)("li",{parentName:"ul"},"No ACL")),(0,a.kt)("h2",{id:"fat32"},"FAT32"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No journaling"),(0,a.kt)("li",{parentName:"ul"},"Max volume size 2 TiB (4 KiB Cluster Size)"),(0,a.kt)("li",{parentName:"ul"},"Max file size 4 GiB"),(0,a.kt)("li",{parentName:"ul"},"No ACL")),(0,a.kt)("h2",{id:"ntfs"},"NTFS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Journaling"),(0,a.kt)("li",{parentName:"ul"},"Max volume size 16 TiB (4 KiB Cluster Size)"),(0,a.kt)("li",{parentName:"ul"},"Max file size 16 EiB"),(0,a.kt)("li",{parentName:"ul"},"ACL")),(0,a.kt)("h2",{id:"btrfs"},"BTRFS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unstable"),(0,a.kt)("li",{parentName:"ul"},"Copy-on-Write"),(0,a.kt)("li",{parentName:"ul"},"Snapshot"),(0,a.kt)("li",{parentName:"ul"},"RAID"),(0,a.kt)("li",{parentName:"ul"},"Slow")),(0,a.kt)("h2",{id:"xfs"},"XFS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Journaling"),(0,a.kt)("li",{parentName:"ul"},"RedHat"),(0,a.kt)("li",{parentName:"ul"},"Cannot shrinking")),(0,a.kt)("h2",{id:"zfs"},"ZFS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy-on-Write"),(0,a.kt)("li",{parentName:"ul"},"Snapshot"),(0,a.kt)("li",{parentName:"ul"},"RAID")),(0,a.kt)("h2",{id:"resize-file-system"},"Resize file system"),(0,a.kt)("p",null,"Resize ",(0,a.kt)("inlineCode",{parentName:"p"},"ext2")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"ext3")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"ext4")," file system"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Force check file system\ne2fsck -f <device>\n\nresize2fs [-M] <device> [<size>[<unit>]]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-M")),(0,a.kt)("td",{parentName:"tr",align:null},"Minimize size")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"s")),(0,a.kt)("td",{parentName:"tr",align:null},"512 byte sectors")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"K")),(0,a.kt)("td",{parentName:"tr",align:null},"1024")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"M")),(0,a.kt)("td",{parentName:"tr",align:null},"1024\xb2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"G")),(0,a.kt)("td",{parentName:"tr",align:null},"1024\xb3")))))}c.isMDXComponent=!0}}]);