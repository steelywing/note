---
date: 2022-12-16
tags: [Windows, File System]
---

# Mount a path to a drive on Windows

<!--truncate-->

> Ref: [Symbolic link / Hard link](../Symbolic%20link%20and%20Hard%20link)

## List `subst` drives

```cmd
subst
```
## Mount a path to a drive

```cmd
subst <drive>: <path>
```

```cmd
subst V: "C:\Virtual-Drive\"
```

## Delete a drive

```cmd
subst <drive>: /d
```
