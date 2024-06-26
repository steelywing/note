---
date: 2024-06-25
tags: [Windows, Command]
---

# Run command with hidden console

Run command without console / hide console window

<!--truncate-->

## PowerShell

```powershell
powershell.exe -WindowStyle Hidden -Command "<command>"
```

## VBS

Create a `.vbs` file

```vb title="run.vbs"
CreateObject("WScript.Shell").Exec _
("<command>")
```

To run `.vbs` file:

```sh
# Without console
wscript.exe run.vbs

# With console
cscript.exe run.vbs
```
