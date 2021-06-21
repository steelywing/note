(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6369],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||s[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8957:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={},l={unversionedId:"Network/Cisco/ASA",id:"Network/Cisco/ASA",isDocsHomePage:!1,title:"ASA",description:"Generate RSA key for SSH by ASDM CLI",source:"@site/docs/Network/Cisco/ASA.md",sourceDirName:"Network/Cisco",slug:"/Network/Cisco/ASA",permalink:"/note/Network/Cisco/ASA",editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco/ASA.md",version:"current",frontMatter:{},sidebar:"network",next:{title:"FirePower",permalink:"/note/Network/Cisco/FirePower"}},p=[{value:"Generate RSA key for SSH by ASDM CLI",id:"generate-rsa-key-for-ssh-by-asdm-cli",children:[]},{value:"SLA (Service Level Agreement) monitor",id:"sla-service-level-agreement-monitor",children:[{value:"Track route with SLA",id:"track-route-with-sla",children:[]}]},{value:"Event manager",id:"event-manager",children:[{value:"Manual event",id:"manual-event",children:[]},{value:"Syslog event",id:"syslog-event",children:[]},{value:"Periodic event",id:"periodic-event",children:[]},{value:"Action",id:"action",children:[]},{value:"Output",id:"output",children:[]},{value:"Verify applet",id:"verify-applet",children:[]},{value:"Manually run applet",id:"manually-run-applet",children:[]},{value:"SSH public key",id:"ssh-public-key",children:[]},{value:"Auto authorization (enable) when login console (Telnet / SSH)",id:"auto-authorization-enable-when-login-console-telnet--ssh",children:[]}]},{value:"Threat detection",id:"threat-detection",children:[{value:"Show thread detection config",id:"show-thread-detection-config",children:[]},{value:"Basic threat detection",id:"basic-threat-detection",children:[]},{value:"Statistics of host",id:"statistics-of-host",children:[]}]},{value:"Capture",id:"capture",children:[{value:"Capture ASP drop packet",id:"capture-asp-drop-packet",children:[]},{value:"Show capture",id:"show-capture",children:[]},{value:"Download capture",id:"download-capture",children:[]},{value:"Copy capture",id:"copy-capture",children:[]}]}],u={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"generate-rsa-key-for-ssh-by-asdm-cli"},"Generate RSA key for SSH by ASDM CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config)# crypto key generate rsa [noconfirm]\n")),(0,a.kt)("h2",{id:"sla-service-level-agreement-monitor"},"SLA (Service Level Agreement) monitor"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/118962-configure-asa-00.html"},"Reference")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config)# sla monitor <SLA ID>\nASA(config-sla-monitor)# type echo protocol ipIcmpEcho <IP> interface <interface>\nASA(config-sla-monitor-echo)# num-packets <number of packets>\nASA(config-sla-monitor-echo)# timeout <ms>\nASA(config-sla-monitor-echo)# threshold <ms>\nASA(config-sla-monitor-echo)# frequency <seconds>\nASA(config-sla-monitor-echo)# exit\n\nASA(config)# sla monitor schedule <SLA ID> life { forever | <seconds> } start-time now\n")),(0,a.kt)("h3",{id:"track-route-with-sla"},"Track route with SLA"),(0,a.kt)("p",null,"\u7576 ",(0,a.kt)("inlineCode",{parentName:"p"},"<SLA ID>")," \u72c0\u614b\u6b63\u5e38\u624d\u555f\u7528 route"),(0,a.kt)("p",null,"Enable route only when ",(0,a.kt)("inlineCode",{parentName:"p"},"<SLA ID>")," is OK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config)# track <track ID> rtr <SLA ID> reachability\nASA(config)# route <interface> <IP> <netmask> <gateway> [<metric>] track <track ID>\n")),(0,a.kt)("h2",{id:"event-manager"},"Event manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/security/adaptive-security-appliance-asa-software/117883-config-eem-00.html"},"Reference")),(0,a.kt)("p",null,"Execute specified command on specified event"),(0,a.kt)("p",null,"\u5728\u6307\u5b9a\u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u6307\u5b9a\u7684\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config)# [no] event manager applet <name>\nASA(config-applet)# [no] description <text>\n")),(0,a.kt)("h3",{id:"manual-event"},"Manual event"),(0,a.kt)("p",null,"Required for manually run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event none\n")),(0,a.kt)("h3",{id:"syslog-event"},"Syslog event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event syslog id <start ID>[-<end ID>] [occurs <times>] [period <seconds>]\n")),(0,a.kt)("h3",{id:"periodic-event"},"Periodic event"),(0,a.kt)("h4",{id:"absolute-event"},"Absolute event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event timer absolute time <hh:mm:ss>\n")),(0,a.kt)("h4",{id:"countdown-event"},"Countdown event"),(0,a.kt)("p",null,"Execute once only"),(0,a.kt)("p",null,"\u53ea\u57f7\u884c\u4e00\u6b21"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event timer countdown time <seconds>\n")),(0,a.kt)("h4",{id:"watchdog-event"},"Watchdog event"),(0,a.kt)("p",null,"Repeat execute every ",(0,a.kt)("inlineCode",{parentName:"p"},"<seconds>")),(0,a.kt)("p",null,"\u6bcf\u9694 ",(0,a.kt)("inlineCode",{parentName:"p"},"<seconds>")," \u57f7\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] event timer watchdog time <seconds>\n")),(0,a.kt)("h3",{id:"action"},"Action"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ASA(config-applet)# [no] action [<action number>] cli command "<command>"\n')),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config-applet)# [no] output {\n    none |\n    console |\n    file {\n        new |\n        rotate <number> |\n        overwrite <file name> |\n        append <file name>\n    }\n}\n")),(0,a.kt)("h3",{id:"verify-applet"},"Verify applet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA# show running-config event manager\n")),(0,a.kt)("h3",{id:"manually-run-applet"},"Manually run applet"),(0,a.kt)("p",null,"Require configured with ",(0,a.kt)("inlineCode",{parentName:"p"},"event none")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA# event manager run <applet>\n")),(0,a.kt)("h3",{id:"ssh-public-key"},"SSH public key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config)# username <user name> attributes\nASA(config-username)# ssh authentication publickey <public key>\n")),(0,a.kt)("h3",{id:"auto-authorization-enable-when-login-console-telnet--ssh"},"Auto authorization (enable) when login console (Telnet / SSH)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config)# aaa authorization exec LOCAL auto-enable\n")),(0,a.kt)("h2",{id:"threat-detection"},"Threat detection"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/113685-asa-threat-detection.html"},"Reference")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA# show threat-detection { scanning-threat | rate | statistics [top] }\n")),(0,a.kt)("h3",{id:"show-thread-detection-config"},"Show thread detection config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA# show running-config all threat-detection\n")),(0,a.kt)("h3",{id:"basic-threat-detection"},"Basic threat detection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config)# [no] threat-detection basic-threat\n")),(0,a.kt)("h3",{id:"statistics-of-host"},"Statistics of host"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA(config)# threat-detection statistics host [number-of-rate <number of rate>]\n")),(0,a.kt)("h2",{id:"capture"},"Capture"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/118097-configure-asa-00.html"},"Reference")),(0,a.kt)("h3",{id:"capture-asp-drop-packet"},"Capture ASP drop packet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA# capture <capture ID> type asp-drop [real-time]\n")),(0,a.kt)("h3",{id:"show-capture"},"Show capture"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA# show capture <capture ID>\n")),(0,a.kt)("h3",{id:"download-capture"},"Download capture"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://<IP>/admin/capture/<capture ID>/pcap\n")),(0,a.kt)("h3",{id:"copy-capture"},"Copy capture"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ASA# copy /pcap capture:<capture ID> {tftp|scp}://<IP>\n")))}s.isMDXComponent=!0}}]);