(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[36],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3137:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={},p={unversionedId:"Android",id:"Android",isDocsHomePage:!1,title:"Android",description:"ADB shell",source:"@site/docs/Android.md",sourceDirName:".",slug:"/Android",permalink:"/Android",editUrl:"https://github.com/steelywing/note/edit/master/docs/Android.md",version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"Translate your site",permalink:"/tutorial-extras/translate-your-site"},next:{title:"Apache",permalink:"/Apache"}},s=[{value:"ADB shell",id:"adb-shell",children:[{value:"Settings",id:"settings",children:[]}]},{value:"WiFi",id:"wifi",children:[{value:"Captive portal",id:"captive-portal",children:[]},{value:"WiFi password file",id:"wifi-password-file",children:[]}]},{value:"Dump / Backup partition",id:"dump--backup-partition",children:[]},{value:"Magisk bypass SafetyNet",id:"magisk-bypass-safetynet",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"adb-shell"},"ADB shell"),(0,i.kt)("h3",{id:"settings"},"Settings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"settings list global\nsettings get global <key>\nsettings put global <key> <value>\nsettings delete global <key>\n")),(0,i.kt)("h2",{id:"wifi"},"WiFi"),(0,i.kt)("h3",{id:"captive-portal"},"Captive portal"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.noisyfox.io/android-captive-portal.html"},"Reference")),(0,i.kt)("h4",{id:"connect-to-wifi-but-no-internet"},"Connect to WiFi but no internet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# ADB shell\n\n# < Android 7.1.2\nsettings put global captive_portal_detection_enabled 0\n\n# >= Android 7.1.2\nsettings put global captive_portal_mode 0\n")),(0,i.kt)("h4",{id:"captive-portal-server"},"Captive portal server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# ADB shell\n\n# < Android 7.0\nsettings put global captive_portal_server "<URL>"\n\n# >= Android 7.0\nsettings put global captive_portal_use_https {0|1}\nsettings put global captive_portal_http_url "<URL>"\nsettings put global captive_portal_https_url "<URL>"\n')),(0,i.kt)("h3",{id:"wifi-password-file"},"WiFi password file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/data/misc/wifi/wpa_supplicant.conf\n/data/misc/wifi/wpa.conf\n/data/wifi/bcm_supp.conf\n")),(0,i.kt)("h2",{id:"dump--backup-partition"},"Dump / Backup partition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"adb shell\n\n# Some device already is root when connect\nwhoami\n\n# Switch to root if is not root\nsu\n\ncd /dev/block/by-name/\n# or\n# cd /dev/block/platform/<dev>/by-name/\n\n# Show partiton\nls -l\n\ndd if=<partition> of=/sdcard/<partition>.img\n")),(0,i.kt)("h2",{id:"magisk-bypass-safetynet"},"Magisk bypass SafetyNet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Magisk modules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MagiskHide Props Config"),(0,i.kt)("li",{parentName:"ul"},"Busybox for Android NDK"))),(0,i.kt)("li",{parentName:"ul"},"Open shell (ConnectBot)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"props"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 - Edit device fingerprint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"f - Pick a certified fingerprint")),(0,i.kt)("li",{parentName:"ul"},"Select a fingerprint")))))))}u.isMDXComponent=!0}}]);