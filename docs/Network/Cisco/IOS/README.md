---
tags: [Cisco, IOS]
---

# IOS

Cisco IOS

## Basic

Cut command before cursor

`Ctrl` + `X`

Paste command

`Ctrl` + `Y`

Hint

```
Switch# sh?
shell  show
```

## EXEC / Config Mode

Privileged EXEC Mode

```
Switch> en[able]
Switch#
```

Exit to User EXEC Mode

```
Switch# disable
Switch>
```

Enter config mode

```
Switch# conf[igure] t[erminal]
Switch(config)# 
```

Exit config mode

```
Switch(config)# exit
Switch# 
```

## Web UI

```
Switch(config)# [no] ip http server
Switch(config)# ip http authentication { aaa | enable | local }
```

## Show configuration

```
Switch# s[how] config[uration]
```

## Save / Reset

Save config

```
Switch# write
```

Reset to Factory Default

> Ref: [Resetting Catalyst Switches to Factory Defaults](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-2900-xl-series-switches/24328-156.html)

- Erase startup config

```
Switch# write erase
```

- Delete VLAN config

```
Switch# delete flash:/vlan.dat
```

## CDP (Cisco Discovery Protocol)

```
Switch# show cdp neighbors [<interface>] [detail]
```

## LLDP (Link Layer Discovery Protocol)

> Ref: [LLDP](lldp.pdf)


Enable / Disable LLDP
```
Switch(config)# [no] lldp run
```

Enable / Disable LLDP transmit
```
Switch(config)# [no] lldp transmit
```

Enable / Disable LLDP receive
```
Switch(config)# [no] lldp receive
```

Show LLDP neighbor
```
Switch# show lldp neighbors
```

## VLAN

> [Reference](https://www.cisco.com/c/en/us/support/docs/lan-switching/vlan/10023-3.html)

Create VLAN

```
Switch(config)# vlan <VLAN ID>[-<VLAN ID>]
Switch(config-vlan)#

! Older IOS version
Switch# vlan database
Switch(vlan)# vlan <VLAN ID>[-<VLAN ID>]
```

Remove VLAN
```
Switch(config)# no vlan <VLAN ID>[-<VLAN ID>]
```

VLAN name
```
Switch(config-vlan)# name <name>
```

List VLAN
```
Switch# show vlan
```

Show trunk port information
```
Switch# show interfaces trunk
```

### VTP (VLAN Trunking Protocol)

> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_52_se/configuration/guide/3560scg/swvtp.html)

```
Switch(config)# vtp mode { off | transparent | server | client }
Switch(config)# vtp domain <name>
Switch(config)# vtp password <password>
```

## SNMP

Enable SNMP

```
Switch(config)# snmp-server community <community string> ro
```

## Port channel / Ether channel

> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus5000/sw/configuration/guide/cli/CLIConfigurationGuide/EtherChannel.html)

Enable LACP (802.3ad)

```
Switch(config)# feature lacp
```

Create port channel interface

```
Switch(config)# interface port-channel <port channel number>
```

Changing the configure of `port-channel` interface, will pass the configure to the assigned interface.

```
Switch(config)# interface range Gi0/1 - 2
Switch(config-if-range)# channel-group 1 mode active

Switch(config)# interface port-channel 1
Switch(config-if)# switchport mode trunk

Switch# show running-config interface port-channel 1
!
interface Port-channel1
 switchport mode trunk
end

Switch# show running-config interface Gi0/1
!
interface GigabitEthernet0/1
 switchport mode trunk
end

Switch# show running-config interface Gi0/2
!
interface GigabitEthernet0/2
 switchport mode trunk
end
```

Assign interface to port channel group (LACP) (Recommended)

```
Switch(config-if)# channel-group <port channel number> 
    mode {active|passive}
```

Assign interface to port channel group (PAgP) (Not recommended)

```
Switch(config-if)# channel-group <port channel number> 
    mode {auto|desirable}
```

Show port channel summary

```
Switch# show etherchannel summary
```

Show LACP counter

```
Switch# show lacp counters
```

Show LACP neighbor

```
Switch# show lacp neighbor
```

## Interface

### Interface diagnostic

Show interface status

```
Switch# show interfaces status
```

Show interface queue, drop, traffic rate (usage)

```
Switch# show interfaces summary
```

Test cable TDR (Time-Domain Reflectometer) / pair length

```
Switch# test cable-diagnostics tdr interface <interface>
Switch# show cable-diagnostics tdr interface <interface>
```

Show transceiver (fiber gain/loss)

```
Switch# show interfaces transceiver
```

### Config interface

```
Switch(config)# interface <interface>/<port number>
Switch(config-if)# 
```

Config a range of interface

```
Switch(config)# interface range <interface>/<port number> - <port number>
```

Config VLAN interface

> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_52_se/configuration/guide/3560scg/swvlan.html)

```
Switch(config)# interface vlan <VLAN ID>
Switch(config-if)# ip address <IP> <netmask>
Switch(config-if)# no shutdown
```

#### Interface description

```
Switch(config-if)# description <description>
```

#### Auto MDI-X (Medium-Dependent Interface Crossover)
> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960x/software/15-0_2_EX/int_hw_components/configuration_guide/b_int_152ex_2960-x_cg/b_int_152ex_2960-x_cg_chapter_011.html)
```
Switch(config-if)# [no] mdix auto
```

#### Layer 3 mode

```
Switch(config-if)# no switchport
```

#### Layer 2 mode

```
Switch(config-if)# switchport
```

#### Set trunk encapsulation to 802.1Q

```
Switch(config-if)# switchport trunk encapsulation dot1q
```

#### Interface access / trunk mode

```
Switch(config-if)# switchport mode { access | trunk }
```

#### Trunk native VLAN

```
Switch(config-if)# switchport trunk native vlan <VLAN ID>
```

#### Allow specified VLAN on trunk

Default allow all

```
Switch(config-if)# switchport trunk allowed vlan <VLAN ID list>
```

#### Specify access port VLAN

```
Switch(config-if)# switchport access vlan <VLAN ID>
```

#### Protected mode

Do not forward traffic to other protected port

```
Switch(config-if)# switchport protected
```

### Bandwidth limit

> [Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/91862-cat3750-qos-config.html)

```
Switch(config-if)# srr-queue bandwidth limit <percentage>
```

### Recovery `err-disable` port

```
Switch(config-if)# shutdown
Switch(config-if)# no shutdown
```

### PoE

Power over Ethernet

Default (All) max consumption

```
Switch(config)# power inline consumption default <milli-watts>
```

On specify interface

```
Switch(config-if)# power inline consumption <milli-watts>
```

### Disable (non Cisco) GBIC module checking

> [Reference](https://www.cisco.com/c/en/us/support/docs/interfaces-modules/gbics/200296-Unsupported-GBIC-SFP-in-sub-module-of.html)

```
Switch(config)# no errdisable detect cause gbic-invalid
Switch(config)# service unsupported-transceiver
```

## Archive configuration

| Variable | Value |
| - | - |
| `$h` | Hostname |
| `$t` | Time |

### Archive to FTP

```
Switch(config)# ip ftp username <username>
Switch(config)# ip ftp password <password>

Switch(config)# archive
Switch(config-archive)# path ftp://<IP>/<path>
```

### Archive to SCP
```
Switch(config)# archive
Switch(config-archive)# path scp://<username>:<password>@<IP>/<path>
```

## Banner

| Variable | Value |
| - | - |
| `$(hostname)` | Hostname |

```
Switch(config)# banner login ^
<banner>
^
Switch(config)# 
```

## Show TCAM (ACL, MAC, QOS, Route) utilization

> [Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3850-series-switches/118957-troubleshoot-sec-acl-tcam-cat3850.html)

If TCAM ACL full, switch will randomly drop traffic.

```
Switch# show platform tcam utilization asic all
```

## SDM - Switch Database Management (TCAM, ACL, Routing)

> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swsdm.html)

Configure system resources

- If switch stacked, check SDM is match
```
Switch# show switch
```

- Show current SDM prefer
```
Switch# show sdm prefer
```

- Config SDM prefer
```
Switch(config)# sdm prefer ?
```

## ARP

### Static ARP

> [Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_arp/configuration/15-mt/arp-15-mt-book/arp-config-arp.html)

```
Switch(config)# arp <IP address> <MAC address> arpa
```

### ARP inspection

> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swdynarp.html)

If ARP over 15 packets per second, place the port in `error-disabled` state

```
Switch(config)# ip arp inspection vlan <VLAN list>
```

Auto recovery
```
Switch(config)# errdisable recovery cause arp-inspection
```

## Q-in-Q / IEEE 802.1Q tunnel

> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750x_3560x/software/release/12-2_55_se/configuration/guide/3750xscg/swtunnel.html)

```
Switch(config-if)# switchport access vlan <VLAN ID>
Switch(config-if)# switchport mode dot1q-tunnel
Switch(config)# vlan dot1q tag native
```

### Show IEEE 802.1Q tunnel port

```
Switch# show dot1q-tunnel
```

## QoS

> [Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3550-series-switches/24800-153.html)

> [Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3750-series-switches/91862-cat3750-qos-config.html)

[QoS Threshold](https://community.cisco.com/t5/telepresence-and-video/help-understanding-qos-threshold/td-p/1374101)

[Egress QoS](https://community.cisco.com/t5/networking-documents/egress-qos/ta-p/3122802)

Enable QoS
```
Switch(config)# mls qos
```

Class map
```
Switch(config)# class-map match-all <class name>
Switch(config-cmap)# match access-group <ACL>
```

Policy map
```
Switch(config)# policy-map <policy name>
Switch(config-pmap)# class { <class name> | class-default }

! Min Burst = BPS / 8,000
Switch(config-pmap-c)# police
    <BPS> 
    <burst normal> 
    <burst max> 
    exceed-action drop
```

Apply policy map
```
Switch(config-if)# service-policy { input | output } <policy name>
```

## Decrypt / Crack password

### Type 5

[Python module](https://passlib.readthedocs.io/en/stable/lib/passlib.hash.html)

### Type 7

> [Reference](https://insecure.org/sploits/cisco.passwords.html)

> [Reference](https://www.ifm.net.nz/cookbooks/passwordcracker.html)

```js
function decryptCiscoType7(encrypted) {
    var xlat = "dsfd;kfoA,.iyewrkldJKDHSUBsgvca69834ncxv9873254k;fg87";
    var password = '';
    var seed;

    if (encrypted.length & 1) {
        return null;
    }

    seed = parseInt(encrypted.slice(0, 2), 10);

    if (isNaN(seed) || seed > 15) {
        return null;
    }

    for (var i = 2; i < encrypted.length; i += 2) {
        var byte = parseInt(encrypted.slice(i, i + 2), 16);
        if (isNaN(byte)) {
            return null;
        }
        password += String.fromCharCode(byte ^ xlat.charCodeAt(seed));
        seed = (seed + 1) % xlat.length;
    }

    return password;
}
```
