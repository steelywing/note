---
date: 2022-11-30
tags: [7z, Compress]
---

# 7z max compression

`7z` max compression ratio

<!--truncate-->

```powershell
# -t7z : 7z archive type
# -mx=9 : ultra compressing
# -md=1g : 1GB dictionary size

# Default:
# - 7z archive type use LZMA2
# - Match Finder = bt4

# bt4 memory usage
#   = 10.5 * <dictionary size> + 4MB
#   = 10.5GB RAM

# Decompressing need <dictionary size> memory

7z a <file.7z> -t7z -mx=9 -md=1g <file>
```
