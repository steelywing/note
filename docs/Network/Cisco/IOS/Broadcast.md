---
tags: [Cisco, IOS]
---

# Broadcast

> [Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipapp/command/iap-cr-book/iap-i1.html)

Allow broadcast to all other subnet

> Example
>
> From `10.0.0.1/24` to `10.10.10.255/24`

```
Switch(config-if)# ip directed-broadcast [<ACL ID>]
```

Forward broadcast packet to other IP address / subnet

```
Switch(config-if)# ip helper-address <IP address>
```

Allow specified UDP port forward broadcast

- Default is all

```
Switch(config)# ip forward-protocol udp [<port number>]
```
