# Table of Contents
- [Table of Contents](#Table-of-Contents)
- [User](#User)
  - [Add user](#Add-user)
  - [Delete user](#Delete-user)
  - [Change password](#Change-password)
  - [Delete password](#Delete-password)
  - [Lock user](#Lock-user)
  - [Unlock user](#Unlock-user)
  - [Expire user password (force user to change password)](#Expire-user-password-force-user-to-change-password)
  - [Set password expire day](#Set-password-expire-day)
  - [Change / Override user's primary group](#Change--Override-users-primary-group)
  - [Change / Override user's supplementary groups](#Change--Override-users-supplementary-groups)
  - [Add user's supplementary groups](#Add-users-supplementary-groups)
  - [User database file](#User-database-file)
  - [Password file](#Password-file)
- [Date](#Date)
  - [Set date](#Set-date)
  - [RTC in the local time](#RTC-in-the-local-time)
  - [RTC in the UTC](#RTC-in-the-UTC)
  - [Convert timestamp to date time](#Convert-timestamp-to-date-time)
- [Shell](#Shell)
  - [Indicate command type](#Indicate-command-type)
- [Preserve file timestamp after edit (`bash`)](#Preserve-file-timestamp-after-edit-bash)
- [GRUB](#GRUB)
  - [Show GRUB when boot](#Show-GRUB-when-boot)
  - [Update GRUB config](#Update-GRUB-config)
  - [GRUB auto-generate config path](#GRUB-auto-generate-config-path)
  - [GRUB option](#GRUB-option)
  - [Set default to last selected option](#Set-default-to-last-selected-option)
- [Hardware](#Hardware)
- [Kernel](#Kernel)
  - [Kernel info](#Kernel-info)
  - [Kernel module](#Kernel-module)
- [Jobs](#Jobs)
- [File permission](#File-permission)
  - [~~Only change directory permission~~](#Only-change-directory-permission)
  - [~~Only change file permission~~](#Only-change-file-permission)
  - [Recursive change file permission to `644`, directory to `755`](#Recursive-change-file-permission-to-644-directory-to-755)
- [File attribute](#File-attribute)
  - [List attribute](#List-attribute)
  - [Change attribute](#Change-attribute)
- [SELinux](#SELinux)
  - [Get SELinux status](#Get-SELinux-status)
  - [Set SELinux status](#Set-SELinux-status)
- [Service](#Service)
  - [Add / Delete service](#Add--Delete-service)
  - [Enable / Disable service auto start](#Enable--Disable-service-auto-start)
  - [Start / Stop service](#Start--Stop-service)
  - [Show service status](#Show-service-status)
- [Manual / Help](#Manual--Help)
- [Time](#Time)
- [DNS](#DNS)
- [Sharing desktop](#Sharing-desktop)
  - [Disable sharing desktop encryption (Ubuntu)](#Disable-sharing-desktop-encryption-Ubuntu)
- [Disk](#Disk)
  - [Disk usage](#Disk-usage)
  - [Disk benchmark](#Disk-benchmark)
    - [Write speed](#Write-speed)
    - [Read speed](#Read-speed)
- [Find](#Find)
- [Directory Stack](#Directory-Stack)
  - [Push directory](#Push-directory)
  - [Pop and change to the directory](#Pop-and-change-to-the-directory)
  - [List directory stack](#List-directory-stack)
- [cron / crontab](#cron--crontab)
- [OpenJDK (Java)](#OpenJDK-Java)
  - [List installed JVM](#List-installed-JVM)
  - [Switch JVM](#Switch-JVM)
- [Linux Distribution / Version](#Linux-Distribution--Version)
- [Mount](#Mount)
  - [Remount mount point in fstab](#Remount-mount-point-in-fstab)
  - [Lists all mounted filesystems](#Lists-all-mounted-filesystems)
  - [Mount CIFS / SMB / Windows Shared Folder](#Mount-CIFS--SMB--Windows-Shared-Folder)
- [Package management](#Package-management)
  - [Install Development Tools](#Install-Development-Tools)
  - [Add EPEL repository to CentOS / RHEL](#Add-EPEL-repository-to-CentOS--RHEL)
  - [Download package with dependence](#Download-package-with-dependence)
  - [List installed package](#List-installed-package)
- [Last login](#Last-login)
  - [Suppress `Last Login` message](#Suppress-Last-Login-message)
  - [Clear last login log](#Clear-last-login-log)
  - [Disable logging last login](#Disable-logging-last-login)

# User

## Add user
```sh
useradd <user> [-d <home directory>] [-g <group>] [-G <supplementary group>[,...]] [-s <shell>]

# Debian only
adduser <user>
```

## Delete user
```sh
userdel <user>

# Debian only
deluser <user>
```

## Change password
```sh
passwd [<user>]
```

## Delete password
```sh
passwd -d <user>
```

## Lock user
```sh
passwd -l <user>
```

## Unlock user
```sh
passwd -u <user>
```

## Expire user password (force user to change password)
```sh
passwd -e <user>
```

## Set password expire day
```sh
passwd -x <day> <user>
```

## Change / Override user's primary group
```sh
usermod -g <group> <user>
```

## Change / Override user's supplementary groups
```sh
usermod -G <group>[,...] <user>
```

## Add user's supplementary groups
```sh
usermod -aG <group>[,...] <user>
```

## User database file
```sh
/etc/passwd
```

## Password file
```sh
/etc/shadow
```

# Date

## Set date

```sh
timedatectl set-time [<YYYY>-<MM>-<DD>] [<HH>:<MM>:<SS>]
```

## RTC in the local time

```sh
timedatectl set-local-rtc { true | t | yes | y | 1 }
```

## RTC in the UTC

```sh
timedatectl set-local-rtc { false | f | no | n | 0 }
```

## Convert timestamp to date time

```sh
date -d @<timestamp>
```


# Shell

```sh
# Shell list
cat /etc/shells

# Chanage shell
chsh -s <shell> [<user>]
# or
usermod -s <shell> <user>

# Open file manager from CLI
xdg-open <path>
```

## Indicate command type

Type: function, builtin, or file

```sh
type [-a] <command>
```

# Preserve file timestamp after edit (`bash`)
```sh
vi-preserve-time () {
    for file in "$@"; do
        local mtime=$(stat -c %y "$file")
        vi "$file"
        touch -d "$mtime" "$file"
    done
}
```


# GRUB

## Show GRUB when boot

Hold `Shift` when boot

## Update GRUB config
Find all OS, update GRUB config, install GRUB to MBR / UEFI
```sh
update-grub
```

## GRUB auto-generate config path
```sh
/boot/grub/grub.cfg
```

## GRUB option
```sh
vi /etc/default/grub
```

## Set default to last selected option
File `/etc/default/grub`
```sh
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true
```


# Hardware

| Command | Description |
| --- | --- |
| `lsusb` | List USB devices |
| `lsblk` | List block devices |
| `lspci` | List PCI devices |
| `lspci -nn` | List PCI devices and devices code |
| `lspci -k` | List PCI devices and kernel driver |
| `cat /proc/cpuinfo` | Show CPU info |
| `free` | Show memory info |
| `df` | Disk free space |
| `df -h` | Disk free space in human readable format |


# Kernel

## Kernel info
```sh
uname -a
```

## Kernel module

`module-name` is same as `module_name`

| Command | Description |
| --- | --- |
| `lsmod` | List module |
| `insmod <module>` | Add module |
| `rmmod <module>` | Remove module |
| `modprobe <module>` | Add module and dependencies |
| `modprobe -r <module>` | Remove module and dependencies |
| Add `blacklist <module>` to `/etc/modprobe.d/*.conf` | Blacklist module |
| Add `install <module> /bin/false` to `/etc/modprobe.d/*.conf` | Blacklist module even other modules depend on it |


# Jobs

[Reference](http://www.linuxnix.com/11-fc-bg-jobs-commands-know/)

| Command | Description |
| --- | --- |
| `Ctrl`+`Z` | Suspend current process |
| `Ctrl`+`C` | Terminate current process |
| `jobs` | List job |
| `<command> &` | Run command in background |
| `%[<job spec>] &` <br> `bg [%<job spec>]` | Resume job in background (default is current job) |
| `%[<job spec>]` <br> `fg [%<job spec>]` | Resume job in foreground (default is current job) |
| `kill [%<job spec>]` | Kill job |
| `disown [%<job spec>]` | Don't terminate job when terminal exit (default is all jobs) |
| `nohup <command>` | Don't terminate command when terminal exit (no hangup) |


# File permission

## ~~Only change directory permission~~

```sh
chmod <permission> $(find -type d)
```

## ~~Only change file permission~~
```sh
chmod <permission> $(find -type f)
```

## Recursive change file permission to `644`, directory to `755`
```sh
chmod -R u=rw,go=r,a+X <path>
# or
chmod -R a=r+X,u+w <path>
```

# File attribute

[Reference](http://man7.org/linux/man-pages/man1/chattr.1.html)

| Attribute | Description |
| --- | --- |
| a | append only |
| A | no atime updates |
| c | compressed |
| i | immutable |
| s | secure deletion |
| S | synchronous updates |
| u | undeletable |

## List attribute
```sh
lsattr
```

## Change attribute
```sh
chattr {+|-}<attribute> <file>
```


# SELinux

## Get SELinux status
```sh
sestatus [-v]
```

## Set SELinux status
```sh
setenforce { Enforcing | Permissive | 1 | 0 }
```

# Service

## Add / Delete service
```sh
# System V (Red Hat <= 6)
chkconfig { --add | --del } <service>
```

## Enable / Disable service auto start

```sh
# System V (Ubuntu <= 14)
update-rc.d <service> { enable | disable }

# System V (Red Hat <= 6)
chkconfig <service> { on | off }

# systemd (Ubuntu 16, Red Hat 7)
systemctl { enable | disable } <service>
```

## Start / Stop service

```sh
# System V (Ubuntu <= 14 and Red Hat <= 6)
service <service> { start | stop }

# systemd (Ubuntu 16, Red Hat 7)
systemctl { start | stop } <service>
```

## Show service status

```sh
# System V (Ubuntu <= 14 and Red Hat <= 6)
service <service> status

# systemd (Ubuntu 16, Red Hat 7)
systemctl status <service>
```

# Manual / Help

```sh
# Show manual
man [<page>]

# Search manual
apropos <keyword>
```


# Time

Force sync time

```sh
service ntpd stop
ntpd -gq
service ntpd start
```


# DNS

```sh
vi /etc/resolv.conf
```


# Sharing desktop

## Disable sharing desktop encryption (Ubuntu)

[Reference](https://askubuntu.com/a/487267/235264)

```sh
dconf-editor
# org > gnome > desktop > remote-accessand > require-encryption

# or
gsettings set org.gnome.Vino require-encryption false
```

# Disk

## Disk usage

| Command | Description |
| --- | --- |
| `-h` | Human readable |
| `-s` | Summarize: Display only a total for each argument |

Sort human readable disk usage

```sh
du -hs <path> | sort -h -r
```

## Disk benchmark

### Write speed

```sh
dd if=/dev/zero of=<file> bs=<size>[K|M|G] count=<count>[K|M|G] { conv=fsync | oflag={sync|dsync|direct} }
```

| Option | Description |
| - | - |
| `conv=fsync` | Synchronize before finishing |
| `dsync` | Synchronized I/O for data |
| `sync` | Synchronized I/O for data and meta data |
| `direct` | Direct I/O |

### Read speed

```sh
dd if=<file> of=/dev/null bs=<size>[K|M|G] [count=<count>[K|M|G]] iflag=direct
```

[drop_caches reference](https://www.kernel.org/doc/Documentation/sysctl/vm.txt)

```sh
# Synchronize cached writes to persistent storage
sync

# Free cache
echo 3 > /proc/sys/vm/drop_caches

dd if=<file> of=/dev/null bs=<size>[K|M|G] [count=<count>[K|M|G]]
```

Read speed without prior cache

```sh
hdparm -t /dev/<device>
```

Read speed with buffer

```sh
hdparm -T /dev/<device>
```

# Find

Run command in `find` result, `{}` is result path

```sh
find [<path>] [<expression>] -exec <command> {} +
```

`<command> {} +` will expand to `<command> <path> <path> ...`

```sh
find [<path>] [ [!] <expression> ] -exec <command> {} \;
```

`<command> {} \;` will expand to `<command> <path>; <command> <path>; ...`

| Expression | Description |
| - | - |
| `-name "<glob pattern>"` | Match file name |
| `-iname "<glob pattern>"` | Match file name with case insensitive |
| `-type { f | d }` | File / Directory |
| `-mtime [+|-]<days>` | Last modified time |
| `-atime [+|-]<days>` | Last accessed time |
| `-size [+|-]<size>[k|M|G]` | File size |

| Time Expression | Description |
| - | - |
| | `diff = int(day(current_time - file_time))` |
| `+<days>` | `diff > <days>` |
| `-<days>` | `diff < <days>` |
| `<days>` | `diff == <days>` |


# Directory Stack

[Reference](https://unix.stackexchange.com/a/270437/104608)

## Push directory
```sh
pushd <directory>
```

## Pop and change to the directory
```sh
popd
```

## List directory stack
```sh
dirs [-v]
```


# cron / crontab

[Reference](https://www.computerhope.com/unix/ucrontab.htm)


# OpenJDK (Java)

## List installed JVM
```sh
update-java-alternatives --list
```

## Switch JVM
```sh
update-java-alternatives --set <JVM name>
```


# Linux Distribution / Version

```sh
cat /etc/*-release
cat /proc/version
uname -a

# For SystemD
hostnamectl

# For Debian
lsb_release -a
```


# Mount

```sh
mount [-t <type>] <source> <directory>
```

## Remount mount point in fstab
```sh
# rw: read-write
mount -o remount[,rw] <directory>
```

## Lists all mounted filesystems
```sh
# -l: lable
mount [-l] [-t type]
```

## Mount CIFS / SMB / Windows Shared Folder

| Option | Description |
| --- | --- |
| `username=<username>` | Username |
| `password=<password>` | Password |
| `domain=<domain>` | Domain |
| `vers=1.0` | SMBv1 (Default) |
| `vers=2.0` | SMBv2.002 for Windows Vista SP1 and 2008 |
| `vers=2.1` | SMBv2.1 for Windows 7 and 2008R2 |
| `vers=3.0` | SMBv3.0 for Windows 8 and 2012 |
| `noperm` | Client bypass permission checks |

```sh
# mount.cifs = mount -t cifs
mount.cifs -o <option>[,...]] //<host>/<share name> <directory>
```

# Package management

## Install Development Tools

CentOS

```sh
# List available groups
yum group list

# Install "Development Tools"
yum group install "Development Tools"
```

Ubuntu

```sh
apt install build-essential
```

MSYS2

```sh
pacman -S base-devel
```

## Add EPEL repository to CentOS / RHEL

[Reference](https://fedoraproject.org/wiki/EPEL)

```sh
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

## Download package with dependence

Debian

[Reference](https://stackoverflow.com/a/41428445/1877620)

```sh
# -i = --important : Show only Depends and Pre-Depends
sudo apt-get download $(apt-cache depends --recurse -i <package> | grep -v "^[ <]")

# Install
# -m = --fix-missing : Ignore missing packages
sudo apt-get install -m --no-download ./*
```

## List installed package

Debian

```sh
apt list --installed [<package name pattern>]

# -l = --list
dpkg -l [<package name pattern>]
```

# Last login

[Reference](https://linuxconfig.org/how-to-disable-last-login-message-on-rhel-linux)

## Suppress `Last Login` message
```sh
touch ~/.hushlogin
```

## Clear last login log
```sh
> /var/log/lastlog
```

## Disable logging last login
```sh
chattr +i /var/log/lastlog
```
