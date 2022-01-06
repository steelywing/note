"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4568],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=o(n),s=r,N=u["".concat(p,".").concat(s)]||u[s]||k[s]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5898:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return m},default:function(){return u}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],d={sidebar_label:"ACL"},p="ACL - Windows",o={unversionedId:"Windows/ACL",id:"Windows/ACL",title:"ACL - Windows",description:"Access Control List / File Permission",source:"@site/docs/Windows/ACL.md",sourceDirName:"Windows",slug:"/Windows/ACL",permalink:"/note/Windows/ACL",editUrl:"https://github.com/steelywing/note/edit/master/docs/Windows/ACL.md",tags:[],version:"current",frontMatter:{sidebar_label:"ACL"},sidebar:"windows",previous:{title:"Windows",permalink:"/note/Windows/"},next:{title:"Credential",permalink:"/note/Windows/Credential"}},m=[{value:"<code>calcs</code>",id:"calcs",children:[{value:"Replace permission",id:"replace-permission",children:[],level:3},{value:"Edit permission",id:"edit-permission",children:[],level:3},{value:"Change owner",id:"change-owner",children:[],level:3}],level:2},{value:"<code>icacls</code>",id:"icacls",children:[],level:2}],k={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"acl---windows"},"ACL - Windows"),(0,l.kt)("p",null,"Access Control List / File Permission"),(0,l.kt)("h2",{id:"calcs"},(0,l.kt)("inlineCode",{parentName:"h2"},"calcs")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"http://technet.microsoft.com/en-us/library/bb490872.aspx"},"Reference"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Permission"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"n")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"r")),(0,l.kt)("td",{parentName:"tr",align:null},"Read")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"w")),(0,l.kt)("td",{parentName:"tr",align:null},"Write")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c")),(0,l.kt)("td",{parentName:"tr",align:null},"Change (Write)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f")),(0,l.kt)("td",{parentName:"tr",align:null},"Full Control")))),(0,l.kt)("h3",{id:"replace-permission"},"Replace permission"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"cacls <file> /p <user>:<permission>\n")),(0,l.kt)("h3",{id:"edit-permission"},"Edit permission"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"cacls <file> /e /p <user>:<permission>\n")),(0,l.kt)("h3",{id:"change-owner"},"Change owner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"cacls <file> /r <user>\n")),(0,l.kt)("h2",{id:"icacls"},(0,l.kt)("inlineCode",{parentName:"h2"},"icacls")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/icacls"},"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"icacls <file> <option>\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/t")),(0,l.kt)("td",{parentName:"tr",align:null},"Traverse subdirectories")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/c")),(0,l.kt)("td",{parentName:"tr",align:null},"Continue on file error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/l")),(0,l.kt)("td",{parentName:"tr",align:null},"Performs on a symbolic link, not its destination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/setowner <user>")),(0,l.kt)("td",{parentName:"tr",align:null},"Changes the owner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/reset")),(0,l.kt)("td",{parentName:"tr",align:null},"Replaces with default inherited ACLs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/grant[:r] <user>:<permissions>")),(0,l.kt)("td",{parentName:"tr",align:null},"Grants specified user access rights",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},":r")," means replace previously granted explicit permissions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/deny <user>:<permissions>")),(0,l.kt)("td",{parentName:"tr",align:null},"Denies specified user access rights")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/remove[:g\\|:d] <user>")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove access rights of specified user from DACL",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},":g")," = Grant",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},":d")," = Deny")))),(0,l.kt)("p",null,"Permission syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[(OI)][(CI)][(IO)][(NP)][<simple permission>[...]](<permission>[,...])\n")),(0,l.kt)("p",null,"Permission"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Inherit"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(OI)")),(0,l.kt)("td",{parentName:"tr",align:null},"Object Inherit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(CI)")),(0,l.kt)("td",{parentName:"tr",align:null},"Container inherit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(IO)")),(0,l.kt)("td",{parentName:"tr",align:null},"Inherit only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(NP)")),(0,l.kt)("td",{parentName:"tr",align:null},"Do not propagate inherit")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Simple permission"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"F")),(0,l.kt)("td",{parentName:"tr",align:null},"Full access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"M")),(0,l.kt)("td",{parentName:"tr",align:null},"modify access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RX")),(0,l.kt)("td",{parentName:"tr",align:null},"Read and execute access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"R")),(0,l.kt)("td",{parentName:"tr",align:null},"Read-only access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"W")),(0,l.kt)("td",{parentName:"tr",align:null},"Write-only access")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Permission"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"D")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RC")),(0,l.kt)("td",{parentName:"tr",align:null},"Read control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WDAC")),(0,l.kt)("td",{parentName:"tr",align:null},"Write DAC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WO")),(0,l.kt)("td",{parentName:"tr",align:null},"Write owner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S")),(0,l.kt)("td",{parentName:"tr",align:null},"Synchronize")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AS")),(0,l.kt)("td",{parentName:"tr",align:null},"Access system security")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MA")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum allowed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GR")),(0,l.kt)("td",{parentName:"tr",align:null},"Generic read")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GW")),(0,l.kt)("td",{parentName:"tr",align:null},"Generic write")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GE")),(0,l.kt)("td",{parentName:"tr",align:null},"Generic execute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GA")),(0,l.kt)("td",{parentName:"tr",align:null},"Generic all")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RD")),(0,l.kt)("td",{parentName:"tr",align:null},"Read data/list directory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WD")),(0,l.kt)("td",{parentName:"tr",align:null},"Write data/add file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AD")),(0,l.kt)("td",{parentName:"tr",align:null},"Append data/add subdirectory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"REA")),(0,l.kt)("td",{parentName:"tr",align:null},"Read extended attributes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WEA")),(0,l.kt)("td",{parentName:"tr",align:null},"Write extended attributes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"X")),(0,l.kt)("td",{parentName:"tr",align:null},"Execute/traverse")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DC")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete child")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RA")),(0,l.kt)("td",{parentName:"tr",align:null},"Read attributes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WA")),(0,l.kt)("td",{parentName:"tr",align:null},"Write attributes")))))}u.isMDXComponent=!0}}]);