---
tags: [Windows, File System]
---

# Symbolic link / Hard link on Windows

## Symbolic link

AKA SymLink / Soft link

- Symbolic link contains the text of target path
- If target move / remove, the link is broken

## Hard link

- Hard link is meta data of the file, that is [inode](/Linux/inode/) on Linux
- If target move / remove, the link is broken

<!--truncate-->

> Ref: `mklink` only available on `cmd`, not on `PowerShell`

## Create symbolic link

```cmd title="cmd"
mklink <link> <source>
```

```powershell title="PowerShell"
New-Item -ItemType SymbolicLink -Path "<link>" -Target "<source>"
```

## Create symbolic link for directory

```cmd title="cmd"
mklink /d <link> <source>
```

```powershell title="PowerShell"
New-Item -ItemType SymbolicLink -Path "<link>" -Target "<source>"
```

## Create hard link

```cmd title="cmd"
mklink /h <link> <source>
```

```powershell title="PowerShell"
New-Item -ItemType HardLink -Path "<link>" -Target "<source>"
```

## Create hard link for directory

AKA Directory Junction

```powershell title="PowerShell"
New-Item -ItemType Junction -Path "<link>" -Target "<source>"
```

```cmd title="cmd"
mklink /j <link> <source>
```
