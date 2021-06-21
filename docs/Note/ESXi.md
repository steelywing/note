## Reset license
```bash
#!/bin/sh
rm /etc/vmware/license.cfg
cp /etc/vmware/.#license.cfg /etc/vmware/license.cfg
/etc/init.d/vpxa restart
```

## Cron
Default `/var/spool/cron/crontabs/root` is read only, use `:w!` in `vi` to save.
```bash
kill $(cat /var/run/crond.pid)
vi /var/spool/cron/crontabs/root
crond
```

ESXi will overwrite cron file on boot, change `/etc/rc.local.d/local.sh` to update cron file
```bash
# /etc/rc.local.d/local.sh
kill $(cat /var/run/crond.pid)
echo "* * * * * <cron job>" >> /var/spool/cron/crontabs/root
crond
```

## VM

### Show all VM
```bash
vim-cmd vmsvc/getallvms
```

### Power on VM
```bash
vim-cmd vmsvc/power.on <VM ID>
```

### Reboot VM
```bash
vim-cmd vmsvc/power.reboot <VM ID>
```

## SSH public key

[Reference](https://kb.vmware.com/s/article/1002866)

```bash
/etc/ssh/keys-<user name>/authorized_keys
```

## Create partition table
[Reference](https://kb.vmware.com/s/article/1036609)
```bash
partedUtil setptbl "/vmfs/devices/disks/<device>" { msdos | gpt }
```
