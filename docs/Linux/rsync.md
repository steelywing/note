# `rsync`

```bash
# <source>, <destination> = [[<user>@]<host>:]<path>
# rsync <option> <source> <destination>

rsync -avHAX --info=progress2 ssh://user@host:/path/to/source /path/to/destination
```

## Option

| Option | Description |
| - | - |
| `-a`, `--archive` | Archive mode, equals `-rlptgoD` (no `-H`, `-A`, `-X`) |
| `-H`, `--hard-links` | Preserve hard links |
| `-A`, `--acls` | Preserve ACLs (implies `-p`) |
| `-X`, `--xattrs` | Preserve extended attributes |
| `-v`, `--verbose` | Verbose |
| `-z`, `--compress` | Compress during the transfer |
| `--partial` | Keep partially transferred files |
| `--progress` | Show progress |
| `--info=progress2` | Show total progress / speed |
| `--bwlimit=<rate>` | Limit bandwidth, `--bwlimit=1m` = 1 MiB/s |
| `-P` | `--partial --progress` |
| `-e "ssh [-p <port>]"` | Use SSH as remote shell |
| `-s`, `--protect-args` | No space-splitting (If file name has space) |

## Trailing slash on `<source>`

- `/src/` means files under `/src/*`

```bash
# sync /src/ to /dest/src/
rsync -av /src /dest
# same as
rsync -av /src/ /dest/src
```
