---
sort: 3
---

# Memory Process View

**Get Memory usage in Percentage**
```scss
$CompObject =  Get-WmiObject -Class WIN32_OperatingSystem
$Memory = ((($CompObject.TotalVisibleMemorySize - $CompObject.FreePhysicalMemory)*100)/ $CompObject.TotalVisibleMemorySize)
 
Write-Host "Memory usage in Percentage:  " ([math]::round($Memory,2))"%"

```


**Top 5 process Memory Usage (MB)**
```scss
$processMemoryUsage = Get-WmiObject WIN32_PROCESS | Sort-Object -Property ws -Descending | Select-Object -first 10 processname, @{Name="Mem Usage(MB)";Expression={[math]::round($_.ws / 1mb)}}
$processMemoryUsage

```
