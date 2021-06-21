(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7786:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o=["components"],i={},c={unversionedId:"Linux/Date",id:"Linux/Date",isDocsHomePage:!1,title:"Date",description:"Date",source:"@site/docs/Linux/Date.md",sourceDirName:"Linux",slug:"/Linux/Date",permalink:"/note/Linux/Date",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Date.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"CentOS",permalink:"/note/Linux/CentOS"},next:{title:"GRUB",permalink:"/note/Linux/GRUB"}},u=[{value:"Date",id:"date",children:[]},{value:"Timezone",id:"timezone",children:[]},{value:"RTC",id:"rtc",children:[]},{value:"Convert timestamp to date time",id:"convert-timestamp-to-date-time",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"date"},"Date"),(0,l.kt)("p",null,"Display date"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"date [-u|--utc]\n")),(0,l.kt)("p",null,"Set date"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl set-time [<YYYY>-<MM>-<DD>] [<HH>:<MM>:<SS>]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"date [-u|--utc] [MMDDhhmm[YYYY][.ss]]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'date -s "YYYY-MM-DD hh:mm:ss"\n')),(0,l.kt)("h2",{id:"timezone"},"Timezone"),(0,l.kt)("p",null,"Display timezone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'date "+%Z %z"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/timezone\n")),(0,l.kt)("p",null,"Set timezone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tzselect\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl set-timezone <timezone>\n")),(0,l.kt)("h2",{id:"rtc"},"RTC"),(0,l.kt)("p",null,"Real-Time Clock"),(0,l.kt)("p",null,"RTC as the local time"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl set-local-rtc { true | t | yes | y | 1 }\n")),(0,l.kt)("p",null,"RTC (Real-Time Clock) as the UTC (Coordinated Universal Time)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl set-local-rtc { false | f | no | n | 0 }\n")),(0,l.kt)("h2",{id:"convert-timestamp-to-date-time"},"Convert timestamp to date time"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"date -d @<timestamp>\n")))}p.isMDXComponent=!0}}]);