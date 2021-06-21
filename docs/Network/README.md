---
id: index
slug: .
---

# Network

## Routing

### Path selection

[Reference](https://en.wikipedia.org/wiki/Routing#Path_selection)

Priority

1. Prefix-Length
   
   Longer subnet masks are preferred

2. Metric
   
   Lower metric/cost is preferred

## Layer

| [RFC1122](https://tools.ietf.org/html/rfc1122) (Internet Standard) | [OSI Model](https://en.wikipedia.org/wiki/OSI_model) | Internet Protocol Suite |
| - | - | - |
| Application | Application <br/> Presentation <br/> Session | BGP, DHCP, DNS, FTP, HTTP, HTTPS, IMAP, SMTP, LDAP, NTP |
| Transport | Transport | TCP, UDP, SCTP |
| Internet | Network | IPv4, IPv6, IPsec, ICMP, ICMPv6, IGMP, OSPF |
| Link | Data Link | ARP, NDP |
|  | Physical | IEEE 802.11 (WiFi), 100BASE-TX, 1000BASE-T |

OSI: Open Systems Interconnection

## IGP (Interior Gateway Protocol)

內部閘道協定

- Within an autonomous system

Include

- RIP
- IGRP
- OSPF
- IS-IS
