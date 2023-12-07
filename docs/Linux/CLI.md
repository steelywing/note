---
sidebar_label: CLI
---

# CLI - Linux

Command Line Interface

## Shell

### Shell list

```sh
cat /etc/shells
```

### Change shell

```sh
chsh -s <shell> [<user>]
```

or

```sh
usermod -s <shell> <user>
```

## Open file manager from CLI

```sh
xdg-open <path>
```

## Indicate command type

Type: `function`, `builtin`, or `file`

```sh
# -a: display all locations
type [-a] <command>
```

## Preserve file timestamp after edit (`bash`)

```sh
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
| `cat /proc/meminfo` | Show memory info |

## Mount image

```sh
mount -o loop <image.iso> <directory>
```

## File system

### ACL

> Ref: [Red Hat - Setting Access ACLs](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/storage_administration_guide/acls-setting)

### File permission

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
| `-h` \| `--no-dereference` | Change symbolic links instead of referenced file |

```sh
chmod [-R] u=rw,go=r,a+X <path>
```

or

```sh
chmod [-R] a=r+X,u+w <path>
```

### File attribute

> Ref: [chattr manual](http://man7.org/linux/man-pages/man1/chattr.1.html)

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

### List open files

```sh
lsof <path>
```

## Manual / Help

Show manual

```sh
man [<page>]
```

Search manual

```sh
man -k <keyword>
```

```sh
apropos <keyword>
```

## DNS

```sh
vi /etc/resolv.conf
```

## Sharing desktop

### Disable sharing desktop encryption (Ubuntu)

> Ref: [Ask Ubuntu](https://askubuntu.com/a/487267/235264)

```sh
dconf-editor
# org > gnome > desktop > remote-accessand > require-encryption
```

```sh
gsettings set org.gnome.Vino require-encryption false
```

## File

### Copy

```sh
cp [<option>] <source> <destination>
```

| Option | Description |
|-|-|
| `-a` \| `--archive` | Archive, same as `-dR --preserve=all` |
| `-p` \| `--preserve[=<attributes>]` | Preserve `mode`, `ownership`, `timestamps` (Default: `mode,ownership,timestamps`) |
| `-R` \| `-r` \| `--recursive` | Copy directories recursively |

## OpenJDK (Java)

### List installed JVM
```sh
update-java-alternatives --list
```

### Switch JVM
```sh
update-java-alternatives --set <JVM name>
```


## Show Linux distribution / version

```sh
cat /etc/*-release
cat /proc/version
uname -a

# For systemd
hostnamectl

# For Debian
lsb_release -a
```


## Last login

> Ref: [Enable/Disable Last Login Message](https://linuxconfig.org/how-to-disable-last-login-message-on-rhel-linux)

### Suppress `Last Login` message
```sh
touch ~/.hushlogin
```

### Clear last login log
```sh
> /var/log/lastlog
```

### Disable logging last login
```sh
chattr +i /var/log/lastlog
```

## Identify processes using files or sockets

```sh
fuser <option> <file>
```

| Option | Description |
| - | - |
| `-v`, `--verbose` | Verbose |
| `-k`, `--kill` | Kill processes accessing the file |
| \{ `-c` \| `-m` \| `--mount` \} \{ `<mount point>` \| `<device>` \} | Mount point or device |

## Watch

Execute command periodically

```sh
# Default: 2 seconds
watch [-n <seconds>] <command>
```

## FHS (File system Hierarchy Standard) / File system Structure

> Ref: [The FHS 3.0 Specification](http://refspecs.linuxfoundation.org/fhs.shtml)

```sh
man hier
```

## Using dash "`-`" as path argument

> Ref: [TLDP Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/special-chars.html#DASHREF2)

使用 "`-`" 做為檔案路徑參數時，一般有以下用途

- Redirection from `stdin` / to `stdout`
- `cd -` change to previous working directory

## `true`

```sh
:
```

is equivalent to

```sh
true
```
