# Disk / Storage

## Disk usage

```bash
du <option> <path>
```

| Option | Description |
| - | - |
| `-h` | Human readable |
| `-s` | Summarize: Display only a total for each argument |

Sort human readable disk usage

```bash
du -hs <path> | sort -h -r
```

## Disk free space

```bash
df <option>
```

| Option | Description |
| - | - |
| `-h` | Disk free space in human readable format |

## List block devices

```bash
lsblk
```

## List devices UUID (GUID)

```bash
lsblk { -f | --fs }
```

```bash
blkid
```

```bash
ls /dev/disk/by-uuid/
```

## `ionice`

I/O nice / priority

Get I/O priority of process

```bash
ionice [-p <PID>]
```

Set I/O priority of process

| Class | Description |
| - | - |
| 0 | None |
| 1 | Realtime |
| 2 | Best-effort |
| 3 | Idle |

```bash
# <level> = 0 to 7, only for best-effort and realtime
ionice 
    { -c | --class } <class>
    [{ -n | --classdata } <level>] 
    { <command> | -p <PID> }
```
