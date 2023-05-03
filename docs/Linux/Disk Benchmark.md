# Disk Benchmark

Disk Benchmark / Performance / Speed

## Write speed

```bash
dd 
    if=/dev/zero 
    of=<file> 
    bs=<size>[K|M|G] 
    count=<count>[K|M|G] 
    { conv=fsync | oflag={sync|dsync|direct} }
```

| Option | Description |
| - | - |
| `conv=fsync` | Synchronize before finishing |
| `dsync` | Synchronized I/O for data |
| `sync` | Synchronized I/O for data and meta data |
| `direct` | Direct I/O |

```sh
dd if=/dev/zero of=temp bs=1M count=1K oflag=direct; rm temp
```

## Read speed

| Unit | Description |
| - | - |
| `c` | 1 |
| `w` | 2 |
| `b` | 512 |
| `kB` | 1000 |
| `K` | 1024 |
| `MB` | 1000² |
| `M` | 1024² |
| `GB` | 1000³ |
| `G` | 1024³ |
| `T` | 1024⁴ |
| `P` | 1024⁵ |
| `E` | 1024⁶ |
| `Z` | 1024⁷ |
| `Y` | 1024⁸ |

Using `dd iflag=direct`

```bash
dd
    if=<file>
    of=/dev/null
    bs=<size>[<unit>]
    [count=<count>[<unit>]]
    iflag=direct
```

```sh
dd if=/dev/sda1 of=/dev/null bs=1M count=1K iflag=direct
```

Using `drop_caches`

```bash
# Synchronize cached writes to persistent storage
sync

# Free cache
echo 3 > /proc/sys/vm/drop_caches

dd if=<file> of=/dev/null bs=<size>[K|M|G] [count=<count>[K|M|G]]
```

> [`drop_caches` doc](https://www.kernel.org/doc/Documentation/sysctl/vm.txt)

Read speed test without prior cache

```bash
hdparm -t /dev/<device>
```

Read speed test with buffer

```bash
hdparm -T /dev/<device>
```
