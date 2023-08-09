"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3761],{87485:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,k=d["".concat(c,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(76274),a=(n(76687),n(87485));const o={},l="cron",i={unversionedId:"Linux/cron",id:"Linux/cron",title:"cron",description:"Ref: Linux crontab command",source:"@site/docs/Linux/cron.md",sourceDirName:"Linux",slug:"/Linux/cron",permalink:"/note/Linux/cron",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/cron.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"bash",permalink:"/note/Linux/bash"},next:{title:"find",permalink:"/note/Linux/find"}},c={},p=[{value:"User <code>crontab</code> config file",id:"user-crontab-config-file",level:2},{value:"<code>crontab</code> config file",id:"crontab-config-file",level:2},{value:"<code>crontab</code> format",id:"crontab-format",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cron"},(0,a.kt)("inlineCode",{parentName:"h1"},"cron")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ref: ",(0,a.kt)("a",{parentName:"p",href:"https://www.computerhope.com/unix/ucrontab.htm"},"Linux crontab command"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cron")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"crontab")),(0,a.kt)("h2",{id:"user-crontab-config-file"},"User ",(0,a.kt)("inlineCode",{parentName:"h2"},"crontab")," config file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/var/spool/cron/crontabs/<user>\n")),(0,a.kt)("h2",{id:"crontab-config-file"},(0,a.kt)("inlineCode",{parentName:"h2"},"crontab")," config file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/crontab\n")),(0,a.kt)("p",null,"Debian only"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/cron.d/\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Use the standard system crontab ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/crontab")))),(0,a.kt)("h2",{id:"crontab-format"},(0,a.kt)("inlineCode",{parentName:"h2"},"crontab")," format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-crontab"},'# minute hour day month week command\n0 10-12 * * * echo "10:00 11:00 12:00"\n30 10,20 * * * echo "10:30 20:30"\n*/10 * * * * echo "Every 10 minutes"\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Range"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minute"),(0,a.kt)("td",{parentName:"tr",align:null},"0 - 59")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hour"),(0,a.kt)("td",{parentName:"tr",align:null},"0 - 23")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"day"),(0,a.kt)("td",{parentName:"tr",align:null},"1 - 31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"month"),(0,a.kt)("td",{parentName:"tr",align:null},"1 - 12")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"week"),(0,a.kt)("td",{parentName:"tr",align:null},"0 - 6, 0 = Sunday")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"*")),(0,a.kt)("td",{parentName:"tr",align:null},"Wildcard, specifies every possible time interval")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},",")),(0,a.kt)("td",{parentName:"tr",align:null},"List multiple values separated by a comma")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",{parentName:"tr",align:null},"Specify a range between two numbers, separated by a hyphen")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/")),(0,a.kt)("td",{parentName:"tr",align:null},"Specify a periodicity/frequency using a slash")))))}m.isMDXComponent=!0}}]);