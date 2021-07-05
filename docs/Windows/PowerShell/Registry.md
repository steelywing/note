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

## Key

> [Reference](https://docs.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-keys?view=powershell-7)

### List keys

```powershell
ls [<key path>]
```

### Create key

```powershell
ni <key path>
```

### Delete key

```powershell
ri <key path>
```

## Value

> [Reference](https://docs.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-entries?view=powershell-7)

### Get values

```powershell
gp <key path> [-Name <name>]
```

### Set value

```powershell
sp <key path>
  -Name <name>
  -Value <value>
  [-Type { Binary | DWord | QWord | ExpandString | MultiString | String }]
```

### Remove value

```powershell
rp <key path> -Name <name>
```
