# GRUB

> Ref: [Ubuntu Grub2](https://help.ubuntu.com/community/Grub2)

## Show GRUB when boot

Hold `Shift` when boot

## Update GRUB config

Find all OS, update GRUB config, install GRUB to MBR / UEFI

```bash
update-grub
```

## GRUB auto-generate config file

```
/boot/grub/grub.cfg
```

## GRUB option file

```
/etc/default/grub
```

## Set GRUB default to last selected option

```bash
# /etc/default/grub
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true
```
