"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3064],{7485:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var r=a(6687);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),m=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=m(a),N=n,s=d["".concat(u,".").concat(N)]||d[N]||k[N]||l;return a?r.createElement(s,i(i({ref:e},o),{},{components:a})):r.createElement(s,i({ref:e},o))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3993:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(6274),n=(a(6687),a(7485));const l={},i="SoC",p={unversionedId:"Note/SoC",id:"Note/SoC",title:"SoC",description:"System on a Chip",source:"@site/docs/Note/SoC.md",sourceDirName:"Note",slug:"/Note/SoC",permalink:"/note/Note/SoC",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/SoC.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"Raspberry Pi",permalink:"/note/Note/RaspberryPi"},next:{title:"Sys Log",permalink:"/note/Note/SysLog"}},u={},m=[{value:"Development board",id:"development-board",level:2},{value:"Arduino",id:"arduino",level:3},{value:"STM",id:"stm",level:3},{value:"Espressif",id:"espressif",level:3},{value:"Raspberry Pi",id:"raspberry-pi",level:3},{value:"USB to UART",id:"usb-to-uart",level:2},{value:"Interface",id:"interface",level:2},{value:"DB-9",id:"db-9",level:3},{value:"Common usage",id:"common-usage",level:3},{value:"IR (Infrared)",id:"ir-infrared",level:2}],o={toc:m};function k(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"soc"},"SoC"),(0,n.kt)("p",null,"System on a Chip"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Atmel (Microchip)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AVR",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ATtiny85",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DigiSpark"))))))),(0,n.kt)("li",{parentName:"ul"},"STMicroelectronics"),(0,n.kt)("li",{parentName:"ul"},"Espressif",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ESP8266 (WiFi)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ESP-01"),(0,n.kt)("li",{parentName:"ul"},"ESP-02"),(0,n.kt)("li",{parentName:"ul"},"..."),(0,n.kt)("li",{parentName:"ul"},"ESP-12"))),(0,n.kt)("li",{parentName:"ul"},"ESP8285 = ESP8266 + 1MiB Flash"),(0,n.kt)("li",{parentName:"ul"},"ESP32 (WiFi + Bluetooth)")))),(0,n.kt)("h2",{id:"development-board"},"Development board"),(0,n.kt)("h3",{id:"arduino"},"Arduino"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IDE: ",(0,n.kt)("a",{parentName:"li",href:"https://www.arduino.cc/"},"Arduino"),", ",(0,n.kt)("a",{parentName:"li",href:"https://platformio.org/"},"PlatformIO"))),(0,n.kt)("h3",{id:"stm"},"STM"),(0,n.kt)("h3",{id:"espressif"},"Espressif"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ESP8266"),(0,n.kt)("td",{parentName:"tr",align:null},"WiFi"),(0,n.kt)("td",{parentName:"tr",align:null},"ESP-01 ~ ESP-12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ESP32"),(0,n.kt)("td",{parentName:"tr",align:null},"WiFi + Bluetooth"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IDE: ",(0,n.kt)("a",{parentName:"li",href:"https://www.arduino.cc/"},"Arduino"),", ",(0,n.kt)("a",{parentName:"li",href:"https://platformio.org/"},"PlatformIO")),(0,n.kt)("li",{parentName:"ul"},"PCB: ",(0,n.kt)("a",{parentName:"li",href:"http://www.ai-thinker.com/"},"AI-Thinker"))),(0,n.kt)("h3",{id:"raspberry-pi"},(0,n.kt)("a",{parentName:"h3",href:"/note/Note/RaspberryPi"},"Raspberry Pi")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"System: Linux")),(0,n.kt)("h2",{id:"usb-to-uart"},"USB to UART"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.wch.cn/products/CH340.html"},"WCH CH340"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Popular")),(0,n.kt)("li",{parentName:"ul"},"UART"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.wch.cn/products/CH341.html"},"WCH CH341"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Popular")),(0,n.kt)("li",{parentName:"ul"},"UART, I2C, SPI"))),(0,n.kt)("li",{parentName:"ul"},"Prolific PL2303",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Many fake"),(0,n.kt)("li",{parentName:"ul"},"Fake version need ",(0,n.kt)("a",{parentName:"li",href:"http://www.ifamilysoftware.com/Prolific_PL-2303_Code_10_Fix.html"},"driver version 3.3.2.102")))),(0,n.kt)("li",{parentName:"ul"},"Silicon CP2102"),(0,n.kt)("li",{parentName:"ul"},"FTDI232",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Expensive")))),(0,n.kt)("h2",{id:"interface"},"Interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UART (Universal Asynchronous Receiver Transmitter)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RS-232"},"RS-232")," / Serial port",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.db9-pinout.com/"},"DB-9"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DTE (male)"),(0,n.kt)("li",{parentName:"ul"},"DCE (female)"))),(0,n.kt)("li",{parentName:"ul"},"DB-25"))),(0,n.kt)("li",{parentName:"ul"},"TTL (Transistor\u2013Transistor Logic)"))),(0,n.kt)("li",{parentName:"ul"},"SPI (Serial Peripheral Interface)"),(0,n.kt)("li",{parentName:"ul"},"I\xb2C / I2C (Inter-Integrated Circuit)")),(0,n.kt)("h3",{id:"db-9"},"DB-9"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pin"),(0,n.kt)("th",{parentName:"tr",align:null},"SIG"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"DTE (male)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"DCD"),(0,n.kt)("td",{parentName:"tr",align:null},"Data Carrier Detect"),(0,n.kt)("td",{parentName:"tr",align:null},"in")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"RXD"),(0,n.kt)("td",{parentName:"tr",align:null},"Receive Data"),(0,n.kt)("td",{parentName:"tr",align:null},"in")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"TXD"),(0,n.kt)("td",{parentName:"tr",align:null},"Transmit Data"),(0,n.kt)("td",{parentName:"tr",align:null},"out")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"DTR"),(0,n.kt)("td",{parentName:"tr",align:null},"Data Terminal Ready"),(0,n.kt)("td",{parentName:"tr",align:null},"out")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Signal Ground"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"DSR"),(0,n.kt)("td",{parentName:"tr",align:null},"Data Set Ready"),(0,n.kt)("td",{parentName:"tr",align:null},"in")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"RTS"),(0,n.kt)("td",{parentName:"tr",align:null},"Request To Send"),(0,n.kt)("td",{parentName:"tr",align:null},"out")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"CTS"),(0,n.kt)("td",{parentName:"tr",align:null},"Clear To Send"),(0,n.kt)("td",{parentName:"tr",align:null},"in")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"RI"),(0,n.kt)("td",{parentName:"tr",align:null},"Ring Indicator"),(0,n.kt)("td",{parentName:"tr",align:null},"in")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"DB-9 pinout",src:a(670).Z,width:"377",height:"364"})),(0,n.kt)("h3",{id:"common-usage"},"Common usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"RXD TXD GND [RTS] [CTS]")),(0,n.kt)("h2",{id:"ir-infrared"},"IR (Infrared)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Wave length"),(0,n.kt)("th",{parentName:"tr",align:null},"Command"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"850 nm"),(0,n.kt)("td",{parentName:"tr",align:null},"Night vision")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"940 nm"),(0,n.kt)("td",{parentName:"tr",align:null},"Remote control")))))}k.isMDXComponent=!0},670:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/db9-pinout-88a35096516210867bc3b0e3a51ab157.gif"}}]);