## IP forward

[Reference](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Security_Guide/s1-firewall-ipt-fwd.html)

```sh
# Get IP forward setting
sysctl net.ipv4.ip_forward
# Set IP forward setting (0 = Disable, 1 = Enable)
sysctl -w net.ipv4.ip_forward={0|1}
```

Set IP forward on boot

`/etc/sysctl.conf`

```
net.ipv4.ip_forward = {0|1}
```

## Ping

```sh
# Display timeout
ping -O <ip>

# Display time
ping <ip> | while read log; do
  echo "$(date): $log";
done
```


## Nmap

```sh
# Host or prefix
nmap <host>[/prefix]
# Range
nmap 10.0.0-255.0-255
```

### Port
Default: scan most common 1,000 ports
```sh
nmap -p <port list>
# Scan most common 100 ports
nmap -F
# Range
nmap -p 1-100,1000-2000
```

### Host discovery
Default: scan port after ping discovery
```sh
# No ping
nmap -Pn
# Use TCP SYN to ping
nmap -PS <port list>
```
