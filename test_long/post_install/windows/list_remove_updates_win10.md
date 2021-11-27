---
sort: 3
---

## This script, allow check or unistall updates win10 installed.

**CMD**
```scss
wmic qfe list brief /format:table  # list installed updates 

wusa /uninstall /kb:5003637 # unistall NUMBER update
```

**Powershell**
```scss
get-wmiobject -class win32_quickfixengineering  #list installed

Install-Module PSWindowsUpdate

Get-WUHistory | Select-Object -First 20

Remove-WindowsUpdate -KBArticleID KB5003637
```

