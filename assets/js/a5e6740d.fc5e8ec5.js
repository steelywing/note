"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5342],{7485:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(6687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,k=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(6274),a=(n(6687),n(7485));const o={tags:["Cisco","IOS"]},i="Login / Authenticate",l={unversionedId:"Network/Cisco/IOS/LogIn",id:"Network/Cisco/IOS/LogIn",title:"Login / Authenticate",description:"Login / Authenticate / User / TelNet / SSH",source:"@site/docs/Network/Cisco/IOS/LogIn.md",sourceDirName:"Network/Cisco/IOS",slug:"/Network/Cisco/IOS/LogIn",permalink:"/note/Network/Cisco/IOS/LogIn",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco/IOS/LogIn.md",tags:[{label:"Cisco",permalink:"/note/tags/cisco"},{label:"IOS",permalink:"/note/tags/ios"}],version:"current",frontMatter:{tags:["Cisco","IOS"]},sidebar:"network",previous:{title:"Log",permalink:"/note/Network/Cisco/IOS/Log"},next:{title:"MultiCast",permalink:"/note/Network/Cisco/IOS/MultiCast"}},c={},s=[{value:"Use AAA authentication / authorization",id:"use-aaa-authentication--authorization",level:2},{value:"Use local user authentication",id:"use-local-user-authentication",level:2},{value:"Enable console authorization",id:"enable-console-authorization",level:2},{value:"Create user",id:"create-user",level:2},{value:"Set enable password",id:"set-enable-password",level:2},{value:"Console",id:"console",level:2},{value:"Telnet / SSH",id:"telnet--ssh",level:2},{value:"RSA Key",id:"rsa-key",level:2},{value:"Set login password",id:"set-login-password",level:2},{value:"Use password to authenticate",id:"use-password-to-authenticate",level:2},{value:"Use user to authenticate",id:"use-user-to-authenticate",level:2},{value:"Set timeout",id:"set-timeout",level:2},{value:"Encrypt password",id:"encrypt-password",level:2},{value:"Enable TelNet / SSH",id:"enable-telnet--ssh",level:2},{value:"Use Ctrl-C to break",id:"use-ctrl-c-to-break",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"login--authenticate"},"Login / Authenticate"),(0,a.kt)("p",null,"Login / Authenticate / User / TelNet / SSH"),(0,a.kt)("h2",{id:"use-aaa-authentication--authorization"},"Use AAA authentication / authorization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# aaa new-model\n")),(0,a.kt)("h2",{id:"use-local-user-authentication"},"Use local user authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# aaa authentication login default local\nSwitch(config)# aaa authorization exec default local\n")),(0,a.kt)("h2",{id:"enable-console-authorization"},"Enable console authorization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# aaa authorization console\n")),(0,a.kt)("h2",{id:"create-user"},"Create user"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# username <username> \n    privilege <privilege level> \n    password <password>\n")),(0,a.kt)("h2",{id:"set-enable-password"},"Set enable password"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ref: Unnecessary for ",(0,a.kt)("inlineCode",{parentName:"p"},"privilege 15")," user")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# enable secret <password>\n")),(0,a.kt)("h2",{id:"console"},"Console"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# line console 0\nSwitch(config-line)# \n")),(0,a.kt)("h2",{id:"telnet--ssh"},"Telnet / SSH"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# line vty 0 15\nSwitch(config-line)# \n")),(0,a.kt)("h2",{id:"rsa-key"},"RSA Key"),(0,a.kt)("p",null,"Generate RSA key (for SSH)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# crypto key generate rsa\n")),(0,a.kt)("p",null,"Add SSH RSA public key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# ip ssh pubkey-chain\nSwitch(conf-ssh-pubkey)# username <username>\nSwitch(conf-ssh-pubkey-user)# key-string\n! Must less than ~80 chars/line\nSwitch(conf-ssh-pubkey-data)# <public key>\nSwitch(conf-ssh-pubkey-data)# exit\n")),(0,a.kt)("h2",{id:"set-login-password"},"Set login password"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ref: Unnecessary if using ",(0,a.kt)("inlineCode",{parentName:"p"},"login local"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-line)# password <password>\n")),(0,a.kt)("h2",{id:"use-password-to-authenticate"},"Use password to authenticate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-line)# login\n")),(0,a.kt)("h2",{id:"use-user-to-authenticate"},"Use user to authenticate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-line)# login local\n")),(0,a.kt)("h2",{id:"set-timeout"},"Set timeout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-line)# exec-timeout 30\n")),(0,a.kt)("h2",{id:"encrypt-password"},"Encrypt password"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# service password-encryption\n")),(0,a.kt)("h2",{id:"enable-telnet--ssh"},"Enable TelNet / SSH"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-line)# transport input { all | telnet | ssh | none }\n")),(0,a.kt)("h2",{id:"use-ctrl-c-to-break"},"Use Ctrl-C to break"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-line)# escape-character 3\n")))}p.isMDXComponent=!0}}]);