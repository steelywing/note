# Packet Sniffer

[Reference](http://kb.fortinet.com/kb/viewContent.do?externalId=11186)
```
diagnose sniffer packet <interface> '<filter>' <verbose> <count>
```

# SSH public key

[Reference](https://kb.fortinet.com/kb/documentLink.do?externalID=11985)

```
config system admin
edit <user>
set ssh-public-key1 "{ssh-rsa|ssh-dss} <key>"
end
```

# TLS certificate

[Reference](https://kb.fortinet.com/kb/viewContent.do?externalId=FD36557&sliceId=1)

## Import certificate

```
config vpn certificate local
edit <certificate name>
set private-key "<PEM key>"
set certificate "<PEM certificate>"
end
```

## Show certificate

```
config vpn certificate local
edit <certificate name>
show full-configuration
end
```
