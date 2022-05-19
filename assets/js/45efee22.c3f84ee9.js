"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3761],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8641:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={},c="cron",u={unversionedId:"Linux/cron",id:"Linux/cron",title:"cron",description:"Reference",source:"@site/docs/Linux/cron.md",sourceDirName:"Linux",slug:"/Linux/cron",permalink:"/note/Linux/cron",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/cron.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"bash",permalink:"/note/Linux/bash"},next:{title:"find",permalink:"/note/Linux/find"}},p=[{value:"User <code>crontab</code> file",id:"user-crontab-file",children:[],level:2},{value:"<code>crontab</code> file",id:"crontab-file",children:[],level:2},{value:"Note",id:"note",children:[],level:2},{value:"<code>crontab</code> format",id:"crontab-format",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cron"},"cron"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.computerhope.com/unix/ucrontab.htm"},"Reference"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cron")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"crontab")),(0,l.kt)("h2",{id:"user-crontab-file"},"User ",(0,l.kt)("inlineCode",{parentName:"h2"},"crontab")," file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/var/spool/cron/crontabs/<user>\n")),(0,l.kt)("h2",{id:"crontab-file"},(0,l.kt)("inlineCode",{parentName:"h2"},"crontab")," file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/crontab\n")),(0,l.kt)("p",null,"Debian only"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/cron.d/\n")),(0,l.kt)("h2",{id:"note"},"Note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use the standard system crontab ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/crontab"))),(0,l.kt)("h2",{id:"crontab-format"},(0,l.kt)("inlineCode",{parentName:"h2"},"crontab")," format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-crontab"},'# minute hour day month week command\n0 10-12 * * * echo "10:00 11:00 12:00"\n30 10,20 * * * echo "10:30 20:30"\n*/10 * * * * echo "Every 10 minutes"\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Range"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minute"),(0,l.kt)("td",{parentName:"tr",align:null},"0 - 59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hour"),(0,l.kt)("td",{parentName:"tr",align:null},"0 - 23")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"day"),(0,l.kt)("td",{parentName:"tr",align:null},"1 - 31")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"month"),(0,l.kt)("td",{parentName:"tr",align:null},"1 - 12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"week"),(0,l.kt)("td",{parentName:"tr",align:null},"0 - 6, 0 = Sunday")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Wildcard, specifies every possible time interval")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},",")),(0,l.kt)("td",{parentName:"tr",align:null},"List multiple values separated by a comma")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a range between two numbers, separated by a hyphen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a periodicity/frequency using a slash")))))}m.isMDXComponent=!0}}]);