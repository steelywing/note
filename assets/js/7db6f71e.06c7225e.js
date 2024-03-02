"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6369],{93371:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var t=i(75366),r=i(26192);const c={},o=void 0,a={id:"Network/Cisco/ASA",title:"ASA",description:"Generate RSA key for SSH by ASDM CLI",source:"@site/docs/Network/Cisco/ASA.md",sourceDirName:"Network/Cisco",slug:"/Network/Cisco/ASA",permalink:"/note/Network/Cisco/ASA",draft:!1,unlisted:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco/ASA.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"Network",permalink:"/note/Network/"},next:{title:"FirePower",permalink:"/note/Network/Cisco/FirePower"}},l={},s=[{value:"Generate RSA key for SSH by ASDM CLI",id:"generate-rsa-key-for-ssh-by-asdm-cli",level:2},{value:"SLA (Service Level Agreement) monitor",id:"sla-service-level-agreement-monitor",level:2},{value:"Track route with SLA",id:"track-route-with-sla",level:3},{value:"Event manager",id:"event-manager",level:2},{value:"Manual event",id:"manual-event",level:3},{value:"Syslog event",id:"syslog-event",level:3},{value:"Periodic event",id:"periodic-event",level:3},{value:"Absolute event",id:"absolute-event",level:4},{value:"Countdown event",id:"countdown-event",level:4},{value:"Watchdog event",id:"watchdog-event",level:4},{value:"Action",id:"action",level:3},{value:"Output",id:"output",level:3},{value:"Verify applet",id:"verify-applet",level:3},{value:"Manually run applet",id:"manually-run-applet",level:3},{value:"SSH public key",id:"ssh-public-key",level:3},{value:"Auto authorization (enable) when login console (Telnet / SSH)",id:"auto-authorization-enable-when-login-console-telnet--ssh",level:3},{value:"Threat detection",id:"threat-detection",level:2},{value:"Show thread detection config",id:"show-thread-detection-config",level:3},{value:"Basic threat detection",id:"basic-threat-detection",level:3},{value:"Statistics of host",id:"statistics-of-host",level:3},{value:"Capture",id:"capture",level:2},{value:"Capture ASP drop packet",id:"capture-asp-drop-packet",level:3},{value:"Show capture",id:"show-capture",level:3},{value:"Download capture",id:"download-capture",level:3},{value:"Copy capture",id:"copy-capture",level:3},{value:"Failover / HA",id:"failover--ha",level:2},{value:"Setup Interface Monitoring",id:"setup-interface-monitoring",level:3},{value:"Force failover",id:"force-failover",level:3},{value:"Re-Sync the Config",id:"re-sync-the-config",level:3},{value:"Show failover state",id:"show-failover-state",level:3},{value:"Debug failover failed",id:"debug-failover-failed",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"generate-rsa-key-for-ssh-by-asdm-cli",children:"Generate RSA key for SSH by ASDM CLI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config)# crypto key generate rsa [noconfirm]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"sla-service-level-agreement-monitor",children:"SLA (Service Level Agreement) monitor"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/118962-configure-asa-00.html",children:"Reference"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config)# sla monitor <SLA ID>\nASA(config-sla-monitor)# type echo protocol ipIcmpEcho <IP> interface <interface>\nASA(config-sla-monitor-echo)# num-packets <number of packets>\nASA(config-sla-monitor-echo)# timeout <ms>\nASA(config-sla-monitor-echo)# threshold <ms>\nASA(config-sla-monitor-echo)# frequency <seconds>\nASA(config-sla-monitor-echo)# exit\n\nASA(config)# sla monitor schedule <SLA ID> life { forever | <seconds> } start-time now\n"})}),"\n",(0,t.jsx)(n.h3,{id:"track-route-with-sla",children:"Track route with SLA"}),"\n",(0,t.jsxs)(n.p,{children:["\u7576 ",(0,t.jsx)(n.code,{children:"<SLA ID>"})," \u72c0\u614b\u6b63\u5e38\u624d\u555f\u7528 route"]}),"\n",(0,t.jsxs)(n.p,{children:["Enable route only when ",(0,t.jsx)(n.code,{children:"<SLA ID>"})," is OK"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config)# track <track ID> rtr <SLA ID> reachability\nASA(config)# route <interface> <IP> <netmask> <gateway> [<metric>] track <track ID>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"event-manager",children:"Event manager"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cisco.com/c/en/us/support/docs/security/adaptive-security-appliance-asa-software/117883-config-eem-00.html",children:"Reference"})}),"\n",(0,t.jsx)(n.p,{children:"Execute specified command on specified event"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6307\u5b9a\u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u6307\u5b9a\u7684\u6307\u4ee4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config)# [no] event manager applet <name>\nASA(config-applet)# [no] description <text>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"manual-event",children:"Manual event"}),"\n",(0,t.jsx)(n.p,{children:"Required for manually run"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config-applet)# [no] event none\n"})}),"\n",(0,t.jsx)(n.h3,{id:"syslog-event",children:"Syslog event"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config-applet)# [no] event syslog id <start ID>[-<end ID>] [occurs <times>] [period <seconds>]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"periodic-event",children:"Periodic event"}),"\n",(0,t.jsx)(n.h4,{id:"absolute-event",children:"Absolute event"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config-applet)# [no] event timer absolute time <hh:mm:ss>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"countdown-event",children:"Countdown event"}),"\n",(0,t.jsx)(n.p,{children:"Execute once only"}),"\n",(0,t.jsx)(n.p,{children:"\u53ea\u57f7\u884c\u4e00\u6b21"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config-applet)# [no] event timer countdown time <seconds>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"watchdog-event",children:"Watchdog event"}),"\n",(0,t.jsxs)(n.p,{children:["Repeat execute every ",(0,t.jsx)(n.code,{children:"<seconds>"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u6bcf\u9694 ",(0,t.jsx)(n.code,{children:"<seconds>"})," \u57f7\u884c"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config-applet)# [no] event timer watchdog time <seconds>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"action",children:"Action"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'ASA(config-applet)# [no] action [<action number>] cli command "<command>"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config-applet)# [no] output {\n    none |\n    console |\n    file {\n        new |\n        rotate <number> |\n        overwrite <file name> |\n        append <file name>\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"verify-applet",children:"Verify applet"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA# show running-config event manager\n"})}),"\n",(0,t.jsx)(n.h3,{id:"manually-run-applet",children:"Manually run applet"}),"\n",(0,t.jsxs)(n.p,{children:["Require configured with ",(0,t.jsx)(n.code,{children:"event none"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA# event manager run <applet>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ssh-public-key",children:"SSH public key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config)# username <user name> attributes\nASA(config-username)# ssh authentication publickey <public key>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"auto-authorization-enable-when-login-console-telnet--ssh",children:"Auto authorization (enable) when login console (Telnet / SSH)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config)# aaa authorization exec LOCAL auto-enable\n"})}),"\n",(0,t.jsx)(n.h2,{id:"threat-detection",children:"Threat detection"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/113685-asa-threat-detection.html",children:"Reference"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA# show threat-detection { scanning-threat | rate | statistics [top] }\n"})}),"\n",(0,t.jsx)(n.h3,{id:"show-thread-detection-config",children:"Show thread detection config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA# show running-config all threat-detection\n"})}),"\n",(0,t.jsx)(n.h3,{id:"basic-threat-detection",children:"Basic threat detection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config)# [no] threat-detection basic-threat\n"})}),"\n",(0,t.jsx)(n.h3,{id:"statistics-of-host",children:"Statistics of host"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA(config)# threat-detection statistics host [number-of-rate <number of rate>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"capture",children:"Capture"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/118097-configure-asa-00.html",children:"Reference"})}),"\n",(0,t.jsx)(n.h3,{id:"capture-asp-drop-packet",children:"Capture ASP drop packet"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA# capture <capture ID> type asp-drop [real-time]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"show-capture",children:"Show capture"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA# show capture <capture ID>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"download-capture",children:"Download capture"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://<IP>/admin/capture/<capture ID>/pcap\n"})}),"\n",(0,t.jsx)(n.h3,{id:"copy-capture",children:"Copy capture"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASA# copy /pcap capture:<capture ID> {tftp|scp}://<IP>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"failover--ha",children:"Failover / HA"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cisco.com/c/en/us/td/docs/security/asa/asa98/configuration/general/asa-98-general-config/ha-failover.html",children:"Ref"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Failover / High Availability"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"! Designate this unit as the primary / secondary unit\nasa(config)# failover lan unit { primary | secondary }\n\n! failover link\nasa(config)# failover lan interface folink <interface>\nasa(config)# failover interface ip folink 10.0.0.1 255.255.255.0 standby 10.0.0.2\nasa(config)# interface <interface>\nasa(config-if)# no shutdown\n\n! [Optional] Specify interface as state link\n! failover link and state link can be shared\nasa(config)# failover link folink <interface>\n! if failover link and state link are separated, need to assign IP address\nasa(config)# failover interface ip statelink 10.0.1.1 255.255.255.0 standby 10.0.1.2\n\n! Enable failover\nasa(config)# failover\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setup-interface-monitoring",children:"Setup Interface Monitoring"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"asa(config)# [no] monitor-interface <interface>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"force-failover",children:"Force failover"}),"\n",(0,t.jsx)(n.p,{children:"On active unit"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"asa# no failover active\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or, on standby unit"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"asa# failover active\n"})}),"\n",(0,t.jsx)(n.h3,{id:"re-sync-the-config",children:"Re-Sync the Config"}),"\n",(0,t.jsx)(n.p,{children:"On active unit"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"asa# write standby\n"})}),"\n",(0,t.jsx)(n.h3,{id:"show-failover-state",children:"Show failover state"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"asa# show failover\nasa# show failover state\n"})}),"\n",(0,t.jsx)(n.h3,{id:"debug-failover-failed",children:"Debug failover failed"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"asa# show failover history\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},26192:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(97049);const r={},c=t.createContext(r);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);