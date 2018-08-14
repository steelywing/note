## iptables

[Reference](https://wiki.archlinux.org/index.php/iptables)

| Description | Command |
| --- | --- |
| Verbose list rules | `iptables -v -L [<chain>]` |
| List rules | `iptables -S [<chain>]` |
| Dump iptables to file | `iptables-save > <file>` |
| Restore iptables from file | `iptables-restore < <file>` |
| Save iptables (Red Hat <= 6) | `service iptables save` |
| Chains | `INPUT` `OUTPUT` `FORWARD` `PREROUTING` `POSTROUTING` |
| Tables | `raw` `filter` `nat` `mangle` `security` (Default `filter`) |
| Targets | `ACCEPT` `DROP` `QUEUE` `RETURN` `REJECT` `LOG` |

## Policy
```sh
iptables -P <chain> <target>
```

## Rule

[Reference](https://www.netfilter.org/documentation/HOWTO/packet-filtering-HOWTO-7.html)

```sh
iptables 
    { -A <chain> | -I <chain> [rule number] }
    [!][-i <interface>]
    [!][-o <interface>]
    [!][-p {icmp|tcp|udp}]
    [!][--sport <src port>]
    [!][--dport <dest port>]
    -j <target>
```

## Extension

[Reference](http://ipset.netfilter.org/iptables-extensions.man.html)

```sh
iptables 
    [-m state [!] --state { ESTABLISHED | NEW | RELATED }]
    [-m conntrack 
        [--ctstate { INVALID | NEW | ESTABLISHED | RELATED | UNTRACKED | SNAT | DNAT }]
    ]
```

## Redirect input to other port

[Reference](https://www.netfilter.org/documentation/HOWTO/NAT-HOWTO-6.html)

```sh
iptables -t nat -A PREROUTING [-i <interface>] -p tcp --dport <from port> -j REDIRECT --to-port <to port>
```

## Flow

![iptables flow chart](img/iptables.png)
