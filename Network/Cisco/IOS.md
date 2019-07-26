# Table of Contents

- [Table of Contents](#Table-of-Contents)
- [Basic](#Basic)
- [EXEC / Config Mode](#EXEC--Config-Mode)
- [Save / Reset](#Save--Reset)
- [Log](#Log)
- [Diagnostic](#Diagnostic)
  - [CDP (Cisco Discovery Protocol)](#CDP-Cisco-Discovery-Protocol)
  - [LLDP](#LLDP)
  - [SPAN (Switched Port Analyzer)](#SPAN-Switched-Port-Analyzer)
- [VLAN](#VLAN)
  - [VTP (VLAN Trunking Protocol)](#VTP-VLAN-Trunking-Protocol)
  - [Root guard](#Root-guard)
  - [Loop guard](#Loop-guard)
  - [Port fast](#Port-fast)
  - [BPDU guard](#BPDU-guard)
  - [BPDU filter](#BPDU-filter)
- [DHCP](#DHCP)
  - [Preassigning IP Addresses](#Preassigning-IP-Addresses)
  - [DHCP snooping](#DHCP-snooping)
- [Routing](#Routing)
  - [Gateway](#Gateway)
  - [Change to routing mode](#Change-to-routing-mode)
  - [Policy-based routing](#Policy-based-routing)
  - [OSPF](#OSPF)
- [DNS](#DNS)
- [Date / Time](#Date--Time)
  - [NTP](#NTP)
- [SNMP](#SNMP)
- [Authenticate](#Authenticate)
- [Port channel (Ether channel)](#Port-channel-Ether-channel)
- [Interface](#Interface)
  - [Interface diagnostic](#Interface-diagnostic)
  - [Config interface](#Config-interface)
    - [Config a range of interface](#Config-a-range-of-interface)
    - [Config VLAN interface](#Config-VLAN-interface)
    - [Interface description](#Interface-description)
    - [Auto MDI-X (Medium-Dependent Interface Crossover)](#Auto-MDI-X-Medium-Dependent-Interface-Crossover)
    - [Layer 3 mode](#Layer-3-mode)
    - [Layer 2 mode](#Layer-2-mode)
    - [Set trunk encapsulation to 802.1Q](#Set-trunk-encapsulation-to-8021Q)
    - [Interface access / trunk mode](#Interface-access--trunk-mode)
    - [Allow specified VLAN on trunk](#Allow-specified-VLAN-on-trunk)
    - [Specify access port VLAN](#Specify-access-port-VLAN)
    - [Protected mode](#Protected-mode)
  - [Bandwidth limit](#Bandwidth-limit)
  - [Recovery `err-disable` port](#Recovery-err-disable-port)
  - [Disable (non Cisco) GBIC module checking](#Disable-non-Cisco-GBIC-module-checking)
- [Archive configuration](#Archive-configuration)
  - [Archive to FTP](#Archive-to-FTP)
  - [Archive to SCP](#Archive-to-SCP)
- [Banner](#Banner)
- [Show TCAM (ACL, MAC, QOS, Route) utilization](#Show-TCAM-ACL-MAC-QOS-Route-utilization)
- [SDM - Switch Database Management (TCAM, ACL, Routing)](#SDM---Switch-Database-Management-TCAM-ACL-Routing)
- [ACL](#ACL)
  - [VACL (VLAN ACL)](#VACL-VLAN-ACL)
  - [IP ACL](#IP-ACL)
  - [MAC ACL](#MAC-ACL)
- [ARP](#ARP)
  - [Static ARP](#Static-ARP)
  - [ARP inspection](#ARP-inspection)
- [Q-in-Q / IEEE 802.1Q tunnel](#Q-in-Q--IEEE-8021Q-tunnel)
  - [Show IEEE 802.1Q tunnel port](#Show-IEEE-8021Q-tunnel-port)
- [QoS](#QoS)
- [Multicast](#Multicast)
  - [PIM (Protocol Independent Multicast)](#PIM-Protocol-Independent-Multicast)
  - [IP Querier](#IP-Querier)
  - [IGMP](#IGMP)
  - [Multicast Debug](#Multicast-Debug)
- [Broadcast](#Broadcast)
  - [Allow broadcast](#Allow-broadcast)
  - [Forward broadcast packet to other IP](#Forward-broadcast-packet-to-other-IP)
  - [Allow specified UDP port forward broadcast](#Allow-specified-UDP-port-forward-broadcast)

# Basic

Cut command before cursor

`Ctrl` + `X`

Paste command

`Ctrl` + `Y`

Hint

```
Switch# sh?
shell  show
```

# EXEC / Config Mode

Privileged EXEC Mode

```
Switch> en[able]
Switch#
```

Exit to User EXEC Mode

```
Switch> disable
Switch#
```

Enter config mode

```
Switch# conf[igure] t[erminal]
Switch(config)# 
```

Exit config mode

```
Switch(config)# exit
Switch# 
```

# Save / Reset

Save config

```
write
```

Reset to Factory Default

[Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-2900-xl-series-switches/24328-156.html)

Erase startup config
```
Switch# write erase
```

Delete VLAN config
```
Switch# delete flash:/vlan.dat
```

# Log

Monitor log in Telnet / SSH

```
Switch# terminal [no] monitor
```

Monitor log in Console

```
Switch(config)# [no] logging console
```

Display timestamp in log / debug
```
Switch(config)# service timestamps { log | debug } datetime localtime
```

Log to syslog server

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_55_se/configuration/guide/scg_2960/swlog.html)

```
Switch(config)# logging <ip>
```

Limit messages logged to the syslog server

```
Switch(config)# logging trap <level>
```

Send log
```
Switch# send log <message>
```

# Diagnostic

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

Tech Support

[Reference](https://www.cisco.com/c/en/us/td/docs/routers/crs/software/crs_r4-2/adv_system/command/reference/b_advsys_cr42crs/b_advsys_cr42crs_chapter_0100.html)

```
Switch# show tech-support
```

## CDP (Cisco Discovery Protocol)

```
Switch# show cdp neighbors [<interface>] [detail]
```

## LLDP

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4500/12-2/46sg/configuration/guide/Wrapper-46SG/swlldp.html)


Enable / Disable LLDP
```
Switch(config)# [no] lldp run
```

Enable / Disable LLDP transmit
```
Switch(config)# [no] lldp transmit
```

Enable / Disable LLDP receive
```
Switch(config)# [no] lldp receive
```

Show LLDP neighbor
```
Switch# show lldp neighbors
```

## SPAN (Switched Port Analyzer)

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-1_19_ea1/configuration/guide/3750scg/swspan.html)

Port mirror
```
! <VLAN list> = <VLAN ID> [{,|-} <VLAN ID>]...

! Monitor interface
Switch(config)# monitor session <session number> source interface <interface> [ both | rx | tx ]

! Monitor all ports of specify VLAN
Switch(config)# monitor session <session number> source vlan <VLAN list> [ both | rx | tx ]

! Mirror to specify interface
Switch(config)# monitor session <session number> destination interface <interface>

! Filter VLAN
Switch(config)# monitor session <session number> filter <VLAN list>

! Remove monitor session
Switch(config)# no monitor session <session number>
```

# VLAN

[Reference](https://www.cisco.com/c/en/us/support/docs/lan-switching/vlan/10023-3.html)


Create VLAN

```
Switch(config)# vlan <VLAN ID>[-<VLAN ID>]
Switch(config-vlan)#

! Older IOS version
Switch# vlan database
Switch(vlan)# vlan <VLAN ID>[-<VLAN ID>]
```

Remove VLAN
```
Switch(config)# no vlan <VLAN ID>[-<VLAN ID>]
```

VLAN name
```
Switch(config-vlan)# name <name>
```

List VLAN
```
Switch# show vlan
```

Show trunk port information
```
Switch# show interfaces trunk
```

## VTP (VLAN Trunking Protocol)

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_52_se/configuration/guide/3560scg/swvtp.html)

```
Switch(config)# vtp mode { off | transparent | server | client }
Switch(config)# vtp domain <name>
Switch(config)# vtp password <password>
```

## Root guard

If a root guard enabled port receives superior STP BPDU, root guard moves this port to a root-inconsistent (listening) state.

```
Switch(config-if)# spanning-tree guard root
```

## Loop guard

[Reference](https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10596-84.html)

If a non-designated port no longer receive STP BPDU, the port transitions into loop-inconsistent (blocking) state.

```
Switch(config-if)# spanning-tree guard loop
```

Enable loop guard on all port

```
Switch(config)# spanning-tree loopguard default
```

## Port fast

```
Switch(config-if)# spanning-tree portfast [disable]
```

Enable port fast on all access port

```
Switch(config)# spanning-tree portfast default
```

## BPDU guard

If BPDU is detected on the port, the port will be `err-disable`.

```
Switch(config-if)# spanning-tree bpduguard { enable | disable }
```

Enable BPDU guard on all port fast port

```
Switch(config)# spanning-tree portfast bpduguard default
```

## BPDU filter

Ignore BPDU

```
Switch(config-if)# spanning-tree bpdufilter { enable | disable }
```

# DHCP

[Reference](https://www.cisco.com/en/US/docs/ios/12_4t/ip_addr/configuration/guide/htdhcpsv.html)
/ [Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_dhcp/configuration/15-sy/dhcp-15-sy-book/dhcp-prt-bsd-aa.html#GUID-D3427E9D-D0F3-4FFE-889C-8091A84006C6)

```
Switch(config)# ip dhcp excluded-address <first IP> <last IP>
Switch(config)# ip dhcp pool <pool name>
Switch(dhcp-config)# network <network IP> { /<prefix length> | <network mask> }
Switch(dhcp-config)# dns-server <DNS IP> [<DNS IP> ...]
Switch(dhcp-config)# default-router <gateway IP>
```

## Preassigning IP Addresses

[Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_dhcp/configuration/15-sy/dhcp-15-sy-book/dhcp-prt-bsd-aa.html#GUID-D3427E9D-D0F3-4FFE-889C-8091A84006C6)

Method 1

```
Switch(dhcp-config)# address <IP> { client-id <ID> | hardware-address <MAC address> }
```

Method 2

```
Switch(config)# ip dhcp pool <pool name>
Switch(dhcp-config)# host <IP> [ /<prefix length> | <network mask> ]
Switch(dhcp-config)# client-identifier <ID>
Switch(dhcp-config)# hardware-address <MAC address>
```

Verify

```
Switch# show ip dhcp binding
Switch# show ip dhcp conflict 
```

## DHCP snooping

Drop DHCP on untrust interface

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_52_se/configuration/guide/3750scg/swdhcp82.html)

```
Switch(config)# ip dhcp snooping
Switch(config)# ip dhcp snooping vlan <VLAN list>
Switch(config)# no ip dhcp snooping information option
```

Trust DHCP from this port

```
Switch(config-if)# ip dhcp snooping trust
```

# Routing

## Gateway

For `no ip routing`

```
Switch(config)# ip default-gateway <gateway>
```

For `ip routing`

```
Switch(config)# ip route 0.0.0.0 0.0.0.0 <gateway>
```

## Change to routing mode

```
Switch(config)# ip routing
```

## Policy-based routing

[Reference](https://www.cisco.com/c/en/us/td/docs/ios/12_2/qos/configuration/guide/fqos_c/qcfpbr.html)

```
! ACL permit: route-map is applied, the next route-map clause is not evaluated
! ACL deny: route-map is not applied, the next route-map clause is evaluated

! route-map permit: route is redistributed
! route-map deny: route is not redistributed
! route-map default is permit
Switch(config)# route-map <route-map name> [permit|deny] [<sequence number>]
! Default is all
Switch(config-route-map)# match ip address <ACL>
Switch(config-route-map)# set ip next-hop <IP>

Switch(config-if)# ip policy route-map <route-map name>
```

## OSPF

```
Switch(config)# router ospf <process ID>
Switch(config-router)# network <IP> <netmask> area <area ID>
! or
Switch(config-if)# ip ospf <process ID> area <area ID>
```

List LSAs (Link State Advertisements)
```
Switch# show ip ospf database
```

List OSPF neighbor
```
Switch# show ip ospf neighbor
```

List OSPF routes
```
Switch# show ip route ospf
```

Redistributing connected networks into OSPF

[Reference](https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/18722-redist-conn.html)

```
Switch(config-router)# redistribute connected subnets
```

Redistributing static routes into OSPF

```
Switch(config-router)# redistribute static subnets
```

Redistributing default route into OSPF

[Reference](https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/47868-ospfdb9.html)

```
Switch(config-router)# default-information originate
```

# DNS

```
Switch(config)# ip name-server <DNS IP> <DNS IP>...
```

Disable domain name lookup in global mode

```
Switch(config)# no ip domain-lookup
```

Device name

```
Switch(config)# hostname <host name>
```

Device domain

```
Switch(config)# ip domain-name <domain>
```

# Date / Time

Timezone

```
Switch(config)# clock timezone <timezone name> <timezone offset>
```

## NTP

[Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/bsm/command/bsm-xe-3se-3850-cr-book/bsm-xe-3se-3850-cr-book_chapter_00.html#wp1522568655)

Stratum = Distance from the reference clock

```
Switch(config)# ntp server <NTP server IP>
```

Set as NTP server

```
Switch(config)# ntp master [<stratum>]
```

# SNMP

Enable SNMP

```
Switch(config)# snmp-server community <community string> ro
```

# Authenticate

Enable AAA authentication / authorization
```
Switch(config)# aaa new-model
```

Use local user authentication
```
Switch(config)# aaa authentication login default local
Switch(config)# aaa authorization exec default local
```

Enable console authorization
```
Switch(config)# aaa authorization console
```

Create user

```
Switch(config)# username <username> privilege <privilege level> password <password>
```

Set enable password

Unnecessary for `privilege 15` user

```
Switch(config)# enable secret <password>
```

Console

```
Switch(config)# line console 0
Switch(config-line)# 
```

Telnet / SSH

```
Switch(config)# line vty 0 15
Switch(config-line)# 
```

Generate RSA key (for SSH)

```
Switch(config)# crypto key generate rsa
```

Add SSH RSA public key

```
Switch(config)# ip ssh pubkey-chain
Switch(conf-ssh-pubkey)# username <username>
Switch(conf-ssh-pubkey-user)# key-string
! Less than ~80 char/line
Switch(conf-ssh-pubkey-data)# <public key>
Switch(conf-ssh-pubkey-data)# exit
```

Login password

Unnecessary if using `login local`

```
Switch(config-line)# password <password>
```

Use password to authenticate

```
Switch(config-line)# login
```

Use user to authenticate

```
Switch(config-line)# login local
```

Timeout

```
Switch(config-line)# exec-timeout 30
```

Encrypt password

```
Switch(config)# service password-encryption
```

Enable Telnet / SSH

```
Switch(config-line)# transport input { all | telnet | ssh | none }
```

Ctrl-C to break

```
Switch(config-line)# escape-character 3
```

# Port channel (Ether channel)

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus5000/sw/configuration/guide/cli/CLIConfigurationGuide/EtherChannel.html)

Enable LACP

```
Switch(config)# feature lacp
```

Create port channel interface

```
Switch(config)# interface port-channel <port channel number>
```

Assign interface to port channel group (LACP) (Recommend)

```
Switch(config-if)# channel-group <port channel number> mode {active|passive}
```

Assign interface to port channel group (PAgP) (Not recommend)

```
Switch(config-if)# channel-group <port channel number> mode {auto|desirable}
```

Show port channel summary

```
Switch# show etherchannel summary
```

Show LACP counter

```
Switch# show lacp counters
```

Show LACP neighbor

```
Switch# show lacp neighbor
```

# Interface

## Interface diagnostic

Show interface status

```
Switch# show interfaces status
```

Test cable TDR (Time-Domain Reflectometer) / pair length

```
Switch# test cable-diagnostics tdr interface <interface>
Switch# show cable-diagnostics tdr interface <interface>
```

Show transceiver (fiber gain/loss)

```
Switch# show interfaces transceiver
```

## Config interface

```
Switch(config)# interface <interface>/<port number>
Switch(config-if)# 
```

### Config a range of interface

```
Switch(config)# interface range <interface>/<port number> - <port number>
```

### Config VLAN interface

```
Switch(config)# interface vlan <VLAN ID>
Switch(config-if)# ip address <IP> <netmask>
Switch(config-if)# no shutdown
```

### Interface description

```
Switch(config-if)# description <description>
```

### Auto MDI-X (Medium-Dependent Interface Crossover)
[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960x/software/15-0_2_EX/int_hw_components/configuration_guide/b_int_152ex_2960-x_cg/b_int_152ex_2960-x_cg_chapter_011.html)
```
Switch(config-if)# [no] mdix auto
```

### Layer 3 mode

```
Switch(config-if)# no switchport
```

### Layer 2 mode

```
Switch(config-if)# switchport
```

### Set trunk encapsulation to 802.1Q

```
Switch(config-if)# switchport trunk encapsulation dot1q
```

### Interface access / trunk mode

```
Switch(config-if)# switchport mode { access | trunk }
```

### Allow specified VLAN on trunk

Default allow all

```
Switch(config-if)# switchport trunk allowed vlan <VLAN ID list>
```

### Specify access port VLAN

```
Switch(config-if)# switchport access vlan <VLAN ID>
```

### Protected mode

Do not forward traffic to other protected port
```
Switch(config-if)# switchport protected
```

## Bandwidth limit

[Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/91862-cat3750-qos-config.html)

```
Switch(config-if)# srr-queue bandwidth limit <percentage>
```

## Recovery `err-disable` port

```
Switch(config-if)# shutdown
Switch(config-if)# no shutdown
```

## Disable (non Cisco) GBIC module checking

[Reference](https://www.cisco.com/c/en/us/support/docs/interfaces-modules/gbics/200296-Unsupported-GBIC-SFP-in-sub-module-of.html)

```
Switch(config)# no errdisable detect cause gbic-invalid
Switch(config)# service unsupported-transceiver
```

# Archive configuration

| Variable | Value |
| --- | --- |
| `$h` | Hostname |
| `$t` | Time |

## Archive to FTP

```
Switch(config)# ip ftp username <username>
Switch(config)# ip ftp password <password>

Switch(config)# archive
Switch(config-archive)# path ftp://<IP>/<path>
```

## Archive to SCP
```
Switch(config)# archive
Switch(config-archive)# path scp://<username>:<password>@<IP>/<path>
```

# Banner

| Variable | Value |
| --- | --- |
| $(hostname) | Hostname |

```
Switch(config)# banner login ^
<banner>
^
Switch(config)# 
```

# Show TCAM (ACL, MAC, QOS, Route) utilization

[Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3850-series-switches/118957-troubleshoot-sec-acl-tcam-cat3850.html)

If TCAM ACL full, switch will randomly drop traffic.

```
Switch# show platform tcam utilization asic all
```

# SDM - Switch Database Management (TCAM, ACL, Routing)

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

# ACL

## VACL (VLAN ACL)

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/15-0SY/configuration/guide/15_0_sy_swcg/vlan_acls.html)

VACL default (if no match) is `drop`

```
Switch(config)# vlan access-map <access-map name> <sequence number>
Switch(config-access-map)# action {forward|drop}
Switch(config-access-map)# match ip address <IP ACL>
Switch(config-access-map)# match mac address <MAC ACL>
Switch(config-access-map)# exit

Switch(config)# vlan filter <access-map name> vlan-list <VLAN list>
```

Block specify MAC address

[Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3550-series-switches/64844-mac-acl-block-arp.html)

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

ACL default (if no match) is `drop`, match if `(packet_ip & ~inverse_mask) == acl_ip`

Standard ACL
```
! <address> = { any | <IP> <inverse mask> | host <IP> }

Switch(config)# ip access-list standard { <ACL name> | <1-99> | <1300-1999> }
Switch(config-std-nacl)# [<sequence number>] { permit | deny } <source address>
```

Extended ACL
```
! <port> = { eq | neq | lt | gt } <port> | range <first port> <last port>

Switch(config)# ip access-list extended { <ACL name> | <100-199> | <2000-2699> }
Switch(config-ext-nacl)# [<sequence number>] { permit | deny } { ip | udp | tcp } <source address> [<source port>] <destination address> [<destination port>]
```

Resequencing access-list entries

[Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_data_acl/configuration/xe-3s/sec-data-acl-xe-3s-book/sec-acl-seq-num.html)

```
Switch(config)# ip access-list resequence <ACL ID> <starting sequence number> <increment>
```

List ACL

```
Switch# show ip access-lists
```

## MAC ACL

ACL default (no match) is `drop`

```
Switch(config)# mac access-list extended <name>
! <MAC address> = { any | host <MAC address> | <MAC address> <MAC address mask> }
Switch(config-ext-macl)# { permit | deny } <source MAC address> <destination MAC address>
```

# ARP

## Static ARP

[Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_arp/configuration/15-mt/arp-15-mt-book/arp-config-arp.html)

```
Switch(config)# arp <IP address> <MAC address> arpa
```

## ARP inspection

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swdynarp.html)

```
! If ARP over 15 packets per second, place the port in error-disabled state
Switch(config)# ip arp inspection vlan <VLAN list>
! Auto recovery
Switch(config)# errdisable recovery cause arp-inspection
```

# Q-in-Q / IEEE 802.1Q tunnel

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swtunnel.html)

```
Switch(config-if)# switchport access vlan <VLAN ID>
Switch(config-if)# switchport mode dot1q-tunnel
Switch(config)# vlan dot1q tag native
```

## Show IEEE 802.1Q tunnel port

```
Switch# show dot1q-tunnel
```

# QoS

[Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3550-series-switches/24800-153.html)

[Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/91862-cat3750-qos-config.html)

[QoS Threshold](https://community.cisco.com/t5/telepresence-and-video/help-understanding-qos-threshold/td-p/1374101)

[Egress QoS](https://community.cisco.com/t5/networking-documents/egress-qos/ta-p/3122802)

Enable QoS
```
Switch(config)# mls qos
```

Class map
```
Switch(config)# class-map match-all <class name>
Switch(config-cmap)# match access-group <ACL>
```

Policy map
```
Switch(config)# policy-map <policy name>
Switch(config-pmap)# class { <class name> | class-default }
! Min Burst = BPS / 8,000
Switch(config-pmap-c)# police <BPS> <burst normal> <burst max> exceed-action drop
```

Apply policy map
```
Switch(config-if)# service-policy { input | output } <policy name>
```

# Multicast

## PIM (Protocol Independent Multicast)

[Overview](https://www.cisco.com/c/en/us/td/docs/ios/solutions_docs/ip_multicast/White_papers/mcst_ovr.html#wp1009074)
/ [Quick Reference](https://www.cisco.com/c/en/us/support/docs/ip/ip-multicast/9356-48.html)
/ [Reference](https://www.cisco.com/c/en/us/td/docs/ios/solutions_docs/ip_multicast/White_papers/rps.html)
/ [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_52_se/configuration/guide/3750scg/swmcast.html)

```
Switch(config)# ip multicast-routing [distributed]
Switch(config)# ip pim rp-address <IP> [<ACL ID>]

! Enable PIM on Layer 3 interface
Switch(config-if)# ip pim ( sparse-mode | dense-mode | sparse-dense-mode )
```

## IP Querier

[Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/68131-cat-multicast-prob.html)

```
Switch(config)# ip igmp snooping querier [address <source IP>]
```

## IGMP

[Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960x/software/15-0_2_EX/igmp_snoop/configuration_guide/b_mc_152ex_2960-x_cg/b_mc_152ex_2960-x_cg_chapter_010.html)

Default enabled

```
Switch(config)# ip igmp snooping [vlan <VLAN ID>]
```

## Multicast Debug

[Reference](https://www.cisco.com/c/en/us/support/docs/ip/ip-multicast/16450-mcastguide0.html)

```
Switch# show ip igmp groups [detail]
Switch# show ip igmp membership
Switch# show ip mroute [<IP>] [count]
```

# Broadcast

[Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipapp/command/iap-cr-book/iap-i1.html)

## Allow broadcast

```
Switch(config-if)# ip directed-broadcast [<ACL ID>]
```

## Forward broadcast packet to other IP

```
Switch(config-if)# ip helper-address <IP>
```

## Allow specified UDP port forward broadcast

Default is all

```
Switch(config)# ip forward-protocol udp [<port number>]
```
