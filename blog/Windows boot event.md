---
date: 2024-06-28
tags: [Windows, Log]
---

# Windows Startup and Shutdown Events

<!--truncate-->

## Event Viewer

- Run `eventvwr.msc`
- **Windows Logs** ▶ **System** ▶ **Filter Current Log...**

## PowerShell

```powershell
# Get-EventLog System | ? EventID -In (<Event ID>, ...)
Get-EventLog System | ? EventID -In (6005, 6006)
```

## Event ID

- 1074: Which process initiate the shutdown / reboot
- 6005: The Event log service was started
- 6006: The Event log service was stopped
- 6008: The previous system shutdown was unexpected
- 6013: The system uptime
