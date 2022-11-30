---
title: PuTTY import / export setting
# description: 
# slug: url-link
tags: [PuTTY]
# image: 
# hide_table_of_contents: false
---

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
