(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8194],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i=["components"],o={},s="CLI",p={unversionedId:"Linux/CLI",id:"Linux/CLI",isDocsHomePage:!1,title:"CLI",description:"Command Line Interface",source:"@site/docs/Linux/CLI.md",sourceDirName:"Linux",slug:"/Linux/CLI",permalink:"/note/Linux/CLI",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/CLI.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Auto start",permalink:"/note/Linux/Auto start"},next:{title:"CentOS",permalink:"/note/Linux/CentOS"}},d=[{value:"Shell",id:"shell",children:[{value:"Shell list",id:"shell-list",children:[]},{value:"Change shell",id:"change-shell",children:[]}]},{value:"Open file manager from CLI",id:"open-file-manager-from-cli",children:[]},{value:"Indicate command type",id:"indicate-command-type",children:[]},{value:"Preserve file timestamp after edit (<code>bash</code>)",id:"preserve-file-timestamp-after-edit-bash",children:[]},{value:"Hardware",id:"hardware",children:[]},{value:"Mount image",id:"mount-image",children:[]},{value:"File system",id:"file-system",children:[{value:"ACL",id:"acl",children:[]},{value:"File permission",id:"file-permission",children:[]},{value:"File attribute",id:"file-attribute",children:[]},{value:"List open files",id:"list-open-files",children:[]}]},{value:"Manual / Help",id:"manual--help",children:[]},{value:"DNS",id:"dns",children:[]},{value:"Sharing desktop",id:"sharing-desktop",children:[{value:"Disable sharing desktop encryption (Ubuntu)",id:"disable-sharing-desktop-encryption-ubuntu",children:[]}]},{value:"File",id:"file",children:[{value:"Copy",id:"copy",children:[]}]},{value:"OpenJDK (Java)",id:"openjdk-java",children:[{value:"List installed JVM",id:"list-installed-jvm",children:[]},{value:"Switch JVM",id:"switch-jvm",children:[]}]},{value:"Show Linux distribution / version",id:"show-linux-distribution--version",children:[]},{value:"Last login",id:"last-login",children:[{value:"Suppress <code>Last Login</code> message",id:"suppress-last-login-message",children:[]},{value:"Clear last login log",id:"clear-last-login-log",children:[]},{value:"Disable logging last login",id:"disable-logging-last-login",children:[]}]},{value:"Identify processes using files or sockets",id:"identify-processes-using-files-or-sockets",children:[]},{value:"Watch",id:"watch",children:[]},{value:"FHS (Filesystem Hierarchy Standard) / Filesystem Structure",id:"fhs-filesystem-hierarchy-standard--filesystem-structure",children:[]},{value:"Using dash &quot;<code>-</code>&quot; as path argument",id:"using-dash---as-path-argument",children:[]},{value:"<code>true</code>",id:"true",children:[]}],u={toc:d};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli"},"CLI"),(0,r.kt)("p",null,"Command Line Interface"),(0,r.kt)("h2",{id:"shell"},"Shell"),(0,r.kt)("h3",{id:"shell-list"},"Shell list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/shells\n")),(0,r.kt)("h3",{id:"change-shell"},"Change shell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chsh -s <shell> [<user>]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -s <shell> <user>\n")),(0,r.kt)("h2",{id:"open-file-manager-from-cli"},"Open file manager from CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xdg-open <path>\n")),(0,r.kt)("h2",{id:"indicate-command-type"},"Indicate command type"),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"function"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"builtin"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# -a: display all locations\ntype [-a] <command>\n")),(0,r.kt)("h2",{id:"preserve-file-timestamp-after-edit-bash"},"Preserve file timestamp after edit (",(0,r.kt)("inlineCode",{parentName:"h2"},"bash"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vi-preserve-time () {\n    for file in "$@"; do\n        local mtime=$(stat -c %y "$file")\n        vi "$file"\n        touch -d "$mtime" "$file"\n    done\n}\n')),(0,r.kt)("h2",{id:"hardware"},"Hardware"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lsusb")),(0,r.kt)("td",{parentName:"tr",align:null},"List USB devices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lspci")),(0,r.kt)("td",{parentName:"tr",align:null},"List PCI devices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lspci -nn")),(0,r.kt)("td",{parentName:"tr",align:null},"List PCI devices and devices code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lspci -k")),(0,r.kt)("td",{parentName:"tr",align:null},"List PCI devices and kernel driver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cat /proc/cpuinfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Show CPU info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cat /proc/meminfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Show memory info")))),(0,r.kt)("h2",{id:"mount-image"},"Mount image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mount -o loop <image.iso> <directory>\n")),(0,r.kt)("h2",{id:"file-system"},"File system"),(0,r.kt)("h3",{id:"acl"},"ACL"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/storage_administration_guide/acls-setting"},"Reference"))),(0,r.kt)("h3",{id:"file-permission"},"File permission"),(0,r.kt)("p",null,(0,r.kt)("del",{parentName:"p"},"Only change directory permission")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod <permission> $(find -type d)\n")),(0,r.kt)("p",null,(0,r.kt)("del",{parentName:"p"},"Only change file permission")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod <permission> $(find -type f)\n")),(0,r.kt)("p",null,"Change file owner and group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chown { <owner>[:<group>] | --reference <file> } <file>\n")),(0,r.kt)("p",null,"Change file permission to ",(0,r.kt)("inlineCode",{parentName:"p"},"644"),", directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"755")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-R")),(0,r.kt)("td",{parentName:"tr",align:null},"Recursive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-h \\| --no-dereference")),(0,r.kt)("td",{parentName:"tr",align:null},"Change symbolic links instead of referenced file")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod [-R] u=rw,go=r,a+X <path>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod [-R] a=r+X,u+w <path>\n")),(0,r.kt)("h3",{id:"file-attribute"},"File attribute"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"http://man7.org/linux/man-pages/man1/chattr.1.html"},"Reference"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"a")),(0,r.kt)("td",{parentName:"tr",align:null},"Append only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:null},"No atime updates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c")),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i")),(0,r.kt)("td",{parentName:"tr",align:null},"Immutable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"s")),(0,r.kt)("td",{parentName:"tr",align:null},"Secure deletion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S")),(0,r.kt)("td",{parentName:"tr",align:null},"Synchronous updates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"u")),(0,r.kt)("td",{parentName:"tr",align:null},"Undeletable")))),(0,r.kt)("p",null,"List attribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lsattr\n")),(0,r.kt)("p",null,"Change attribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chattr {+|-}<attribute> <file>\n")),(0,r.kt)("h3",{id:"list-open-files"},"List open files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lsof <path>\n")),(0,r.kt)("h2",{id:"manual--help"},"Manual / Help"),(0,r.kt)("p",null,"Show manual"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"man [<page>]\n")),(0,r.kt)("p",null,"Search manual"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apropos <keyword>\n")),(0,r.kt)("h2",{id:"dns"},"DNS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi /etc/resolv.conf\n")),(0,r.kt)("h2",{id:"sharing-desktop"},"Sharing desktop"),(0,r.kt)("h3",{id:"disable-sharing-desktop-encryption-ubuntu"},"Disable sharing desktop encryption (Ubuntu)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://askubuntu.com/a/487267/235264"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dconf-editor\n# org > gnome > desktop > remote-accessand > require-encryption\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gsettings set org.gnome.Vino require-encryption false\n")),(0,r.kt)("h2",{id:"file"},"File"),(0,r.kt)("h3",{id:"copy"},"Copy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp [<option>] <source> <destination>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-p \\| --preserve[=<attributes>]")),(0,r.kt)("td",{parentName:"tr",align:null},"Preserve mode, ownership, timestamps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-R \\| -r \\| --recursive")),(0,r.kt)("td",{parentName:"tr",align:null},"Copy directories recursively")))),(0,r.kt)("h2",{id:"openjdk-java"},"OpenJDK (Java)"),(0,r.kt)("h3",{id:"list-installed-jvm"},"List installed JVM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"update-java-alternatives --list\n")),(0,r.kt)("h3",{id:"switch-jvm"},"Switch JVM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"update-java-alternatives --set <JVM name>\n")),(0,r.kt)("h2",{id:"show-linux-distribution--version"},"Show Linux distribution / version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/*-release\ncat /proc/version\nuname -a\n\n# For systemd\nhostnamectl\n\n# For Debian\nlsb_release -a\n")),(0,r.kt)("h2",{id:"last-login"},"Last login"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://linuxconfig.org/how-to-disable-last-login-message-on-rhel-linux"},"Reference"))),(0,r.kt)("h3",{id:"suppress-last-login-message"},"Suppress ",(0,r.kt)("inlineCode",{parentName:"h3"},"Last Login")," message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch ~/.hushlogin\n")),(0,r.kt)("h3",{id:"clear-last-login-log"},"Clear last login log"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> /var/log/lastlog\n")),(0,r.kt)("h3",{id:"disable-logging-last-login"},"Disable logging last login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chattr +i /var/log/lastlog\n")),(0,r.kt)("h2",{id:"identify-processes-using-files-or-sockets"},"Identify processes using files or sockets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fuser <option> <file>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-v"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,r.kt)("td",{parentName:"tr",align:null},"Verbose")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-k"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--kill")),(0,r.kt)("td",{parentName:"tr",align:null},"Kill processes accessing the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ -c \\| -m \\| --mount } { <mount point> \\| <device> }")),(0,r.kt)("td",{parentName:"tr",align:null},"Mount point or device")))),(0,r.kt)("h2",{id:"watch"},"Watch"),(0,r.kt)("p",null,"Execute command periodically"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Default: 2 seconds\nwatch [-n <seconds>] <command>\n")),(0,r.kt)("h2",{id:"fhs-filesystem-hierarchy-standard--filesystem-structure"},"FHS (Filesystem Hierarchy Standard) / Filesystem Structure"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"http://refspecs.linuxfoundation.org/fhs.shtml"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"man hier\n")),(0,r.kt)("h2",{id:"using-dash---as-path-argument"},'Using dash "',(0,r.kt)("inlineCode",{parentName:"h2"},"-"),'" as path argument'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"http://tldp.org/LDP/abs/html/special-chars.html#DASHREF2"},"Reference"))),(0,r.kt)("p",null,'\u4f7f\u7528 "',(0,r.kt)("inlineCode",{parentName:"p"},"-"),'" \u505a\u70ba\u6a94\u6848\u8def\u5f91\u53c3\u6578\u6642\uff0c\u4e00\u822c\u6709\u4ee5\u4e0b\u7528\u9014'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redirection from ",(0,r.kt)("inlineCode",{parentName:"li"},"stdin")," / to ",(0,r.kt)("inlineCode",{parentName:"li"},"stdout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd -")," change to previous working directory")),(0,r.kt)("h2",{id:"true"},(0,r.kt)("inlineCode",{parentName:"h2"},"true")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},":\n")),(0,r.kt)("p",null,"is equivalent to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"true\n")))}m.isMDXComponent=!0}}]);