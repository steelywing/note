---
sidebar_label: Registry
---

# Registry - PowerShell

## List available registry drive

```powershell
Get-PSDrive -PSProvider Registry

cd HKCU:
cd HKLM:
```

Using Registry provider

```powershell
ls Registry::

cd Registry:: # Tab / Ctrl + Space
```

> Alias: `ls` ▶ `Get-ChildItem`

## Key

:::note Reference

[Working with Registry Keys](https://docs.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-keys?view=powershell-7)

:::

### List keys

```powershell
ls [<key path>]
```

> Alias: `ls` ▶ `Get-ChildItem`

### Create key

```powershell
ni <key path>
```

> Alias: `ni` ▶ `New-Item`

### Delete key

```powershell
ri <key path>
```

> Alias: `ri` ▶ `Remove-Item`

## Value

:::note Reference

[Working with Registry Entries](https://docs.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-entries?view=powershell-7)

:::

### Get values

```powershell
gp <key path> [-Name <name>]
```

> Alias: `gp` ▶ `Get-ItemProperty`

### Set value

```powershell
sp <key path>
  -Name <name>
  -Value <value>
  [-Type { Binary | DWord | QWord | ExpandString | MultiString | String }]
```

> Alias: `sp` ▶ `Set-ItemProperty`

### Remove value

```powershell
rp <key path> -Name <name>
```

> Alias: `rp` ▶ `Remove-ItemProperty`
