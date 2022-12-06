# Reserve TCP/UDP port

## Show reserved port

```cmd
netsh int[erface] ipv4 `
    show excludedportrange { tcp | udp }
```

## Add / Delete reserved port

```cmd
netsh int[erface] ipv4 `
    { add | delete } ex[cludedportrange] `
    { [protocol=] tcp | udp } `
    <start port> `
    <number of ports> `
    [ [store=] active | persistent ]
```

If get `Access is denied` error when delete reserve port, try [Clear Hyper-V / WSL binding port](#clear-hyper-v--wsl-binding-port)

> Ref: [You cannot exclude ports by using the ReservedPorts registry key](https://support.microsoft.com/en-us/help/2665809/you-cannot-exclude-ports-by-using-the-reservedports-registry-key-in-wi)

## Clear Hyper-V / WSL binding port

```powershell
# show reserved port
netsh interface ipv4 show excludedportrange protocol=tcp

# stop `winnat` service if the port is reserved
net stop winnat

# reserve the port
netsh int ipv4 add excludedportrange protocol=tcp startport=5000 numberofports=1

# restart `winnat` service
net start winnat
```

> Ref: [Docker issue #3171](https://github.com/docker/for-win/issues/3171)
