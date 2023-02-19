---
tags: [Cisco, IOS, ACL]
---

# ACL

Access Control List

- The ACL default (no match) is `drop`

## MAC ACL

```cisco
Switch(config)# mac access-list extended <name>

! <MAC address> = { any | host <MAC address> | <MAC address> <MAC address mask> }
Switch(config-ext-macl)# { permit | deny } 
    <source MAC address> 
    <destination MAC address>
```

## IP ACL

> Ref: [Configure and Filter IP Access Lists](https://www.cisco.com/c/en/us/support/docs/security/ios-firewall/23602-confaccesslists.html)

> Ref: [ACL](acl.pdf)

- The IP ACL match the packet if `(packet_ip & ~inverse_mask) == acl_ip`

### Standard ACL

- Filter by source address

```cisco
! <address> = { any | <IP address> <inverse mask> | host <IP> }

Switch(config)# ip access-list standard 
    { <ACL name> | <1-99> | <1300-1999> }

Switch(config-std-nacl)# [<sequence number>] 
    { permit | deny } 
    <source IP address>
```

### Extended ACL

- More useful than [Standard ACL](#standard-acl)
- Filter by source and destination address
- Filter by ICMP type / UDP port / TCP port

```cisco title="Syntax"
! <port> = { eq | neq | lt | gt } <port> | range <first port> <last port>

Switch(config)# ip access-list extended 
    { <ACL name> | <100-199> | <2000-2699> }

Switch(config-ext-nacl)# [<sequence number>] 
    { permit | deny } 
    { ip | udp | tcp } 
    <source IP address> [<source port>] 
    <destination IP address> [<destination port>]
```

```cisco title="Sample"
Switch(config)# ip access-list extended default

! Append to the end of ACL
! Allow access any host TCP 80
Switch(config-ext-nacl)# permit tcp any any eq 80
Switch(config-ext-nacl)# permit tcp any eq 80 any established

! Insert to sequence number 25, 26
! Allow access any host TCP 443
Switch(config-ext-nacl)# 25 permit tcp any any eq 443
Switch(config-ext-nacl)# 26 permit tcp any eq 443 any established

! Remove sequence number 25, 26
Switch(config-ext-nacl)# no 25
Switch(config-ext-nacl)# no 26
```

### Remove ACL

```cisco
Switch(config-std-nacl)# no [<sequence number>]
```

```cisco
Switch(config-ext-nacl)# no [<sequence number>] 
```

## Apply ACL to interface

```cisco
Switch(config)# interface <interface>

! not all interface can use { in | out }
Switch(config-if)# ip access-group { <ACL ID> | <ACL name> } { in | out }
```

## VACL

VLAN ACL

- VACL can be applied to VLAN
- VACL filter packet that are bridged within a VLAN

> Ref: [VACL](vacl.pdf)

![Flow](img/VACL.svg)

- If VLAN map has at least 1 `match` clause
- the packet does not match any `match` clause
- the default is `drop` the packet

```cisco
Switch(config)# vlan access-map <access-map name> [<sequence number>]
Switch(config-access-map)# action { forward | drop }
Switch(config-access-map)# match ip address <IP ACL>
Switch(config-access-map)# match mac address <MAC ACL>
Switch(config-access-map)# exit

Switch(config)# ...

Switch(config)# vlan filter <access-map name>
    vlan-list <VLAN list>
```

Block specify MAC address

> [Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3550-series-switches/64844-mac-acl-block-arp.html)

```cisco
! <MAC address> = { any | host <MAC address> | <MAC address> <MAC address mask> }

Switch(config)# mac access-list extended blacklist
Switch(config-ext-macl)# permit <source MAC address> <destination MAC address>
Switch(config-ext-macl)# exit

Switch(config)# vlan access-map <access-map name> 10
Switch(config-access-map)# action drop
Switch(config-access-map)# match mac address blacklist
Switch(config-access-map)# exit
Switch(config)# vlan access-map <access-map name> 20
Switch(config-access-map)# action forward
Switch(config-access-map)# exit

Switch(config)# vlan filter <access-map name>
    vlan-list <VLAN list>
```

Resequencing ACL entries

> [Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_data_acl/configuration/xe-3s/sec-data-acl-xe-3s-book/sec-acl-seq-num.html)

```cisco
Switch(config)# ip access-list resequence <ACL ID> <starting sequence number> <increment>
```

Example

```cisco
ip access-list resequence default-acl 10 10
```

Display ACL list

```cisco
Switch# show ip access-lists
```
