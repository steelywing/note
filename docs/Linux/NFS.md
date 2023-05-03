# NFS

Network File System

- NFS v3 only use IP address / host name to verify client
- NFS v4 support IP address / Kerberos (verification / hash / encryption)

See also

- iSCSI

## NFS server

Ubuntu

```sh
sudo apt update
sudo apt install nfs-kernel-server
```

RHEL

```sh
yum install nfs-utils
```

### Config

```sh title="/etc/exports"
# <path>  <host>(<options>)  ...
/srv/nfs  10.0.0.2(rw,sync,no_subtree_check,insecure)  10.0.1.0/24(rw,sync,no_subtree_check,insecure)
```

### Reload / Update `exports`

```sh
exportfs -rv
```

| | |
|-|-|
| `-r` | re-export all directories |
| `-v` | verbose |

## NFS client

Ubuntu

```sh
sudo apt update
sudo apt install nfs-common
```

RHEL

```sh
yum install nfs-utils
```

### Show NFS server exports

```sh
# showmount -e <host>
showmount -e 10.0.0.1
```

### Test mount

> NFS options ref: `man nfs`

```sh
# mount [-vv] -t nfs <host>:<path> <path>
mount -t nfs 10.0.0.1:/srv/nfs /mnt/nfs

# NFS v3
mount -t nfs -o vers=3 10.0.0.1:/srv/nfs /mnt/nfs
```

### Auto mount

```sh title="/etc/fstab"
# <file system>  <mount point>  <type>  <options>  <dump>  <pass>
10.0.0.1:/srv/nfs  /mnt/nfs  nfs  defaults  0  0

# NFS v3
10.0.0.1:/srv/nfs  /mnt/nfs  nfs  defaults,vers=3  0  0
```
