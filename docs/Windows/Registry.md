# Registry

## Registry file location

> Ref: [Registry Hives](https://docs.microsoft.com/en-us/windows/win32/sysinfo/registry-hives)

| Registry hive | Supporting files |
| - | - |
| `HKEY_CURRENT_CONFIG` | System, System.alt, System.log, System.sav |
| `HKEY_CURRENT_USER` | Ntuser.dat, Ntuser.dat.log |
| `HKEY_LOCAL_MACHINE\SAM` | Sam, Sam.log, Sam.sav |
| `HKEY_LOCAL_MACHINE\Security` | Security, Security.log, Security.sav |
| `HKEY_LOCAL_MACHINE\Software` | Software, Software.log, Software.sav |
| `HKEY_LOCAL_MACHINE\System` | System, System.alt, System.log, System.sav |
| `HKEY_USERS\.DEFAULT` | Default, Default.log, Default.sav |

## Edit registry file

- Execute `regedit`
- Select the `HKEY_LOCAL_MACHINE` root key
- Menu `File` > `Load Hive...`
- Choose the DAT file for the registry you wish to edit
- You will be prompted for a name to load the hive into. The name does not matter. It just loads the registry hive into a subfolder using the name you provide
- You can then edit the registry you just loaded in the same manner as any other registry. All changes are made in real time, just as normal
- When you're done, go to the menu `File` > `Unload Hive...`

## `reg`

Registry CLI

```cmd
reg add
    {HKLM|HKCU|HKCR|HKU|HKCC}\<key>
    { /ve | /v <value name> }
    /t { REG_SZ | REG_MULTI_SZ | REG_EXPAND_SZ | REG_DWORD | REG_QWORD | REG_BINARY | REG_NONE }
    /d <value>
```

```cmd
reg query
    {HKLM|HKCU|HKCR|HKU|HKCC}\<key>
    [<option> ...]
```

| Option | Description |
| - | - |
| `/ve ` | Query default value |
| `/v <value name>` | Query specific value name |
| `/t { REG_SZ \| REG_MULTI_SZ \| REG_EXPAND_SZ \| REG_DWORD \| REG_QWORD \| REG_BINARY \| REG_NONE }` | Query specific data type |
| `/f <data>` | Search specific data |
