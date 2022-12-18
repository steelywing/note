"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1204],{7485:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(6687);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=l,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return r?a.createElement(v,i(i({ref:t},d),{},{components:r})):a.createElement(v,i({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=r(6274),l=(r(6687),r(7485));const n={},i="ssacli",o={unversionedId:"Note/HP/ssacli",id:"Note/HP/ssacli",title:"ssacli",description:"HPE Smart Storage Administrator CLI",source:"@site/docs/Note/HP/ssacli.md",sourceDirName:"Note/HP",slug:"/Note/HP/ssacli",permalink:"/note/Note/HP/ssacli",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Note/HP/ssacli.md",tags:[],version:"current",frontMatter:{},sidebar:"note",previous:{title:"iLO",permalink:"/note/Note/HP/iLO"},next:{title:"HTTP",permalink:"/note/Note/HTTP"}},c={},s=[{value:"Help",id:"help",level:2},{value:"Abbreviation",id:"abbreviation",level:2},{value:"Controller",id:"controller",level:2},{value:"Controller info",id:"controller-info",level:3},{value:"Rescan drive",id:"rescan-drive",level:2},{value:"Physical drive info",id:"physical-drive-info",level:2},{value:"Logical drive",id:"logical-drive",level:2},{value:"Logical drive info",id:"logical-drive-info",level:3},{value:"Create logical drive",id:"create-logical-drive",level:3},{value:"Delete logical drive",id:"delete-logical-drive",level:3}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ssacli"},(0,l.kt)("inlineCode",{parentName:"h1"},"ssacli")),(0,l.kt)("p",null,"HPE Smart Storage Administrator CLI"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://wiki.phoenixlzx.com/page/ssacli/"},"Reference"))),(0,l.kt)("h2",{id:"help"},"Help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssacli [ctrl] help [ show | create | modify ]\n")),(0,l.kt)("h2",{id:"abbreviation"},"Abbreviation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,l.kt)("th",{parentName:"tr",align:null},"Full"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ctrl")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"controller"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pd")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"physicaldrive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ld")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"logicaldrive"))))),(0,l.kt)("h2",{id:"controller"},"Controller"),(0,l.kt)("h3",{id:"controller-info"},"Controller info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssacli ctrl { all | slot=<slot ID> } show [ config | detail | status ]\n")),(0,l.kt)("h2",{id:"rescan-drive"},"Rescan drive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssacli rescan\n")),(0,l.kt)("h2",{id:"physical-drive-info"},"Physical drive info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssacli ctrl slot=<slot ID> pd { all | allunassigned | <port>:<box>:<bay> } show [ status | detail ]\n")),(0,l.kt)("h2",{id:"logical-drive"},"Logical drive"),(0,l.kt)("h3",{id:"logical-drive-info"},"Logical drive info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssacli ctrl slot=<slot ID> ld { all | <ID> } show [ status | detail ]\n")),(0,l.kt)("h3",{id:"create-logical-drive"},"Create logical drive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssacli ctrl slot=<slot ID> create type=ld drives={all|allunassigned|<port>:<box>:<bay>,<port>:<box>:<bay>,...} [raid={0|1|1+0|5|50|6|60}] [size={<MB>|min|max|maxmbr}]\n")),(0,l.kt)("h3",{id:"delete-logical-drive"},"Delete logical drive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssacli ctrl slot=<slot ID> ld <ID> delete\n")))}p.isMDXComponent=!0}}]);