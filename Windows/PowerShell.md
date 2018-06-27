## Help
```powershell
Get-Help [<cmdlet>] [-ShowWindow] [-Detailed | -Full | -Examples]
```
 `help` equal `Get-Help | more`

## Alias
```powershell
Get-Alias [[-Name] <alias> | -Definition <cmdlet>]
```

## Gets the properties and methods of objects
```powershell
<cmdlet> | Get-Member
```
Alias: `gm`

## Select property
```powershell
<command> | Select-Object [[-Property] <property>[, <property>]]

# Expand property
<command> | Select-Object -ExpandProperty <property>
# or
(<command>).<property>
```
Alias: `select`

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
1,2,3,4,5,6 | ? { $_ % 2 -eq 0 }
# 2 4 6
```
Alias: `?`

## Filter string
```powershell
Select-String "<pattern>"
```

## Network profile
```powershell
Get-NetConnectionProfile
Set-NetConnectionProfile (-InterfaceIndex <ID>|-Name <name>) -NetworkCategory (Private|Public)
```

## Run command
[Referense](https://social.technet.microsoft.com/wiki/contents/articles/7703.powershell-running-executables.aspx#The_Call_Operator_amp)
```powershell
& <command>
```
