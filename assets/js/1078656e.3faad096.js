(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4003],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(n),m=u,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function m(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:u,o[1]=a;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5851:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(2122),u=n(9756),i=(n(7294),n(3905)),o=["components"],a={},c="SELinux",s={unversionedId:"Linux/SELinux",id:"Linux/SELinux",isDocsHomePage:!1,title:"SELinux",description:"Get SELinux status",source:"@site/docs/Linux/SELinux.md",sourceDirName:"Linux",slug:"/Linux/SELinux",permalink:"/note/Linux/SELinux",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/SELinux.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Performance",permalink:"/note/Linux/Performance"},next:{title:"SSH tunnel",permalink:"/note/Linux/SSH-Tunnel"}},l=[{value:"Get SELinux status",id:"get-selinux-status",children:[]},{value:"Set SELinux status",id:"set-selinux-status",children:[]}],p={toc:l};function f(e){var t=e.components,n=(0,u.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"selinux"},"SELinux"),(0,i.kt)("h2",{id:"get-selinux-status"},"Get SELinux status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sestatus [-v]\n")),(0,i.kt)("h2",{id:"set-selinux-status"},"Set SELinux status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"setenforce { Enforcing | Permissive | 1 | 0 }\n")))}f.isMDXComponent=!0}}]);