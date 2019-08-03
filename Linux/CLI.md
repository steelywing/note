# Table of Contents
- [Table of Contents](#table-of-contents)
- [Command](#command)
  - [sed](#sed)
  - [awk](#awk)
  - [iptables](#iptables)
- [User](#user)
  - [Add user](#add-user)
  - [Delete user](#delete-user)
  - [Change password](#change-password)
  - [Delete password](#delete-password)
  - [Lock user](#lock-user)
  - [Unlock user](#unlock-user)
  - [Expire user password (force user to change password)](#expire-user-password-force-user-to-change-password)
  - [Set password expire day](#set-password-expire-day)
  - [Change / Override user's primary group](#change--override-users-primary-group)
  - [Change / Override user's supplementary groups](#change--override-users-supplementary-groups)
  - [Add user's supplementary groups](#add-users-supplementary-groups)
  - [User database file](#user-database-file)
  - [Password file](#password-file)
- [Date](#date)
  - [Set date](#set-date)
  - [RTC (Real-Time Clock) as the local time](#rtc-real-time-clock-as-the-local-time)
  - [RTC (Real-Time Clock) as the UTC (Coordinated Universal Time)](#rtc-real-time-clock-as-the-utc-coordinated-universal-time)
  - [Convert timestamp to date time](#convert-timestamp-to-date-time)
- [Shell](#shell)
  - [Shell list](#shell-list)
  - [Chanage shell](#chanage-shell)
  - [Open file manager from CLI](#open-file-manager-from-cli)
  - [Indicate command type](#indicate-command-type)
- [Preserve file timestamp after edit (`bash`)](#preserve-file-timestamp-after-edit-bash)
- [GRUB](#grub)
  - [Show GRUB when boot](#show-grub-when-boot)
  - [Update GRUB config](#update-grub-config)
  - [GRUB auto-generate config file](#grub-auto-generate-config-file)
  - [GRUB option](#grub-option)
  - [Set GRUB default to last selected option](#set-grub-default-to-last-selected-option)
- [Hardware](#hardware)
- [Kernel](#kernel)
  - [Kernel info](#kernel-info)
  - [Kernel module](#kernel-module)
- [Jobs](#jobs)
- [File system](#file-system)
  - [`rsync`](#rsync)
  - [ACL](#acl)
  - [File permission](#file-permission)
  - [File attribute](#file-attribute)
- [SELinux](#selinux)
  - [Get SELinux status](#get-selinux-status)
  - [Set SELinux status](#set-selinux-status)
- [Service](#service)
  - [Add / Delete service](#add--delete-service)
  - [Enable / Disable service auto start](#enable--disable-service-auto-start)
  - [Start / Stop service](#start--stop-service)
  - [Show service status](#show-service-status)
- [Manual / Help](#manual--help)
- [Time](#time)
- [DNS](#dns)
- [Sharing desktop](#sharing-desktop)
  - [Disable sharing desktop encryption (Ubuntu)](#disable-sharing-desktop-encryption-ubuntu)
- [Disk](#disk)
  - [Disk usage](#disk-usage)
  - [Disk free space](#disk-free-space)
  - [List block devices / disk](#list-block-devices--disk)
  - [I/O priority](#io-priority)
    - [`ionice` (I/O nice)](#ionice-io-nice)
  - [Disk benchmark](#disk-benchmark)
    - [Write speed](#write-speed)
    - [Read speed](#read-speed)
  - [Partition](#partition)
    - [Partition table / Disk label](#partition-table--disk-label)
    - [`fdisk`](#fdisk)
    - [`parted`](#parted)
    - [`gdisk` (GPT fdisk)](#gdisk-gpt-fdisk)
- [LVM (Logical Volume Management)](#lvm-logical-volume-management)
  - [Troubleshooting](#troubleshooting)
- [Find](#find)
- [Directory Stack](#directory-stack)
  - [Push directory](#push-directory)
  - [Pop and change to the directory](#pop-and-change-to-the-directory)
  - [List directory stack](#list-directory-stack)
- [cron / crontab](#cron--crontab)
- [OpenJDK (Java)](#openjdk-java)
  - [List installed JVM](#list-installed-jvm)
  - [Switch JVM](#switch-jvm)
- [Show Linux distribution / version](#show-linux-distribution--version)
- [Mount](#mount)
  - [Remount mount point in fstab](#remount-mount-point-in-fstab)
  - [Lists all mounted filesystems](#lists-all-mounted-filesystems)
  - [Mount CIFS / SMB / Windows Shared Folder](#mount-cifs--smb--windows-shared-folder)
- [Package management](#package-management)
  - [Install Development Tools](#install-development-tools)
  - [Add EPEL repository to CentOS / RHEL](#add-epel-repository-to-centos--rhel)
  - [Download package with dependence](#download-package-with-dependence)
  - [List installed package](#list-installed-package)
- [Last login](#last-login)
  - [Suppress `Last Login` message](#suppress-last-login-message)
  - [Clear last login log](#clear-last-login-log)
  - [Disable logging last login](#disable-logging-last-login)

# Command

## [sed](sed.md)

## [awk](awk.md)

## [iptables](iptables.md)

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

## RTC (Real-Time Clock) as the local time

```sh
timedatectl set-local-rtc { true | t | yes | y | 1 }
```

## RTC (Real-Time Clock) as the UTC (Coordinated Universal Time)

```sh
timedatectl set-local-rtc { false | f | no | n | 0 }
```

## Convert timestamp to date time

```sh
date -d @<timestamp>
```


# Shell

## Shell list

```sh
cat /etc/shells
```

## Chanage shell

```sh
chsh -s <shell> [<user>]
```

```sh
usermod -s <shell> <user>
```

## Open file manager from CLI
```sh
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

## GRUB auto-generate config file
```sh
# /boot/grub/grub.cfg
```

## GRUB option
```sh
# /etc/default/grub
```

## Set GRUB default to last selected option
```sh
# /etc/default/grub
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true
```

# Hardware

| Command | Description |
| --- | --- |
| `lsusb` | List USB devices |
| `lspci` | List PCI devices |
| `lspci -nn` | List PCI devices and devices code |
| `lspci -k` | List PCI devices and kernel driver |
| `cat /proc/cpuinfo` | Show CPU info |
| `free` | Show memory info |


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
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Suspend current process |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> | Terminate current process |
| `jobs` | List job |
| `<command> &` | Run command in background |
| `%[<job spec>] &` <br> `bg [%<job spec>]` | Resume job in background (default is current job) |
| `%[<job spec>]` <br> `fg [%<job spec>]` | Resume job in foreground (default is current job) |
| `kill [%<job spec>]` | Kill job |
| `disown [%<job spec>]` | Don't terminate job when terminal exit (default is all jobs) |
| `nohup <command>` | Don't terminate command when terminal exit (no hangup) |

# File system

## `rsync`

| Option | Description |
| - | - |
| `-a` | Archive mode, equals `-rlptgoD` (no `-H`, `-A`, `-X`) |
| `-v` | Verbose |
| `-z` | Compress during the transfer |
| `--partial` | Keep partially transferred files |
| `--progress` | Show progress |
| `-P` | `--partial --progress` |
| `-e "ssh [-p <port>]"` | Use SSH. Default use `rsync` daemon |

```sh
# <source>, <destination> = [[<user>@]<host>:]<path>
rsync <option> <source> <destination>
```

## ACL

[Reference](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/storage_administration_guide/acls-setting)

## File permission

~~Only change directory permission~~

```sh
chmod <permission> $(find -type d)
```

~~Only change file permission~~
```sh
chmod <permission> $(find -type f)
```

Change file owner and group

```sh
chown { <owner>[:<group>] | --reference <file> } <file>
```

Change file permission to `644`, directory to `755`

| Option | Description |
| - | - |
| `-R` | Recursive |

```sh
chmod [-R] u=rw,go=r,a+X <path>
```

```sh
chmod [-R] a=r+X,u+w <path>
```

## File attribute

[Reference](http://man7.org/linux/man-pages/man1/chattr.1.html)

| Attribute | Description |
| - | - |
| `a` | Append only |
| `A` | No atime updates |
| `c` | Compressed |
| `i` | Immutable |
| `s` | Secure deletion |
| `S` | Synchronous updates |
| `u` | Undeletable |

List attribute

```sh
lsattr
```

Change attribute

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

Show manual

```sh
man [<page>]
```

Search manual

```
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
```

```sh
gsettings set org.gnome.Vino require-encryption false
```

# Disk

## Disk usage

```sh
du <option> <path>
```

| Option | Description |
| --- | --- |
| `-h` | Human readable |
| `-s` | Summarize: Display only a total for each argument |

Sort human readable disk usage

```sh
du -hs <path> | sort -h -r
```

## Disk free space

| Option | Description |
| - | - |
| `-h` | Disk free space in human readable format |

```
df <option>
```

## List block devices / disk

```
lsblk
```

## I/O priority

### `ionice` (I/O nice)

Get I/O priority

```sh
ionice [-p <PID>]
```

Set I/O priority

| Class | Description |
| - | - |
| 0 | None |
| 1 | Realtime |
| 2 | Best-effort |
| 3 | Idle |

```sh
# <level> = 0 to 7, only for best-effort and realtime
ionice 
    { -c | --class } <class>
    [{ -n | --classdata } <level>] 
    { <command> | -p <PID> }
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

| Unit | Description |
| - | - |
| `c` | 1 |
| `w` | 2 |
| `b` | 512 |
| `kB` | $1000$ |
| `K` | $1024$ |
| `MB` | $1000^2$ |
| `M` | $1024^2$ |
| `GB` | $1000^3$ |
| `G` | $1024^3$ |
| `T` | $1024^4$ |
| `P` | $1024^5$ |
| `E` | $1024^6$ |
| `Z` | $1024^7$ |
| `Y` | $1024^8$ |

```sh
dd
    if=<file>
    of=/dev/null
    bs=<size>[<unit>]
    [count=<count>[<unit>]]
    iflag=direct
```

[drop_caches reference](https://www.kernel.org/doc/Documentation/sysctl/vm.txt)

```sh
# Synchronize cached writes to persistent storage
sync

# Free cache
echo 3 > /proc/sys/vm/drop_caches

dd if=<file> of=/dev/null bs=<size>[K|M|G] [count=<count>[K|M|G]]
```

Read speed test without prior cache

```sh
hdparm -t /dev/<device>
```

Read speed test with buffer

```sh
hdparm -T /dev/<device>
```

## Partition

### Partition table / Disk label

- MBR (Master Boot Record) / DOS
  - Max size 2 TiB
  - Max 4 primary partition
- GPT (GUID Partition Table)
  - Max size 8 ZiB
  - Unlimited partition (Windows support 128 partitions)

### `fdisk` 

[Reference](https://wiki.archlinux.org/index.php/Fdisk)

- Common
- Not support GPT before `util-linux` 2.23

### `parted`

- Support GPT

### `gdisk` (GPT fdisk)

# LVM (Logical Volume Management)

[Reference](https://www.digitalocean.com/community/tutorials/an-introduction-to-lvm-concepts-terminology-and-operations) / [Reference](https://www.digitalocean.com/community/tutorials/how-to-use-lvm-to-manage-storage-devices-on-ubuntu-16-04)

Config file

```sh
# /etc/lvm/lvm.conf
```

## Troubleshooting

`Device <device> excluded by a filter.`

```sh
pvcreate -vvv <device> |& grep <device>
```

`Skipping: Partition table signature found`

```sh
# Wipe all magic strings (BE CAREFUL!)
wipefs --all <device>
```

# Find

Run command in `find` result, `{}` is result path

```sh
find [<path>] [[!] <expression>] -exec <command> {} +
```

`<command> {} +` will expand to `<command> <path> <path> ...`

```sh
find [<path>] [[!] <expression>] -exec <command> {} \;
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


# Show Linux distribution / version

```sh
cat /etc/*-release
cat /proc/version
uname -a

# For systemd
hostnamectl

# For Debian
lsb_release -a
```


# Mount

```sh
mount [-t <type>] { <source> | <device> } <directory>
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
