(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2847],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),o=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},d=function(e){var r=o(e.components);return a.createElement(p.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=o(t),m=n,g=c["".concat(p,".").concat(m)]||c[m]||i[m]||s;return t?a.createElement(g,u(u({ref:r},d),{},{components:t})):a.createElement(g,u({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,u=new Array(s);u[0]=c;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var o=2;o<s;o++)u[o]=t[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6055:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return c}});var a=t(2122),n=t(9756),s=(t(7294),t(3905)),u=["components"],l={},p=void 0,o={unversionedId:"Linux/User",id:"Linux/User",isDocsHomePage:!1,title:"User",description:"User",source:"@site/docs/Linux/User.md",sourceDirName:"Linux",slug:"/Linux/User",permalink:"/note/Linux/User",editUrl:"https://github.com/steelywing/note/edit/master/docs/Linux/User.md",version:"current",frontMatter:{},sidebar:"linux",previous:{title:"Ubuntu",permalink:"/note/Linux/Ubuntu"},next:{title:"VPN",permalink:"/note/Linux/VPN"}},d=[{value:"User",id:"user",children:[{value:"Add user",id:"add-user",children:[]},{value:"Delete user",id:"delete-user",children:[]},{value:"Lock user",id:"lock-user",children:[]},{value:"Unlock user",id:"unlock-user",children:[]},{value:"User database file",id:"user-database-file",children:[]}]},{value:"Password",id:"password",children:[{value:"Password file",id:"password-file",children:[]},{value:"Change password",id:"change-password",children:[]},{value:"Delete password",id:"delete-password",children:[]},{value:"Expire user password",id:"expire-user-password",children:[]},{value:"Set password expire day",id:"set-password-expire-day",children:[]}]},{value:"Group",id:"group",children:[{value:"Change / Override user&#39;s primary group",id:"change--override-users-primary-group",children:[]},{value:"Change / Override user&#39;s supplementary groups",id:"change--override-users-supplementary-groups",children:[]},{value:"Add user&#39;s supplementary groups",id:"add-users-supplementary-groups",children:[]}]}],i={toc:d};function c(e){var r=e.components,t=(0,n.Z)(e,u);return(0,s.kt)("wrapper",(0,a.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"user"},"User"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<group>")),(0,s.kt)("td",{parentName:"tr",align:null},"Primary group, User must and only have 1 primary group. Can be view with ",(0,s.kt)("inlineCode",{parentName:"td"},"getent passwd")," file (Usually stored in ",(0,s.kt)("inlineCode",{parentName:"td"},"/etc/passwd"),")")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"<supplementary group>")),(0,s.kt)("td",{parentName:"tr",align:null},"Additional groups, User may have multiple supplementary group. Can be view with ",(0,s.kt)("inlineCode",{parentName:"td"},"getent group")," file (Usually stored in ",(0,s.kt)("inlineCode",{parentName:"td"},"/etc/group"),")")))),(0,s.kt)("h3",{id:"add-user"},"Add user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"useradd <user> [-d <home directory>] [-g <group>] [-G <supplementary group>[,...]] [-s <shell>]\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Debian only\nadduser <user>\n")),(0,s.kt)("h3",{id:"delete-user"},"Delete user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"userdel <user>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Debian only\ndeluser <user>\n")),(0,s.kt)("h3",{id:"lock-user"},"Lock user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"passwd -l <user>\n")),(0,s.kt)("h3",{id:"unlock-user"},"Unlock user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"passwd -u <user>\n")),(0,s.kt)("h3",{id:"user-database-file"},"User database file"),(0,s.kt)("p",null,"Usually store in ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/passwd")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"getent passwd\n")),(0,s.kt)("h2",{id:"password"},"Password"),(0,s.kt)("h3",{id:"password-file"},"Password file"),(0,s.kt)("p",null,"Usually store in ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/shadow")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"getent shadow\n")),(0,s.kt)("h3",{id:"change-password"},"Change password"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"passwd [<user>]\n")),(0,s.kt)("h3",{id:"delete-password"},"Delete password"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"passwd -d <user>\n")),(0,s.kt)("h3",{id:"expire-user-password"},"Expire user password"),(0,s.kt)("p",null,"Force user to change password"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"passwd -e <user>\n")),(0,s.kt)("h3",{id:"set-password-expire-day"},"Set password expire day"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"passwd -x <day> <user>\n")),(0,s.kt)("h2",{id:"group"},"Group"),(0,s.kt)("h3",{id:"change--override-users-primary-group"},"Change / Override user's primary group"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -g <group> <user>\n")),(0,s.kt)("h3",{id:"change--override-users-supplementary-groups"},"Change / Override user's supplementary groups"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -G <group>[,...] <user>\n")),(0,s.kt)("h3",{id:"add-users-supplementary-groups"},"Add user's supplementary groups"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -aG <group>[,...] <user>\n")))}c.isMDXComponent=!0}}]);