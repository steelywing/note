# TCP Dump

Dump network traffic / packet

## List interface

```bash
tcpdump { -D | --list-interfaces }
```

## Dump traffic

```bash
tcpdump [<option>] [<expression>]
```

| Option | Description |
| - | - |
| `-i {<interface>\|any}` | Listen on interface<br/>Default: lowest numbered of interface list |
| `-n` | Not resolve hostname |
| `-nn` | Not resolve hostname or port |
| `-v` | Verbose |
| `-w <file.pcap>` | Write to file |

Expression

> [Reference](https://www.tcpdump.org/manpages/pcap-filter.7.html)

| Expression | Description |
| - | - |
| `[src\|dst] {host\|ip} [not] <host>` | Match `<host>` |
| `{host\|ip} <host> and <host>` | Match traffic between `<host>` and `<host>` |
| `[src\|dst] net <IP address>[/<prefix length>]` | Match IP |
| `<IP address>` | `<#>[.<#>[.<#>[.<#>]]]` |
| `[src\|dst] port <port>` | Port |
| `[src\|dst] portrange <port>-<port>` | Port range |
| `{tcp\|udp\|icmp}` | TCP / UDP / ICMP |
| `vlan [VLAN ID]` | VLAN<br/>Default: all IEEE 802.1Q packet |
| `{not\|!} <expression>` | not |
| `<expression> { and \| && } <expression>` | and |
| `<expression> { or \| \|\| } <expression>` | or |
