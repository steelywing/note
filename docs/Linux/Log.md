# Log

## Kernel log

Show kernel log ring buffer

|||
-|-
`-H` \| `--human` | human readable output

```sh
dmesg [-H]
```

## lastlog

Most recent login of user

:::info

`/var/log/lastlog` is binary file

:::

```sh
lastlog [-u <user>]
```

## syslog

`syslog` service

```sh title="Ubuntu"
/var/log/syslog
```

```sh title="Red Hat"
/var/log/messages
```
