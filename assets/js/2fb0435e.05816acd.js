(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1825],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6353:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c=["components"],l={},i={unversionedId:"Note/HTTP",id:"Note/HTTP",isDocsHomePage:!1,title:"HTTP",description:"No cache header",source:"@site/docs/Note/HTTP.md",sourceDirName:"Note",slug:"/Note/HTTP",permalink:"/note/Note/HTTP",editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/HTTP.md",version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"ssacli",permalink:"/note/Note/HP/ssacli"},next:{title:"LDAP",permalink:"/note/Note/LDAP"}},u=[{value:"No cache header",id:"no-cache-header",children:[]}],p={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"no-cache-header"},"No cache header"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/49547/how-do-we-control-web-page-caching-across-all-browsers"},"Reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9"},"Cache-Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.32"},"Pragma")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21"},"Expires"))),(0,a.kt)("p",null,"For HTTP <= 1.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Pragma: no-cache\n")),(0,a.kt)("p",null,"For HTTP 1.0 proxy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Expires: 0\n")),(0,a.kt)("p",null,"For HTTP >= 1.1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Cache-Control: no-store, must-revalidate\n")))}s.isMDXComponent=!0}}]);