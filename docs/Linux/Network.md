---
sidebar_label: Network
---

# Network - Linux

## Firewall

### [iptables](iptables.md)

### nftables

## IP forward

> [Reference](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Security_Guide/s1-firewall-ipt-fwd.html)

Get IP forward setting

```bash
sysctl net.ipv4.ip_forward
```

Set IP forward setting (`0` = Disable, `1` = Enable)

```bash
sysctl -w net.ipv4.ip_forward={0|1}
```

Set IP forward on boot

``` title="/etc/sysctl.conf"
net.ipv4.ip_forward = {0|1}
```

## Ping

Display timeout

```bash
ping -O <IP address>
```

Display time

```bash
ping <IP address> | while read log; do
  echo "$(date): $log";
done
```

## [Nmap](Nmap.md)

## [TCP Dump](tcpdump.md)

## IP

Reference: `ip help`

| Option | Description |
| - | - |
| `-4` | IPv4 |
| `-6` | IPv6 |
| `-c` | Color output |

```bash
ip [<option>] { link | address | route | neigh | tunnel | tuntap | maddress | mroute | monitor | l2tp | ... } { <command> | help }
```

### Interface

Reference: `ip link help`

```bash
ip l [show [<dev>] [up]]
```

Interface up / down

```bash
ip l set [dev] <device> { up | down }
```

```bash
# Deprecated
ifconfig <interface> { up | down }
```

### IP address

Reference: `ip address help`

```bash
ip a [show [<device>] [up]]
```

```bash
# Deprecated
ifconfig
```

Add IP address

```bash
ip a add <IP address>/<prefix length> dev <device>
```

```bash
# Deprecated
ifconfig <interface> add <IP address>/<prefix length>
```

Delete IP address

```bash
ip a del <IP address>/<prefix length> dev <device>
```

```bash
# Deprecated
ifconfig <interface> del <IP address>/<prefix length>
```

Flush (Delete all) IP address

```bash
ip a flush [dev <device>] [up]
```

### ARP / Neighbour

Reference: `ip neighbour help`

```bash
ip n [show]
```

```bash
# Deprecated
arp
```

Clear ARP / NDP / neighbour

```bash
ip n flush { all | dev <device> }
```

### Route

Reference: `ip route help`

| Option | Description |
| - | - |
| No `match` or `root` | Exact `<IP address>[/<prefix length>` |
| `match` | Prefix not longer than `<prefix length>` |
| `root` | Prefix not shorter than `<prefix length>` |

```bash
ip r [list] [match|root] [<IP address>[/<prefix length>]]
```

```bash
# Deprecated
route [-n]
```

```bash
# Deprecated
netstat -[n]r
```

Get route to destination address

```bash
ip r get <IP address>
```

Add route

```bash
# default = 0/0 or ::/0
ip r add { default | <IP-address>/<prefix length> } [metric <metric>] [via <next hop IP address>] [dev <device>] [metric <metric>]
```

```bash
# Deprecated
route add -net <IP address>/<prefix length> gw <next hop IP address> [dev <device>] [metric <metric>]
```

Delete route

```bash
# default = 0/0 or ::/0
ip r delete { default | <IP address>/<prefix length> } [via <next hop IP address>] [dev <device>]
```

```bash
# Deprecated
route del default
route del -net <IP address>/<prefix length> [gw <next hop IP address>] [dev <device>] [metric <metric>]
```

## Socket statistics

```bash
ss [<option> ...] [state <state>] [<expression>]
```

| Option | Description |
| - | - |
| `-n` | Numeric |
| `-a` | All listening and non-listening sockets |
| `-l` | Listening sockets |
| `-p` | Process |
| `-4` | IPv4 |
| `-6` | IPv6 |
| `-t` | TCP |
| `-u` | UDP |
| `state <state>` | State: `{ all \| connected \| synchronized }`, TCP State: `{ established \| syn-sent \| syn-recv \| fin-wait-1 \| fin-wait-2 \| time-wait \| closed \| close-wait \| last-ack \| listen \| closing }` |
| `<expression>` |  |

```bash
# Deprecated
netstat [<option>]
```

| Option | Description |
| - | - |
| `-n` | Numeric |
| `-a` | All listening and non-listening sockets |
| `-l` | Listening sockets |
| `-p` | Program |
| `-4` | IPv4 |
| `-6` | IPv6 |
| `-t` | TCP |
| `-u` | UDP |

```bash
cat /proc/net/udp
cat /proc/net/tcp
```

```bash
lsof [-n] -i [4|6][TCP|UDP][@<host>][:<port>]
```

| Option | Description |
| - | - |
| `-n` | Numeric |
| `[4\|6]` | IPv4 / IPv6 |
| `<host>` | `Host` / `IPv4` / `[<IPv6>]` |
| `<port>` | Port / `<port>-<port>` |
| `-p [^]<PID>` | Process ID, `^`: Exclude |

## Traffic control

- [Reference](https://www.excentis.com/blog/use-linux-traffic-control-impairment-node-test-environment-part-2)
- [Manual](https://man7.org/linux/man-pages/man8/tc-tbf.8.html)
- `man tc-netem`

Show `qdisc` (queueing discipline)

```bash
tc qdisc show dev <dev>
```

Remove `qdisc` (queueing discipline)

```bash
tc qdisc add dev <dev> root
```

### netem (Network Emulator)

Latency

```bash
tc qdisc add dev <dev> root netem \
  delay <min latency>ms [<max latency>ms]
```

Loss / Corrupt / Duplicate

```bash
tc qdisc add dev <dev> root netem \
  { loss | corrupt | duplicate } <chance>%
```

### TBF (Token Bucket Filter)

Limit traffic rate / speed / bandwidth

```bash
# min burst = rate / HZ(1000)
# limit = queue size
# latency = max amount of time in queue

tc qdisc add dev <dev> root tbf \
  rate <rate>{k|m}bit \
  burst <burst>{k|m}bit \
  { limit <limit>{k|m}bit | latency <latency>ms }
```

## Network manager

< Ubuntu 18

```bash
apt show ifupdown

# Config
/etc/network/interfaces
```

Ubuntu 18, 20

```bash
apt show netplan.io

# Config
/etc/netplan/
```

> `netplan` use `systemd-networkd` by default

RHEL

```bash
yum info NetworkManager

nmcli

nmtui

# Config
/etc/sysconfig/network-scripts/
```
