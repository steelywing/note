## Table of Contents
- [Table of Contents](#table-of-contents)
- [Firewall](#firewall)
  - [iptables](#iptables)
  - [nftables](#nftables)
- [IP forward](#ip-forward)
- [Ping](#ping)
- [Nmap](#nmap)
  - [Host](#host)
  - [Host discovery](#host-discovery)
  - [Scan](#scan)
- [TCP Dump](#tcp-dump)
- [IP](#ip)
  - [Interface](#interface)
  - [IP address](#ip-address)
  - [ARP / Neighbour](#arp--neighbour)
  - [Route](#route)
- [Socket statistics](#socket-statistics)
- [Traffic control](#traffic-control)
  - [netem (Network Emulator)](#netem-network-emulator)
  - [TBF (Token Bucket Filter)](#tbf-token-bucket-filter)

## Firewall

### [iptables](iptables.md)

### nftables

## IP forward

[Reference](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Security_Guide/s1-firewall-ipt-fwd.html)

Get IP forward setting
```bash
sysctl net.ipv4.ip_forward
```

Set IP forward setting (`0` = Disable, `1` = Enable)
```bash
sysctl -w net.ipv4.ip_forward={0|1}
```

Set IP forward on boot

`/etc/sysctl.conf`

```
net.ipv4.ip_forward = {0|1}
```

## Ping

```bash
# Display timeout
ping -O <IP address>
 
# Display time
ping <IP address> | while read log; do
  echo "$(date): $log";
done
```


## Nmap

[Reference](https://nmap.org/book/man.html)

```bash
nmap <option>
```

### Host

| Option | Description |
| - | - |
| `<host>[/prefix]` | Host or CIDR |
| `10.0.0-255.0-255` | Range |

### Host discovery

| Option | Description |
| - | - |
| `-Pn` | No ping (Skip host discovery) |
| `-PS<port list>` | TCP SYN ping |
| `-PA<port list>` | TCP ACK ping |
| `-PU<port list>` | UDP ping |
| `-PE` | ICMP ping |
| `-PR` | ARP ping<br>Default: use on local ethernet |

### Scan

Default: scan most common 1,000 ports

| Option | Description |
| - | - |
| `-p <port list>` | Port scan<br><br>Ex:<br>`-p 1-1000`<br>`-p U:1-10,20,T:100-200,S:300` |
| `-F` | Scan most common 100 ports |
| `--top-ports <n>` | Scan `<n>` most common ports |
| `-sn` | Disable port scan |
| `-sS` | TCP SYN scan (Default) |
| `-sT` | TCP connect scan |
| `-sU` | UDP scan |
| `-T<0-5>` | Timing template<br><br>paranoid (0), sneaky (1), polite (2), normal (3), aggressive (4), and insane (5) |

## TCP Dump

List interface

```bash
tcpdump { -D | --list-interfaces }
```

Dump traffic

| Option | Description |
| - | - |
| `-i {<interface>\|any}` | Listen on interface<br>Default: lowest numbered of interface list |
| `-n` | Not resolve hostname |
| `-nn` | Not resolve hostname or port |
| `-v` | Verbose |
| `-w <file.pcap>` | Write to file |

Expression

[Reference](https://www.tcpdump.org/manpages/pcap-filter.7.html)

| Expression | Description |
| - | - |
| `[src\|dst] {host\|ip} [not] <host>` | Match `<host>` |
| `{host\|ip} <host> and <host>` | Match traffic between `<host>` and `<host>` |
| `[src\|dst] net <IP address>[/<prefix length>]` | Match IP |
| `<IP address>` | `<#>[.<#>[.<#>[.<#>]]]` |
| `[src\|dst] port <port>` | Port |
| `[src\|dst] portrange <port>-<port>` | Port range |
| `{tcp\|udp\|icmp}` | TCP / UDP / ICMP |
| `vlan [VLAN ID]` | VLAN<br>Default: all IEEE 802.1Q packet |
| `{not\|!} <expression>` | not |
| `<expression> { and \| && } <expression>` | and |
| `<expression> { or \| \|\| } <expression>` | or |

```bash
tcpdump [<option>] [<expression>]
```

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

Clear ARP / neighbour

```bash
ip n flush [dev <device>]
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
ip r add { default | <IP-address>/<prefix length> } via <next hop IP address> [dev <device>] [metric <metric>]
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
netstat
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
lsof -i [4|6][TCP|UDP][@<host>][:<port>]
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

tc qdisc add dev <dev> root tbf \
  rate <rate>{k|m}bit \
  burst <burst>{k|m}bit \
  { limit <limit>{k|m}bit | latency <latency>ms }
```
