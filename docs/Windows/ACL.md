# ACL

Access Control List / File Permission

## `calcs`

> [Reference](http://technet.microsoft.com/en-us/library/bb490872.aspx)

| Option | Permission |
| - | - |
| `n` | None |
| `r` | Read |
| `w` | Write |
| `c` | Change (Write) |
| `f` | Full Control |

### Replace permission

```cmd
cacls <file> /p <user>:<permission>
```

### Edit permission

```cmd
cacls <file> /e /p <user>:<permission>
```

### Change owner

```cmd
cacls <file> /r <user>
```

## `icacls`

> [Reference](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/icacls)

```cmd
icacls <file> <option>
```

| Option | Description |
| - | - |
| `/t` | Traverse subdirectories |
| `/c` | Continue on file error |
| `/l` | Performs on a symbolic link, not its destination |
| `/setowner <user>` | Changes the owner |
| `/reset` | Replaces with default inherited ACLs |
| `/grant[:r] <user>:<permissions>` | Grants specified user access rights<br/> `:r` means replace previously granted explicit permissions |
| `/deny <user>:<permissions>` | Denies specified user access rights |
| `/remove[:g\|:d] <user>` | Remove access rights of specified user from DACL<br/>`:g` = Grant<br/>`:d` = Deny |

Permission syntax

```
[(OI)][(CI)][(IO)][(NP)][<simple permission>[...]](<permission>[,...])
```

Permission

| Inherit | Description |
| - | - |
| `(OI)` | Object Inherit |
| `(CI)` | Container inherit |
| `(IO)` | Inherit only |
| `(NP)` | Do not propagate inherit |

| Simple permission | Description |
| - | - |
| `F` | Full access |
| `M` | modify access |
| `RX` | Read and execute access|
| `R` | Read-only access |
| `W` | Write-only access |

| Permission | Description |
| - | - |
| `D` | Delete |
| `RC` | Read control |
| `WDAC` | Write DAC |
| `WO` | Write owner |
| `S` | Synchronize |
| `AS` | Access system security |
| `MA` | Maximum allowed |
| `GR` | Generic read |
| `GW` | Generic write |
| `GE` | Generic execute |
| `GA` | Generic all |
| `RD` | Read data/list directory |
| `WD` | Write data/add file |
| `AD` | Append data/add subdirectory |
| `REA` | Read extended attributes |
| `WEA` | Write extended attributes |
| `X` | Execute/traverse |
| `DC` | Delete child |
| `RA` | Read attributes |
| `WA` | Write attributes |
