# Password
[Reference](https://www.cisco.com/c/en/us/support/docs/smb/switches/cisco-small-business-300-series-managed-switches/smb5563-configure-password-settings-on-a-switch-through-the-command.html)

## Password recovery
```
Switch(config)# [no] service password-recovery
```

## Enable / Disable password complexity
```
Switch(config)# [no] passwords complexity enable
```

## Password aging
0 day = Disable password aging
```
Switch(config)# [no] passwords aging <day>
```
