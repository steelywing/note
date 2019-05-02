# Table of Contents
- [Table of Contents](#table-of-contents)
- [User](#user)
  - [Add user](#add-user)
  - [Delete user](#delete-user)
  - [Change password](#change-password)
  - [Delete password](#delete-password)
  - [Lock user](#lock-user)
  - [Unlock user](#unlock-user)
  - [Expire user password (force user to change password)](#expire-user-password-force-user-to-change-password)
  - [Set password expire day](#set-password-expire-day)
  - [User database file](#user-database-file)
  - [Password file](#password-file)
- [Shell](#shell)
  - [Indicate command type](#indicate-command-type)
  - [Remove current session bash history](#remove-current-session-bash-history)
  - [Delete all bash history](#delete-all-bash-history)
- [Preserve file timestamp after edit (`bash`)](#preserve-file-timestamp-after-edit-bash)
- [GRUB](#grub)
  - [Show GRUB when boot](#show-grub-when-boot)
  - [Update GRUB config](#update-grub-config)
  - [GRUB auto-generate config path](#grub-auto-generate-config-path)
  - [GRUB option](#grub-option)
  - [Set default to last selected option](#set-default-to-last-selected-option)
- [Hardware](#hardware)
- [Kernel](#kernel)
  - [Kernel info](#kernel-info)
  - [Kernel module](#kernel-module)
- [Jobs](#jobs)
- [File permission](#file-permission)
  - [Only change directory permission](#only-change-directory-permission)
  - [Only change file permission](#only-change-file-permission)
  - [Recursive change file permission to `644`, directory to `755`](#recursive-change-file-permission-to-644-directory-to-755)
- [File attribute](#file-attribute)
  - [List attribute](#list-attribute)
  - [Change attribute](#change-attribute)
- [SELinux](#selinux)
  - [Get SELinux status](#get-selinux-status)
  - [Set SELinux status](#set-selinux-status)
- [Service](#service)
- [Manual / Help](#manual--help)
- [Time](#time)
- [DNS](#dns)
- [Sharing desktop](#sharing-desktop)
  - [Disable sharing desktop encryption (Ubuntu)](#disable-sharing-desktop-encryption-ubuntu)
- [Disk usage](#disk-usage)
- [Find](#find)
- [Directory Stack](#directory-stack)
  - [Push directory](#push-directory)
  - [Pop and change to the directory](#pop-and-change-to-the-directory)
  - [List directory stack](#list-directory-stack)
- [cron / crontab](#cron--crontab)
- [OpenJDK (Java)](#openjdk-java)
  - [List installed JVM](#list-installed-jvm)
  - [Switch JVM](#switch-jvm)
- [Linux Distribution / Version](#linux-distribution--version)
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

# User

## Add user
```sh
useradd <user>

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

## User database file
```sh
/etc/passwd
```

## Password file
```sh
/etc/shadow
```


# Shell

```sh
# Shell list
/etc/shells

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

## Remove current session bash history

Clear current history buffer
```sh
history -c
```

Remove history file path
```sh
unset HISTFILE
```

Kill bash
```sh
kill -9 $$
# $$ == Current shell PID
```

## Delete all bash history

Empty history file
```sh
echo > $HISTFILE
```

Set history size to 0
```
HISTSIZE=0
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

## Only change directory permission

```sh
chmod <permission> $(find -type d)
```

## Only change file permission
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

Ubuntu <= 14 (System V)

| Command | Description |
| --- | --- |
| `update-rc.d <service> { enable \| disable }` | Enable / Disable service auto start |
| `service <service> { start \| stop }` | Start / Stop service |
| `service <service> status` | Show service status |

Red Hat <= 6 (System V)

| Command | Description |
| --- | --- |
| `chkconfig { --add \| --del } <service>` | Add / Delete service |
| `chkconfig <service> { on \| off }` | Enable / Disable service auto start |
| `service <service> { start \| stop }` | Start / Stop service |
| `service <service> status` | Show service status |

Ubuntu 16, Red Hat 7 (systemd)

| Command | Description |
| --- | --- |
| `systemctl { enable \| disable } <service>` | Enable / Disable service auto start |
| `systemctl { start \| stop } <service>` | Start / Stop service |
| `systemctl status <service>` | Show service status |


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


# Disk usage

| Command | Description |
| --- | --- |
| `-h` | Human readable |
| `-s` | Summarize: Display only a total for each argument |

Sort human readable disk usage

```sh
du -hs <path> | sort -h -r
```


# Find

Pipe `find` to `ls`
```sh
find [<path>] [<expression>] -exec ls -lad {} +
```


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
mount.cifs -o <option>[,<option>...]] //<host>/<share name> <directory>
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
