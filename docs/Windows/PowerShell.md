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

## Network profile

```powershell
Get-NetConnectionProfile

Set-NetConnectionProfile
    { -InterfaceIndex <ID> | -Name <name> }
    -NetworkCategory { Private | Public }
```

## Show TCP listening port

```powershell
Get-NetTCPConnection -State Listen [-LocalPort <port>]
```

## Firewall

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

## Unblock script that it was downloaded from the Internet

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

## Array

> [Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays)

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

## String

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

## VLAN

### Create VLAN interface

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

### Remove VLAN interface

```powershell
Remove-VMNetworkAdapter -ManagementOS -Name "<name>"
```

## Get system directory

```powershell
[System.Environment]::SystemDirectory
```

### List Windows Features

```powershell
Get-WindowsOptionalFeature -Online
```

## Registry

```powershell
cd Registry::
cd HKCU:
cd HKLM:
```

### Key

> [Reference](https://docs.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-keys?view=powershell-7)

List keys

```powershell
ls [<key path>]
```

Create key

```powershell
ni <key path>
```

Delete key

```powershell
ri <key path>
```

### Value

> [Reference](https://docs.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-entries?view=powershell-7)

Get values

```powershell
gp <key path> [-Name <name>]
```

Set value

```powershell
sp <key path>
  -Name <name>
  -Value <value>
  [-Type { Binary | DWord | QWord | ExpandString | MultiString | String }]
```

Remove value

```powershell
rp <key path> -Name <name>
```

## Clear MRU (Most Recently Used)

```powershell
sp "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU\" -Name MRUList -Type String -Value ""
```

## Get route for IP address

```powershell
Find-NetRoute -RemoteIPAddress <IP address>
```
