# NetPlan

> Ref: [NetPlan documentation](https://netplan.readthedocs.io/en/stable/examples/)

- Ubuntu 18 - 22 network manager
- Config files path: `/etc/netplan/*.yaml`
- Config file name:
  - 1st config: `01-<name>.yaml`
  - 2nd config: `02-<name>.yaml`
  - ...
  - `<name>` can be whatever

```sh
# Package info
apt show netplan.io
```

## Config

```yaml
network:
    version: 2
    ethernets:
        # <interface name>:
        enp5s0:
            # dhcp4: true
            addresses:
            # - <IP address>/<net mask>
            - 10.0.0.10/24
            nameservers:
                addresses:
                # - <IP address>
                - 10.0.0.1
                search:
                # - <search domain>
                - example.org
            routes:
            - to: default
              # via: <IP address>
              via: 10.0.0.1
              # metric: <metric>
```

```yaml
# addresses: [<IP address>/<net mask>, ...]
addresses: [10.0.0.10/24]

# same as

addresses:
- 10.0.0.10/24
```

## Apply

```sh
sudo netplan apply
```
