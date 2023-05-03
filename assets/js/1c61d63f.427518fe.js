"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9460],{87485:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(76687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),k=a,f=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(76274),a=(r(76687),r(87485));const i={},l="FortiGate deep inspection",o={permalink:"/note/blog/FortiGate deep inspection",source:"@site/blog/FortiGate deep inspection.md",title:"FortiGate deep inspection",description:"Deep Inspection without SSL/TLS offload",date:"2023-05-03T09:00:16.000Z",formattedDate:"May 3, 2023",tags:[],readingTime:1.005,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"FortiGate Virtual IP",permalink:"/note/blog/FortiGate Virtual IP"},nextItem:{title:"GoAccess with Nginx proxy",permalink:"/note/blog/GoAccess with Nginx proxy"}},p={authorsImageUrls:[]},c=[{value:"Deep Inspection without SSL/TLS offload",id:"deep-inspection-without-ssltls-offload",level:2},{value:"Testing IPS",id:"testing-ips",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deep-inspection-without-ssltls-offload"},"Deep Inspection without SSL/TLS offload"),(0,a.kt)("p",null,"Import the Web Server TLS certificate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("strong",{parentName:"li"},"System")," > ",(0,a.kt)("strong",{parentName:"li"},"Certificates")),(0,a.kt)("li",{parentName:"ul"},"Import ",(0,a.kt)("strong",{parentName:"li"},"Certificate")," and ",(0,a.kt)("strong",{parentName:"li"},"Key"))),(0,a.kt)("p",null,"Create inspection profile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("strong",{parentName:"li"},"Security Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"SSL/SSH Inspection")),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create New")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("strong",{parentName:"li"},"Name")," to ",(0,a.kt)("strong",{parentName:"li"},"HTTPS Deep Inspection")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("strong",{parentName:"li"},"Enable SSL inspection of")," to ",(0,a.kt)("strong",{parentName:"li"},"Protecting SSL Server")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("strong",{parentName:"li"},"Server certificate")," to the imported certificate"),(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("strong",{parentName:"li"},"HTTPS")," in ",(0,a.kt)("strong",{parentName:"li"},"Protocol Port Mapping")),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the certificate / key is not correct, FortiGate cannot decrypt the content, then FortiGate just pass the traffic")),(0,a.kt)("p",null,"Enable IPS in policy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("strong",{parentName:"li"},"Policy & Objects")),(0,a.kt)("li",{parentName:"ul"},"Edit the port forward policy"),(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("strong",{parentName:"li"},"IPS")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("strong",{parentName:"li"},"SSL Inspection")," to ",(0,a.kt)("strong",{parentName:"li"},"HTTPS Deep Inspection"))),(0,a.kt)("h2",{id:"testing-ips"},"Testing IPS"),(0,a.kt)("p",null,"Add Eicar signature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("strong",{parentName:"li"},"Security Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Intrusion Prevention")),(0,a.kt)("li",{parentName:"ul"},"Edit profile"),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create New")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("strong",{parentName:"li"},"Type")," to ",(0,a.kt)("strong",{parentName:"li"},"Signature")),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("strong",{parentName:"li"},"Action")," to ",(0,a.kt)("strong",{parentName:"li"},"Block")),(0,a.kt)("li",{parentName:"ul"},"Search ",(0,a.kt)("strong",{parentName:"li"},"Eicar")),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("strong",{parentName:"li"},"Eicar.Virus.Test.File")),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"))),(0,a.kt)("p",null,"Trigger IPS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download ",(0,a.kt)("a",{parentName:"li",href:"https://www.eicar.org/download-anti-malware-testfile/"},"Eicar test file"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:'language-title="eicar.com.txt"'},"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upload the Eicar test file to web server"),(0,a.kt)("li",{parentName:"ul"},"Open the Eicar test file URL in browser to trigger IPS")),(0,a.kt)("p",null,"Check the log"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See in ",(0,a.kt)("strong",{parentName:"li"},"Log & Report")," > ",(0,a.kt)("strong",{parentName:"li"},"Intrusion Prevention"))))}u.isMDXComponent=!0}}]);