# CLI

Command Line Interface

## Shell

### Shell list

```bash
cat /etc/shells
```

### Change shell

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
# -a: display all locations
type [-a] <command>
```

## Preserve file timestamp after edit (`bash`)

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
| `cat /proc/meminfo` | Show memory info |

## Mount image

```bash
mount -o loop <image.iso> <directory>
```

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
| `-h \| --no-dereference` | Change symbolic links instead of referenced file |

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
| `{ -c \| -m \| --mount } { <mount point> \| <device> }` | Mount point or device |

## Watch

Execute command periodically


```bash
# Default: 2 seconds
watch [-n <seconds>] <command>
```

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
