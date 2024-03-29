---
id: index
slug: .
sidebar_position: 0
---

# Network

## Routing

### Path selection

> Ref: [Routing Path Selection](https://en.wikipedia.org/wiki/Routing#Path_selection)

Priority

1. Prefix-Length

   Longer subnet masks are preferred

2. Metric

   Lower metric/cost is preferred

## Layer

| Internet Standard | [OSI Model](https://en.wikipedia.org/wiki/OSI_model) | Internet Protocol Suite |
| - | - | - |
| Application | Application <br/> Presentation <br/> Session | BGP, DHCP, DNS, FTP, HTTP, HTTPS, IMAP, SMTP, LDAP, NTP |
| Transport | Transport | TCP, UDP, SCTP |
| Internet | Network | IPv4, IPv6, IPsec, ICMP, ICMPv6, IGMP, OSPF |
| Link | Data Link | ARP, NDP |
|  | Physical | IEEE 802.11 (WiFi), 100BASE-TX, 1000BASE-T |

> OSI: Open Systems Interconnection

> Internet Standard: [RFC1122](https://tools.ietf.org/html/rfc1122)

## IGP (Interior Gateway Protocol)

內部閘道協定

- Within an autonomous system

Include

- RIP
- IGRP
- OSPF
- IS-IS

## CPE

Customer Premises Equipment

用戶端設備

- 位於 User 端
- 用於 User 與 ISP 連接的裝置
- 例如 ISP 的 Router，電話…
