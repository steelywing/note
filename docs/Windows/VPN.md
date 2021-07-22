---
sidebar_label: VPN
---

# VPN - Windows

## L2TP/IPsec

Enable IPsec service

- Run `services.msc`
- Set `IKE and AuthIP IPsec Keying Modules` to `Automatic` / `Manual`
  
  ```powershell
  # PowerShell
  Set-Service -Name IKEEXT -StartupType Manual
  ```

- Set `IPsec Policy Agent` to `Automatic` / `Manual`
  
  ```powershell
  # PowerShell
  Set-Service -Name PolicyAgent -StartupType Manual
  ```

## NAT-T

> [Reference](https://docs.microsoft.com/en-us/troubleshoot/windows-server/networking/configure-l2tp-ipsec-server-behind-nat-t-device)

In Registry
```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\PolicyAgent
```

Set DWORD (32-bit) Value `AssumeUDPEncapsulationContextOnSendRule` to

| Value | Description |
|-|-|
| 0 | No NAT (Default) |
| 1 | Server is behind NAT |
| 2 | Server and Client are behind NAT |

## Add route to VPN

Automatic add route after VPN connected

```powershell
Add-VpnConnectionRoute -ConnectionName "<name>" -DestinationPrefix "<IP/Prefix>" -PassThru
```
