---
date: 2024-06-25
tags: [Windows, Command]
---

# Run command with hidden console

Run command without console / hide console window

<!--truncate-->

## PowerShell

- This will keep the PowerShell instance running

```powershell
powershell.exe -WindowStyle Hidden -Command "<command>"
```

- This will not keep the PowerShell instance running

```powershell
Start-Process -WindowStyle Hidden "<command>"
```

Run with shortcut

```powershell
powershell.exe -Command "Start-Process -WindowStyle Hidden ""<command>"""
```

## WSH

### VBS

Create a `.vbs` file

```vb title="run.vbs"
CreateObject("WScript.Shell").Exec _
("<command> <arg> ...")
```

To run the `.vbs` file:

```sh
# Without console
wscript.exe run.vbs

# With console
cscript.exe run.vbs
```

### JS

Create a `.js` file

```js
new ActiveXObject("WScript.Shell").Run("<command> <arg> ...", 0);
```

```js title="run.js"
new ActiveXObject("WScript.Shell").Run("cmd /c echo test > text.txt", 0);
```

To run the `.js` file:

```sh
# Without console
wscript.exe run.js

# With console
cscript.exe run.js
```
