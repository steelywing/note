# Task Scheduler

## Create task

> Ref: [New-ScheduledTask](https://learn.microsoft.com/en-us/powershell/module/scheduledtasks/new-scheduledtask?view=windowsserver2022-ps)

Parameter

- `<program>`
- `<arguments>`
- `<user>`
- `<task name>`

```powershell title="Administrator PowerShell"
$action = New-ScheduledTaskAction -Execute "`"<program>`"" -Argument "<arguments>"

$principal = New-ScheduledTaskPrincipal -UserId <user>

$trigger = New-ScheduledTaskTrigger -AtLogOn

$task = New-ScheduledTask -Action $action -Principal $principal -Trigger $trigger

Register-ScheduledTask -TaskName <task name> -InputObject $task
```
