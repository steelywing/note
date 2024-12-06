---
date: 2024-08-08
tags: [Windows, Language]
---

# Windows 10 Language Pack

<!--truncate-->

## Install Language Online

Using GUI

- **Windows** ▶ **Settings** ▶ **Time & Language** ▶ **Language** ▶ **Add a language**

Using PowerShell

```powershell
Install-Language [-Language] <language>
```

```powershell
Install-Language en-US
```

Change language

```powershell
Set-WinUserLanguageList  [-LanguageList] <language[, ...]>
```

```powershell
Set-WinUserLanguageList en-US
```

## Install Language Offline

Use one of the following methods to download language pack

- [`W10_11LangPack.ps1`](https://www.ntlite.com/community/index.php?threads/powershell-gui-for-downloading-language-packs-w10_11langpack-ps1.2747/)
- [Windows 10 Language Pack ISO](https://learn.microsoft.com/en-us/azure/virtual-desktop/language-packs)
  - [Direct Link](https://software-download.microsoft.com/download/pr/19041.1.191206-1406.vb_release_CLIENTLANGPACKDVD_OEM_MULTI.iso)

Install the `Microsoft-Windows-Client-LanguagePack-Package_*.cab` with `lpksetup.exe` (GUI)

If `lpksetup.exe` installation fails, use `dism.exe` to install:

> Ref: [Install or Remove Language Packs](https://learn.microsoft.com/en-us/windows-server-essentials/install/install-or-remove-language-packs)

```powershell
dism.exe /online /Add-Package /PackagePath:<full path to the cab file>
```

```powershell
dism.exe /online /Add-Package /PackagePath:C:\LP\Microsoft-Windows-Client-LanguagePack-Package_en-us-amd64-en-us.cab
```
