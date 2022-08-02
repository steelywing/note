# Multicast

## PIM (Protocol Independent Multicast)

[Overview](https://www.cisco.com/c/en/us/td/docs/ios/solutions_docs/ip_multicast/White_papers/mcst_ovr.html#wp1009074)
/ [Quick Reference](https://www.cisco.com/c/en/us/support/docs/ip/ip-multicast/9356-48.html)
/ [Reference](https://www.cisco.com/c/en/us/td/docs/ios/solutions_docs/ip_multicast/White_papers/rps.html)
/ [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3750/software/release/12-2_52_se/configuration/guide/3750scg/swmcast.html)

```
Switch(config)# ip multicast-routing [distributed]
Switch(config)# ip pim rp-address <IP> [<ACL ID>]

! Enable PIM on Layer 3 interface
Switch(config-if)# ip pim ( sparse-mode | dense-mode | sparse-dense-mode )
```

## IP Querier

> [Reference](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/68131-cat-multicast-prob.html)

```
Switch(config)# ip igmp snooping querier [address <source IP>]
```

## IGMP

> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960x/software/15-0_2_EX/igmp_snoop/configuration_guide/b_mc_152ex_2960-x_cg/b_mc_152ex_2960-x_cg_chapter_010.html)

Default enabled

```
Switch(config)# ip igmp snooping [vlan <VLAN ID>]
```

## Multicast Debug

> [Reference](https://www.cisco.com/c/en/us/support/docs/ip/ip-multicast/16450-mcastguide0.html)

```
Switch# show ip igmp groups [detail]
Switch# show ip igmp membership
Switch# show ip mroute [<IP>] [count]
```
