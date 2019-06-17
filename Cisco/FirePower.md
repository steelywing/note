# Connect to SFR (SourceFire / FirePower)
```
ASA# session sfr [console]
```

# Password
```
> configure password
```

# Network
```
> configure network { ipv4 | ipv6 } { dhcp | manual <IP> <netmask> <gateway> }
```

## Verify network
```
> show network
```

# Defense Center

## Add Defense Center
```
> configure manager add <IP> <key>
```

## Remove Defense Center
```
> configure manager delete
```

## Verify Defense Center
```
> show managers
```

## Linux shell
```
> expert
```
