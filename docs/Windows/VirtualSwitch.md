# Virtual switch

Install Hyper-V and virtual switch

```powershell
Enable-WindowsOptionalFeature -Online -All -FeatureName Microsoft-Hyper-V
```

Disable Hyper-V without uninstallation

> [Reference](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/bcdedit--set)

```cmd
bcdedit /set hypervisorlaunchtype { off | auto }
```

Get current setting

```cmd
bcdedit /enum "{current}"
```
