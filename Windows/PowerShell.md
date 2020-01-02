# Table of Contents
- [Table of Contents](#table-of-contents)
- [Help](#help)
- [List](#list)
- [Alias](#alias)
- [Property](#property)
- [Filter object](#filter-object)
- [Network profile](#network-profile)
- [Show TCP listening port](#show-tcp-listening-port)
- [Firewall](#firewall)
- [PowerShell remoting](#powershell-remoting)
- [Trusted host](#trusted-host)
- [Get credential from user input](#get-credential-from-user-input)
- [PowerShell session](#powershell-session)
- [Get drive](#get-drive)
- [Run command](#run-command)
- [Execution policies](#execution-policies)
- [Unblock script that it was downloaded from the Internet](#unblock-script-that-it-was-downloaded-from-the-internet)
- [History](#history)
- [Hash table](#hash-table)
- [Array](#array)
- [String](#string)
- [Path](#path)
- [VLAN](#vlan)
  - [Create VLAN interface](#create-vlan-interface)
  - [Remove VLAN interface](#remove-vlan-interface)

# Help

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

PowerShell version

```powershell
$PSVersionTable
```

# List

```powershell
<expression>[, ...]
```

# Alias

```powershell
Get-Alias [[-Name] <alias> | -Definition <cmdlet>]
```

# Property

Get the properties and methods of objects

Alias: `gm`

```powershell
<cmdlet> | Get-Member
```

Select property

Alias: `select`

```powershell
<command> | Select-Object [[-Property] <property[]>]
```

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

Set-NetConnectionProfile
    { -InterfaceIndex <ID> | -Name <name> }
    -NetworkCategory { Private | Public }
```

# Show TCP listening port

```powershell
Get-NetTCPConnection -State Listen [-LocalPort <port>]
```

# Firewall

Allow ICMP echo request

```powershell
New-NetFirewallRule `
    -DisplayName "ICMPv4 echo request" `
    -Direction Inbound `
    -Protocol ICMPv4 `
    -IcmpType 8 `
    -Action Allow

New-NetFirewallRule `
    -DisplayName "ICMPv6 echo request" `
    -Direction Inbound `
    -Protocol ICMPv6 `
    -IcmpType 8 `
    -Action Allow
```

# PowerShell remoting

Enable PowerShell remoting

```powershell
Enable-PSRemoting [-SkipNetworkProfileCheck] [-Force]
```

# Trusted host

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

# Get credential from user input

```powershell
Get-Credential [[-UserName] <username>]
```

# PowerShell session

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

# Get drive

```powershell
Get-PSDrive
```

# Run command

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

Alias: `history`

```powershell
Get-History
```

Get all session history

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

# Array

[Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays)

```powershell
$array = <value>, <value>[, ...]
$array = @([<value>[, ...]])
```

Range

```powershell
$array = <start>..<end>
```

Count

```powershell
$array.Count
```

Get element

```powershell
$array[<index>]
```

Set element

```powershell
$array[<index>] = <value>
```

Slice

```powershell
$array[<index>..<index>]
```

Iteration

```powershell
foreach ($element in $array) {
    # $element
}

$array.ForEach({
    # $PSItem == $_ == <current element>
})
```

Filter

```powershell
$array.Where({
    # $PSItem == $_ == <current element>
})
```

# String

Format string

```powershell
<format> -f <value>[, ...]

"{0} is {1}" -f "Life", "great"
```

Filter string

```powershell
<command> | Select-String "<pattern>"
```

Concatenate string

```powershell
"$A $B"
```

# Path

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

# VLAN

## Create VLAN interface

- Enable Hyper-V virtual switch
  ```powershell
  Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-Services
  ```

- Enable Hyper-V tools
  ```powershell
  Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-Tools-All
  ```

- Add external virtual switch
  ```powershell
  $ethernet = Get-NetAdapter -Name "Ethernet"
  New-VMSwitch -Name "External Switch" -NetAdapterName $ethernet.Name -AllowManagementOS $true
  ```

- Add VLAN interface
  ```powershell
  Add-VMNetworkAdapter -ManagementOS -Name "<name>"
  Set-VMNetworkAdapterVlan -ManagementOS -VMNetworkAdapterName "<name>" -Access -VlanId <VLAN ID>
  ```

## Remove VLAN interface

```powershell
Remove-VMNetworkAdapter -ManagementOS -Name "<name>"
```
