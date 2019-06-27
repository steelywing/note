# Table of Contents
- [Table of Contents](#Table-of-Contents)
- [Help](#Help)
  - [Get command info](#Get-command-info)
- [PowerShell version](#PowerShell-version)
- [List](#List)
- [Alias](#Alias)
- [Property](#Property)
  - [Get the properties and methods of objects](#Get-the-properties-and-methods-of-objects)
  - [Select property](#Select-property)
  - [Expand property](#Expand-property)
  - [Create property](#Create-property)
- [Current object](#Current-object)
- [Filter object](#Filter-object)
- [Network profile](#Network-profile)
- [PowerShell remoting](#PowerShell-remoting)
- [Trusted host](#Trusted-host)
  - [Get trusted host](#Get-trusted-host)
  - [Set trusted host](#Set-trusted-host)
- [Get credential from user input](#Get-credential-from-user-input)
- [PowerShell session](#PowerShell-session)
  - [Create PowerShell session](#Create-PowerShell-session)
  - [Connect to remote PowerShell](#Connect-to-remote-PowerShell)
- [Get drive](#Get-drive)
- [Run command](#Run-command)
- [Execution policies](#Execution-policies)
- [Unblock script that it was downloaded from the Internet](#Unblock-script-that-it-was-downloaded-from-the-Internet)
- [History](#History)
  - [Get all session history](#Get-all-session-history)
- [Hash table](#Hash-table)
  - [List keys](#List-keys)
  - [List values](#List-values)
  - [Add](#Add)
  - [Remove](#Remove)
- [Array](#Array)
  - [Range](#Range)
  - [Count](#Count)
  - [Get element](#Get-element)
  - [Set element](#Set-element)
  - [Slice](#Slice)
  - [Iteration](#Iteration)
  - [Filter](#Filter)
- [String](#String)
  - [Format string](#Format-string)
  - [Filter string](#Filter-string)
  - [Concatenate string](#Concatenate-string)
- [Path](#Path)
  - [Get script path](#Get-script-path)
  - [Get file name of path](#Get-file-name-of-path)
  - [Get folder of path](#Get-folder-of-path)
  - [Join path](#Join-path)

# Help

```powershell
Get-Help [<cmdlet>] [-ShowWindow] [ -Detailed | -Full | -Examples ]
```

 `help` equal `Get-Help | more`

## Get command info

```powershell
Get-Command <command>
```

# PowerShell version

```powershell
$PSVersionTable
```

# List

```powershell
<expression>[, <expession>[, ...]]
```

# Alias

```powershell
Get-Alias [[-Name] <alias> | -Definition <cmdlet>]
```

# Property

## Get the properties and methods of objects

```powershell
<cmdlet> | Get-Member
```

Alias: `gm`

## Select property

```powershell
<command> | Select-Object [[-Property] <property[]>]
```

Alias: `select`

## Expand property

```powershell
<command> | Select-Object -ExpandProperty <property>
# or
(<command>).<property>
```

## Create property

```powershell
<command> | Select-Object @{N[ame]="<property name>"; E[xpression]={<expression>}}
```

# Current object

```powershell
$PSItem

# Example
"A","B","C" | ForEach-Object { "Current object is $PSItem" }
```

Alias: `$_`

# Filter object

```powershell
<command> | Where-Object [-FilterScript] { <Script> }

# Example
1, 2, 3, 4, 5, 6 | ? { $_ % 2 -eq 0 }
# 2 4 6
```
Alias: `?`

# Network profile

```powershell
Get-NetConnectionProfile
Set-NetConnectionProfile { -InterfaceIndex <ID> | -Name <name> } -NetworkCategory { Private | Public }
```

# PowerShell remoting

Enable PowerShell remoting

```powershell
Enable-PSRemoting [-SkipNetworkProfileCheck] [-Force]
```

# Trusted host

## Get trusted host

```powershell
winrm get winrm/config/client
# or
Get-Item WSMan:\localhost\Client\TrustedHosts
```

## Set trusted host

```powershell
winrm set winrm/config/client @{TrustedHosts="<host>[,<host>]"}
# or
Set-Item WSMan:\localhost\Client\TrustedHosts -Value "<host>[,<host>]" [-Force]

# <host> = <IP> | <hostname> | *
```

# Get credential from user input

```powershell
Get-Credential [[-UserName] <username>]
```

# PowerShell session

## Create PowerShell session

```powershell
$<variable> = New-PSSession [[-ComputerName] <host[]>] [-Credential { <user> | <credential> }]
```

## Connect to remote PowerShell

```powershell
Enter-PSSession [-ComputerName] <host> [-Credential { <user> | <credential> }]
```

# Get drive

```powershell
Get-PSDrive
```

# Run command

[Referense](https://social.technet.microsoft.com/wiki/contents/articles/7703.powershell-running-executables.aspx#The_Call_Operator_amp)

```powershell
Invoke-Command [[-ComputerName] <host[]>] [-ScriptBlock] <ScriptBlock> [-Credential <PSCredential>] [-ArgumentList <argument[]>]
# or
& <ScriptBlock> [<argument[]>]
```

# Execution policies

[Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6)

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy <policy>
```

# Unblock script that it was downloaded from the Internet

```powershell
Unblock-File <path>
```

# History

```powershell
Get-History
```

Alias: `history`

## Get all session history

```powershell
Get-Content (Get-PSReadlineOption).HistorySavePath
```

# Hash table

[Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_hash_tables)

```powershell
$hash = @{
    <name> = <value>;
    [<name> = <value>] ...
}
```

## List keys
```powershell
$hash.Keys
```

## List values
```powershell
$hash.Values
```

## Add
```powershell
$hash[<key>] = <value>
$hash.Add(<key>, <value>)
```

## Remove
```powershell
$hash.Remove(<key>)
```

# Array

[Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays)

```powershell
$array = <value>, <value>[, ...]
$array = @([<value>[, ...]])
```

## Range
```powershell
$array = <start>..<end>
```

## Count
```powershell
$array.Count
```

## Get element
```powershell
$array[<index>]
```

## Set element
```powershell
$array[<index>] = <value>
```

## Slice
```powershell
$array[<index>..<index>]
```

## Iteration
```powershell
foreach ($element in $array) {
    # $element
}

$array.ForEach({
    # $_
})
```

## Filter
```powershell
$array.Where({
    # $_
})
```

# String

## Format string

```powershell
<format> -f <value>[, ...]

"{0} is {1}" -f "Life", "great"
```

## Filter string

```powershell
<command> | Select-String "<pattern>"
```

## Concatenate string
```powershell
"$A $B"
```

# Path

## Get script path
```powershell
$Script:MyInvocation.MyCommand.Path
```

## Get file name of path
```powershell
Split-Path -Leaf <path>
```

## Get folder of path
```powershell
Split-Path <path>
```

## Join path
```powershell
Join-Path <path> <path> ...
```
