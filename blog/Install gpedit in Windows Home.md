---
date: 2024-09-19
tags: [Windows, Group Policy]
---

# Install `gpedit.msc` in Windows Home

To install Group Policy Editor (`gpedit.msc`) in Windows Home

<!--truncate-->

Run this command in Administrator mode Command Prompt

```cmd
FOR %F IN ("%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~*.mum") DO (DISM /Online /NoRestart /Add-Package:"%F")
FOR %F IN ("%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~*.mum") DO (DISM /Online /NoRestart /Add-Package:"%F")
```

Or save this to `.bat` file, then **Run as Administrator**

- the `%` need to be escaped with `%%`

```bat
FOR %%F IN ("%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~*.mum") DO (DISM /Online /NoRestart /Add-Package:"%%F")
FOR %%F IN ("%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~*.mum") DO (DISM /Online /NoRestart /Add-Package:"%%F")
```
