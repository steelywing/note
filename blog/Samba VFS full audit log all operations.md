---
date: 2023-08-02
tags: [Samba, SMB]
---

# Samba VFS full audit log all operations

> Ref: `man vfs_full_audit`

<!--truncate-->

Enable `full_audit`

```ini
[global]
# enable "full_audit"
vfs objects = full_audit

# the log message prefix, the default is "%u|%I"
# full_audit:prefix = %u|%I

# log successful "connect", "disconnect" operations
full_audit:success = connect disconnect

# log all failure operations except "open"
full_audit:failure = all !open
```

:::info

- VFS full audit operations are different in different version, even `man vfs_full_audit` is not updated
- If un-supported operation is set, `all` is used

:::

## Log level

- Higher log level ▶ More detailed log

To set `full_audit` log level to 10 (debug)

```ini
[global]
log level = full_audit:10
# log level = full_audit:10@/var/log/samba/audit.log
```

To set all `log level` to 10 (debug)

```ini
[global]
log file = /var/log/samba/log.%m
log level = 10
```

Now, access Samba from client, Samba will log the debug message

## Find the un-supported operations

```sh
grep -r "Could not find opname" /var/log/samba/
```

> ```sh
> /var/log/samba/log.user-pc.old:  Could not find opname chmod, logging all
> ```
