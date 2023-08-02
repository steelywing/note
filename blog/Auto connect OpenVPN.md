---
date: 2023-02-11
tags: [OpenVPN, VPN, Windows]
---

# Auto connect OpenVPN

## &gt; Version 2.5

> Ref: [Configuring OpenVPN to run automatically on system startup](https://openvpn.net/community-resources/configuring-openvpn-to-run-automatically-on-system-startup/)

- Put `.ovpn` config file in folder `%ProgramFiles%\OpenVPN\config-auto\`
- Set **OpenVPNService** service to **Automatic**

<!--truncate-->

## Using PowerShell

```powershell title="Administrator PowerShell"
$action = New-ScheduledTaskAction -Execute "`"${env:ProgramFiles}\OpenVPN\bin\openvpn.exe`"" -Argument "--config `"${env:UserProfile}\OpenVPN\config\OpenVPN.ovpn`""

$principal = New-ScheduledTaskPrincipal -UserId SYSTEM

$trigger = New-ScheduledTaskTrigger -AtLogOn

$task = New-ScheduledTask -Action $action -Principal $principal -Trigger $trigger

Register-ScheduledTask -TaskName OpenVPN -InputObject $task
```

## Using GUI

Start **Task Scheduler**

![Start Task Scheduler](img/Auto%20connect%20OpenVPN/Task%20Scheduler.png)

Create Task

![Create Task](img/Auto%20connect%20OpenVPN/Create%20Task.png)

**Change User or Group** to **SYSTEM**

![Change User or Group to SYSTEM](img/Auto%20connect%20OpenVPN/Change%20User%20or%20Group%20to%20SYSTEM.png)

**Trigger** ▶ **New**

![New Trigger](img/Auto%20connect%20OpenVPN/New%20Trigger.png)

**Begin the task** ▶ **At log on**

![At log on](img/Auto%20connect%20OpenVPN/At%20log%20on.png)

**Actions** ▶ **New**

![New Action](img/Auto%20connect%20OpenVPN/New%20Action.png)

- Set **Program** to `"%ProgramFiles%\OpenVPN\bin\openvpn.exe"`
- Set **Arg** to `--config "<OpenVPN.ovpn path>"`

![Action](img/Auto%20connect%20OpenVPN/Action.png)
