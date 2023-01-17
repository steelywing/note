"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8550],{87485:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,s=c["".concat(d,".").concat(k)]||c[k]||u[k]||i;return n?a.createElement(s,l(l({ref:t},m),{},{components:n})):a.createElement(s,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(76274),r=(n(76687),n(87485));const i={},l="at",o={unversionedId:"Linux/at",id:"Linux/at",title:"at",description:"Check if atd is running",source:"@site/docs/Linux/at.md",sourceDirName:"Linux",slug:"/Linux/at",permalink:"/note/Linux/at",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/at.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Zentyal",permalink:"/note/Linux/Zentyal"},next:{title:"awk",permalink:"/note/Linux/awk"}},d={},p=[{value:"Check if <code>atd</code> is running",id:"check-if-atd-is-running",level:2},{value:"Add job",id:"add-job",level:2},{value:"Remove job",id:"remove-job",level:2},{value:"List job",id:"list-job",level:2},{value:"View job",id:"view-job",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"at"},(0,r.kt)("inlineCode",{parentName:"h1"},"at")),(0,r.kt)("h2",{id:"check-if-atd-is-running"},"Check if ",(0,r.kt)("inlineCode",{parentName:"h2"},"atd")," is running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status atd.service\n")),(0,r.kt)("h2",{id:"add-job"},"Add job"),(0,r.kt)("p",null,"Run command at specified time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"at <time spec>\n<command>\n[...]\n<Ctrl + D>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"at <time spec> <<END\n<command>\n[...]\nEND\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "<command>" | at <time spec>\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<time spec>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ NOW \\| <time> \\| <date> \\| <time> <date> } [{+\\|-} <period> <unit>]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<time>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ <HH>:<MM> [AM\\|PM] } [UTC]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<date>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<month name> <day> [<year>] \\| MM/DD/[YY]YY \\| [YY]YY-MM-DD \\| [NEXT] <day of week> \\| TODAY \\| TOMORROW"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<month name>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JAN")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"FEB")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"MAR")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"APR")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"MAY")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"JUN")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"JUL")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"AUG")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"SEP")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"OCT")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"NOV")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"DEC"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<day of week>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SUN")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"MON")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"TUE")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"WED")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"THU")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"FRI")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"SAT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<unit>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MINUTE")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"HOUR")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"DAY")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"WEEK")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"MONTH")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"YEAR"))))),(0,r.kt)("h2",{id:"remove-job"},"Remove job"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"atrm <job ID>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"at {-r|-d} <job ID>\n")),(0,r.kt)("h2",{id:"list-job"},"List job"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"atq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"at -l\n")),(0,r.kt)("h2",{id:"view-job"},"View job"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"at -c <job ID>\n")))}u.isMDXComponent=!0}}]);