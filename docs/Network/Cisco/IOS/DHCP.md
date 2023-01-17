---
tags: [Cisco, IOS, DHCP]
---

# DHCP

> [Ref](https://www.cisco.com/en/US/docs/ios/12_4t/ip_addr/configuration/guide/htdhcpsv.html)

> [Ref](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_dhcp/configuration/15-sy/dhcp-15-sy-book/dhcp-prt-bsd-aa.html#GUID-D3427E9D-D0F3-4FFE-889C-8091A84006C6)

```
Switch(config)# ip dhcp excluded-address <first IP address> <last IP address>
Switch(config)# ip dhcp pool <pool name>
Switch(dhcp-config)# network <network IP address> { /<prefix length> | <network mask> }
Switch(dhcp-config)# dns-server <DNS> [...]
Switch(dhcp-config)# default-router <gateway>
```

Example

```
Switch(config)# ip dhcp excluded-address 10.0.0.1 10.0.0.100
Switch(config)# ip dhcp pool Office
Switch(dhcp-config)# network 10.0.0.0 /24
Switch(dhcp-config)# dns-server 1.1.1.1 8.8.8.8
Switch(dhcp-config)# default-router 10.0.0.1
```

## Preassigning IP Addresses

> [Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_dhcp/configuration/15-sy/dhcp-15-sy-book/dhcp-prt-bsd-aa.html#GUID-D3427E9D-D0F3-4FFE-889C-8091A84006C6)

- Method 1

```
Switch(dhcp-config)# address <IP> { client-id <ID> | hardware-address <MAC address> }
```

- Method 2

```
Switch(config)# ip dhcp pool <pool name>
Switch(dhcp-config)# host <IP> [ /<prefix length> | <network mask> ]
Switch(dhcp-config)# client-identifier <ID>
Switch(dhcp-config)# hardware-address <MAC address>
```

## Verify DHCP

```
Switch# show ip dhcp binding
Switch# show ip dhcp conflict 
```

## DHCP snooping

Drop DHCP on untrust interface

> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_52_se/configuration/guide/3750scg/swdhcp82.html)

```
Switch(config)# ip dhcp snooping
Switch(config)# ip dhcp snooping vlan <VLAN list>
Switch(config)# no ip dhcp snooping information option
```

Trust DHCP from this port

```
Switch(config-if)# ip dhcp snooping trust
```
