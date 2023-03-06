# Static Key

> Ref: [Static Key Mini-HOWTO](https://openvpn.net/community-resources/static-key-mini-howto/)

- 1 Client, 1 Server (P2P)

## Generate a static key

```sh
openvpn --genkey --secret static.key
```

## Server config

```openvpn
dev tun
ifconfig 10.0.0.1 10.0.0.2
secret static.key
```

## Client config

```openvpn
remote <server host name / IP address>
dev tun
ifconfig 10.0.0.2 10.0.0.1
secret static.key

# route 192.168.0.0/16 to remote server
route 192.168.0.0 255.255.0.0
```
