"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8842],{87485:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var a=r(76687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=u(r),s=n,d=k["".concat(o,".").concat(s)]||k[s]||c[s]||l;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(76274),n=(r(76687),r(87485));const l={},i="SoC",p={unversionedId:"Hardware/SoC",id:"Hardware/SoC",title:"SoC",description:"System on a Chip",source:"@site/docs/Hardware/SoC.md",sourceDirName:"Hardware",slug:"/Hardware/SoC",permalink:"/note/Hardware/SoC",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Hardware/SoC.md",tags:[],version:"current",frontMatter:{},sidebar:"hardware",previous:{title:"RS-232",permalink:"/note/Hardware/RS-232"}},o={},u=[{value:"Development board",id:"development-board",level:2},{value:"Arduino",id:"arduino",level:3},{value:"STM",id:"stm",level:3},{value:"Espressif",id:"espressif",level:3},{value:"Raspberry Pi",id:"raspberry-pi",level:3},{value:"USB to UART",id:"usb-to-uart",level:2},{value:"Interface",id:"interface",level:2}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"soc"},"SoC"),(0,n.kt)("p",null,"System on a Chip"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Atmel (Microchip)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AVR",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ATtiny85",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DigiSpark"))))))),(0,n.kt)("li",{parentName:"ul"},"STMicroelectronics"),(0,n.kt)("li",{parentName:"ul"},"Espressif",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ESP8266 (WiFi)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ESP-01"),(0,n.kt)("li",{parentName:"ul"},"ESP-02"),(0,n.kt)("li",{parentName:"ul"},"..."),(0,n.kt)("li",{parentName:"ul"},"ESP-12"))),(0,n.kt)("li",{parentName:"ul"},"ESP8285 = ESP8266 + 1MiB Flash"),(0,n.kt)("li",{parentName:"ul"},"ESP32 (WiFi + Bluetooth)")))),(0,n.kt)("h2",{id:"development-board"},"Development board"),(0,n.kt)("h3",{id:"arduino"},"Arduino"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IDE: ",(0,n.kt)("a",{parentName:"li",href:"https://www.arduino.cc/"},"Arduino"),", ",(0,n.kt)("a",{parentName:"li",href:"https://platformio.org/"},"PlatformIO"))),(0,n.kt)("h3",{id:"stm"},"STM"),(0,n.kt)("h3",{id:"espressif"},"Espressif"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ESP8266"),(0,n.kt)("td",{parentName:"tr",align:null},"WiFi"),(0,n.kt)("td",{parentName:"tr",align:null},"ESP-01 ~ ESP-12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ESP32"),(0,n.kt)("td",{parentName:"tr",align:null},"WiFi + Bluetooth"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IDE: ",(0,n.kt)("a",{parentName:"li",href:"https://www.arduino.cc/"},"Arduino"),", ",(0,n.kt)("a",{parentName:"li",href:"https://platformio.org/"},"PlatformIO")),(0,n.kt)("li",{parentName:"ul"},"PCB: ",(0,n.kt)("a",{parentName:"li",href:"http://www.ai-thinker.com/"},"AI-Thinker"))),(0,n.kt)("h3",{id:"raspberry-pi"},(0,n.kt)("a",{parentName:"h3",href:"/note/Note/RaspberryPi"},"Raspberry Pi")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"System: Linux")),(0,n.kt)("h2",{id:"usb-to-uart"},"USB to UART"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.wch.cn/products/CH340.html"},"WCH CH340"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Popular")),(0,n.kt)("li",{parentName:"ul"},"UART"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.wch.cn/products/CH341.html"},"WCH CH341"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Popular")),(0,n.kt)("li",{parentName:"ul"},"UART, I2C, SPI"))),(0,n.kt)("li",{parentName:"ul"},"Prolific PL2303",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Many fake"),(0,n.kt)("li",{parentName:"ul"},"Fake version need ",(0,n.kt)("a",{parentName:"li",href:"http://www.ifamilysoftware.com/Prolific_PL-2303_Code_10_Fix.html"},"driver version 3.3.2.102")))),(0,n.kt)("li",{parentName:"ul"},"Silicon CP2102"),(0,n.kt)("li",{parentName:"ul"},"FTDI232",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Expensive")))),(0,n.kt)("h2",{id:"interface"},"Interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UART (Universal Asynchronous Receiver Transmitter)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TTL (Transistor\u2013Transistor Logic)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TTL to ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RS-232"},"RS-232")))))),(0,n.kt)("li",{parentName:"ul"},"SPI (Serial Peripheral Interface)"),(0,n.kt)("li",{parentName:"ul"},"I\xb2C / I2C (Inter-Integrated Circuit)")))}c.isMDXComponent=!0}}]);