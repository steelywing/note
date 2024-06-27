---
date: 2024-06-27
tags: [Linux, Network]
---

# Bind privileged port in Linux

By default, only root process can bind privileged (1 - 1024) port

<!--truncate-->

## Method1: Use `setcap`

### Add capability to process

```sh
# sudo setcap 'cap_net_bind_service=+ep' <path of executable>

sudo setcap 'cap_net_bind_service=+ep' /usr/local/bin/nc
```

### Remove capability to process

```sh
sudo setcap 'cap_net_bind_service=' /usr/local/bin/nc
```

or

```sh
sudo setcap -r /usr/local/bin/nc
```

## Method 2: Redirect port

Redirect input to other port

> Ref: [How To Mangle The Packets](https://www.netfilter.org/documentation/HOWTO/NAT-HOWTO-6.html)

```sh
iptables -t nat -A PREROUTING [-i <interface>] -p tcp --dport <from port> -j REDIRECT --to-port <to port>
```
