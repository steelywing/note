## Connect to SFR (SourceFire / FirePower)

```
ASA# session sfr [console]
```

## Password

```
> configure password
```

## Network

```
> configure network { ipv4 | ipv6 } { dhcp | manual <IP> <netmask> <gateway> }
```

### Verify network

```
> show network
```

## Defense Center

### Add Defense Center

```
> configure manager add <IP> <key>
```

### Remove Defense Center

```
> configure manager delete
```

### Verify Defense Center

```
> show managers
```

### Linux shell

```
> expert
```

## Module

### Show module

```
ASA# show module
```

### Install the SFR Module on the ASA

[Reference](https://www.cisco.com/c/en/us/support/docs/security/asa-firepower-services/118644-configure-firepower-00.html)

- Remove old SFR module

```
ASA# sw-module module sfr shutdown
ASA# sw-module module sfr uninstall
```

- Boot to SFR boot image

```
ASA# copy http://<URL> flash:/<path>
ASA# sw-module module sfr recover configure image flash:/<path>
ASA# sw-module module sfr recover boot
```

- Show SFR boot log

```
ASA# debug module-boot
ASA# terminal monitor
```

- Connect to SFR console

```
ASA# session sfr console
```

Default username: `admin`

Default password: `Admin123`

- Setup SFR network

```
asasfr-boot> setup
```

- Install SFR package

```
asasfr-boot> system install http://<URL>
```
