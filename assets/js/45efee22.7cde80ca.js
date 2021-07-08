(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3761],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||c;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7800:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=t(2122),o=t(9756),c=(t(7294),t(3905)),a=["components"],i={},u="cron",l={unversionedId:"Linux/cron",id:"Linux/cron",isDocsHomePage:!1,title:"cron",description:"Reference",source:"@site/docs/Linux/cron.md",sourceDirName:"Linux",slug:"/Linux/cron",permalink:"/note/Linux/cron",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/cron.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"bash",permalink:"/note/Linux/bash"},next:{title:"find",permalink:"/note/Linux/find"}},p=[{value:"User <code>crontab</code> file",id:"user-crontab-file",children:[]},{value:"<code>crontab</code> file",id:"crontab-file",children:[]}],s={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"cron"},"cron"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://www.computerhope.com/unix/ucrontab.htm"},"Reference"))),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"cron")," / ",(0,c.kt)("inlineCode",{parentName:"p"},"crontab")),(0,c.kt)("h2",{id:"user-crontab-file"},"User ",(0,c.kt)("inlineCode",{parentName:"h2"},"crontab")," file"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"/var/spool/cron/crontabs/<user>\n")),(0,c.kt)("h2",{id:"crontab-file"},(0,c.kt)("inlineCode",{parentName:"h2"},"crontab")," file"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/crontab\n")),(0,c.kt)("p",null,"Debian only"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/cron.d/\n")))}f.isMDXComponent=!0}}]);