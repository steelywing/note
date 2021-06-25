# CLI

Command Line Interface

## Shell

### Shell list

```bash
cat /etc/shells
```

### Chanage shell

```bash
chsh -s <shell> [<user>]
```

```bash
usermod -s <shell> <user>
```

## Open file manager from CLI

```bash
xdg-open <path>
```

## Indicate command type

Type: `function`, `builtin`, or `file`

```bash
type [-a] <command>
```

Preserve file timestamp after edit (`bash`)

```bash
vi-preserve-time () {
    for file in "$@"; do
        local mtime=$(stat -c %y "$file")
        vi "$file"
        touch -d "$mtime" "$file"
    done
}
```

## Hardware

| Command | Description |
| - | - |
| `lsusb` | List USB devices |
| `lspci` | List PCI devices |
| `lspci -nn` | List PCI devices and devices code |
| `lspci -k` | List PCI devices and kernel driver |
| `cat /proc/cpuinfo` | Show CPU info |
| `cat /proc/meminfo` | Show CPU info |

## Kernel

### Kernel info

```bash
uname -a
```

### Kernel module

> `module-name` is same as `module_name`

| Command | Description |
| - | - |
| `lsmod` | List module |
| `insmod <module>` | Add module |
| `rmmod <module>` | Remove module |
| `modprobe <module>` | Add module and dependencies |
| `modprobe -r <module>` | Remove module and dependencies |
| Add `blacklist <module>` to `/etc/modprobe.d/*.conf` | Blacklist module |
| Add `install <module> /bin/false` to `/etc/modprobe.d/*.conf` | Blacklist module even other modules depend on it |


## File system


### ACL

> [Reference](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/storage_administration_guide/acls-setting)

### File permission

~~Only change directory permission~~

```bash
chmod <permission> $(find -type d)
```

~~Only change file permission~~
```bash
chmod <permission> $(find -type f)
```

Change file owner and group

```bash
chown { <owner>[:<group>] | --reference <file> } <file>
```

Change file permission to `644`, directory to `755`

| Option | Description |
| - | - |
| `-R` | Recursive |
| `-h | --no-dereference` | Change symbolic links instead of referenced file |

```bash
chmod [-R] u=rw,go=r,a+X <path>
```

```bash
chmod [-R] a=r+X,u+w <path>
```

### File attribute

> [Reference](http://man7.org/linux/man-pages/man1/chattr.1.html)

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

```bash
lsattr
```

Change attribute

```bash
chattr {+|-}<attribute> <file>
```

### List open files

```bash
lsof <path>
```


## SELinux

### Get SELinux status
```bash
sestatus [-v]
```

### Set SELinux status
```bash
setenforce { Enforcing | Permissive | 1 | 0 }
```

## Manual / Help

Show manual

```bash
man [<page>]
```

Search manual

```
apropos <keyword>
```

## DNS

```bash
vi /etc/resolv.conf
```

## Sharing desktop

### Disable sharing desktop encryption (Ubuntu)

> [Reference](https://askubuntu.com/a/487267/235264)

```bash
dconf-editor
# org > gnome > desktop > remote-accessand > require-encryption
```

```bash
gsettings set org.gnome.Vino require-encryption false
```

## File

### Copy

```bash
cp [<option>] <source> <destination>
```

| Option | Description |
| - | - |
| `-p \| --preserve[=<attributes>]` | Preserve mode, ownership, timestamps |
| `-R \| -r \| --recursive` | Copy directories recursively |

## Disk / Storage

### Disk usage

```bash
du <option> <path>
```

| Option | Description |
| - | - |
| `-h` | Human readable |
| `-s` | Summarize: Display only a total for each argument |

Sort human readable disk usage

```bash
du -hs <path> | sort -h -r
```

### Disk free space

```bash
df <option>
```

| Option | Description |
| - | - |
| `-h` | Disk free space in human readable format |

### List block devices / disk

```bash
lsblk
```

### Show devices UUID (GUID)

```bash
lsblk { -f | --fs }
```

```bash
blkid
```

```bash
ls /dev/disk/by-uuid/
```

### I/O priority

#### `ionice` (I/O nice)

Get I/O priority

```bash
ionice [-p <PID>]
```

Set I/O priority

| Class | Description |
| - | - |
| 0 | None |
| 1 | Realtime |
| 2 | Best-effort |
| 3 | Idle |

```bash
# <level> = 0 to 7, only for best-effort and realtime
ionice 
    { -c | --class } <class>
    [{ -n | --classdata } <level>] 
    { <command> | -p <PID> }
```

### File system

#### Resize file system

ext2 / ext3 / ext4

```bash
# Force check file system
e2fsck -f <device>
resize2fs [-M] <device> [<size>[<unit>]]
```

| Unit | Description |
| - | - |
| `-M` | Minimize size |

| Unit | Description |
| - | - |
| `s` | 512 byte sectors |
| `K` | 1024 |
| `M` | 1024² |
| `G` | 1024³ |

### Troubleshooting

`Device <device> excluded by a filter.`

```bash
pvcreate -vvv <device> |& grep <device>
```

`Skipping: Partition table signature found`

```bash
# Wipe all magic strings (BE CAREFUL!)
wipefs --all <device>
```

## OpenJDK (Java)

### List installed JVM
```bash
update-java-alternatives --list
```

### Switch JVM
```bash
update-java-alternatives --set <JVM name>
```


## Show Linux distribution / version

```bash
cat /etc/*-release
cat /proc/version
uname -a

# For systemd
hostnamectl

# For Debian
lsb_release -a
```


## Package management

### Install Development Tools

CentOS

```bash
# List available groups
yum group list

# Install "Development Tools"
yum group install "Development Tools"
```

Ubuntu

```bash
apt install build-essential
```

MSYS2

```bash
pacman -S base-devel
```

### Add EPEL repository to CentOS / RHEL

> [Reference](https://fedoraproject.org/wiki/EPEL)

```bash
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

### Download package with dependence

Debian

> [Reference](https://stackoverflow.com/a/41428445/1877620)

```bash
# -i = --important : Show only Depends and Pre-Depends
apt download $(apt-cache depends --recurse -i <package> | grep -v "^[ <]")
```

Install

```bash
# -m = --fix-missing : Ignore missing packages
sudo apt-get install -m --no-download ./*.deb
```
or
```bash
sudo dpkg -i ./*.deb
```

### List installed package

Debian

```bash
apt list --installed [<package name pattern>]

# -l = --list
dpkg -l [<package name pattern>]
```

## Last login

> [Reference](https://linuxconfig.org/how-to-disable-last-login-message-on-rhel-linux)

### Suppress `Last Login` message
```bash
touch ~/.hushlogin
```

### Clear last login log
```bash
> /var/log/lastlog
```

### Disable logging last login
```bash
chattr +i /var/log/lastlog
```

## Identify processes using files or sockets

```bash
fuser <option> <file>
```

| Option | Description |
| - | - |
| `-v`, `--verbose` | Verbose |
| `-k`, `--kill` | Kill processes accessing the file |
| `{ -c | -m | --mount } { <mount point> | <device> }` | Mount point or device |

## Watch

Execute command periodically

```bash
watch [-n <seconds>] <command>
```

## Auto start

### LXDE

> [Reference](https://wiki.archlinux.org/index.php/LXDE#Autostart)

- `~/.config/lxsession/LXDE/`
- `/etc/xdg/lxsession/LXDE/autostart`

### bash

`~/.bashrc`

## FHS (Filesystem Hierarchy Standard) / Filesystem Structure

> [Reference](http://refspecs.linuxfoundation.org/fhs.shtml)

```bash
man hier
```

## Using dash "`-`" as path argument

> [Reference](http://tldp.org/LDP/abs/html/special-chars.html#DASHREF2)

使用 "`-`" 做為檔案路徑參數時，一般有以下用途

- Redirection from `stdin` / to `stdout`
- `cd -` change to previous working directory
