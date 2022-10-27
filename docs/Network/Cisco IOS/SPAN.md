# SPAN

Switched Port Analyzer / Port Mirroing / Port Monitoring

Copy (Mirror) source interface packet to destination interface

## Local SPAN

```cisco
monitor session 1 source interface <interface> both
monitor session 1 destination interface <interface>
```

## RSPAN

Remote SPAN

![RSPAN](img/RSPAN.svg)

```cisco title="switch-1"
vlan 100
    name RSPAN
    remote-span

interface GigabitEthernet1/0/1
    description Trunk to switch-2
    switchport mode trunk
    switchport trunk allowed vlan 100

interface GigabitEthernet1/0/2
    description Server

monitor session 1 source interface Gi1/0/2
monitor session 1 destination remote vlan 100
```

```cisco title="switch-2"
vlan 100
    name RSPAN
    remote-span

interface GigabitEthernet1/0/2
    description WireShark

interface GigabitEthernet1/0/15
    description Trunk to switch-1
    switchport mode trunk
    switchport trunk allowed vlan 100

monitor session 1 source remote vlan 100
monitor session 1 destination interface Gi1/0/2
```
