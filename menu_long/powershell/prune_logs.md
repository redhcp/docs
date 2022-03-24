---
sort: 5
---

# Prune Logs 

**Prune Logs by Days** 
```scss
$Path = "c:\logs"
$Daysb = "-60"
$CurrentDate = Get-Date
$DatetoDelete = $CurrentDate.AddDays($Daysb)
Get-ChildItem $Path -Recurse -Force | Where-Object { $_.LastWriteTime -lt $DatetoDelete } | Remove-Item

```
