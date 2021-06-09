## Packet Sniffer

[Reference](http://kb.fortinet.com/kb/viewContent.do?externalId=11186)
```
diagnose sniffer packet <interface> '<filter>' <verbose> <count>
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
