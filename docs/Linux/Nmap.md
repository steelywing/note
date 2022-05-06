# Nmap

> [Reference](https://nmap.org/book/man.html)

```bash
nmap <option>
```

| Option | Description |
|-|-|
| `-oG` | Grep-able Output |

## Host

| Option | Description |
|-|-|
| `<host>[/prefix]` | Host or CIDR |
| `10.0.0-255.0-255` | Range |

## Host discovery

Default: `-PE -PS443 -PA80 -PP`

| Option | Description |
|-|-|
| `-Pn` | No ping (Skip host discovery) |
| `-PS<port list>` | TCP SYN ping |
| `-PA<port list>` | TCP ACK ping |
| `-PU<port list>` | UDP ping |
| `-PE` | ICMP ping |
| `-PP` | ICMP timestamp request |
| `-PR` | ARP ping<br/>Default: use on local ethernet |

## Scan

Default: scan most common 1,000 ports

| Option | Description |
|-|-|
| `-p <port list>` | Port scan<br/><br/>Ex:<br/>`-p 1-1000`<br/>UDP: 1-10, 20 / TCP: 100-200 / SCTP: 300<br/>`-p U:1-10,20,T:100-200,S:300` |
| `-F` | Scan most common 100 ports |
| `--top-ports <n>` | Scan `<n>` most common ports |
| `-sn` | Disable port scan |
| `-sS` | TCP SYN scan (Default) |
| `-sT` | TCP connect scan |
| `-sU` | UDP scan |
| `-T<0-5>` | Timing template<br/><br/>paranoid (0), sneaky (1), polite (2), normal (3), aggressive (4), and insane (5) |
| `-sV` | Version detection |
| `-O` | OS detection |
| `-sC` | Nmap Scripting Engine |
| `-A` | OS detection, Service / Version detection, Nmap Scripting Engine |
