"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Fix"},a="Fix - Windows",s={unversionedId:"Windows/Fix",id:"Windows/Fix",title:"Fix - Windows",description:"Fix / Troubleshoot",source:"@site/docs/Windows/Fix.md",sourceDirName:"Windows",slug:"/Windows/Fix",permalink:"/note/Windows/Fix",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/Fix.md",tags:[],version:"current",frontMatter:{sidebar_label:"Fix"},sidebar:"windows",previous:{title:"Credential",permalink:"/note/Windows/Credential"},next:{title:"Network",permalink:"/note/Windows/Network"}},l={},c=[{value:"Microsoft.Windows.Photos with high CPU usage",id:"microsoftwindowsphotos-with-high-cpu-usage",level:2},{value:"Get service of <code>svchost.exe</code>",id:"get-service-of-svchostexe",level:2},{value:"Windows Loader",id:"windows-loader",level:2},{value:"BSOD (Blue Screen of Death) dump",id:"bsod-blue-screen-of-death-dump",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fix---windows"},"Fix - Windows"),(0,o.kt)("p",null,"Fix / Troubleshoot"),(0,o.kt)("h2",{id:"microsoftwindowsphotos-with-high-cpu-usage"},"Microsoft.Windows.Photos with high CPU usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default apps"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Disable ",(0,o.kt)("inlineCode",{parentName:"li"},"Photos")," app"))),(0,o.kt)("li",{parentName:"ul"},"Reset ",(0,o.kt)("inlineCode",{parentName:"li"},"Photos")," app")),(0,o.kt)("h2",{id:"get-service-of-svchostexe"},"Get service of ",(0,o.kt)("inlineCode",{parentName:"h2"},"svchost.exe")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Right click ",(0,o.kt)("inlineCode",{parentName:"li"},"svchost.exe")," process in Task Manager"),(0,o.kt)("li",{parentName:"ul"},'Click "Go to Service(s)"')),(0,o.kt)("h2",{id:"windows-loader"},"Windows Loader"),(0,o.kt)("p",null,"Windows Loader does not work on UEFI"),(0,o.kt)("h2",{id:"bsod-blue-screen-of-death-dump"},"BSOD (Blue Screen of Death) dump"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.nirsoft.net/utils/blue_screen_view.html"},"BlueScreenView")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BSOD Dump",src:n(3479).Z,width:"544",height:"739"})))}p.isMDXComponent=!0},3479:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bsod-dump-9c3665ba6149c04e9eafe767326bff90.png"}}]);