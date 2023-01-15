---
tags: [Cisco, IOS, Route]
---

# Routing

## Gateway

For `no ip routing`

```
Switch(config)# ip default-gateway <gateway>
```

For `ip routing`

```
Switch(config)# ip route 0.0.0.0 0.0.0.0 <gateway>
```

## Change to routing mode

```
Switch(config)# ip routing
```

## Policy-based routing

> [Reference](https://www.cisco.com/c/en/us/td/docs/ios/12_2/qos/configuration/guide/fqos_c/qcfpbr.html)

| ACL | Description |
| - | - |
| `permit` | `route-map` is applied, the next `route-map` clause is not evaluated |
| `deny` | `route-map` is not applied, the next `route-map` clause is evaluated |

| `route-map` | Description |
| - | - |
| `permit` | route is redistributed |
| `deny` | route is not redistributed |

- `route-map` default is permit

```
Switch(config)# route-map <route-map name> [permit|deny] [<sequence number>]

! Default (no configured match) match all
Switch(config-route-map)# match ip address <ACL>
Switch(config-route-map)# set ip next-hop <IP>

Switch(config-if)# ip policy route-map <route-map name>
```

## OSPF

Open Shortest Path First

- The LSDB (Link-State DataBase) of routers within the same area are same
- OSPF distribute routes to the same `Area ID`
- Area ID `0` / `0.0.0.0` is Backbone Area

### Enable OSPF

- `<process ID>` is local use only

```
Switch(config)# router ospf <process ID>
Switch(config-router)#
```

### Attach interface to OSPF

Method 1

- `<IP address>` use to match interface
- `network 0.0.0.0 255.255.255.255` match all interface
- OSPF distribute routes to the same `Area ID`

```
Switch(config-router)# network 
    <IP address> <inverse mask> 
    area <area ID>
```

Method 2

```
Switch(config-if)# ip ospf <process ID> area <area ID>
```

List LSAs (Link State Advertisements)
```
Switch# show ip ospf database
```

List OSPF neighbor
```
Switch# show ip ospf neighbor
```

List OSPF routes
```
Switch# show ip route ospf
```

Redistributing connected networks into OSPF

> [Reference](https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/18722-redist-conn.html)

```
Switch(config-router)# redistribute connected subnets
```

Redistributing static routes into OSPF

```
Switch(config-router)# redistribute static subnets
```

Redistributing default route into OSPF

> [Reference](https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/47868-ospfdb9.html)

```
Switch(config-router)# default-information originate
```
