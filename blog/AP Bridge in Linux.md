---
date: 2024-06-17
tags: [WiFi, Network, Linux, Raspberry Pi]
---

# Linux as WiFi AP Bridge

For Linux / Raspberry Pi

<!--truncate-->

## Method 1: Use `Network Manager`

> Ref: [Configuration - Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/computers/configuration.html#use-your-raspberry-pi-as-a-network-bridge)

- **Recommended**

### Bridge interface

Create the bridge interface

```sh
sudo nmcli connection add type bridge con-name 'Bridge' ifname br0
```

Add `eth0` to the bridge

```sh
sudo nmcli connection add type ethernet slave-type bridge \
    con-name 'Ethernet' ifname eth0 master br0
```

Add a HotSpot to the bridge

```sh
sudo nmcli connection add con-name 'HotSpot' \
    ifname wlan0 type wifi slave-type bridge master br0 \
    wifi.mode ap wifi.ssid Hotspot wifi-sec.key-mgmt wpa-psk \
    wifi-sec.proto rsn wifi-sec.pairwise ccmp \
    wifi-sec.psk <WiFi password>
```

or

Use `nmtui` ▶ **Edit a connection** ▶ **Bridge** ▶ **Edit...** ▶ **Add** ▶ **WiFi** ▶

| | |
|-|-|
| Profile name | `HotSpot` |
| Device | `wlan0` |
| SSID | `Hot Spot` |
| Mode | `Access Point` |
| Security | `WPA & WPA2 Personal` or `WPA3 Personal` |
| Password | `<Password>` |

### Activate the interface

Activate the bridge

```sh
sudo nmcli connection up Bridge
```

Active the HotSpot

```sh
sudo nmcli connection up HotSpot
```

## Method 2: Use `hostapd`

- Unable to auto activate the bridge at boot

### Install `hostapd`

```sh
sudo apt update
sudo apt install hostapd
```

### Bridge interface

For `systemd-networkd`:

> Ref: [Network bridge - ArchWiki](https://wiki.archlinux.org/title/Network_bridge#With_NetworkManager)

#### Method 1

Use the `nmtui` (Text UI) to create

#### Method 2

Create a bridge `br0`

```sh
sudo nmcli connection add type bridge ifname br0
```

Add the interface `eth0` to the bridge

```sh
sudo nmcli connection add type bridge-slave ifname eth0 master br0
```

Bring the bridge interface up

```sh
sudo nmcli connection up bridge-br0
sudo nmcli connection up bridge-slave-eth0
```

:::note

Bridge interface does NOT need `sudo sysctl net.ipv4.ip_forward=1`

:::

### Config `hostapd`

> Ref: [`hostapd.conf`](https://w1.fi/cgit/hostap/plain/hostapd/hostapd.conf)

Create the config file `/etc/hostapd/hostapd.conf`

| `hw_mode` | Description |
|-|-|
| `a` | IEEE 802.11a (5 GHz) |
| `b` | IEEE 802.11b (2.4 GHz) |
| `g` | IEEE 802.11g (2.4 GHz) |
| `ad` | IEEE 802.11ad (60 GHz) |

```ini title="/etc/hostapd/hostapd.conf"
interface=wlan0
bridge=br0
hw_mode=g
channel=7


# 0 = accept unless in deny list
# 1 = deny unless in accept list
# 2 = use external RADIUS server (accept/deny lists are searched first)

# macaddr_acl=0


# Empty SSID
# default: disabled (0)
# 1 = send empty (length=0) SSID in beacon and ignore probe request for
#     broadcast SSID
# 2 = clear SSID (ASCII 0), but keep the original length (this may be required
#     with some clients that do not support empty SSID) and ignore probe
#     requests for broadcast SSID

# ignore_broadcast_ssid=0


ssid=<WiFi SSID>

# 1=WPA, 2=WEP, 3=Both
auth_algs=1

# Bit 0 = WPA, Bit 1 = WPA2 and WPA3
wpa=2

wpa_passphrase=<WiFi password>
wpa_key_mgmt=WPA-PSK
wpa_pairwise=TKIP
rsn_pairwise=CCMP
```

Restart `hostapd`

```sh
sudo systemctl restart hostapd.service
```
