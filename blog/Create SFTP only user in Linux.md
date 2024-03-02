---
date: 2024-03-01
tags: [Linux, SFTP]
---

# Create SFTP only user in Linux

<!--truncate-->

Create user

- `-s /sbin/nologin`: disable login
- `-M`: don't create home directory
- `-d <home directory>`: home directory

```sh
# sudo user <user> -s /sbin/nologin -M -d <home directory>
sudo user sftp-user -s /sbin/nologin -M -d /var/www/html/
```

Set password

```sh
# sudo passwd <user>
sudo passwd sftp-user
```

Add this to `/etc/ssh/sshd_config`

```nginx
# Match User <user>
Match User sftp-user
   ForceCommand internal-sftp
   AllowTcpForwarding no
   X11Forwarding no
```
