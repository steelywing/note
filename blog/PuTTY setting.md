---
date: 2022-11-30
tags: [PuTTY, SSH]
---

# PuTTY import / export setting

> [PuTTY Official](https://www.chiark.greenend.org.uk/~sgtatham/putty/)

<!--truncate-->

## Export setting

```bat
reg export HKCU\Software\SimonTatham\PuTTY PuTTY.reg
```

## Import setting

```bat
reg import PuTTY.reg
```
