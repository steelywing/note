## Packet Sniffer

> [Reference](http://kb.fortinet.com/kb/viewContent.do?externalId=11186)

```
<interface> = any | <interface name>
<filters> = <filter> [ and | or ...]
<filter> = host <IP address> | port <port number> | tcp | udp
```

```
diagnose sniffer packet <interface> '<filter>' <verbose> [<count>]
```

## SSH public key

[Reference](https://kb.fortinet.com/kb/documentLink.do?externalID=11985)

```
config system admin
edit <user>
set ssh-public-key1 "{ssh-rsa|ssh-dss} <key>"
end
```

## TLS certificate

[Reference](https://kb.fortinet.com/kb/viewContent.do?externalId=FD36557&sliceId=1)

### Import certificate

```
config vpn certificate local
edit <certificate name>
set private-key "<PEM key>"
set certificate "<PEM certificate>"
end
```

### Show certificate

```
config vpn certificate local
edit <certificate name>
show full-configuration
end
```

## Diagnose / Debug / Troubleshoot

VPN

> [Reference](https://docs.fortinet.com/document/fortigate/5.4.0/cookbook/168495)

```
diagnose debug disable
diagnose debug reset
diagnose vpn ike log filter clear
diagnose vpn ike log filter
    name "<name>" | 
    src-port <port> |
    dst-port <port> |
    src-addr4 <IPv4 address> | 
    dst-addr4 <IPv4 address> 
diagnose debug application ike 255
diagnose debug enable
```

## HA manual synchronization

> [Reference](https://kb.fortinet.com/kb/documentLink.do?externalID=FD36494)

Show HA status

```
get system ha status

# FortiOS < 5.4
diagnose sys ha cluster-csum

# FortiOS >= 5.4
diagnose sys ha checksum cluster
```

Recalculation of checksum (Primary and Backup)

```
# FortiOS < 5.4
diagnose sys ha checksum recalculate

# FortiOS >= 5.4
diagnose sys ha csum-recalculate
```

Restart synchronization

On Primary

```
execute ha synchronize stop
diagnose debug reset
diagnose debug enable
diagnose debug console timestamp enable
diagnose debug application hasync -1
diagnose debug application hatalk -1
execute ha synchronize start
```

On Backup

```
diagnose debug reset
diagnose debug enable
execute ha synchronize stop
diagnose debug console timestamp enable
diagnose debug application hasync -1
diagnose debug application hatalk -1
execute ha synchronize start
```

After synchronization complete

```
diagnose debug disable
diagnose debug reset
```
## Troubleshooting

Debug packet flow / drop

> [Ref](https://docs.fortinet.com/document/fortigate/6.2.11/cookbook/54688/debugging-the-packet-flow)

[Packet Sniffer](#packet-sniffer)

```bash
diagnose debug enable

# <filter> = <address filter> | <port filter>
# <address filter> = { addr | saddr | daddr } <IP address> [<to IP address>]
# <port filter> = { port | sport | dport } <port> [<to port>]
diagnose debug flow filter <filter>
[...]

[diagnose debug flow show function-name { enable | disable }]

# <repeat> packets / times, default = 1
diagnose debug flow trace start [<repeat>]
```

Reset debug

```
diagnose debug reset
diagnose debug disable
```
