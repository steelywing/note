---
tags: [Cisco, IOS, STP]
---

# STP

Spanning Tree Protocol

> [Wiki Reference](https://en.wikipedia.org/wiki/Spanning_Tree_Protocol)

> [AlliedWare Reference](https://www.alliedtelesis.com/sites/default/files/documents/how-alliedware-plus/howto_aw-_config_pvst_interop_cisco_revb.pdf)

> Ref: [H3C STP](./H3C-STP.pdf)

> Ref: [Arista STP with Cisco](./STP-with-Cisco.pdf)

- STP (Spanning Tree Protocol) / CST (Common Spanning Tree)
  - IEEE 802.1D
- RSTP (Rapid Spanning Tree Protocol)
  - IEEE 802.1w
  - Compatible with CST
- MSTP (Multiple Spanning Tree Protocol)
  - IEEE 802.1s, IEEE 802.1Q-2005
- PVST (Per-VLAN Spanning Tree)
  - Cisco proprietary protocol
  - PVST = CST BPDU on native VLAN + SSTP per VLAN
- Rapid-PVST
  - Cisco proprietary protocol
  - Compatible with PVST

| Port role | Forward BPDU | Forward frame |
|-|-|-|
| Root | X | O |
| Blocked / Alternate | X | X |
| Designated | O | O |

## STP mode

```
Switch(config)# spanning-tree mode { pvst | rapid-pvst | mst }
```

## Root guard

If a root guard enabled port receives superior STP BPDU, root guard moves this port to a root-inconsistent (listening) state.

```
Switch(config-if)# spanning-tree guard root
```

## Loop guard

> [Reference](https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/10596-84.html)

If a non-designated port no longer receive STP BPDU, the port transitions into loop-inconsistent (blocking) state.

```
Switch(config-if)# spanning-tree guard loop
```

Enable loop guard on all port

```
Switch(config)# spanning-tree loopguard default
```

## Port fast

Immediately brings interface to the forwarding state from a blocking state

```
Switch(config-if)# spanning-tree portfast [disable]
```

Enable port fast on all access port

```
Switch(config)# spanning-tree portfast default
```

## BPDU guard

If BPDU is detected on the port, the port will be `err-disable`.

```
Switch(config-if)# spanning-tree bpduguard { enable | disable }
```

Enable BPDU guard on all port fast port

```
Switch(config)# spanning-tree portfast bpduguard default
```

## BPDU filter

Ignore BPDU

```
Switch(config-if)# spanning-tree bpdufilter { enable | disable }
```
