## Filter string
```
{sls|Select-String} "<pattern>"
```

## Network profile
```
Get-NetConnectionProfile
Set-NetConnectionProfile (-InterfaceIndex <ID>|-Name <name>) -NetworkCategory (Private|Public)
```

## Run command
[Referense](https://social.technet.microsoft.com/wiki/contents/articles/7703.powershell-running-executables.aspx#The_Call_Operator_amp)
```
& <command>
```
