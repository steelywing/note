---
sidebar_label: Option
---

# Option - OpenVPN

> Ref: [server.conf](https://github.com/OpenVPN/openvpn/blob/release/2.6/sample/sample-config-files/server.conf)

> Ref: [Reference](https://openvpn.net/community-resources/reference-manual-for-openvpn-2-6/)

> Ref: [2x HOW TO](https://openvpn.net/community-resources/how-to/)

Any CLI option can be placed in a configuration, without the prefix `--`

| CLI Option | Config |
|-|-|
| `--dev tun` | `dev tun` |

## Remote

Connect to remote server `<host>`

- Can have multiple `remote`, OpenVPN try one by one

```sh
# remote <host> [<port> [<proto>]]
```

```sh
remote 10.0.0.1 1194 udp

# equivalent to

remote 10.0.0.1
port 1194
proto udp
```

## TCP / UDP

```sh
# proto { tcp | udp | tcp4 | udp4 | tcp6 | udp6 }
proto udp
```

## Tunnel mode

| | |
|-|-|
| `tap` | Link (MAC) layer tunnel |
| `tun` | Internet (IP) layer tunnel |

```sh
# dev {tun|tap}[<device digit>]
dev tap     # dynamic device
dev tap0    # specify device 0
dev tun     # dynamic device
dev tun1    # specify device 1
```

## Compress traffic

```sh
comp-lzo
```

## Keep alive

| | |
|-|-|
| `<interval>` | send ping every `<interval>` second |
| `<timeout>` | restart if ping is not received for `<timeout>` seconds |

```sh
# keepalive <interval> <timeout>
keepalive 10 60
```

## Ping timer

Start ping timeout timer only if remote peer connected

```sh
ping-timer-rem
```

## Persist tunnel

Don't re-open device when restart

```sh
persist-tun
```

## Persist key

Don't re-read key when restart

```sh
persist-key
```

## Route

Add route after connected

```sh
# route <IP subnet> [<subnet mask>] [<gateway>]
```

## Push

Push option to client

- The client must enable `pull` option

```sh
# push "..."

push "route 10.0.0.0 255.255.255.0"
```

## Client

```sh
client

# is equivalent to

pull
tls-client
```

## Pull

Accept server `push "..."` option

```sh
pull
```

## `tls-auth`

```sh
# tls-auth <ta.key> [ 0 | 1 ]

tls-auth ta.key 0

# is equivalent to

tls-auth ta.key
key-direction 0
```

## Inline

Inline / Embed file

Directive support inline:

`ca`, `cert`, `dh`, `extra-certs`, `key`, `pkcs12`, `secret`, `crl-verify`, `http-proxy-user-pass`, `tls-auth`, `auth-gen-token-secret`, `peer-fingerprint`, `tls-crypt`, `tls-crypt-v2`, `verify-hash`

```
<ca>
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
</ca>


<cert>
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
</cert>
```
