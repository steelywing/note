---
sidebar_label: Network
---

# Network - Windows

## Host name resolution order

[Reference](https://support.microsoft.com/en-au/help/172218/microsoft-tcp-ip-host-name-resolution-order)

1. Self host name
2. `hosts` file (`%SystemRoot%\System32\drivers\etc\hosts`)
3. DNS
4. NBNS (NetBIOS Name Service) / LLMNR (Link-local Multicast Name Resolution)

## Firewall

### Change default to block

- [Reference](https://www.howtogeek.com/112564/how-to-create-advanced-firewall-rules-in-the-windows-firewall/)

![Windows Firewall](img/windows-firewall.png)

## Network Profile

[PowerShell](PowerShell/Network.md#network-profile)

## IP address conflict

Windows will use IP `169.254.0.0/16` if IP address conflict

## Network monitor

- [TCPView](https://docs.microsoft.com/en-us/sysinternals/downloads/tcpview)
- [WireShark](https://www.wireshark.org/)
- [WinDump](https://www.winpcap.org/windump/)

## Network emulator

Delay / Drop / Bandwidth ...

- [clumsy](https://github.com/jagt/clumsy)
- [WinDivert](https://github.com/basil00/Divert)

## Show TCP / UDP connection

[PowerShell](PowerShell/Network.md#show-tcp-listening-port)

```cmd
netstat <option>
```

| Option | Permission |
| - | - |
| `-a` | Displays all connections and listening ports |
| `-n` | Displays addresses and port numbers in numerical form |

## Reset (Repair) TCP/IP stack

- [Reference](https://support.microsoft.com/en-us/help/299357/how-to-reset-tcp-ip-by-using-the-netshell-utility)
- [Reference](https://support.microsoft.com/en-us/help/10741/windows-fix-network-connection-issues)

```cmd
netsh winsock reset
netsh int[erface] ip[v4] reset
netsh int[erface] ipv6 reset
ipconfig /flushdns
```

## Reserve TCP/UDP port

[Reference](https://support.microsoft.com/en-us/help/2665809/you-cannot-exclude-ports-by-using-the-reservedports-registry-key-in-wi)

Add / Delete reserved port

```cmd
netsh int[erface] ipv4 `
    { add | delete } ex[cludedportrange] `
    { [protocol=] tcp | udp } `
    <start port> `
    <number of ports> `
    [ [store=] active | persistent ]
```

Show reserved port

```cmd
netsh int[erface] ipv4 `
    show excludedportrange { tcp | udp }
```

## TCP/IP time-out

TCP/IP re-transmission time-out

> - [Reference](https://support.microsoft.com/en-us/topic/how-to-modify-the-tcp-ip-maximum-retransmission-time-out-7ae0982a-4963-fa7e-ee79-ff6d0da73db8)
> - [Reference](https://support.microsoft.com/en-us/topic/you-cannot-customize-some-tcp-configurations-by-using-the-netsh-command-in-windows-server-2008-r2-c1feebea-82a8-cb05-83c7-46ffb5fd9cec)

Get

```cmd
netsh interface tcp show global
```

Set

```cmd
netsh interface tcp set global initialrto=<ms>
```
