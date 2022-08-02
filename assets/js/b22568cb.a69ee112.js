"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,h=d["".concat(c,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="IOS",l={unversionedId:"Network/Cisco IOS/IOS",id:"Network/Cisco IOS/IOS",title:"IOS",description:"Cisco IOS",source:"@site/docs/Network/Cisco IOS/IOS.md",sourceDirName:"Network/Cisco IOS",slug:"/Network/Cisco IOS/IOS",permalink:"/note/Network/Cisco IOS/IOS",draft:!1,editUrl:"https://github.com/steelywing/note/edit/master/docs/Network/Cisco IOS/IOS.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"Date / Time",permalink:"/note/Network/Cisco IOS/DateTime"},next:{title:"Log",permalink:"/note/Network/Cisco IOS/Log"}},c={},p=[{value:"Basic",id:"basic",level:2},{value:"EXEC / Config Mode",id:"exec--config-mode",level:2},{value:"Web UI",id:"web-ui",level:2},{value:"Show configuration",id:"show-configuration",level:2},{value:"Save / Reset",id:"save--reset",level:2},{value:"Diagnostic",id:"diagnostic",level:2},{value:"CDP (Cisco Discovery Protocol)",id:"cdp-cisco-discovery-protocol",level:3},{value:"LLDP (Link Layer Discovery Protocol)",id:"lldp-link-layer-discovery-protocol",level:3},{value:"SPAN (Switched Port Analyzer) / Port mirror",id:"span-switched-port-analyzer--port-mirror",level:3},{value:"VLAN",id:"vlan",level:2},{value:"VTP (VLAN Trunking Protocol)",id:"vtp-vlan-trunking-protocol",level:3},{value:"Routing",id:"routing",level:2},{value:"Gateway",id:"gateway",level:3},{value:"Change to routing mode",id:"change-to-routing-mode",level:3},{value:"Policy-based routing",id:"policy-based-routing",level:3},{value:"OSPF",id:"ospf",level:3},{value:"SNMP",id:"snmp",level:2},{value:"Port channel (Ether channel)",id:"port-channel-ether-channel",level:2},{value:"Interface",id:"interface",level:2},{value:"Interface diagnostic",id:"interface-diagnostic",level:3},{value:"Config interface",id:"config-interface",level:3},{value:"Interface description",id:"interface-description",level:4},{value:"Auto MDI-X (Medium-Dependent Interface Crossover)",id:"auto-mdi-x-medium-dependent-interface-crossover",level:4},{value:"Layer 3 mode",id:"layer-3-mode",level:4},{value:"Layer 2 mode",id:"layer-2-mode",level:4},{value:"Set trunk encapsulation to 802.1Q",id:"set-trunk-encapsulation-to-8021q",level:4},{value:"Interface access / trunk mode",id:"interface-access--trunk-mode",level:4},{value:"Trunk native VLAN",id:"trunk-native-vlan",level:4},{value:"Allow specified VLAN on trunk",id:"allow-specified-vlan-on-trunk",level:4},{value:"Specify access port VLAN",id:"specify-access-port-vlan",level:4},{value:"Protected mode",id:"protected-mode",level:4},{value:"Bandwidth limit",id:"bandwidth-limit",level:3},{value:"Recovery <code>err-disable</code> port",id:"recovery-err-disable-port",level:3},{value:"PoE",id:"poe",level:3},{value:"Disable (non Cisco) GBIC module checking",id:"disable-non-cisco-gbic-module-checking",level:3},{value:"Archive configuration",id:"archive-configuration",level:2},{value:"Archive to FTP",id:"archive-to-ftp",level:3},{value:"Archive to SCP",id:"archive-to-scp",level:3},{value:"Banner",id:"banner",level:2},{value:"Show TCAM (ACL, MAC, QOS, Route) utilization",id:"show-tcam-acl-mac-qos-route-utilization",level:2},{value:"SDM - Switch Database Management (TCAM, ACL, Routing)",id:"sdm---switch-database-management-tcam-acl-routing",level:2},{value:"ARP",id:"arp",level:2},{value:"Static ARP",id:"static-arp",level:3},{value:"ARP inspection",id:"arp-inspection",level:3},{value:"Q-in-Q / IEEE 802.1Q tunnel",id:"q-in-q--ieee-8021q-tunnel",level:2},{value:"Show IEEE 802.1Q tunnel port",id:"show-ieee-8021q-tunnel-port",level:3},{value:"QoS",id:"qos",level:2},{value:"Decrypt / Crack password",id:"decrypt--crack-password",level:2},{value:"Type 5",id:"type-5",level:3},{value:"Type 7",id:"type-7",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios"},"IOS"),(0,a.kt)("p",null,"Cisco IOS"),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)("p",null,"Cut command before cursor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"X")),(0,a.kt)("p",null,"Paste command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"Y")),(0,a.kt)("p",null,"Hint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# sh?\nshell  show\n")),(0,a.kt)("h2",{id:"exec--config-mode"},"EXEC / Config Mode"),(0,a.kt)("p",null,"Privileged EXEC Mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch> en[able]\nSwitch#\n")),(0,a.kt)("p",null,"Exit to User EXEC Mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# disable\nSwitch>\n")),(0,a.kt)("p",null,"Enter config mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# conf[igure] t[erminal]\nSwitch(config)# \n")),(0,a.kt)("p",null,"Exit config mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# exit\nSwitch# \n")),(0,a.kt)("h2",{id:"web-ui"},"Web UI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# [no] ip http server\nSwitch(config)# ip http authentication { aaa | enable | local }\n")),(0,a.kt)("h2",{id:"show-configuration"},"Show configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# s[how] config[uration]\n")),(0,a.kt)("h2",{id:"save--reset"},"Save / Reset"),(0,a.kt)("p",null,"Save config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# write\n")),(0,a.kt)("p",null,"Reset to Factory Default"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/switches/catalyst-2900-xl-series-switches/24328-156.html"},"Reference"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Erase startup config")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# write erase\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete VLAN config")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# delete flash:/vlan.dat\n")),(0,a.kt)("h2",{id:"diagnostic"},"Diagnostic"),(0,a.kt)("p",null,"Get CPU usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show processes cpu [ sorted | history ]\n")),(0,a.kt)("p",null,"Get temperature, fan, power status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show env all\n")),(0,a.kt)("p",null,"Get version, up time"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show version\n")),(0,a.kt)("p",null,"Get PID, serial number"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show inventory\n")),(0,a.kt)("p",null,"Get IP traffic info"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show ip traffic \n")),(0,a.kt)("p",null,"Interface capabilities (type, POE, ...)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show interfaces [<interface>] capabilities\n")),(0,a.kt)("p",null,"Tech Support"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/routers/crs/software/crs_r4-2/adv_system/command/reference/b_advsys_cr42crs/b_advsys_cr42crs_chapter_0100.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show tech-support\n")),(0,a.kt)("h3",{id:"cdp-cisco-discovery-protocol"},"CDP (Cisco Discovery Protocol)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show cdp neighbors [<interface>] [detail]\n")),(0,a.kt)("h3",{id:"lldp-link-layer-discovery-protocol"},"LLDP (Link Layer Discovery Protocol)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4500/12-2/46sg/configuration/guide/Wrapper-46SG/swlldp.html"},"Reference"))),(0,a.kt)("p",null,"Enable / Disable LLDP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# [no] lldp run\n")),(0,a.kt)("p",null,"Enable / Disable LLDP transmit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# [no] lldp transmit\n")),(0,a.kt)("p",null,"Enable / Disable LLDP receive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# [no] lldp receive\n")),(0,a.kt)("p",null,"Show LLDP neighbor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show lldp neighbors\n")),(0,a.kt)("h3",{id:"span-switched-port-analyzer--port-mirror"},"SPAN (Switched Port Analyzer) / Port mirror"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-1_19_ea1/configuration/guide/3750scg/swspan.html"},"Reference"))),(0,a.kt)("p",null,"Monitor interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# monitor session <session number> \n    source interface <interface> \n    [ both | rx | tx ]\n")),(0,a.kt)("p",null,"Monitor all ports of specify VLAN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# monitor session <session number> \n    source vlan <VLAN list> \n    [ both | rx | tx ]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mirror to specify interface")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# monitor session <session number> \n    destination interface <interface>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monitor specific VLAN")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"! <VLAN list> = <VLAN ID>[{,|-}<VLAN ID>...]\nSwitch(config)# monitor session <session number> \n    filter <VLAN list>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove monitor session")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# no monitor session <session number>\n")),(0,a.kt)("h2",{id:"vlan"},"VLAN"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/lan-switching/vlan/10023-3.html"},"Reference"))),(0,a.kt)("p",null,"Create VLAN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# vlan <VLAN ID>[-<VLAN ID>]\nSwitch(config-vlan)#\n\n! Older IOS version\nSwitch# vlan database\nSwitch(vlan)# vlan <VLAN ID>[-<VLAN ID>]\n")),(0,a.kt)("p",null,"Remove VLAN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# no vlan <VLAN ID>[-<VLAN ID>]\n")),(0,a.kt)("p",null,"VLAN name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-vlan)# name <name>\n")),(0,a.kt)("p",null,"List VLAN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show vlan\n")),(0,a.kt)("p",null,"Show trunk port information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show interfaces trunk\n")),(0,a.kt)("h3",{id:"vtp-vlan-trunking-protocol"},"VTP (VLAN Trunking Protocol)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_52_se/configuration/guide/3560scg/swvtp.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# vtp mode { off | transparent | server | client }\nSwitch(config)# vtp domain <name>\nSwitch(config)# vtp password <password>\n")),(0,a.kt)("h2",{id:"routing"},"Routing"),(0,a.kt)("h3",{id:"gateway"},"Gateway"),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"no ip routing")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# ip default-gateway <gateway>\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"ip routing")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# ip route 0.0.0.0 0.0.0.0 <gateway>\n")),(0,a.kt)("h3",{id:"change-to-routing-mode"},"Change to routing mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# ip routing\n")),(0,a.kt)("h3",{id:"policy-based-routing"},"Policy-based routing"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/ios/12_2/qos/configuration/guide/fqos_c/qcfpbr.html"},"Reference"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"ACL"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"permit")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"route-map")," is applied, the next ",(0,a.kt)("inlineCode",{parentName:"td"},"route-map")," clause is not evaluated")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"deny")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"route-map")," is not applied, the next ",(0,a.kt)("inlineCode",{parentName:"td"},"route-map")," clause is evaluated")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"route-map")),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"permit")),(0,a.kt)("td",{parentName:"tr",align:null},"route is redistributed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"deny")),(0,a.kt)("td",{parentName:"tr",align:null},"route is not redistributed")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"route-map")," default is permit")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# route-map <route-map name> [permit|deny] [<sequence number>]\n\n! Default (no configured match) match all\nSwitch(config-route-map)# match ip address <ACL>\nSwitch(config-route-map)# set ip next-hop <IP>\n\nSwitch(config-if)# ip policy route-map <route-map name>\n")),(0,a.kt)("h3",{id:"ospf"},"OSPF"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# router ospf <process ID>\nSwitch(config-router)# network <IP> <netmask> area <area ID>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# ip ospf <process ID> area <area ID>\n")),(0,a.kt)("p",null,"List LSAs (Link State Advertisements)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show ip ospf database\n")),(0,a.kt)("p",null,"List OSPF neighbor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show ip ospf neighbor\n")),(0,a.kt)("p",null,"List OSPF routes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show ip route ospf\n")),(0,a.kt)("p",null,"Redistributing connected networks into OSPF"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/18722-redist-conn.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-router)# redistribute connected subnets\n")),(0,a.kt)("p",null,"Redistributing static routes into OSPF"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-router)# redistribute static subnets\n")),(0,a.kt)("p",null,"Redistributing default route into OSPF"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/47868-ospfdb9.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-router)# default-information originate\n")),(0,a.kt)("h2",{id:"snmp"},"SNMP"),(0,a.kt)("p",null,"Enable SNMP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# snmp-server community <community string> ro\n")),(0,a.kt)("h2",{id:"port-channel-ether-channel"},"Port channel (Ether channel)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus5000/sw/configuration/guide/cli/CLIConfigurationGuide/EtherChannel.html"},"Reference"))),(0,a.kt)("p",null,"Enable LACP (802.3ad)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# feature lacp\n")),(0,a.kt)("p",null,"Create port channel interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# interface port-channel <port channel number>\n")),(0,a.kt)("p",null,"If change the configure of ",(0,a.kt)("inlineCode",{parentName:"p"},"port-channel")," interface, that will pass the configure to the assigned interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# interface range Gi0/1 - 2\nSwitch(config-if-range)# channel-group 1 mode active\n\nSwitch(config)# interface port-channel 1\nSwitch(config-if)# switchport mode trunk\n\nSwitch# show running-config interface port-channel 1\n!\ninterface Port-channel1\n switchport mode trunk\nend\n\nSwitch# show running-config interface Gi0/1\n!\ninterface GigabitEthernet0/1\n switchport mode trunk\nend\n\nSwitch# show running-config interface Gi0/2\n!\ninterface GigabitEthernet0/2\n switchport mode trunk\nend\n")),(0,a.kt)("p",null,"Assign interface to port channel group (LACP) (Recommend)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# channel-group <port channel number> \n    mode {active|passive}\n")),(0,a.kt)("p",null,"Assign interface to port channel group (PAgP) (Not recommend)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# channel-group <port channel number> \n    mode {auto|desirable}\n")),(0,a.kt)("p",null,"Show port channel summary"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show etherchannel summary\n")),(0,a.kt)("p",null,"Show LACP counter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show lacp counters\n")),(0,a.kt)("p",null,"Show LACP neighbor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show lacp neighbor\n")),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("h3",{id:"interface-diagnostic"},"Interface diagnostic"),(0,a.kt)("p",null,"Show interface status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show interfaces status\n")),(0,a.kt)("p",null,"Show interface queue, drop, traffic rate (usage)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show interfaces summary\n")),(0,a.kt)("p",null,"Test cable TDR (Time-Domain Reflectometer) / pair length"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# test cable-diagnostics tdr interface <interface>\nSwitch# show cable-diagnostics tdr interface <interface>\n")),(0,a.kt)("p",null,"Show transceiver (fiber gain/loss)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show interfaces transceiver\n")),(0,a.kt)("h3",{id:"config-interface"},"Config interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# interface <interface>/<port number>\nSwitch(config-if)# \n")),(0,a.kt)("p",null,"Config a range of interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# interface range <interface>/<port number> - <port number>\n")),(0,a.kt)("p",null,"Config VLAN interface"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_52_se/configuration/guide/3560scg/swvlan.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# interface vlan <VLAN ID>\nSwitch(config-if)# ip address <IP> <netmask>\nSwitch(config-if)# no shutdown\n")),(0,a.kt)("h4",{id:"interface-description"},"Interface description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# description <description>\n")),(0,a.kt)("h4",{id:"auto-mdi-x-medium-dependent-interface-crossover"},"Auto MDI-X (Medium-Dependent Interface Crossover)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960x/software/15-0_2_EX/int_hw_components/configuration_guide/b_int_152ex_2960-x_cg/b_int_152ex_2960-x_cg_chapter_011.html"},"Reference")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# [no] mdix auto\n"))),(0,a.kt)("h4",{id:"layer-3-mode"},"Layer 3 mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# no switchport\n")),(0,a.kt)("h4",{id:"layer-2-mode"},"Layer 2 mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# switchport\n")),(0,a.kt)("h4",{id:"set-trunk-encapsulation-to-8021q"},"Set trunk encapsulation to 802.1Q"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# switchport trunk encapsulation dot1q\n")),(0,a.kt)("h4",{id:"interface-access--trunk-mode"},"Interface access / trunk mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# switchport mode { access | trunk }\n")),(0,a.kt)("h4",{id:"trunk-native-vlan"},"Trunk native VLAN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# switchport trunk native vlan <VLAN ID>\n")),(0,a.kt)("h4",{id:"allow-specified-vlan-on-trunk"},"Allow specified VLAN on trunk"),(0,a.kt)("p",null,"Default allow all"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# switchport trunk allowed vlan <VLAN ID list>\n")),(0,a.kt)("h4",{id:"specify-access-port-vlan"},"Specify access port VLAN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# switchport access vlan <VLAN ID>\n")),(0,a.kt)("h4",{id:"protected-mode"},"Protected mode"),(0,a.kt)("p",null,"Do not forward traffic to other protected port"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# switchport protected\n")),(0,a.kt)("h3",{id:"bandwidth-limit"},"Bandwidth limit"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/91862-cat3750-qos-config.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# srr-queue bandwidth limit <percentage>\n")),(0,a.kt)("h3",{id:"recovery-err-disable-port"},"Recovery ",(0,a.kt)("inlineCode",{parentName:"h3"},"err-disable")," port"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# shutdown\nSwitch(config-if)# no shutdown\n")),(0,a.kt)("h3",{id:"poe"},"PoE"),(0,a.kt)("p",null,"Power over Ethernet"),(0,a.kt)("p",null,"Default (All) max consumption"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# power inline consumption default <milli-watts>\n")),(0,a.kt)("p",null,"On specify interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# power inline consumption <milli-watts>\n")),(0,a.kt)("h3",{id:"disable-non-cisco-gbic-module-checking"},"Disable (non Cisco) GBIC module checking"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/interfaces-modules/gbics/200296-Unsupported-GBIC-SFP-in-sub-module-of.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# no errdisable detect cause gbic-invalid\nSwitch(config)# service unsupported-transceiver\n")),(0,a.kt)("h2",{id:"archive-configuration"},"Archive configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$h")),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$t")),(0,a.kt)("td",{parentName:"tr",align:null},"Time")))),(0,a.kt)("h3",{id:"archive-to-ftp"},"Archive to FTP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# ip ftp username <username>\nSwitch(config)# ip ftp password <password>\n\nSwitch(config)# archive\nSwitch(config-archive)# path ftp://<IP>/<path>\n")),(0,a.kt)("h3",{id:"archive-to-scp"},"Archive to SCP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# archive\nSwitch(config-archive)# path scp://<username>:<password>@<IP>/<path>\n")),(0,a.kt)("h2",{id:"banner"},"Banner"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$(hostname)")),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# banner login ^\n<banner>\n^\nSwitch(config)# \n")),(0,a.kt)("h2",{id:"show-tcam-acl-mac-qos-route-utilization"},"Show TCAM (ACL, MAC, QOS, Route) utilization"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3850-series-switches/118957-troubleshoot-sec-acl-tcam-cat3850.html"},"Reference"))),(0,a.kt)("p",null,"If TCAM ACL full, switch will randomly drop traffic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show platform tcam utilization asic all\n")),(0,a.kt)("h2",{id:"sdm---switch-database-management-tcam-acl-routing"},"SDM - Switch Database Management (TCAM, ACL, Routing)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swsdm.html"},"Reference"))),(0,a.kt)("p",null,"Configure system resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If switch stacked, check SDM is match")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show switch\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Show current SDM prefer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show sdm prefer\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Config SDM prefer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# sdm prefer ?\n")),(0,a.kt)("h2",{id:"arp"},"ARP"),(0,a.kt)("h3",{id:"static-arp"},"Static ARP"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_arp/configuration/15-mt/arp-15-mt-book/arp-config-arp.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# arp <IP address> <MAC address> arpa\n")),(0,a.kt)("h3",{id:"arp-inspection"},"ARP inspection"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swdynarp.html"},"Reference"))),(0,a.kt)("p",null,"If ARP over 15 packets per second, place the port in ",(0,a.kt)("inlineCode",{parentName:"p"},"error-disabled")," state"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# ip arp inspection vlan <VLAN list>\n")),(0,a.kt)("p",null,"Auto recovery"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# errdisable recovery cause arp-inspection\n")),(0,a.kt)("h2",{id:"q-in-q--ieee-8021q-tunnel"},"Q-in-Q / IEEE 802.1Q tunnel"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swtunnel.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# switchport access vlan <VLAN ID>\nSwitch(config-if)# switchport mode dot1q-tunnel\nSwitch(config)# vlan dot1q tag native\n")),(0,a.kt)("h3",{id:"show-ieee-8021q-tunnel-port"},"Show IEEE 802.1Q tunnel port"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch# show dot1q-tunnel\n")),(0,a.kt)("h2",{id:"qos"},"QoS"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3550-series-switches/24800-153.html"},"Reference"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/91862-cat3750-qos-config.html"},"Reference"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://community.cisco.com/t5/telepresence-and-video/help-understanding-qos-threshold/td-p/1374101"},"QoS Threshold")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://community.cisco.com/t5/networking-documents/egress-qos/ta-p/3122802"},"Egress QoS")),(0,a.kt)("p",null,"Enable QoS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# mls qos\n")),(0,a.kt)("p",null,"Class map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# class-map match-all <class name>\nSwitch(config-cmap)# match access-group <ACL>\n")),(0,a.kt)("p",null,"Policy map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config)# policy-map <policy name>\nSwitch(config-pmap)# class { <class name> | class-default }\n\n! Min Burst = BPS / 8,000\nSwitch(config-pmap-c)# police\n    <BPS> \n    <burst normal> \n    <burst max> \n    exceed-action drop\n")),(0,a.kt)("p",null,"Apply policy map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Switch(config-if)# service-policy { input | output } <policy name>\n")),(0,a.kt)("h2",{id:"decrypt--crack-password"},"Decrypt / Crack password"),(0,a.kt)("h3",{id:"type-5"},"Type 5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://passlib.readthedocs.io/en/stable/lib/passlib.hash.html"},"Python module")),(0,a.kt)("h3",{id:"type-7"},"Type 7"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://insecure.org/sploits/cisco.passwords.html"},"Reference"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.ifm.net.nz/cookbooks/passwordcracker.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function decryptCiscoType7(encrypted) {\n    var xlat = \"dsfd;kfoA,.iyewrkldJKDHSUBsgvca69834ncxv9873254k;fg87\";\n    var password = '';\n    var seed;\n\n    if (encrypted.length & 1) {\n        return null;\n    }\n\n    seed = parseInt(encrypted.slice(0, 2), 10);\n\n    if (isNaN(seed) || seed > 15) {\n        return null;\n    }\n\n    for (var i = 2; i < encrypted.length; i += 2) {\n        var byte = parseInt(encrypted.slice(i, i + 2), 16);\n        if (isNaN(byte)) {\n            return null;\n        }\n        password += String.fromCharCode(byte ^ xlat.charCodeAt(seed));\n        seed = (seed + 1) % xlat.length;\n    }\n\n    return password;\n}\n")))}u.isMDXComponent=!0}}]);