---
date: 2023-05-31
tags: [PowerShell, Windows]
---

# Create shortcut `.lnk` in CLI

PowerShell

```powershell
$ws = New-Object -ComObject WScript.Shell
$ws.CurrentDirectory = $PWD
$s = $ws.CreateShortcut('url.lnk')
$s.TargetPath = 'http://example.com'
# $s.TargetPath = 'file.txt'
$s.Save()
```

<!--truncate-->
