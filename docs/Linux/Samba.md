# Samba

Samba / SMB / Server Message Block

- File Server
- Member Server
- Active Directory Domain Controller
- Support `idmap`:
  - WinBind
    - More compatible
  - [SSSD](https://sssd.io/) ([Not fully support](https://access.redhat.com/articles/4355391))
    - SSSD mainly for Linux joining AD, use AD account to login Linux
    - Newer than WinBind
    - More secure

| | |
|-|-|
| ID / UID | Linux ID of user |
| SID | Windows ID of user |

## `realm` CLI

> Ref: [Member server in an Active Directory domain](https://ubuntu.com/server/docs/samba-active-directory)

- Discover / Join / Leave / List realm (domain)
- Use to auto setup SSSD / SMB / Kerberos config
- `realm` use kerberos credential cache

### List `realm` command

```sh
realm
```

### Discover realm

```sh
# realm discover [-v] [<realm>]
realm discover -v
```

### Join realm

Join with default software (SSSD)

```sh
# realm join [-v] [-U <user>] <realm>
realm join -v -U Administrator example.com
```

Join with Samba and WinBind

- If join successful, `realm` will update `/etc/samba/smb.conf`, and other config

```sh
realm join -v --membership-software=samba --client-software=winbind example.com
```

If join failed, try clear kerberos tickets

### List realm

```sh
realm list
```

```sh
example.com
  type: kerberos
  realm-name: EXAMPLE.COM
  domain-name: example.com
  configured: kerberos-member
  server-software: active-directory
  client-software: winbind
  required-package: libnss-winbind
  required-package: winbind
  required-package: libpam-winbind
  required-package: samba-common-bin
  login-formats: %U
  login-policy: allow-any-login
```

### Leave realm

```sh
# realm leave [-v] [<realm>]
realm leave
```

## Clear samba `idmap` cache

> Ref: [ID Mapping](https://lists.samba.org/archive/samba/2020-November/233323.html)

- Need to clear after changing `idmap`

```sh
systemctl stop winbind smbd
net cache flush
systemctl start winbind smbd
```

## Kerberos

List Kerberos cached tickets

```sh
klist
```

Clear Kerberos cached tickets

```sh
# kdestroy [-A] [-c cache_name] [-p princ_name]
kdestroy -A
```

## Test and dump Samba config

```sh
testparm [-s]
```

## Reload config

:::caution

This does not reload

```sh
smbcontrol smbd reload-config
```

:::

```sh
systemctl restart smbd.service
```

## Check domain / WinBind user

- If `/etc/nsswitch.conf` has added `winbind`, `id` command can check domain user
- Check `idmap` info

```conf title="/etc/nsswitch.conf"
passwd:         files systemd winbind
group:          files systemd winbind
```

```sh
# id '<domain>\<user>'
# id '<user>@<domain>'
id 'EXAMPLE\user'
id 'user@example.com'
```

```text
uid=11000(user) gid=10500(domain users) groups=10500(domain users)
```

## List WinBind users

```sh
wbinfo -u
```

## Enable Extended ACL Support

> Ref: [Setting up a Share Using Windows ACLs](https://wiki.samba.org/index.php/Setting_up_a_Share_Using_Windows_ACLs)

```ini
[global]
vfs objects = acl_xattr
map acl inherit = yes
```

## Audit

- Log to `syslog`

> Ref: `man vfs_audit`

```ini
[global]

# Log the following Samba VFS operations:
# connect disconnect opendir mkdir rmdir open close rename unlink chmod fchmod

vfs objects = audit
# audit:facility = local1
# audit:priority = info
```

> Ref: `man vfs_full_audit`

- VFS full audit operations change in different version, even `man vfs_full_audit` is not updated
- If un-supported operation is set, `all` is used
  
  > Ref: `init_bitmap()` in [`vfs_full_audit.c`](https://github.com/samba-team/samba/blob/master/source3/modules/vfs_full_audit.c)

```ini
[global]

# Log specified Samba VFS operations
# https://www.samba.org/samba/docs/current/man-html/vfs_full_audit.8.html

vfs objects = full_audit
# Default
# full_audit:prefix = %u|%I

full_audit:failure = connect disconnect opendir closedir mkdir rmdir open close rename unlink
full_audit:success = connect disconnect opendir closedir mkdir rmdir open close rename unlink

# auth, authpriv, cron, daemon, kern, lpr, mail, mark, news, syslog, user, uucp, local0, ..., local7
full_audit:facility = local1

# debug, info, notice, warning, err, crit, alert, emerg
full_audit:priority = info
```

## Samba member server (ADS) config

```ini
[global]
    security = ADS
    realm = EXAMPLE.COM
    workgroup = EXAMPLE
    kerberos method = secrets and keytab
    winbind enum users = yes
    winbind enum groups = yes
    winbind offline logon = Yes
    winbind refresh tickets = Yes

    # Access ID without domain
    # `id user` = `id 'EXAMPLE\user'`
    winbind use default domain = Yes

    idmap config EXAMPLE : range = 2000000-2999999
    idmap config EXAMPLE : backend = rid
    idmap config * : range = 1000000-1999999
    idmap config * : backend = tdb
```
