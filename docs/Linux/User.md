## User

|  | Description |
| - | - |
| `<group>` | Primary group, User must and only have 1 primary group. Can be view with `getent passwd` file (Usually stored in `/etc/passwd`) |
| `<supplementary group>` | Additional groups, User may have multiple supplementary group. Can be view with `getent group` file (Usually stored in `/etc/group`) |

### Add user

```bash
useradd <user> [-d <home directory>] [-g <group>] [-G <supplementary group>[,...]] [-s <shell>]
```

```bash
# Debian only
adduser <user>
```

### Delete user

```bash
userdel <user>
```

```bash
# Debian only
deluser <user>
```

### Lock user

```bash
passwd -l <user>
```

### Unlock user

```bash
passwd -u <user>
```

### User database file

Usually store in `/etc/passwd`

```bash
getent passwd
```

## Password

### Password file

Usually store in `/etc/shadow`

```bash
getent shadow
```

### Change password

```bash
passwd [<user>]
```

### Delete password

```bash
passwd -d <user>
```

### Expire user password

Force user to change password

```bash
passwd -e <user>
```

### Set password expire day

```bash
passwd -x <day> <user>
```

## Group

### Change / Override user's primary group

```bash
usermod -g <group> <user>
```

### Change / Override user's supplementary groups

```bash
usermod -G <group>[,...] <user>
```

### Add user's supplementary groups

```bash
usermod -aG <group>[,...] <user>
```
