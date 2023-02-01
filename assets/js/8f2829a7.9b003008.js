"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9255],{87485:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(76687);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=u(n),c=r,s=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7349:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(76274),r=(n(76687),n(87485));const l={},i="RS-232",o={unversionedId:"Hardware/RS-232",id:"Hardware/RS-232",title:"RS-232",description:"Ref: Wikipedia",source:"@site/docs/Hardware/RS-232.md",sourceDirName:"Hardware",slug:"/Hardware/RS-232",permalink:"/note/Hardware/RS-232",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Hardware/RS-232.md",tags:[],version:"current",frontMatter:{},sidebar:"hardware",previous:{title:"Hardware",permalink:"/note/Hardware/"},next:{title:"SoC",permalink:"/note/Hardware/SoC"}},p={},u=[{value:"Connector",id:"connector",level:2},{value:"DE-9",id:"de-9",level:3},{value:"Pin",id:"pin",level:2},{value:"Common usage",id:"common-usage",level:3}],d={toc:u};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rs-232"},"RS-232"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/RS-232"},"Wikipedia"))),(0,r.kt)("p",null,"RS-232 / COM port / Serial port"),(0,r.kt)("h2",{id:"connector"},"Connector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DB-25"),(0,r.kt)("li",{parentName:"ul"},"DE-9 (AKA DB-9)"),(0,r.kt)("li",{parentName:"ul"},"Usually use DE-9"),(0,r.kt)("li",{parentName:"ul"},"DTE (male)"),(0,r.kt)("li",{parentName:"ul"},"DCE (female)")),(0,r.kt)("h3",{id:"de-9"},"DE-9"),(0,r.kt)("p",null,"DE-9 is correct name, but usually name DB-9"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref: ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/D-subminiature#DE-9"},"D-subminiature"))),(0,r.kt)("h2",{id:"pin"},"Pin"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"SIG"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"DTE (male)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"DCD"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Carrier Detect"),(0,r.kt)("td",{parentName:"tr",align:null},"in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"RXD"),(0,r.kt)("td",{parentName:"tr",align:null},"Receive Data"),(0,r.kt)("td",{parentName:"tr",align:null},"in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"TXD"),(0,r.kt)("td",{parentName:"tr",align:null},"Transmit Data"),(0,r.kt)("td",{parentName:"tr",align:null},"out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"DTR"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Terminal Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Signal Ground"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"DSR"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Set Ready"),(0,r.kt)("td",{parentName:"tr",align:null},"in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"RTS"),(0,r.kt)("td",{parentName:"tr",align:null},"Request To Send"),(0,r.kt)("td",{parentName:"tr",align:null},"out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"CTS"),(0,r.kt)("td",{parentName:"tr",align:null},"Clear To Send"),(0,r.kt)("td",{parentName:"tr",align:null},"in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"RI"),(0,r.kt)("td",{parentName:"tr",align:null},"Ring Indicator"),(0,r.kt)("td",{parentName:"tr",align:null},"in")))),(0,r.kt)("mermaid",{value:"graph LR\n  txd[TXD] --\x3e rxd[RXD]\n  rts[RTS] --\x3e cts[CTS]\n  dtr[DTR] --\x3e dcd[DCD]"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DB-9 pinout",src:n(91061).Z,width:"377",height:"364"})),(0,r.kt)("h3",{id:"common-usage"},"Common usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RXD")," ",(0,r.kt)("inlineCode",{parentName:"p"},"TXD")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GND")))}m.isMDXComponent=!0},91061:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/db9-pinout-88a35096516210867bc3b0e3a51ab157.gif"}}]);