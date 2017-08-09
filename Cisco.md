## TODO
- ACL
- VACL
- DHCP pool
- Policy map

## Cut command before cursor
`Ctrl` + `X`

## Paste command
`Ctrl` + `Y`

## Privileged EXEC Mode
```
Switch> enable
Switch#

! or
Switch> en
Switch#
```

## Exit to User EXEC Mode
```
Switch> disable
Switch#
```

## Enter config mode
```
Switch# conf t
Switch(config)# 
```

## Exit config mode
```
Switch(config)# exit
Switch# 
```

## Hint
```
Switch# sh?
shell  show
```

## Save config
```
write
```

## Reset err-disable port
```
Switch(config-if)# shutdown
Switch(config-if)# no shutdown
```

## Monitor logging in Telnet / SSH
```
Switch# terminal [no] monitor
```

## Monitor logging in Console
```
Switch(config)# [no] logging console
```

## Interface status
```
Switch# show int status
```

## CDP
```
Switch# show cdp neighbors [detail]
Switch# show cdp neighbors <interface>/<port number> detail
```

## Device name
```
Switch(config)# hostname <host name>
```

## [VLAN](https://www.cisco.com/c/en/us/support/docs/lan-switching/vlan/10023-3.html)
```
! Create VLAN
Switch(config)# vlan <VLAN ID>[-<VLAN ID>]
Switch(config-vlan)#

! If above not working
Switch# vlan database
Switch(vlan)# vlan <VLAN ID>[-<VLAN ID>]

! Remove VLAN
Switch(config)# no vlan <VLAN ID>[-<VLAN ID>]

! VLAN name
Switch(config-vlan)# name <name>
```

## VTP
```
Switch(config)# vtp mode <mode>
Switch(config)# vtp domain <name>
Switch(config)# vtp password <password>
```

## Encrypt password
```
Switch(config)# service password-encryption
```

## Display timestamp in log
```
Switch(config)# service timestamps log datetime localtime
Switch(config)# service timestamps debug datetime localtime
```

## Enable loop guard on all port
```
Switch(config)# spanning-tree loopguard default
```

## Enable port fast on all access port
```
Switch(config)# spanning-tree portfast default
```

## Enable BPDU guard on all port fast access port
```
Switch(config)# spanning-tree portfast bpduguard default
```

## DHCP snooping
Drop DHCP on untrust interface
```
Switch(config)# ip dhcp snooping
Switch(config)# ip dhcp snooping vlan 1 4094
Switch(config)# no ip dhcp snooping information option
```

## Gateway
This is for `no ip routing`, if `ip routing`, use default route `ip route 0.0.0.0 0.0.0.0 <gateway>`
```
Switch(config)# ip default-gateway <gateway>
```

## Change switch to routing mode
```
Switch(config)# ip routing
```

## DNS
```
Switch(config)# ip name-server <DNS IP> <DNS IP>...
```

## NTP
```
Switch(config)# ntp server <NTP server IP>
```

## Timezone
```
Switch(config)# clock timezone <timezone name> <timezone offset>
```

## Enable SNMP
```
Switch(config)# snmp-server community <community string> ro
```

## Create user
```
Switch(config)# username <username> privilege 15 password <password>
```

## Set enable password
Unnecessary for `privilege 15` user
```
Switch(config)# enable secret <password>
```

## Config console
```
Switch(config)# line console 0
Switch(config-line)# 
```

## Config Telnet / SSH
```
Switch(config)# line vty 0 15
Switch(config-line)# 
```

## Login password
Unnecessary if using `login local`
```
Switch(config-line)# password <password>
```

## Use password to login
```
Switch(config-line)# login
```

## Use user to login
```
Switch(config-line)# login local
```

## Timeout
```
Switch(config-line)# exec-timeout 30
```

## Enable Telnet and SSH
Default is not both
```
Switch(config-line)# transport input all
```

## Ctrl-C to break
```
Switch(config-line)# escape-character 3
```

## Config VLAN interface
```
Switch(config)# int vlan <VLAN ID>
Switch(config-if)# ip address <IP> <netmask>
Switch(config-if)# no shutdown
```

## Config port channel
```
Switch(config)# int port-channel <port channel number>
```

## Config switch port interface
```
Switch(config)# interface <interface>/<port number>
Switch(config-if)# 

! or
Switch(config)# int <interface>/<port number>
Switch(config-if)# 
```

## Config a range of switch port
```
Switch(config)# int range <interface>/<port number> - <port number>
```

## Description
```
Switch(config-if)# description <description>
```

## Change to layer 3 mode
```
Switch(config-if)# no switchport
```

## Change to layer 2 mode
```
Switch(config-if)# switchport
```

## Set trunk encapsulation to 802.1Q
```
Switch(config-if)# switchport trunk encapsulation dot1q
```

## Set to trunk mode
```
Switch(config-if)# switchport mode trunk
```

## Set to access mode
```
Switch(config-if)# switchport mode access
```

## Allow specify VLAN on trunk
Default allow all
```
Switch(config-if)# switchport trunk allowed vlan <VLAN ID list>
```

## Set VLAN
```
Switch(config-if)# switchport access vlan <VLAN ID>
```

## Enable protected mode
Traffic will not send to other protected port
```
Switch(config-if)# switchport protected
```

## Port fast
```
Switch(config-if)# spanning-tree portfast [disable]
```

## Root guard
```
Switch(config-if)# spanning-tree guard root
```

## BPDU filter
Ignore BPDU
```
Switch(config-if)# spanning-tree bpdufilter [enable|disable]
```

## BPDU guard
`err-disable` port if detect BPDU
```
Switch(config-if)# spanning-tree bpduguard [enable|disable]
```

## Trust DHCP from this port
For DHCP snooping
```
Switch(config-if)# ip dhcp snooping trust
```

## Assign to port channel group (LACP)
```
Switch(config-if)# channel-group <port channel number> mode active
```

## Show port channel (ether channel) summary
```
Switch# show etherchannel summary
```

## Disable domain name lookup in global mode
```
Switch(config)# no ip domain-lookup
```

## Config archive FTP login
```
Switch(config)# ip ftp username <username>
Switch(config)# ip ftp password <password>
```

## Archive
`$h` = hostname, `$t` = time
```
Switch(config)# archive
Switch(config-archive)# path ftp://<ip>/$h/$h-$t
Switch(config-archive)# path scp://<username>:<password>@<ip>/$h/$h-$t
```

## Banner
`$(hostname)` = hostname
```
Switch(config)# banner login ^
<Banner>
$(hostname)
^
Switch(config)# 
```

## Enable AAA authentication / authorization
```
Switch(config)# aaa new-model
Switch(config)# aaa authentication login default local
Switch(config)# aaa authorization exec default local
```

## Device domain
```
Switch(config)# ip domain-name <domain>
```

## Generate RSA key (for SSH)
```
Switch(config)# crypto key generate rsa
```

## Config SSH public key
```
Switch(config)# ip ssh pubkey-chain
Switch(config)# username <username>
Switch(config)# key-string
<public key>
Switch(config)# 
```

## [Show TCAM utilization](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-3850-series-switches/118957-troubleshoot-sec-acl-tcam-cat3850.html)
If TCAM ACL full, switch will randomly drop traffic.
```
Switch# show platform tcam utilization asic all
```

## [SDM - Switch Database Management (TCAM, ACL, Routing)](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_55_se/configuration/guide/scg3750/swsdm.html)
Configure system resources 
```
! If switch stacked, check SDM is match
Switch# show switch

! Show current SDM prefer
Switch# show sdm prefer

! Config SDM prefer
Switch(config)# sdm prefer ?
```
