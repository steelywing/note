# BIND9

Berkeley Internet Name Domain

> [Official](https://www.isc.org/bind/)

> [Doc](https://bind9.readthedocs.io/en/stable/)

## TSIG

Transaction SIGnatures

### Generating a Shared Key

```bash
tsig-keygen <key name> > <key-name.key>
```

### Add TSIG key to config

``` title="named.conf"
include "/etc/bind/<key-name.key>";
```

## Check config file

Check config file syntax

```bash
named-checkconf
```

## Reload

Reload / Restart

```bash
rndc reload [<zone>]
```

## Dynamic Update (RFC 2136)

Allow update based on IP address

```sh
# context: { options | view | zone }
allow-update {
    # Address Match List
    # [!] 10.0.0.1[/24]; ...
};
```

:::note Reference

- [Address Match List](https://bind9.readthedocs.io/en/v9_18/reference.html#address-match-lists)
- [Dynamic Update](https://bind9.readthedocs.io/en/v9_18/chapter6.html#dynamic-update)
- [RFC 2136](https://datatracker.ietf.org/doc/html/rfc2136.html)

:::

## `nsupdate`

```bash
nsupdate

# server <DNS server IP address> [port]
> server ns1.example.com

# update add <name> <TTL time> <record type> <value>
> update add www.example.com. 3600 A 1.1.1.1

# show what will submit
> show

# submit
> send
```

## Re-transfer zone

Run on slave

```bash
# rndc retransfer <zone>
rndc retransfer example.org
```
