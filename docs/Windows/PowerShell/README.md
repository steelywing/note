---
slug: .
sidebar_label: Basic
sidebar_position: 0
---

# PowerShell

## Help

 `help` equal `Get-Help | more`

```powershell
Get-Help [<cmdlet>]
    [ -ShowWindow ]
    [ -Detailed | -Full | -Examples ]
```

Get command info

```powershell
Get-Command <command>
```

> Alias: `gcm`

PowerShell version

```powershell
$PSVersionTable
```

## List

```powershell
<expression>[, ...]
```

## Alias

```powershell
Get-Alias [[-Name] <alias> | -Definition <cmdlet>]
```

## Property

Get the properties and methods of objects

```powershell
<cmdlet> | Get-Member
```

> Alias: `gm`

Select property

```powershell
<command> | Select-Object [[-Property] <property[]>]
```

> Alias: `select`

Expand property

```powershell
<command> | Select-Object -ExpandProperty <property>
```

```powershell
(<command>).<property>
```

Create property

```powershell
<command> | Select-Object @{N[ame]="<property name>"; E[xpression]={<expression>}}
```

## Filter object

```powershell
<command> | Where-Object [-FilterScript] { <Script> }

# Example
1, 2, 3, 4, 5, 6 | ? { $_ % 2 -eq 0 }
# 2 4 6
```
> Alias: `?`

## PowerShell remoting

Enable PowerShell remoting

```powershell
Enable-PSRemoting [-SkipNetworkProfileCheck] [-Force]
```

## Trusted host

Get trusted host

```powershell
winrm get winrm/config/client
```

```powershell
Get-Item WSMan:\localhost\Client\TrustedHosts
```

Set trusted host

```powershell
winrm set winrm/config/client @{TrustedHosts="<host>[,<host>]"}
```

```powershell
# <host> = <IP> | <hostname> | *
Set-Item WSMan:\localhost\Client\TrustedHosts -Value "<host>[,<host>]" [-Force]
```

## Get credential from user input

```powershell
Get-Credential [[-UserName] <username>]
```

## PowerShell session

Create PowerShell session

```powershell
$<variable> = New-PSSession
    [[-ComputerName] <host[]>]
    [-Credential { <user> | <credential> }]
```

Connect to remote PowerShell

```powershell
Enter-PSSession
    [-ComputerName] <host>
    [-Credential { <user> | <credential> }]
```

## Get drive

```powershell
Get-PSDrive
```

## Run command

[Referense](https://social.technet.microsoft.com/wiki/contents/articles/7703.powershell-running-executables.aspx#The_Call_Operator_amp)

```powershell
Invoke-Command [[-ComputerName] <host[]>]
    [-ScriptBlock] <ScriptBlock>
    [-Credential <PSCredential>]
    [-ArgumentList <argument[]>]
```

```powershell
& <ScriptBlock> [<argument[]>]
```

## Execution policies

> [Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6)

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy <policy>
```

## Unblock script

Unblock script that was downloaded from the Internet

```powershell
Unblock-File <path>
```

## History

```powershell
Get-History
```

> Alias: `history`

Search history

<kbd>Ctrl + R</kbd>

Get all session history

```powershell
Get-Content (Get-PSReadlineOption).HistorySavePath
```

## Hash table

> [Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_hash_tables)

```powershell
$hash = @{
    <name> = <value>;
    [<name> = <value>] ...
}
```

List keys

```powershell
$hash.Keys
```

List values

```powershell
$hash.Values
```

Add

```powershell
$hash[<key>] = <value>
$hash.Add(<key>, <value>)
```

Remove

```powershell
$hash.Remove(<key>)
```

## Path

Get script path

```powershell
$Script:MyInvocation.MyCommand.Path
```

Get file name of path

```powershell
Split-Path -Leaf <path>
```

Get folder of path

```powershell
Split-Path <path>
```

Join path

```powershell
Join-Path <path> <path> ...
```

## Get system directory

```powershell
[System.Environment]::SystemDirectory
```

### List Windows Features

```powershell
Get-WindowsOptionalFeature -Online
```

## Clear MRU

MRU (Most Recently Used)

```powershell
sp "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU\" -Name MRUList -Type String -Value ""
```

## Get route for IP address

```powershell
Find-NetRoute -RemoteIPAddress <IP address>
```
