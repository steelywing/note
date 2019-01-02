# Table of Contents
- [Table of Contents](#table-of-contents)
- [User](#user)
- [Shell](#shell)
  - [Remove current session bash history](#remove-current-session-bash-history)
  - [Delete all bash history](#delete-all-bash-history)
- [GRUB](#grub)
- [Hardware](#hardware)
- [Kernel module](#kernel-module)
- [Jobs](#jobs)
- [File permission](#file-permission)
- [Service](#service)
- [Manual](#manual)
- [Time](#time)
- [DNS](#dns)
- [Sharing desktop encryption](#sharing-desktop-encryption)
- [Kernel info](#kernel-info)
- [Disk usage](#disk-usage)
- [Find](#find)
- [Directory Stack](#directory-stack)
- [cron / crontab](#cron--crontab)
- [OpenJDK (Java)](#openjdk-java)
- [Linux Distribution / Version](#linux-distribution--version)
- [Mount](#mount)
- [Install Development Tools](#install-development-tools)
  - [Add EPEL repository to CentOS / RHEL](#add-epel-repository-to-centos--rhel)

# User

```sh
# Add user (Debian only)
adduser <user>

# Delete user (Debian only)
deluser <user>

# Add user
useradd <user>

# Delete user
userdel <user>

# Change password
passwd [<user>]

# Delete password
passwd -d <user>

# Lock user
passwd -l <user>

# Unlock user
passwd -u <user>

# Expire user password (force user to change password)
passwd -e <user>

# Set password expire day
passwd -x <day> <user>

# User database file
/etc/passwd

# Password file
/etc/shadow
```


# Shell

```sh
# Shell list
/etc/shells

# Chanage shell
chsh -s <shell> <user>
# or
usermod -s <shell> <user>

# Open file manager from CLI
xdg-open <path>

# Preserve file timestamp after edit (bash)
vi-preserve-time () {
    for file in "$@"; do
        local mtime=$(stat -c %y "$file")
        vi "$file"
        touch -d "$mtime" "$file"
    done
}
```


## Remove current session bash history

```sh
unset HISTFILE
# or
kill -9 $$
# $$ == Current shell PID
```


## Delete all bash history

```sh
# For Bash
history -c
# or
echo > $HISTFILE
# or
HISTSIZE=0
```


# GRUB

Hold `Shift` when boot to show GRUB

```sh
# Find all OS, update GRUB config, install GRUB to MBR / UEFI
update-grub

# GRUB auto-generate config path
vi /boot/grub/grub.cfg

# GRUB option
vi /etc/default/grub

# Set default to last selected option
# Add the following lines to /etc/default/grub
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


# Kernel module

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

Only change directory permission

```sh
chmod <permission> $(find -type d)
```

Only change file permission
```sh
chmod <permission> $(find -type f)
```

Recursive change file permission to `644`, directory to `755`
```sh
chmod -R u=rw,go=r,a+X <path>
# or
chmod -R a=r+X,u+w <path>
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


# Manual

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


# Sharing desktop encryption

Disable sharing desktop encryption (Ubuntu)

[Reference](https://askubuntu.com/a/487267/235264)

```sh
dconf-editor
# org > gnome > desktop > remote-accessand > require-encryption

# or
gsettings set org.gnome.Vino require-encryption false
```


# Kernel info

```sh
uname -a
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

```sh
# Push directory
pushd <directory>

# Pop and change to the directory
popd

# List directory stack
dirs [-v]
```


# cron / crontab

[Reference](https://www.computerhope.com/unix/ucrontab.htm)


# OpenJDK (Java)

```sh
# List installed JVM
update-java-alternatives --list

# Switch JVM
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
mount <source> <directory>

# remount mount point in fstab
mount -o remount <directory>

# remount mount point in fstab with RW (read-write) option
mount -o remount,rw <directory>
```

# Install Development Tools

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
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```
