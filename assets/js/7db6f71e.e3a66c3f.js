"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6369],{87485:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(76274),r=(n(76687),n(87485));const o={},i=void 0,l={unversionedId:"Network/Cisco/ASA",id:"Network/Cisco/ASA",title:"ASA",description:"Generate RSA key for SSH by ASDM CLI",source:"@site/docs/Network/Cisco/ASA.md",sourceDirName:"Network/Cisco",slug:"/Network/Cisco/ASA",permalink:"/note/Network/Cisco/ASA",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco/ASA.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"Network",permalink:"/note/Network/"},next:{title:"FirePower",permalink:"/note/Network/Cisco/FirePower"}},c={},p=[{value:"Generate RSA key for SSH by ASDM CLI",id:"generate-rsa-key-for-ssh-by-asdm-cli",level:2},{value:"SLA (Service Level Agreement) monitor",id:"sla-service-level-agreement-monitor",level:2},{value:"Track route with SLA",id:"track-route-with-sla",level:3},{value:"Event manager",id:"event-manager",level:2},{value:"Manual event",id:"manual-event",level:3},{value:"Syslog event",id:"syslog-event",level:3},{value:"Periodic event",id:"periodic-event",level:3},{value:"Absolute event",id:"absolute-event",level:4},{value:"Countdown event",id:"countdown-event",level:4},{value:"Watchdog event",id:"watchdog-event",level:4},{value:"Action",id:"action",level:3},{value:"Output",id:"output",level:3},{value:"Verify applet",id:"verify-applet",level:3},{value:"Manually run applet",id:"manually-run-applet",level:3},{value:"SSH public key",id:"ssh-public-key",level:3},{value:"Auto authorization (enable) when login console (Telnet / SSH)",id:"auto-authorization-enable-when-login-console-telnet--ssh",level:3},{value:"Threat detection",id:"threat-detection",level:2},{value:"Show thread detection config",id:"show-thread-detection-config",level:3},{value:"Basic threat detection",id:"basic-threat-detection",level:3},{value:"Statistics of host",id:"statistics-of-host",level:3},{value:"Capture",id:"capture",level:2},{value:"Capture ASP drop packet",id:"capture-asp-drop-packet",level:3},{value:"Show capture",id:"show-capture",level:3},{value:"Download capture",id:"download-capture",level:3},{value:"Copy capture",id:"copy-capture",level:3},{value:"Failover / HA",id:"failover--ha",level:2},{value:"Setup Interface Monitoring",id:"setup-interface-monitoring",level:3},{value:"Force failover",id:"force-failover",level:3},{value:"Re-Sync the Config",id:"re-sync-the-config",level:3},{value:"Show failover state",id:"show-failover-state",level:3},{value:"Debug failover failed",id:"debug-failover-failed",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"generate-rsa-key-for-ssh-by-asdm-cli"},"Generate RSA key for SSH by ASDM CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config)# crypto key generate rsa [noconfirm]\n")),(0,r.kt)("h2",{id:"sla-service-level-agreement-monitor"},"SLA (Service Level Agreement) monitor"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/118962-configure-asa-00.html"},"Reference")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config)# sla monitor <SLA ID>\nASA(config-sla-monitor)# type echo protocol ipIcmpEcho <IP> interface <interface>\nASA(config-sla-monitor-echo)# num-packets <number of packets>\nASA(config-sla-monitor-echo)# timeout <ms>\nASA(config-sla-monitor-echo)# threshold <ms>\nASA(config-sla-monitor-echo)# frequency <seconds>\nASA(config-sla-monitor-echo)# exit\n\nASA(config)# sla monitor schedule <SLA ID> life { forever | <seconds> } start-time now\n")),(0,r.kt)("h3",{id:"track-route-with-sla"},"Track route with SLA"),(0,r.kt)("p",null,"\u7576 ",(0,r.kt)("inlineCode",{parentName:"p"},"<SLA ID>")," \u72c0\u614b\u6b63\u5e38\u624d\u555f\u7528 route"),(0,r.kt)("p",null,"Enable route only when ",(0,r.kt)("inlineCode",{parentName:"p"},"<SLA ID>")," is OK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config)# track <track ID> rtr <SLA ID> reachability\nASA(config)# route <interface> <IP> <netmask> <gateway> [<metric>] track <track ID>\n")),(0,r.kt)("h2",{id:"event-manager"},"Event manager"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/security/adaptive-security-appliance-asa-software/117883-config-eem-00.html"},"Reference")),(0,r.kt)("p",null,"Execute specified command on specified event"),(0,r.kt)("p",null,"\u5728\u6307\u5b9a\u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u6307\u5b9a\u7684\u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config)# [no] event manager applet <name>\nASA(config-applet)# [no] description <text>\n")),(0,r.kt)("h3",{id:"manual-event"},"Manual event"),(0,r.kt)("p",null,"Required for manually run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event none\n")),(0,r.kt)("h3",{id:"syslog-event"},"Syslog event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event syslog id <start ID>[-<end ID>] [occurs <times>] [period <seconds>]\n")),(0,r.kt)("h3",{id:"periodic-event"},"Periodic event"),(0,r.kt)("h4",{id:"absolute-event"},"Absolute event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event timer absolute time <hh:mm:ss>\n")),(0,r.kt)("h4",{id:"countdown-event"},"Countdown event"),(0,r.kt)("p",null,"Execute once only"),(0,r.kt)("p",null,"\u53ea\u57f7\u884c\u4e00\u6b21"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event timer countdown time <seconds>\n")),(0,r.kt)("h4",{id:"watchdog-event"},"Watchdog event"),(0,r.kt)("p",null,"Repeat execute every ",(0,r.kt)("inlineCode",{parentName:"p"},"<seconds>")),(0,r.kt)("p",null,"\u6bcf\u9694 ",(0,r.kt)("inlineCode",{parentName:"p"},"<seconds>")," \u57f7\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event timer watchdog time <seconds>\n")),(0,r.kt)("h3",{id:"action"},"Action"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ASA(config-applet)# [no] action [<action number>] cli command "<command>"\n')),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] output {\n    none |\n    console |\n    file {\n        new |\n        rotate <number> |\n        overwrite <file name> |\n        append <file name>\n    }\n}\n")),(0,r.kt)("h3",{id:"verify-applet"},"Verify applet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA# show running-config event manager\n")),(0,r.kt)("h3",{id:"manually-run-applet"},"Manually run applet"),(0,r.kt)("p",null,"Require configured with ",(0,r.kt)("inlineCode",{parentName:"p"},"event none")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA# event manager run <applet>\n")),(0,r.kt)("h3",{id:"ssh-public-key"},"SSH public key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config)# username <user name> attributes\nASA(config-username)# ssh authentication publickey <public key>\n")),(0,r.kt)("h3",{id:"auto-authorization-enable-when-login-console-telnet--ssh"},"Auto authorization (enable) when login console (Telnet / SSH)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config)# aaa authorization exec LOCAL auto-enable\n")),(0,r.kt)("h2",{id:"threat-detection"},"Threat detection"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/113685-asa-threat-detection.html"},"Reference")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA# show threat-detection { scanning-threat | rate | statistics [top] }\n")),(0,r.kt)("h3",{id:"show-thread-detection-config"},"Show thread detection config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA# show running-config all threat-detection\n")),(0,r.kt)("h3",{id:"basic-threat-detection"},"Basic threat detection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config)# [no] threat-detection basic-threat\n")),(0,r.kt)("h3",{id:"statistics-of-host"},"Statistics of host"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA(config)# threat-detection statistics host [number-of-rate <number of rate>]\n")),(0,r.kt)("h2",{id:"capture"},"Capture"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/118097-configure-asa-00.html"},"Reference")),(0,r.kt)("h3",{id:"capture-asp-drop-packet"},"Capture ASP drop packet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA# capture <capture ID> type asp-drop [real-time]\n")),(0,r.kt)("h3",{id:"show-capture"},"Show capture"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA# show capture <capture ID>\n")),(0,r.kt)("h3",{id:"download-capture"},"Download capture"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://<IP>/admin/capture/<capture ID>/pcap\n")),(0,r.kt)("h3",{id:"copy-capture"},"Copy capture"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ASA# copy /pcap capture:<capture ID> {tftp|scp}://<IP>\n")),(0,r.kt)("h2",{id:"failover--ha"},"Failover / HA"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/security/asa/asa98/configuration/general/asa-98-general-config/ha-failover.html"},"Ref"))),(0,r.kt)("p",null,"Failover / High Availability"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"! Designate this unit as the primary / secondary unit\nasa(config)# failover lan unit { primary | secondary }\n\n! failover link\nasa(config)# failover lan interface folink <interface>\nasa(config)# failover interface ip folink 10.0.0.1 255.255.255.0 standby 10.0.0.2\nasa(config)# interface <interface>\nasa(config-if)# no shutdown\n\n! [Optional] Specify interface as state link\n! failover link and state link can be shared\nasa(config)# failover link folink <interface>\n! if failover link and state link are separated, need to assign IP address\nasa(config)# failover interface ip statelink 10.0.1.1 255.255.255.0 standby 10.0.1.2\n\n! Enable failover\nasa(config)# failover\n")),(0,r.kt)("h3",{id:"setup-interface-monitoring"},"Setup Interface Monitoring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"asa(config)# [no] monitor-interface <interface>\n")),(0,r.kt)("h3",{id:"force-failover"},"Force failover"),(0,r.kt)("p",null,"On active unit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"asa# no failover active\n")),(0,r.kt)("p",null,"Or, on standby unit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"asa# failover active\n")),(0,r.kt)("h3",{id:"re-sync-the-config"},"Re-Sync the Config"),(0,r.kt)("p",null,"On active unit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"asa# write standby\n")),(0,r.kt)("h3",{id:"show-failover-state"},"Show failover state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"asa# show failover\nasa# show failover state\n")),(0,r.kt)("h3",{id:"debug-failover-failed"},"Debug failover failed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"asa# show failover history\n")))}u.isMDXComponent=!0}}]);