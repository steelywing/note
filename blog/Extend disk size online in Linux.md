---
date: 2024-03-08
tags: [Linux]
---

# Resize disk online in Linux

Resize disk without power off in Linux (ESXi)

<!--truncate-->

## Extend disk size in ESXi

Resize can be done in GUI, or CLI

> Ref: [Increasing the size of a virtual disk (1004047)](https://kb.vmware.com/s/article/1004047)

```sh
# vmkfstools -X <new size> <disk.vmdk>

vmkfstools -X 1T disk.vmdk
```

## Rescan disks

Tell Linux to rescan disks

```sh
# echo 1 > /sys/class/block/<dev>/device/rescan

echo 1 > /sys/class/block/sda/device/rescan
```

## Show disk / partition info

```sh
cfdisk
```

or

```sh
# parted /dev/<disk> p

parted /dev/sda p
```

## Resize the partition

```sh
# parted <disk> resizepart <partition> <new size>

parted /dev/sda resizepart 1 100%
```

## Show LVM PV info

```sh
pvs
```

## Resize PV

See [LVM PV](../../Linux/LVM/#pv-physical-volume)

## Resize LV

See [LVM PV](../../Linux/LVM/#pv-physical-volume)
