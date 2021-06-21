## Unit

> Reference: `man systemd.unit`

- Unit = Configuration file
- `.ini` like syntax
- Include:
  - `.service`
  - `.socket`
  - `.device`
  - `.mount`
  - `.automount`
  - `.swap`
  - `.target`
  - `.path`
  - `.timer`
  - `.slice`
  - `.scope`

## Path

| Path | Description |
|-|-|
| `/etc/systemd/system` | Local configuration |
| `/run/systemd/system` | Runtime units |
| `/lib/systemd/system` | Units of installed packages |

## Override

- `/etc/systemd/system` override
- `/run/systemd/system` override
- `/lib/systemd/system`

If `/etc/systemd/system/httpd.service` exist, the `/lib/systemd/system/httpd.service` is not parsed at all anymore.

## Enable / Disable service auto start

```bash
systemctl { enable | disable } <service>
```

## Start / Stop service

```bash
systemctl { start | stop } <service>
```

## Show service status

```bash
systemctl status <service>
```

### Update `systemd` unit file

```bash
systemctl daemon-reload
```
