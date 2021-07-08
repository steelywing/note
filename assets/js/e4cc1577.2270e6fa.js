(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7786:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={},c="Date / Time",u={unversionedId:"Linux/Date",id:"Linux/Date",isDocsHomePage:!1,title:"Date / Time",description:"Date",source:"@site/docs/Linux/Date.md",sourceDirName:"Linux",slug:"/Linux/Date",permalink:"/note/Linux/Date",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/Date.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"CentOS",permalink:"/note/Linux/CentOS"},next:{title:"Directory Stack",permalink:"/note/Linux/Directory Stack"}},s=[{value:"Date",id:"date",children:[]},{value:"Timezone",id:"timezone",children:[]},{value:"RTC",id:"rtc",children:[]},{value:"Convert timestamp to date time",id:"convert-timestamp-to-date-time",children:[]},{value:"Sync Time",id:"sync-time",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"date--time"},"Date / Time"),(0,i.kt)("h2",{id:"date"},"Date"),(0,i.kt)("p",null,"Display date"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"date [-u|--utc]\n")),(0,i.kt)("p",null,"Set date / time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl set-time [<YYYY>-<MM>-<DD>] [<HH>:<MM>:<SS>]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"date [-u|--utc] <MMDDhhmm[YYYY][.ss]>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'date -s "YYYY-MM-DD hh:mm:ss"\n')),(0,i.kt)("h2",{id:"timezone"},"Timezone"),(0,i.kt)("p",null,"Display timezone"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'date "+%Z %z"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/timezone\n")),(0,i.kt)("p",null,"Set timezone"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tzselect\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl set-timezone <timezone>\n")),(0,i.kt)("h2",{id:"rtc"},"RTC"),(0,i.kt)("p",null,"Real-Time Clock"),(0,i.kt)("p",null,"Set RTC as the local time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl set-local-rtc { true | t | yes | y | 1 }\n")),(0,i.kt)("p",null,"Set RTC as the UTC (Coordinated Universal Time)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl set-local-rtc { false | f | no | n | 0 }\n")),(0,i.kt)("h2",{id:"convert-timestamp-to-date-time"},"Convert timestamp to date time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"date -d @<timestamp>\n")),(0,i.kt)("h2",{id:"sync-time"},"Sync Time"),(0,i.kt)("p",null,"Force sync time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"service ntpd stop\nntpd -gq\nservice ntpd start\n")))}m.isMDXComponent=!0}}]);