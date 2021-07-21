(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6601],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9987:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=["components"],o={},u="File System",p={unversionedId:"Note/FileSystem",id:"Note/FileSystem",isDocsHomePage:!1,title:"File System",description:"Reference",source:"@site/docs/Note/FileSystem.md",sourceDirName:"Note",slug:"/Note/FileSystem",permalink:"/note/Note/FileSystem",editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/FileSystem.md",version:"current",frontMatter:{},sidebar:"note",previous:{title:"ESXi",permalink:"/note/Note/ESXi"},next:{title:"Firefox",permalink:"/note/Note/Firefox"}},s=[{value:"Journaling",id:"journaling",children:[]},{value:"exFAT",id:"exfat",children:[]},{value:"FAT32",id:"fat32",children:[]},{value:"NTFS",id:"ntfs",children:[]},{value:"BTRFS",id:"btrfs",children:[]},{value:"XFS",id:"xfs",children:[]},{value:"ZFS",id:"zfs",children:[]},{value:"Resize file system",id:"resize-file-system",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file-system"},"File System"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison"},"Reference")),(0,l.kt)("h2",{id:"journaling"},"Journaling"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Journaling_file_system"},"Reference")),(0,l.kt)("p",null,"Prevent being corrupted"),(0,l.kt)("h2",{id:"exfat"},"exFAT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No journaling"),(0,l.kt)("li",{parentName:"ul"},"Max volume size 128 PiB"),(0,l.kt)("li",{parentName:"ul"},"Max file size 16 EiB"),(0,l.kt)("li",{parentName:"ul"},"No ACL")),(0,l.kt)("h2",{id:"fat32"},"FAT32"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No journaling"),(0,l.kt)("li",{parentName:"ul"},"Max volume size 2 TiB (4 KiB Cluster Size)"),(0,l.kt)("li",{parentName:"ul"},"Max file size 4 GiB"),(0,l.kt)("li",{parentName:"ul"},"No ACL")),(0,l.kt)("h2",{id:"ntfs"},"NTFS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Journaling"),(0,l.kt)("li",{parentName:"ul"},"Max volume size 16 TiB (4 KiB Cluster Size)"),(0,l.kt)("li",{parentName:"ul"},"Max file size 16 EiB"),(0,l.kt)("li",{parentName:"ul"},"ACL")),(0,l.kt)("h2",{id:"btrfs"},"BTRFS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unstable"),(0,l.kt)("li",{parentName:"ul"},"Copy-on-Write"),(0,l.kt)("li",{parentName:"ul"},"Snapshot"),(0,l.kt)("li",{parentName:"ul"},"RAID"),(0,l.kt)("li",{parentName:"ul"},"Slow")),(0,l.kt)("h2",{id:"xfs"},"XFS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Journaling"),(0,l.kt)("li",{parentName:"ul"},"RedHat"),(0,l.kt)("li",{parentName:"ul"},"Cannot shrinking")),(0,l.kt)("h2",{id:"zfs"},"ZFS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy-on-Write"),(0,l.kt)("li",{parentName:"ul"},"Snapshot"),(0,l.kt)("li",{parentName:"ul"},"RAID")),(0,l.kt)("h2",{id:"resize-file-system"},"Resize file system"),(0,l.kt)("p",null,"Resize ",(0,l.kt)("inlineCode",{parentName:"p"},"ext2")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"ext3")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"ext4")," file system"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Force check file system\ne2fsck -f <device>\n\nresize2fs [-M] <device> [<size>[<unit>]]\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-M")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimize size")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"s")),(0,l.kt)("td",{parentName:"tr",align:null},"512 byte sectors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"K")),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"M")),(0,l.kt)("td",{parentName:"tr",align:null},"1024\xb2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"G")),(0,l.kt)("td",{parentName:"tr",align:null},"1024\xb3")))))}c.isMDXComponent=!0}}]);