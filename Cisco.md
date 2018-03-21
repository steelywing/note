## TODO
- Policy map

## Cut command before cursor
`Ctrl` + `X`

## Paste command
`Ctrl` + `Y`

## Privileged EXEC Mode
```
Switch> enable
Switch#

! or
Switch> en
Switch#
```

## Exit to User EXEC Mode
```
Switch> disable
Switch#
```

## Enter config mode
```
Switch# conf[igure] t[erminal]
Switch(config)# 
```

## Exit config mode
```
Switch(config)# exit
Switch# 
```

## Hint
```
Switch# sh?
shell  show
```

## Save config
```
write
```

## Reset err-disable port
```
Switch(config-if)# shutdown
Switch(config-if)# no shutdown
```

## Monitor logging in Telnet / SSH
```
Switch# terminal [no] monitor
```

## Monitor logging in Console
```
Switch(config)# [no] logging console
```

## Diagnostic
Get CPU usage
```
Switch# show processes cpu [sorted|history]
```

Get temperature, fan, power status
```
Switch# show env all
```

Get version, up time
```
Switch# show version
```

Get IP traffic info
```
Switch# show ip traffic 
```

Interface capabilities (type, POE, ...)
```
Switch# show interfaces [<interface>] capabilities
```

## CDP (Cisco Discovery Protocol)
```
Switch# show cdp neighbors [<interface>] [detail]
```

## Device name
```
Switch(config)# hostname <host name>
```

## [VLAN](https://www.cisco.com/c/en/us/support/docs/lan-switching/vlan/10023-3.html)
```
! Create VLAN
Switch(config)# vlan <VLAN ID>[-<VLAN ID>]
Switch(config-vlan)#

! If above not working
Switch# vlan database
Switch(vlan)# vlan <VLAN ID>[-<VLAN ID>]

! Remove VLAN
Switch(config)# no vlan <VLAN ID>[-<VLAN ID>]

! VLAN name
Switch(config-vlan)# name <name>

! List VLAN
Switch# show vlan

! Show trunk port information
Switch# show interfaces trunk
```

## VTP (VLAN Trunk Protocol)
```
Switch(config)# vtp mode <mode>
Switch(config)# vtp domain <name>
Switch(config)# vtp password <password>
```

## Encrypt password
```
Switch(config)# service password-encryption
```

## Display timestamp in log
```
Switch(config)# service timestamps {log|debug} datetime localtime
```

## Root guard
```
Switch(config-if)# spanning-tree guard root
```

## Enable loop guard on all port
```
Switch(config)# spanning-tree loopguard default
```

## Port fast
```
Switch(config-if)# spanning-tree portfast [disable]
```

## Enable port fast on all access port
```
Switch(config)# spanning-tree portfast default
```

## BPDU guard
`err-disable` port if detect BPDU
```
Switch(config-if)# spanning-tree bpduguard {enable|disable}
```

## Enable BPDU guard on all port fast port
```
Switch(config)# spanning-tree portfast bpduguard default
```

## BPDU filter
Ignore BPDU
```
Switch(config-if)# spanning-tree bpdufilter {enable|disable}
```

## DHCP

[Reference](https://www.cisco.com/en/US/docs/ios/12_4t/ip_addr/configuration/guide/htdhcpsv.html)

[Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_dhcp/configuration/15-sy/dhcp-15-sy-book/dhcp-prt-bsd-aa.html#GUID-D3427E9D-D0F3-4FFE-889C-8091A84006C6)

```
Switch(config)# ip dhcp excluded-address <First IP> <Last IP>
Switch(config)# ip dhcp pool <pool name>
Switch(dhcp-config)# network <network IP> { /<prefix length> | <network mask> }
Switch(dhcp-config)# dns-server <DNS IP> [<DNS IP> ...]
Switch(dhcp-config)# default-router <gateway IP>
```

Preassigning IP Addresses (Method 1)

[Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_dhcp/configuration/15-sy/dhcp-15-sy-book/dhcp-prt-bsd-aa.html#GUID-D3427E9D-D0F3-4FFE-889C-8091A84006C6)

```
Switch(dhcp-config)# address <IP> { client-id <ID> | hardware-address <MAC address> }
```

Preassigning IP Addresses (Method 2)
```
Switch(config)# ip dhcp pool <pool name>
Switch(dhcp-config)# host <IP> [ /<prefix length> | <network mask> ]
Switch(dhcp-config)# client-identifier <ID>
Switch(dhcp-config)# hardware-address <MAC address>
```

Debug
```
Switch# show ip dhcp binding
Switch# show ip dhcp conflict 
```

DHCP snooping (Drop DHCP on untrust interface)

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_52_se/configuration/guide/3750scg/swdhcp82.html)

```
Switch(config)# ip dhcp snooping
Switch(config)# ip dhcp snooping vlan <VLAN list>
Switch(config)# no ip dhcp snooping information option
```

Trust DHCP from this port (For DHCP snooping)
```
Switch(config-if)# ip dhcp snooping trust
```

## Gateway
This is for `no ip routing`, if `ip routing`, use default route `ip route 0.0.0.0 0.0.0.0 <gateway>`
```
Switch(config)# ip default-gateway <gateway>
```

## Change switch to routing mode
```
Switch(config)# ip routing
```

## DNS
```
Switch(config)# ip name-server <DNS IP> <DNS IP>...
```

## NTP
```
Switch(config)# ntp server <NTP server IP>
```

## Timezone
```
Switch(config)# clock timezone <timezone name> <timezone offset>
```

## Enable SNMP
```
Switch(config)# snmp-server community <community string> ro
```

## Create user
```
Switch(config)# username <username> privilege 15 password <password>
```

## Set enable password
Unnecessary for `privilege 15` user
```
Switch(config)# enable secret <password>
```

## Config console
```
Switch(config)# line console 0
Switch(config-line)# 
```

## Config Telnet / SSH
```
Switch(config)# line vty 0 15
Switch(config-line)# 
```

## Login password
Unnecessary if using `login local`
```
Switch(config-line)# password <password>
```

## Use password to authenticate
```
Switch(config-line)# login
```

## Use user to authenticate
```
Switch(config-line)# login local
```

## Timeout
```
Switch(config-line)# exec-timeout 30
```

## Enable Telnet or SSH
```
Switch(config-line)# transport input {all|telnet|ssh|none}
```

## Ctrl-C to break
```
Switch(config-line)# escape-character 3
```

## Config VLAN interface
```
Switch(config)# interface vlan <VLAN ID>
Switch(config-if)# ip address <IP> <netmask>
Switch(config-if)# no shutdown
```

## Port channel (ether channel)
Create port channel interface
```
Switch(config)# interface port-channel <port channel number>
```

Assign interface to port channel group (LACP)
```
Switch(config-if)# channel-group <port channel number> mode active
```

Show port channel summary
```
Switch# show etherchannel summary
```

## Interface
Show interface status
```
Switch# show interfaces status
```

Test cable TDR (Time-Domain Reflectometer)
```
Switch# test cable-diagnostics tdr interface <interface>
Switch# show cable-diagnostics tdr interface <interface>
```

Show transceiver (fiber gain/loss)
```
Switch# show interfaces transceiver
```

Config interface
```
Switch(config)# interface <interface>/<port number>
Switch(config-if)# 
```

Config a range of interface
```
Switch(config)# interface range <interface>/<port number> - <port number>
```

Description
```
Switch(config-if)# description <description>
```

Layer 3 mode
```
Switch(config-if)# no switchport
```

Layer 2 mode
```
Switch(config-if)# switchport
```

Set trunk encapsulation to 802.1Q
```
Switch(config-if)# switchport trunk encapsulation dot1q
```

Trunk mode
```
Switch(config-if)# switchport mode trunk
```

Access mode
```
Switch(config-if)# switchport mode access
```

Allow specify VLAN on trunk (default allow all)
```
Switch(config-if)# switchport trunk allowed vlan <VLAN ID list>
```

Set VLAN
```
Switch(config-if)# switchport access vlan <VLAN ID>
```

Enable protected mode (traffic will not send to other protected port)
```
Switch(config-if)# switchport protected
```

Bandwidth limit
[Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/91862-cat3750-qos-config.html)
```
Switch(config-if)# srr-queue bandwidth limit <percentage>
```

## Disable domain name lookup in global mode
```
Switch(config)# no ip domain-lookup
```

## Archive
`$h` = hostname, `$t` = time
```
! Archive FTP login
Switch(config)# ip ftp username <username>
Switch(config)# ip ftp password <password>

Switch(config)# archive
Switch(config-archive)# path ftp://<IP>/$h/$h-$t
Switch(config-archive)# path scp://<username>:<password>@<ip>/$h/$h-$t
```

## Banner
`$(hostname)` = hostname
```
Switch(config)# banner login ^
<banner>
^
Switch(config)# 
```

## Enable AAA authentication / authorization
```
Switch(config)# aaa new-model
Switch(config)# aaa authentication login default local
Switch(config)# aaa authorization exec default local
```

## Device domain
```
Switch(config)# ip domain-name <domain>
```

## Generate RSA key (for SSH)
```
Switch(config)# crypto key generate rsa
```

## Config SSH public key
```
Switch(config)# ip ssh pubkey-chain
Switch(config)# username <username>
Switch(config)# key-string
<public key>
Switch(config)# 
```

## Show TCAM (ACL, MAC, QOS, Route) utilization

[Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3850-series-switches/118957-troubleshoot-sec-acl-tcam-cat3850.html)

If TCAM ACL full, switch will randomly drop traffic.
```
Switch# show platform tcam utilization asic all
```

## SDM - Switch Database Management (TCAM, ACL, Routing)

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swsdm.html)

Configure system resources 

```
! If switch stacked, check SDM is match
Switch# show switch

! Show current SDM prefer
Switch# show sdm prefer

! Config SDM prefer
Switch(config)# sdm prefer ?
```

## Disable (non Cisco) GBIC module checking

[Reference](https://www.cisco.com/c/en/us/support/docs/interfaces-modules/gbics/200296-Unsupported-GBIC-SFP-in-sub-module-of.html)

```
Switch(config)# no errdisable detect cause gbic-invalid
Switch(config)# service unsupported-transceiver
```

## VACL (VLAN ACL)

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/15-0SY/configuration/guide/15_0_sy_swcg/vlan_acls.html)

VACL default (no match) is `drop`
```
Switch(config)# vlan access-map <access-map name> <sequence number>
Switch(config-access-map)# action {forward|drop}
Switch(config-access-map)# match ip address <IP ACL>
Switch(config-access-map)# match mac address <MAC ACL>
Switch(config-access-map)# exit

Switch(config)# vlan filter <access-map name> vlan-list <VLAN list>
```

[Block specify MAC address](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3550-series-switches/64844-mac-acl-block-arp.html)
```
Switch(config)# mac access-list extended blacklist
    permit  host <MAC address> any
exit

Switch(config)# vlan access-map <access-map name> 10
Switch(config-access-map)# action drop
Switch(config-access-map)# match mac address blacklist
Switch(config-access-map)# exit
Switch(config)# vlan access-map <access-map name> 20
Switch(config-access-map)# action forward
Switch(config-access-map)# exit

Switch(config)# vlan filter <access-map name> vlan-list <VLAN list>
```

## IP ACL

[Reference](https://www.cisco.com/c/en/us/support/docs/security/ios-firewall/23602-confaccesslists.html)

[Sequencing Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_data_acl/configuration/xe-3s/sec-data-acl-xe-3s-book/sec-acl-seq-num.html)

ACL default (no match) is `drop`, match = `(packet_ip & ~inverse_mask) == acl_ip`
```
! <address> = {any|<IP> <inverse mask>|host <IP>}

! Standard ACL
Switch(config)# ip access-list standard {<ACL name>|<1-99>|<1300-1999>}
Switch(config-std-nacl)# [<sequence number>] {permit|deny} <source address>

! Extended ACL
Switch(config)# ip access-list extended {<ACL name>|<100-199>|<2000-2699>}
Switch(config-ext-nacl)# [<sequence number>] {permit|deny} {ip|udp|tcp} <source address> [{eq|neq|lt|gt} <source port>] <destination address> [{eq|neq|lt|gt} <destination port>]

! Resequencing access-list entries
Switch(config)# ip access-list resequence <ACL ID> <Starting Sequence Number> <Increment>
```

List ACL
```
Switch# show ip access-lists
```

## MAC ACL
ACL default (no match) is `drop`
```
Switch(config)# mac access-list extended <name>
! <MAC address> = {any|host <MAC address>|<MAC address> <MAC address mask>}
Switch(config-ext-macl)# {permit|deny} <source MAC address> <destination MAC address>
```

## [ARP inspection](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swdynarp.html)
```
! If ARP over 15 packets per second, place the port in error-disabled state
Switch(config)# ip arp inspection vlan <VLAN list>
! Auto recovery
Switch(config)# errdisable recovery cause arp-inspection
```

## OSPF
```
Switch(config)# router ospf <process ID>
Switch(config-router)# network <IP> <netmask> area <area ID>
! or
Switch(config-if)# ip ospf <process ID> area <area ID>

! List LSAs (Link State Advertisements)
Switch# show ip ospf database

! List OSPF neighbor
Switch# show ip ospf neighbor

! List OSPF routes
Switch# show ip route ospf
```

[Redistributing connected networks into OSPF](https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/18722-redist-conn.html)
```
Switch(config-router)# redistribute connected subnets
```

Redistributing static routes into OSPF
```
Switch(config-router)# redistribute static subnets
```

[Redistributing default route into OSPF](https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/47868-ospfdb9.html)
```
Switch(config-router)# default-information originate
```

## [SPAN (Switched Port Analyzer)](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-1_19_ea1/configuration/guide/3750scg/swspan.html)
Port mirror
```
! <VLAN list> = <VLAN ID> [{,|-} <VLAN ID>]...

! Monitor interface
Switch(config)# monitor session <session number> source interface <interface> [both|rx|tx]

! Monitor all ports of specify VLAN
Switch(config)# monitor session <session number> source vlan <VLAN list> [both|rx|tx]

! Mirror to specify interface
Switch(config)# monitor session <session number> destination interface <interface>

! Filter VLAN
Switch(config)# monitor session <session number> filter <VLAN list>

! Remove monitor session
Switch(config)# no monitor session <session number>
```

## Multicast

### PIM (Protocol Independent Multicast)
[Overview](https://www.cisco.com/c/en/us/td/docs/ios/solutions_docs/ip_multicast/White_papers/mcst_ovr.html#wp1009074)

[Quick Reference](https://www.cisco.com/c/en/us/support/docs/ip/ip-multicast/9356-48.html)

[Reference](https://www.cisco.com/c/en/us/td/docs/ios/solutions_docs/ip_multicast/White_papers/rps.html)

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_52_se/configuration/guide/3750scg/swmcast.html)
```
Switch(config)# ip multicast-routing [distributed]
Switch(config)# ip pim rp-address <IP> [<ACL ID>]
Switch(config-if)# ip pim ( sparse-mode | dense-mode | sparse-dense-mode )
```

### IGMP
[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960x/software/15-0_2_EX/igmp_snoop/configuration_guide/b_mc_152ex_2960-x_cg/b_mc_152ex_2960-x_cg_chapter_010.html)
```
! Default enabled
Switch(config)# ip igmp snooping [vlan <VLAN ID>]
```

### Debug
[Reference](https://www.cisco.com/c/en/us/support/docs/ip/ip-multicast/16450-mcastguide0.html)
```
Switch# show ip igmp groups [detail]
Switch# show ip igmp membership
Switch# show ip mroute
```

## Broadcast
[Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipapp/command/iap-cr-book/iap-i1.html)
```
! Allow broadcast
Switch(config-if)# ip directed-broadcast [<ACL ID>]

! Forward broadcast packet to other IP
Switch(config-if)# ip helper-address <IP>

! Allow forward broadcast (Default is all)
Switch(config)# ip forward-protocol udp <Port Number>
```
