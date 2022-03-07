"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2003],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4831:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={},p=void 0,c={unversionedId:"Note/Android",id:"Note/Android",title:"Android",description:"ADB shell",source:"@site/docs/Note/Android.md",sourceDirName:"Note",slug:"/Note/Android",permalink:"/note/Note/Android",editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Android.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Note \u7b46\u8a18",permalink:"/note/"},next:{title:"Apache",permalink:"/note/Note/Apache"}},s=[{value:"ADB shell",id:"adb-shell",children:[{value:"Settings",id:"settings",children:[],level:3}],level:2},{value:"WiFi",id:"wifi",children:[{value:"Captive portal",id:"captive-portal",children:[{value:"Connect to WiFi but no internet",id:"connect-to-wifi-but-no-internet",children:[],level:4},{value:"Captive portal server",id:"captive-portal-server",children:[],level:4}],level:3},{value:"WiFi password file",id:"wifi-password-file",children:[],level:3}],level:2},{value:"Dump / Backup partition",id:"dump--backup-partition",children:[],level:2},{value:"Magisk bypass SafetyNet",id:"magisk-bypass-safetynet",children:[],level:2},{value:"WeChat emoji folder",id:"wechat-emoji-folder",children:[],level:2},{value:"Force media scan",id:"force-media-scan",children:[],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"adb-shell"},"ADB shell"),(0,i.kt)("h3",{id:"settings"},"Settings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"settings list global\nsettings get global <key>\nsettings put global <key> <value>\nsettings delete global <key>\n")),(0,i.kt)("h2",{id:"wifi"},"WiFi"),(0,i.kt)("h3",{id:"captive-portal"},"Captive portal"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.noisyfox.io/android-captive-portal.html"},"Reference")),(0,i.kt)("h4",{id:"connect-to-wifi-but-no-internet"},"Connect to WiFi but no internet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# ADB shell\n\n# < Android 7.1.2\nsettings put global captive_portal_detection_enabled 0\n\n# >= Android 7.1.2\nsettings put global captive_portal_mode 0\n")),(0,i.kt)("h4",{id:"captive-portal-server"},"Captive portal server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# ADB shell\n\n# < Android 7.0\nsettings put global captive_portal_server "<URL>"\n\n# >= Android 7.0\nsettings put global captive_portal_use_https {0|1}\nsettings put global captive_portal_http_url "<URL>"\nsettings put global captive_portal_https_url "<URL>"\n')),(0,i.kt)("h3",{id:"wifi-password-file"},"WiFi password file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/data/misc/wifi/wpa_supplicant.conf\n/data/misc/wifi/wpa.conf\n/data/wifi/bcm_supp.conf\n")),(0,i.kt)("h2",{id:"dump--backup-partition"},"Dump / Backup partition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"adb shell\n\n# Some device already is root when connect\nwhoami\n\n# Switch to root if is not root\nsu\n\ncd /dev/block/by-name/\n# or\n# cd /dev/block/platform/<dev>/by-name/\n\n# Show partiton\nls -l\n\ndd if=<partition> of=/sdcard/<partition>.img\n")),(0,i.kt)("h2",{id:"magisk-bypass-safetynet"},"Magisk bypass SafetyNet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Magisk modules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MagiskHide Props Config"),(0,i.kt)("li",{parentName:"ul"},"Busybox for Android NDK"))),(0,i.kt)("li",{parentName:"ul"},"Open shell (ConnectBot)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"props"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 - Edit device fingerprint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"f - Pick a certified fingerprint")),(0,i.kt)("li",{parentName:"ul"},"Select a fingerprint")))))),(0,i.kt)("h2",{id:"wechat-emoji-folder"},"WeChat emoji folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/storage/emulated/0/Android/data/com.tencent.mm/MicroMsg/<hash>/emoji\n")),(0,i.kt)("h2",{id:"force-media-scan"},"Force media scan"),(0,i.kt)("p",null,"Clear ",(0,i.kt)("strong",{parentName:"p"},"Media Storage")," app data"))}u.isMDXComponent=!0}}]);