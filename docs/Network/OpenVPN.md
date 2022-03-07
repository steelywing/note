# OpenVPN

## CCD

```
client-config-dir <path>
```

- Client-specific configuration
- When client connected, OpenVPN will look in this directory for a file having the same name as the client's X509 common name, and add to server config

## Site to Site

> - [OpenVPN](https://community.openvpn.net/openvpn/wiki/RoutedLans)
> - [OpenWRT](https://openwrt.org/docs/guide-user/services/vpn/openvpn/extras)
> - [pfSense](https://docs.netgate.com/pfsense/en/latest/troubleshooting/openvpn-iroute.html)

- Server: `10.10.0.0/24`
- Client 1: `10.10.1.0/24`
- Client 2: `10.10.2.0/24`

### Server side

```sh
# server.ovpn

# ...

# Add route to server kernel
# Route this network from kernel to OpenVPN
route 10.10.1.0 255.255.255.0
route 10.10.2.0 255.255.255.0

# Tell client to route this network over the VPN
push "route 10.10.0.0 255.255.255.0"
push "route 10.10.1.0 255.255.255.0"
push "route 10.10.2.0 255.255.255.0"

# Allow Client to Client
client-to-client

client-config-dir ccd
```

- Use CCD to add `iroute`
- Without `iroute`, OpenVPN doesn't know where to forward the client network, and OpenVPN will drop the packet
- `iroute` must be in CDC context, OpenVPN need to know which client own the network
- If `iroute x.x.x.x` match `push "route x.x.x.x"`, OpenVPN will not push the route

```sh
# ./ccd/<Client 1 X509 common name>

iroute 10.10.2.0 255.255.255.0
```

```sh
# ./ccd/<Client 2 X509 common name>

iroute 10.10.3.0 255.255.255.0
```

- WireGuard VPN is simpler
