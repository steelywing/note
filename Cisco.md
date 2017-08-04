## Cut command before cursor
Ctrl + X

## Paste command
Ctrl + Y

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
```

## Exit config mode
```
Switch(config)# exit
```

## Reset err-disable port
```
Switch(config-if)# shutdown
Switch(config-if)# no shutdown
```

## Monitor logging in Telnet / SSH
```
! Enable
Switch# terminal monitor
! Disable
Switch# terminal no monitor
```

## Monitor logging in Console
```
! Enable
Switch(config)# logging console
! Disable
Switch(config)# no logging console
```

## Set device name
```
Switch(config)# hostname <host name>
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

## Enable BPDU guard on all access port
```
Switch(config)# spanning-tree portfast bpduguard default
```

## DHCP snooping (drop DHCP on untrust interface)
```
Switch(config)# ip dhcp snooping
Switch(config)# ip dhcp snooping vlan 1 4094
Switch(config)# no ip dhcp snooping information option
```

## Gateway (for no ip routing switch)
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

## Set enable password (Unnecessary if using privilege 15 user)
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

## Password
Unnecessary if using "login local"
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
! or
Switch(config)# int <interface>/<port number>
Switch(config-if)# 
```

## Config a range of switch port
```
Switch(config)# int range <interface>/<port number> - <port number>
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

## Set VLAN
```
Switch(config-if)# switchport access vlan <VLAN ID>
```

## Enable protected mode (traffic will not send to other protected port)
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

## BPDU filter (ignore BPDU)
```
Switch(config-if)# spanning-tree bpdufilter [enable|disable]
```

## BPDU guard (err-disable port if detect BPDU)
```
Switch(config-if)# spanning-tree bpduguard [enable|disable]
```

## Trust DHCP from this port
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
```
Switch(config)# archive
Switch(config-archive)# path ftp://<ip>/$h/$h-$t
```

## Banner
```
Switch(config)# banner login ^
<Banner>
Variable: $(hostname)
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

## Config SSH
```
Switch(config)# ip ssh pubkey-chain
Switch(config)# username <username>
Switch(config)# key-string
<public key>
Switch(config)# 
```

## Save config
```
write
```
