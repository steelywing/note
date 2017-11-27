## Windows firewall change default to block
[Reference](https://www.howtogeek.com/112564/how-to-create-advanced-firewall-rules-in-the-windows-firewall/)

![Windows Firewall](img/windows-firewall.png)

## Credential manager
![Credential Manager](img/windows-credential-manager.png)

## Remote desktop
- Toggle full screen `Ctrl + Alt + Break`
- List remote desktop session `query session`
- Attach remote desktop session to console `tscon <session ID> /dest:console`

## Remote powerShell
Enable remote PowerShell
```
# Change network profile to private

# Enable WinRM service
Enable-PSRemoting -Force

# Add host to trusted hosts
Set-Item WSMan:\localhost\Client\TrustedHosts (<IP|host name>[,<IP|host name>]|*)

# Restart WinRM
Restart-Service WinRM
```

Connect to remote PowerShell
```
Enter-PSSession -ComputerName <IP|host name> -Credential <user name>
```

## Hibernate
Enable / Disable hibernate (remove `hiberfil.sys` file)

[Reference](https://support.microsoft.com/en-us/help/920730/how-to-disable-and-re-enable-hibernation-on-a-computer-that-is-running)
```
powercfg /(hibernate|h) {on|off}
```

## `.cab` file
- Extract `.cab`: `expand <file.cab>`
- Create `.cab`: `makecab <file> <file.cab>`

## File Permission (ACL)
[Reference](http://technet.microsoft.com/en-us/library/bb490872.aspx)

| Option | Permission |
| --- | --- |
| `n` | None |
| `r` | Read |
| `w` | Write |
| `c` | Change (Write) |
| `f` | Full Control |

```
# Replace permission
cacls <file> /p <user>:<permission>
# Edit permission
cacls <file> /e /p <user>:<permission>
# Change owner
cacls <file> /r <user>
```

## Registry
Registry file location

[Reference](http://msdn.microsoft.com/en-us/library/ms724877%28v=vs.85%29.aspx)

| Registry hive | Supporting files |
| --- | --- |
| HKEY_CURRENT_CONFIG | System, System.alt, System.log, System.sav |
| HKEY_CURRENT_USER | Ntuser.dat, Ntuser.dat.log |
| HKEY_LOCAL_MACHINE\SAM | Sam, Sam.log, Sam.sav |
| HKEY_LOCAL_MACHINE\Security | Security, Security.log, Security.sav |
| HKEY_LOCAL_MACHINE\Software | Software, Software.log, Software.sav |
| HKEY_LOCAL_MACHINE\System | System, System.alt, System.log, System.sav |
| HKEY_USERS\.DEFAULT | Default, Default.log, Default.sav |

Edit registry file
- Execute `regedit`
- Select the `HKEY_LOCAL_MACHINE` root key
- Menu `File` > `Load Hive...`
- Choose the DAT file for the registry you wish to edit
- You will be prompted for a name to load the hive into. The name does not matter. It just loads the registry hive into a subfolder using the name you provide
- You can then edit the registry you just loaded in the same manner as any other registry. All changes are made in real time, just as normal
- When you're done, go to the menu `File` > `Unload Hive...`

## Cortana
Disable Cortana in Windows 10
```sh
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\Windows Search" /v "AllowCortana" /t REG_DWORD /d 0 /f

# PowerShell
New-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Windows Search" -Name "AllowCortana" -PropertyType DWord -Value 0 -Force
```

Enable Cortana in Windows 10
```sh
reg delete "HKLM\SOFTWARE\Policies\Microsoft\Windows\Windows Search" /v "AllowCortana" /f

# PowerShell
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Windows Search" -Name "AllowCortana"
```

## Allow input unicode with ALT + "+\<Code\>"
[Reference](http://www.fileformat.info/tip/microsoft/enter_unicode.htm)
```sh
reg add "HKCU\Control Panel\Input Method" /v "EnableHexNumpad" /t REG_SZ /d 1 /f
```
