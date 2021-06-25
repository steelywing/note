# Service / Daemon

For [`systemd` (Ubuntu 16, Red Hat 7)](systemd.md)

For System V

## Add / Delete service
```bash
# Red Hat
chkconfig { --add | --del } <service>
```

## Enable / Disable service auto start

```bash
# Ubuntu <= 14
update-rc.d <service> { enable | disable }

# Red Hat <= 6
chkconfig <service> { on | off }
```

## Start / Stop service

```bash
# Ubuntu <= 14 and Red Hat <= 6
service <service> { start | stop }
```

## Show service status

```bash
# Ubuntu <= 14 and Red Hat <= 6
service <service> status
```
