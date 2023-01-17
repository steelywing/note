"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7707],{87485:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(76274),o=(n(76687),n(87485));const i={tags:["Cisco","IOS","SPAN"]},a="SPAN",s={unversionedId:"Network/Cisco/IOS/SPAN",id:"Network/Cisco/IOS/SPAN",title:"SPAN",description:"Switched Port Analyzer / Port Mirroing / Port Monitoring",source:"@site/docs/Network/Cisco/IOS/SPAN.md",sourceDirName:"Network/Cisco/IOS",slug:"/Network/Cisco/IOS/SPAN",permalink:"/note/Network/Cisco/IOS/SPAN",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco/IOS/SPAN.md",tags:[{label:"Cisco",permalink:"/note/tags/cisco"},{label:"IOS",permalink:"/note/tags/ios"},{label:"SPAN",permalink:"/note/tags/span"}],version:"current",frontMatter:{tags:["Cisco","IOS","SPAN"]},sidebar:"network",previous:{title:"Routing",permalink:"/note/Network/Cisco/IOS/Routing"},next:{title:"STP",permalink:"/note/Network/Cisco/IOS/STP"}},c={},l=[{value:"Local SPAN",id:"local-span",level:2},{value:"Monitor interface",id:"monitor-interface",level:3},{value:"Monitor all ports of specify VLAN",id:"monitor-all-ports-of-specify-vlan",level:3},{value:"Monitor specific VLAN",id:"monitor-specific-vlan",level:3},{value:"Mirror to specify interface",id:"mirror-to-specify-interface",level:3},{value:"Remove monitor session",id:"remove-monitor-session",level:3},{value:"RSPAN",id:"rspan",level:2},{value:"Display SPAN status",id:"display-span-status",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"span"},"SPAN"),(0,o.kt)("p",null,"Switched Port Analyzer / Port Mirroing / Port Monitoring"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref: ",(0,o.kt)("a",{target:"_blank",href:n(21517).Z},"SPAN"))),(0,o.kt)("p",null,"Copy (Mirror) source interface packet to destination interface"),(0,o.kt)("h2",{id:"local-span"},"Local SPAN"),(0,o.kt)("p",null,"Mirror interface ",(0,o.kt)("strong",{parentName:"p"},"Gi0/1")," traffic to ",(0,o.kt)("strong",{parentName:"p"},"Gi0/2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cisco"},"Switch(config)# monitor session 1 source interface Gi0/1\nSwitch(config)# monitor session 1 destination interface Gi0/2\n")),(0,o.kt)("p",null,"Remove SPAN"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cisco"},"Switch(config)# no monitor session 1\n")),(0,o.kt)("h3",{id:"monitor-interface"},"Monitor interface"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("strong",{parentName:"p"},"both")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# monitor\n    session <session number> \n    source interface <interface> \n    [ both | rx | tx ]\n")),(0,o.kt)("h3",{id:"monitor-all-ports-of-specify-vlan"},"Monitor all ports of specify VLAN"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("strong",{parentName:"p"},"both")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# monitor\n    session <session number> \n    source vlan <VLAN list> \n    [ both | rx | tx ]\n")),(0,o.kt)("h3",{id:"monitor-specific-vlan"},"Monitor specific VLAN"),(0,o.kt)("p",null,"For trunk port only"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"! <VLAN list> = <VLAN> [, <VLAN> ...]\n! <VLAN> = <VLAN ID> | <VLAN ID> - <VLAN ID>\nSwitch(config)# monitor\n    session <session number>\n    filter <VLAN list>\n")),(0,o.kt)("h3",{id:"mirror-to-specify-interface"},"Mirror to specify interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# monitor\n    session <session number> \n    destination interface <interface>\n")),(0,o.kt)("h3",{id:"remove-monitor-session"},"Remove monitor session"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Switch(config)# no monitor\n    session <session number>\n")),(0,o.kt)("h2",{id:"rspan"},"RSPAN"),(0,o.kt)("p",null,"Remote SPAN"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RSPAN",src:n(58387).Z,width:"346",height:"247"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cisco",metastring:'title="switch-1"',title:'"switch-1"'},"vlan 100\n    name RSPAN\n    remote-span\n\ninterface GigabitEthernet1/0/1\n    description Trunk to switch-2\n    switchport mode trunk\n    switchport trunk allowed vlan 100\n\ninterface GigabitEthernet1/0/2\n    description Server\n\nmonitor session 1 source interface Gi1/0/2\nmonitor session 1 destination remote vlan 100\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cisco",metastring:'title="switch-2"',title:'"switch-2"'},"vlan 100\n    name RSPAN\n    remote-span\n\ninterface GigabitEthernet1/0/2\n    description WireShark\n\ninterface GigabitEthernet1/0/15\n    description Trunk to switch-1\n    switchport mode trunk\n    switchport trunk allowed vlan 100\n\nmonitor session 1 source remote vlan 100\nmonitor session 1 destination interface Gi1/0/2\n")),(0,o.kt)("h2",{id:"display-span-status"},"Display SPAN status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cisco"},"Switch# show monitor\n")))}u.isMDXComponent=!0},21517:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/span-dbed81c91ac16c02fb25a8d1da82a063.pdf"},58387:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RSPAN-5a95c51985431a8cd43bd8793e852244.svg"}}]);