"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2182],{7485:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(6274),a=(r(6687),r(7485));const o={tags:["Cisco","IOS","Password"]},l="Reset password",s={unversionedId:"Network/Cisco/IOS/ResetPassword",id:"Network/Cisco/IOS/ResetPassword",title:"Reset password",description:"Reset Cisco IOS Password",source:"@site/docs/Network/Cisco/IOS/ResetPassword.md",sourceDirName:"Network/Cisco/IOS",slug:"/Network/Cisco/IOS/ResetPassword",permalink:"/note/Network/Cisco/IOS/ResetPassword",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco/IOS/ResetPassword.md",tags:[{label:"Cisco",permalink:"/note/tags/cisco"},{label:"IOS",permalink:"/note/tags/ios"},{label:"Password",permalink:"/note/tags/password"}],version:"current",frontMatter:{tags:["Cisco","IOS","Password"]},sidebar:"network",previous:{title:"MultiCast",permalink:"/note/Network/Cisco/IOS/MultiCast"},next:{title:"Routing",permalink:"/note/Network/Cisco/IOS/Routing"}},i={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reset-password"},"Reset password"),(0,a.kt)("p",null,"Reset Cisco IOS Password"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Serial setting",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"9600 baud rate"),(0,a.kt)("li",{parentName:"ul"},"No parity"),(0,a.kt)("li",{parentName:"ul"},"8 data bits"),(0,a.kt)("li",{parentName:"ul"},"1 stop bit"),(0,a.kt)("li",{parentName:"ul"},"No flow control "))),(0,a.kt)("li",{parentName:"ul"},"Hold the ",(0,a.kt)("strong",{parentName:"li"},"Mode")," button while power up the switch"),(0,a.kt)("li",{parentName:"ul"},"If the switch no ",(0,a.kt)("strong",{parentName:"li"},"Mode")," button...",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Send ",(0,a.kt)("strong",{parentName:"li"},"Break")," key in 15 seconds while power up")))),(0,a.kt)("p",null,"USB to Serial (RS232) cable may be not working"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/routers/10000-series-routers/12818-61.html"},"Reference"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Serial setting",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1200 baud rate"),(0,a.kt)("li",{parentName:"ul"},"No parity"),(0,a.kt)("li",{parentName:"ul"},"8 data bits"),(0,a.kt)("li",{parentName:"ul"},"1 stop bit"),(0,a.kt)("li",{parentName:"ul"},"No flow control "))),(0,a.kt)("li",{parentName:"ul"},"Repeatedly press ",(0,a.kt)("strong",{parentName:"li"},"Space")," for 10~15 seconds while reboot"),(0,a.kt)("li",{parentName:"ul"},"Change serial setting",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"9600 baud rate"),(0,a.kt)("li",{parentName:"ul"},"No parity"),(0,a.kt)("li",{parentName:"ul"},"8 data bits"),(0,a.kt)("li",{parentName:"ul"},"1 stop bit"),(0,a.kt)("li",{parentName:"ul"},"No flow control ")))),(0,a.kt)("p",null,"For Switch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"switch: flash_init\nswitch: load_helper\nswitch: dir flash:\nswitch: rename flash:config.text flash:config.old\nswitch: boot\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ios"},"Switch# rename flash:config.old flash:config.text\nSwitch# copy flash:config.text system:running-config\nSwitch# conf t\nSwitch(config)# enable password <password>\n")))}u.isMDXComponent=!0}}]);