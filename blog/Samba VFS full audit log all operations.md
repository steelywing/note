---
date: 2023-08-02
tags: [Samba, SMB]
---

# Samba VFS full audit log all operations

- VFS full audit operations change in different version, even `man vfs_full_audit` is not updated
- If un-supported operation is defined, `all` is used

<!--truncate-->

Full audit config (this version does not have `chmod`)

```ini
[global]
vfs objects = full_audit
map acl inherit = yes
full_audit:failure = connect disconnect chmod
full_audit:success = connect disconnect chmod
```

Set `full_audit` log level

```ini
[global]
log level = full_audit:10@/var/log/samba/audit.log
# log level = full_audit:10
```

or set `log level` to debug

```ini
[global]

log file = /var/log/samba/log.%m
log level = 10
```

Access Samba from client, Samba will log the debug message

Find the un-supported operations

```sh
grep -r "Could not find opname" /var/log/samba/
```

> ```sh
> /var/log/samba/log.user-pc.old:  Could not find opname chmod, logging all
> ```
