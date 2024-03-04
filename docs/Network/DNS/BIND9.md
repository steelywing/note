# BIND9

Berkeley Internet Name Domain

> [Official](https://www.isc.org/bind/)

> [Doc](https://bind9.readthedocs.io/en/stable/)

## TSIG

Transaction SIGnatures

### Generating a Shared Key

```sh
# tsig-keygen <key name> > <key-name.key>
tsig-keygen ddns > /etc/bind/ddns.key
```

### Add TSIG key to config

```conf title="named.conf"
# include "<key-path.key>";
include "/etc/bind/ddns.key";
```

## Check config file

Check config file syntax

```sh
named-checkconf
```

## Reload

Reload / Restart

```sh
rndc reload [<zone>]
```

## Dynamic Update (RFC 2136)

Enable dynamic update

```sh
key "ddns" {
    algorithm hmac-sha256;
    secret "...";
}

# context: { options | view | zone }
allow-update {
    # Address Match List
    # [!] 10.0.0.1[/24]; ...

    # Allow update with TSIG Key
    key ddns;
};
```

### Manual edit dynamic records

> Ref: [Why don't my zones reload when I do an "rndc reload"?](https://kb.isc.org/docs/aa-00281)

:::note

If dynamic update is enabled, `rndc reload` will not reload the zone file

:::

- Stop dynamic update

```sh
rndc freeze
```

- Edit the zone file
- Reload the zone file and start dynamic update

```sh
rndc thaw
```

> Ref: [Address Match List](https://bind9.readthedocs.io/en/v9_18/reference.html#address-match-lists)

> Ref: [Dynamic Update](https://bind9.readthedocs.io/en/v9_18/chapter6.html#dynamic-update)

> Ref: [RFC 2136](https://datatracker.ietf.org/doc/html/rfc2136.html)

## Update dynamic record

```sh
# nsupdate [-k <TSIG key file>]
nsupdate -k ddns.key

# server <DNS server IP address> [port]
> server ns1.example.com

# update add <name> <TTL time> <record type> <value>
> update add www.example.com. 3600 A 1.1.1.1

# update delete <name> <record type>
> update delete dns.example.com. A

# show what will be send
> show

> send
```

## Re-transfer zone

Run on slave

```bash
# rndc retransfer <zone>
rndc retransfer example.org
```
