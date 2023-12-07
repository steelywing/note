# WireGuard

> Ref: [Quick Start](https://www.wireguard.com/quickstart/)

## Key Generation

Private Key

```bash
umask 077
wg genkey > private-key
```

Public Key

```bash
wg pubkey < private-key > public-key
```

Private and Public Key

```bash
wg genkey | tee private-key | wg pubkey > public-key
```

## CLI

Peer A
- Public IP `1.1.1.1`
- LAN `10.0.1.0/24`
- UDP port `10100`

Peer B
- Public IP: `2.2.2.2`
- LAN: `10.0.2.0/24`
- UDP port `random`

```bash
ip link add dev wg0 type wireguard
```

```bash title="Peer A"
ip address add dev wg0 10.0.0.1/24
```

```bash title="Peer B"
ip address add dev wg0 10.0.0.2/24
```

If there are only 2 peers, peer to peer also works

```bash
ip address add dev wg0 10.0.0.1 peer 10.0.0.2
```

## Config

:::tip

- `AllowedIPs` cannot overlap
- WireGuard use `AllowedIPs` to choose peer
- Set `Endpoint` to the peer to initiate the connection

:::

### Method 1

Use config file

Peer A

```ini
[Interface]
Address = 10.0.0.1/24
PrivateKey = 4IMHVUu9Ug0oujxxWdOiZXMQ74Sq5gag5ND6cbaIQX4=
ListenPort = 10100

[Peer]
PublicKey = /QgJoWF3KA2K5CHPfIc/T0KhXKuFe1k5V75mQuK5vEo=
AllowedIPs = 10.0.0.2/32, 10.0.2.0/24
```

Peer B

```ini
[Interface]
Address = 10.0.0.2/24
# DNS = 10.0.0.2, fd00::1
PrivateKey = AM/sFBkkiMGL4iGUMV1RO+cVmeaHcE5uGg/xxUoDsH0=

[Peer]
PublicKey = cWlZ8WRv4D0bGACuHwXGfmudZeMsFDYiVSmjPlVc0ko=
AllowedIPs = 10.0.0.1/32, 10.0.1.0/24
Endpoint = 1.1.1.1:10100

# for routing all traffic to Peer A
# AllowedIPs = 0.0.0.0/0
```

```bash
wg setconf wg0 wg0.conf
```

### Method 2

Use CLI parameters

```bash
# Peer A
wg set wg0 listen-port 10100 private-key "/path/to/private-key" peer "<peer B public key>" allowed-ips 10.0.0.2/32,10.0.2.0/24
```

```bash
# Peer B
wg set wg0 listen-port 10100 private-key "/path/to/private-key" peer "<peer A public key>" allowed-ips 10.0.0.1/32,10.0.1.0/24 endpoint 1.1.1.1:10100
```

```bash
ip link set up dev wg0
```

## Route to WireGuard interface

- `AllowedIPs` will auto create route, don't need to manually add route

```sh
ip route add <subnet>/<mask> dev wg0
```

Peer A

```sh
ip route add 10.0.2.0/24 dev wg0
```

Peer B

```sh
ip route add 10.0.1.0/24 dev wg0
```

## Show status

```bash
wg
```

## Show config

```bash
wg showconf
```

## `wg-quick`

Setup interface using config in `/etc/wireguard/`

```bash
# Use /etc/wireguard/wgnet0.conf
wg-quick up wgnet0
```

or

```bash
wg-quick up /path/to/wgnet0.conf
```

## OpenWRT

```sh
opkg install luci-app-wireguard
/etc/init.d/network restart
```
