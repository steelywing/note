# NTP - Windows

## Windows Time service

### Reset Windows Time service

```powershell
# stop w32time service
net stop w32time

# remove w32time service
w32tm /unregister

# create w32time service
w32tm /register

# start w32time service
net start w32time
```

### Set NTP server

```powershell
# w32tm /config /update /syncfromflags:manual "/manualpeerlist:<peer> ..."
w32tm /config /update /syncfromflags:manual "/manualpeerlist:time.windows.com"
```

### Sync Time

```powershell
w32tm /resync
```
