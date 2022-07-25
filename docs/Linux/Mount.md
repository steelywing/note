# Mount

```bash
mount [-t <type>] { <source> | <device> } <directory>
```

## Remount mount point in `fstab`

```bash
# rw: read-write
mount -o remount[,rw] <directory>
```

## Lists all mounted filesystems

```bash
# -l: lable
mount [-l] [-t type]
```

The most common `type` are `ext2 | ext3 | ext4 | xfs | btrfs | vfat | sysfs | proc | nfs | cifs`

## Mount CIFS / SMB / Windows Shared Folder

| Option | Description |
| - | - |
| `username=<username>` | Username |
| `password=<password>` | Password |
| `domain=<domain>` | Domain |
| `vers=1.0` | SMBv1 (Default) |
| `vers=2.0` | SMBv2.002 for Windows Vista SP1 and 2008 |
| `vers=2.1` | SMBv2.1 for Windows 7 and 2008R2 |
| `vers=3.0` | SMBv3.0 for Windows 8 and 2012 |
| `noperm` | Client bypass permission checks |

```bash
# mount.cifs = mount -t cifs
mount.cifs -o <option>[,...] //<host>/<share name> <directory>
```
