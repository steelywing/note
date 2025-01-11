---
date: 2025-01-12
tags: [Linux, Kernel]
---

# Remove old kernels in Linux

`/boot/` partition 容量很容易滿了，需要定期清理舊 Kernel

<!-- truncate -->

For Ubuntu

> Ref: [RemoveOldKernels - Community Help Wiki](https://help.ubuntu.com/community/RemoveOldKernels)

```sh
sudo apt-get autoremove --purge
```
