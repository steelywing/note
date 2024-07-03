---
date: 2024-07-03
tags: [IPv6, Network, Firewall]
---

# IPv6 in OPNsense

<!--truncate-->

## WAN

- **IPv6 Configuration Type**: Usually DHCPv6
- Some ISP only issue **/64** prefix if client does not send IPv6 prefix hint
- Some ISP only issue **/64** prefix, even client sends IPv6 prefix hint (Ex: CTM)

## LAN

- **IPv6 Configuration Type**: **Track Interface**
- **Track IPv6 Interface** ▶ **IPv6 Interface**: WAN interface
- If manual setting **DHCPv6** / **Router Advertisements** is required, enable **Manual configuration**

## Manual setting DHCPv6 / Router Advertisements

- **Services** ▶ **DHCPv6**
- **Services** ▶ **Router Advertisements**
  - Set **Router Advertisements** to suitable option

## Using NPTv6

- **Interfaces** ▶ **LAN**
  - **IPv6 Configuration Type**: **Static IPv6**
  - **Static IPv6 configuration**:
    - **IPv6 address**: Choose a `/64` prefix in `fd00::/8`, Ex: `fd00::/64`
- **Firewall** ▶ **NAT** ▶ **NPTv6** ▶ <kbd>+</kbd>
  - **Interface**: **WAN**
  - **Internal IPv6 Prefix**: the LAN prefix `fd00::/64`
