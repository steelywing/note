# Client IP address

```nginx
# Client IP address
$remote_addr
```

## Get client IP address from header

For Nginx behind proxy, use [Real IP address](Proxy.md#real-ip-address)

## Map IP address

Map IP address to value

```nginx
geo [$<address>] $<variable> {
    [default <value>;]
    [<IP address> <value>;]
    [<CIDR> <value>;]
}

geo $local {
    default         0;
    10.0.0.0/8      1;
    192.168.0.0/16  1;
}

if ($local) {
    # ...
}
```
