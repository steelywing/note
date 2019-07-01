# Table of Contents
- [Table of Contents](#Table-of-Contents)
- [IP forward](#IP-forward)
- [Ping](#Ping)
- [Nmap](#Nmap)
  - [Host](#Host)
  - [Host discovery](#Host-discovery)
  - [Scan](#Scan)
- [TCP Dump](#TCP-Dump)

# IP forward

[Reference](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Security_Guide/s1-firewall-ipt-fwd.html)

```sh
# Get IP forward setting
sysctl net.ipv4.ip_forward
# Set IP forward setting (0 = Disable, 1 = Enable)
sysctl -w net.ipv4.ip_forward={0|1}
```

Set IP forward on boot

`/etc/sysctl.conf`

```
net.ipv4.ip_forward = {0|1}
```

# Ping

```sh
# Display timeout
ping -O <ip>

# Display time
ping <ip> | while read log; do
  echo "$(date): $log";
done
```


# Nmap

[Reference](https://nmap.org/book/man.html)

```sh
nmap <option>
```

## Host

| Option | Description |
| - | - |
| `<host>[/prefix]` | Host or CIDR |
| `10.0.0-255.0-255` | Range |

## Host discovery

| Option | Description |
| - | - |
| `-Pn` | No ping (Skip host discovery) |
| `-PS <port list>` | TCP SYN ping |
| `-PA <port list>` | TCP ACK ping |
| `-PU <port list>` | UDP ping |
| `-PE` | ICMP ping |
| `-PR` | ARP ping<br>Default: use on local ethernet |

## Scan

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

# TCP Dump

List interface

```sh
tcpdump { -D | --list-interfaces }
```

Dump traffic

| Option | Description |
| - | - |
| `-i {<interface>|any}` | Listen on interface<br>Default: lowest numbered of interface list |
| `-n` | Not resolve hostname |
| `-nn` | Not resolve hostname or port |
| `-w <file.pcap>` | Write to file |

Expression

[Reference](https://www.tcpdump.org/manpages/pcap-filter.7.html)

| Expression | Description |
| - | - |
| `[src|dst] {host|ip} [not] <host>` | Match `<host>` |
| `{host|ip} <host> and <host>` | Match traffic between `<host>` and `<host>` |
| `[src|dst] net <IP>` | Match `<IP>` |
| `<IP>` | `<#>[.<#>[.<#>[.<#>]]]` |
| `[src|dst] port <port>` | Port |
| `[src|dst] portrange <port>-<port>` | Port range |
| `{tcp|udp|icmp}` | TCP / UDP / ICMP |
| `vlan [VLAN ID]` | VLAN<br>Default: all IEEE 802.1Q packet |
| `{not|!} <expression>` | not |
| `<expression> {and|&&} <expression>` | and |
| `<expression> { or | || } <expression>` | or |

```sh
tcpdump [<option>] [<expression>]
```
