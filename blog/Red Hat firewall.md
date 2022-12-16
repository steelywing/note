---
tags: [Red Hat, Firewall, Network]
---

# Red Hat firewall

> Ref: [Working with Zones | Red Hat](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/security_guide/sec-working_with_zones)

> Ref: [Secure your Linux network with firewall-cmd](https://www.redhat.com/sysadmin/secure-linux-network-firewall-cmd)

- Interface can be assigned to a zone
- Policy (ACL) can apply to zone

<!--truncate-->

## Zone

### List zones

```sh
firewall-cmd --get-zones
```

### Show zone detail

```sh
firewall-cmd --list-all [--zone=<zone name>]
```

### Show all zone detail

```sh
firewall-cmd --list-all-zones
```

### Get default zone

```sh
firewall-cmd --get-default-zone
```

### Set default zone

```sh
firewall-cmd --set-default-zone <zone name>
```

### Assign interface to a zone

```sh
firewall-cmd --zone=<zone name> --change-interface=<interface name>
```

## Service

Service / Rule / ACL

### Add service / TCP / UDP port

```sh
firewall-cmd --add-service=<service> [--zone=<zone name>] [--permanent]
```

Option | Description
-|-
default | add service to runtime, not permanent
`--permanent` | add service to permanent, not runtime

Allow SSH

```sh
firewall-cmd --add-service=ssh
```

### List all service

```sh
firewall-cmd --get-services
```

### Add port

```sh
firewall-cmd --add-port <port>/{udp|tcp}
```

Add TCP port 8080

```sh
firewall-cmd --add-port 8080/tcp

# save
firewall-cmd --runtime-to-permanent
```

### Remove port

```sh
firewall-cmd --remove-port <port>/{udp|tcp}
```

Remove TCP port 8080

```sh
firewall-cmd --remove-port 8080/tcp

# save
firewall-cmd --runtime-to-permanent
```

## Make runtime setting persistent

Save runtime setting

```sh
firewall-cmd --runtime-to-permanent
```

## Reload

Reload to apply permanent rule to runtime

```sh
firewall-cmd --reload
```
