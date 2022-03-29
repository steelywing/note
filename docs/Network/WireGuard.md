# WireGuard

:::tip

`AllowedIPs` cannot overlap, WireGuard use this to choose peer

:::

### Key Generation

> [Ref](https://www.wireguard.com/quickstart/)

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

### CLI

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

```bash
# Peer A
ip address add dev wg0 10.0.0.1/24
```

```bash
# Peer B
ip address add dev wg0 10.0.0.2/24
```

If only 2 peers, peer to peer also works

```bash
ip address add dev wg0 10.0.0.1 peer 10.0.0.2
```

Use config file

```bash
wg setconf wg0 wg0.conf
```

or CLI

```bash
# Peer A
wg set wg0 listen-port 10100 private-key /path/to/private-key peer <peer B public key> allowed-ips 10.0.0.2/32,10.0.2.0/24
```

```bash
# Peer B
wg set wg0 listen-port 10100 private-key /path/to/private-key peer <peer A public key> allowed-ips 10.0.0.1/32,10.0.1.0/24 endpoint 1.1.1.1:10100
```

```bash
ip link set up dev wg0
```

### Config

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
PrivateKey = AM/sFBkkiMGL4iGUMV1RO+cVmeaHcE5uGg/xxUoDsH0=

[Peer]
PublicKey = cWlZ8WRv4D0bGACuHwXGfmudZeMsFDYiVSmjPlVc0ko=
AllowedIPs = 10.0.0.1/32, 10.0.1.0/24

# Route all traffic to Peer A
# AllowedIPs = 0.0.0.0/0
```

### Show status

```bash
wg
```

### Show config

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

```bash
opkg install luci-app-wireguard
/etc/init.d/network restart
```
