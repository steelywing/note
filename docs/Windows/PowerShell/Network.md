---
sidebar_label: Network
---

# Network - PowerShell

## Network profile

Get network profile

```powershell
Get-NetConnectionProfile
```

Set network profile

```powershell
Set-NetConnectionProfile
    { -InterfaceIndex <ID> | -Name <name> }
    -NetworkCategory { Private | Public }
```

## Show UDP listening port

```powershell
Get-NetUDPEndpoint -LocalAddress 0.0.0.0,::1
```

View owning process ID

```powershell
Get-NetUDPEndpoint -LocalAddress 0.0.0.0,::1 | 
    select OwningProcess,LocalPort
```

View owning process name

```powershell
Get-NetUDPEndpoint -LocalAddress 0.0.0.0,::1 | 
    select LocalPort,
    @{
        L="Process";
        E={(Get-Process -Id $_.OwningProcess)
            .ProcessName}
    }
```

## Show TCP listening port

```powershell
Get-NetTCPConnection -State Listen [-LocalPort <port>]
```

## Firewall

Allow ICMP echo request

```powershell
New-NetFirewallRule `
    -DisplayName "ICMPv4 echo request" `
    -Direction Inbound `
    -Protocol ICMPv4 `
    -IcmpType 8 `
    -Action Allow

New-NetFirewallRule `
    -DisplayName "ICMPv6 echo request" `
    -Direction Inbound `
    -Protocol ICMPv6 `
    -IcmpType 8 `
    -Action Allow
```

## VLAN

[Add external virtual switch](../VirtualSwitch.md#add-external-virtual-switch)

### Create VLAN interface

```powershell
Add-VMNetworkAdapter -ManagementOS -Name "<name>"
Set-VMNetworkAdapterVlan -ManagementOS -VMNetworkAdapterName "<name>" -Access -VlanId <VLAN ID>
```

### Remove VLAN interface

```powershell
Remove-VMNetworkAdapter -ManagementOS -Name "<name>"
```
