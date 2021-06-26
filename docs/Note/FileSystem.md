# File System

[Reference](https://docs.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)

## Journaling

[Reference](https://en.wikipedia.org/wiki/Journaling_file_system)

Prevent being corrupted

## exFAT

- No journaling
- Max volume size 128 PiB
- Max file size 16 EiB
- No ACL

## FAT32

- No journaling
- Max volume size 2 TiB (4 KiB Cluster Size)
- Max file size 4 GiB
- No ACL

## NTFS

- Journaling
- Max volume size 16 TiB (4 KiB Cluster Size)
- Max file size 16 EiB
- ACL

## BTRFS

- Unstable
- Copy-on-Write
- Snapshot
- RAID
- Slow

## XFS

- Journaling
- RedHat
- Cannot shrinking

## ZFS

- Copy-on-Write
- Snapshot
- RAID

## Resize file system

Resize `ext2` / `ext3` / `ext4` file system

```bash
# Force check file system
e2fsck -f <device>

resize2fs [-M] <device> [<size>[<unit>]]
```

| Unit | Description |
| - | - |
| `-M` | Minimize size |

| Unit | Description |
| - | - |
| `s` | 512 byte sectors |
| `K` | 1024 |
| `M` | 1024² |
| `G` | 1024³ |
