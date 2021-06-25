# Partition

## Partition table / Disk label

MBR (Master Boot Record) / DOS

- Max size 2 TiB (2³² sectors × 2⁹ bytes per sector)
- Max 4 primary partition

GPT (GUID Partition Table)
- Max size 8 ZiB (2⁶⁴ sectors × 2⁹ bytes per sector)
- Unlimited partition (Windows support 128 partitions)

## Reload partition table

```bash
partprobe /dev/<device>
```

## Partition command

- `fdisk` ([Reference](https://wiki.archlinux.org/index.php/Fdisk))
  - Common
  - Not support GPT before `util-linux` 2.23
- `parted`
  - Support GPT
- `gdisk` (GPT fdisk)
  - Support GPT
