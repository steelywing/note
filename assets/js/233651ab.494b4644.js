(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2003],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9692:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={},p=void 0,s={unversionedId:"Note/Android",id:"Note/Android",isDocsHomePage:!1,title:"Android",description:"ADB shell",source:"@site/docs/Note/Android.md",sourceDirName:"Note",slug:"/Note/Android",permalink:"/note/Note/Android",editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/Android.md",version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"Note \u7b46\u8a18",permalink:"/note/"},next:{title:"Apache",permalink:"/note/Note/Apache"}},c=[{value:"ADB shell",id:"adb-shell",children:[{value:"Settings",id:"settings",children:[]}]},{value:"WiFi",id:"wifi",children:[{value:"Captive portal",id:"captive-portal",children:[]},{value:"WiFi password file",id:"wifi-password-file",children:[]}]},{value:"Dump / Backup partition",id:"dump--backup-partition",children:[]},{value:"Magisk bypass SafetyNet",id:"magisk-bypass-safetynet",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"adb-shell"},"ADB shell"),(0,a.kt)("h3",{id:"settings"},"Settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"settings list global\nsettings get global <key>\nsettings put global <key> <value>\nsettings delete global <key>\n")),(0,a.kt)("h2",{id:"wifi"},"WiFi"),(0,a.kt)("h3",{id:"captive-portal"},"Captive portal"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.noisyfox.io/android-captive-portal.html"},"Reference")),(0,a.kt)("h4",{id:"connect-to-wifi-but-no-internet"},"Connect to WiFi but no internet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# ADB shell\n\n# < Android 7.1.2\nsettings put global captive_portal_detection_enabled 0\n\n# >= Android 7.1.2\nsettings put global captive_portal_mode 0\n")),(0,a.kt)("h4",{id:"captive-portal-server"},"Captive portal server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# ADB shell\n\n# < Android 7.0\nsettings put global captive_portal_server "<URL>"\n\n# >= Android 7.0\nsettings put global captive_portal_use_https {0|1}\nsettings put global captive_portal_http_url "<URL>"\nsettings put global captive_portal_https_url "<URL>"\n')),(0,a.kt)("h3",{id:"wifi-password-file"},"WiFi password file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/data/misc/wifi/wpa_supplicant.conf\n/data/misc/wifi/wpa.conf\n/data/wifi/bcm_supp.conf\n")),(0,a.kt)("h2",{id:"dump--backup-partition"},"Dump / Backup partition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"adb shell\n\n# Some device already is root when connect\nwhoami\n\n# Switch to root if is not root\nsu\n\ncd /dev/block/by-name/\n# or\n# cd /dev/block/platform/<dev>/by-name/\n\n# Show partiton\nls -l\n\ndd if=<partition> of=/sdcard/<partition>.img\n")),(0,a.kt)("h2",{id:"magisk-bypass-safetynet"},"Magisk bypass SafetyNet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install Magisk modules",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MagiskHide Props Config"),(0,a.kt)("li",{parentName:"ul"},"Busybox for Android NDK"))),(0,a.kt)("li",{parentName:"ul"},"Open shell (ConnectBot)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 - Edit device fingerprint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"f - Pick a certified fingerprint")),(0,a.kt)("li",{parentName:"ul"},"Select a fingerprint")))))))}d.isMDXComponent=!0}}]);