---
date: 2024-02-18
tags: [WSL, Windows, Network]
---

# Accessing WSL 2 from LAN

> Ref: [Accessing network applications with WSL](https://learn.microsoft.com/en-us/windows/wsl/networking)

By default, WSL uses a NAT mode, WSL listening port only can access at localhost (127.0.0.1), cannot be accessed from external network.

<!--truncate-->

## Add port proxy

To allow access from LAN, add port proxy for WSL 2

```sh
# netsh interface portproxy add v4tov4 listenport=<Windows listening port> listenaddress=0.0.0.0 connectport=<WSL listening port> connectaddress=<WSL IP address>

netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=3000 connectaddress=172.24.184.80
```

`connectaddress` can be found by

```sh
wsl hostname -I
```

:::note

Remember to allow the port in Windows firewall

:::

## Remove port proxy

```sh
# netsh interface portproxy delete v4tov4 <port> 0.0.0.0

netsh interface portproxy delete v4tov4 8080 0.0.0.0
```
