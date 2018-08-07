## Help

```powershell
Get-Help [<cmdlet>] [-ShowWindow] [ -Detailed | -Full | -Examples ]
```

 `help` equal `Get-Help | more`

## Powershell version

```powershell
$PSVersionTable
```

## List

```powershell
<expression>[, <expession>[, ...]]
```

## Alias

```powershell
Get-Alias [[-Name] <alias> | -Definition <cmdlet>]
```

## Get command info

```powershell
Get-Command <command>
```

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

## Current object

```powershell
$PSItem

# Example
"A","B","C" | ForEach-Object { "Current object is $PSItem" }
```

Alias: `$_`

## Filter object

```powershell
<command> | Where-Object [-FilterScript] { <Script> }

# Example
1, 2, 3, 4, 5, 6 | ? { $_ % 2 -eq 0 }
# 2 4 6
```
Alias: `?`

## Filter string

```powershell
<command> | Select-String "<pattern>"
```

## Network profile

```powershell
Get-NetConnectionProfile
Set-NetConnectionProfile { -InterfaceIndex <ID> | -Name <name> } -NetworkCategory { Private | Public }
```

## Powershell remoting

Enable PowerShell remoting

```powershell
Enable-PSRemoting [-SkipNetworkProfileCheck] [-Force]
```

Get trusted hosts

```powershell
winrm get winrm/config/client
# or
Get-Item WSMan:\localhost\Client\TrustedHosts
```

Set trusted hosts

```powershell
winrm set winrm/config/client @{TrustedHosts="<host>[,<host>]"}
# or
Set-Item WSMan:\localhost\Client\TrustedHosts -Value "<host>[,<host>]" [-Force]

# <host> = <IP> | <hostname> | *
```

Get credential from user input

```powershell
Get-Credential [[-UserName] <username>]
```

Create PowerShell session

```powershell
$<variable> = New-PSSession [[-ComputerName] <host[]>] [-Credential { <user> | <credential> }]
```

Connect to remote PowerShell

```powershell
Enter-PSSession [-ComputerName] <host> [-Credential { <user> | <credential> }]
```

## Get drive

```powershell
Get-PSDrive
```

## Run command

[Referense](https://social.technet.microsoft.com/wiki/contents/articles/7703.powershell-running-executables.aspx#The_Call_Operator_amp)

```powershell
Invoke-Command [[-ComputerName] <host[]>] [-ScriptBlock] <ScriptBlock> [-Credential <PSCredential>] [-ArgumentList <argument[]>]
# or
& <ScriptBlock> [<argument[]>]
```

## Execution policies

[Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6)

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy <policy>
```

Unblock script that it was downloaded from the Internet

```powershell
Unblock-File <path>
```
