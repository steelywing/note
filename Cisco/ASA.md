# Generate RSA key for SSH by ASDM CLI
```
ASA(config)# crypto key generate rsa [noconfirm]
```

# Packet capture
[Reference](https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/118097-configure-asa-00.html)

# Event manager

[Reference](https://www.cisco.com/c/en/us/support/docs/security/adaptive-security-appliance-asa-software/117883-config-eem-00.html)
```
ASA(config)# [no] event manager applet <name>
ASA(config-applet)# [no] description <text>
```

## Manual event
Required for manually run
```
ASA(config-applet)# [no] event none
```

## Syslog event
```
ASA(config-applet)# [no] event syslog id <start ID>[-<end ID>] [occurs <times>] [period <seconds>]
```

## Periodic event

### Absolute event
```
ASA(config-applet)# [no] event timer absolute time <hh:mm:ss>
```

### Countdown event
```
ASA(config-applet)# [no] event timer countdown time <seconds>
```

### Watchdog event
```
ASA(config-applet)# [no] event timer watchdog time <seconds>
```

## Action
```
ASA(config-applet)# [no] action [<action number>] cli command "<command>"
```

## Output

```
ASA(config-applet)# [no] output { none | console | file { new | rotate <number> | overwrite <file name> | append <file name> } }
```

## Verify applet

```
ASA# show running-config event manager
```

## Manually run applet

Require configured with `event none`
```
ASA# event manager run <applet>
```
