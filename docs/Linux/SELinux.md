# SELinux

> Video Guide: [Security-Enhanced Linux for mere mortals](https://youtu.be/_WOKRaM-HI4)

- RedHat use SELinux by default
- Debian / Ubuntu use AppArmor by default

|-|-|
|-|-|
| Enforcing | apply policy |
| Permissive | log but do not apply policy |

## Get SELinux status

```bash
getenforce
```

Status detail

```bash
sestatus [-v]
```

## Set SELinux status

```bash
setenforce { Enforcing | Permissive | 1 | 0 }
```

## View SELinux label

```sh
ls -Z
id -Z
ps -Z
ss -Z
netstat -Z
```

## Troubleshoot

```sh
yum install setroubleshoot setroubleshoot-server
service auditd restart

# systemctl cannot restart, see https://bugzilla.redhat.com/show_bug.cgi?id=1026648
# systemctl restart auditd.service
```

### View SELinux error and suggestion

```sh
journalctl
```

### Set context to default

- moved (`mv`) file will not change context
- SELinux use config file `/etc/selinux/targeted/contexts/files/file_contexts` to set default context

| | |
|-|-|
| `-r` \| `-R` | recursive |
| `-v` | verbose, show changes in file labels |

```sh
restorecon [<options>] <path>
```

### Add default context of a path

```sh
semanage fcontext -a -t <context type> <path RegExp>
```

Set `/web` default context to `httpd_sys_content_t`

```sh
semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"
restorecon -v -R /web
```

Set default context of `/web` by reference

- SELinux will replace `/web` by `/var/www/html` when set default context

```sh
semanage fcontext -a -e /var/www/html /web
restorecon -v -R /web
```

### Change context by reference

```sh
chcon --reference <reference path> <path>
```

### Create policy module for an app

Set mode to `Permissive`

```sh
setenforce 0
```

Run the app

Check the log

```sh
journalctl
```

Follow the suggestion

```sh
grep <app> /var/log/audit/audit.log | audit2allow -M <app>
semodule -i <app>.pp
```

Set mode to `Enforcing`

```sh
setenforce 1
```

## Re-label the entire file system

Set mode to `Permissive`

```sh
setenforce 0
```

Create a empty file `.autorelabel` in the root directory

```sh
touch /.autorelabel
```

Reboot

```sh
reboot
```
