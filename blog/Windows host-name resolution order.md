---
date: 2022-12-05
tags: [Windows, Network, DNS]
---

# Windows host name resolution order

> Ref: [Microsoft TCP/IP Host Name Resolution Order](https://support.microsoft.com/en-au/help/172218/microsoft-tcp-ip-host-name-resolution-order)

<!--truncate-->

1. Self host name
2. `hosts` file (`%SystemRoot%\System32\drivers\etc\hosts`)
3. DNS
4. NBNS (NetBIOS Name Service) / LLMNR (Link-local Multicast Name Resolution)
