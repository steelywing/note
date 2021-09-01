# HP / H3C

## System view / level

Enter system view

```
<H3C> sys[tem-view]
[H3C]
```

Return to user view

```
[H3C] quit
<H3C>
```

## Configuration

Show configuration

```
[H3C] dis[play] [cur]rent-configuration
```

Save configuration

```
[H3C] save
```

## Enable telnet

```
[H3C] telnet server enable
```

## Host name

```
[H3C] sysname [host name]
```

## VLAN

Create VLAN

```
[H3C] vlan <VLAN ID> [ to <VLAN ID> ]
```

VLAN name

```
[Switch-vlan] name <name>
```

## Authenticate

Use local user authentication

```
[H3C] scheme { local | none  }
```

### Create local user

```
[H3C] local-user <user name>
[H3C-luser-<user name>] password cipher <password>
[H3C-luser-<user name>] service-type ssh telnet terminal
[H3C-luser-<user name>] authorization-attribute level 3
```

### Remove local user

```
[H3C] undo local-user <user name>
```

### Enable user authentication

Console

```
[H3C] user-interface aux 0
[H3C-ui-aux0] authentication-mode scheme
```

VTY ( telnet / SSH )

```
[H3C] user-interface vty 0 15
[H3C-ui-vty0-15] authentication-mode scheme
```

### Enable password authentication

```
[H3C-ui-<UI>] user privilege level 3
[H3C-ui-<UI>] set authentication password cipher <password>
```

## Interface IP address

```
[H3C] int[erface] vlan[-interface] <VLAN ID>
[H3C-Vlan-interface] ip address <IP address> <Net mask>
```

## Access / Trunk

Trunk

```
[H3C] int[erface] E[thernet]<ID>
[H3C-Ethernet<ID>] port link-type trunk
[H3C-Ethernet<ID>] port trunk permit vlan { all | <VLAN ID> ... }
```

Access

```
[H3C] int[erface] E[thernet]<ID>
[H3C-Ethernet<ID>] port link-type access
[H3C-Ethernet<ID>] port access vlan <VLAN ID>
```

## PoE

```
[H3C-Ethernet<ID>] [undo] poe enable
```

## Route

```
[H3C] ip route-static <Dest IP address> <Dest net mask> <Next hop IP address>
```

## Timezone

```
[H3C] clock timezone <timezone name> add <HH>:00:00
```
