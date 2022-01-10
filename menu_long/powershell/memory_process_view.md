---
sort: 1
---

# Powershell Disk Size



**DiskSize**

```scss
 
  Write-Host "Host: $env:COMPUTERNAME ($(Get-Date -Format “MM/dd/yyyy”)) "  -foregroundcolor "green" 
  Get-WMIObject  -Class Win32_LogicalDisk | Where-Object {$_.DriveType -eq 3} `
    | Select-Object @{n="Unit";e={($_.Name)}}, 
                    @{n="Label";e={($_.VolumeName)}}, 
                    @{n='Size (GB)';e={"{0:n2}" -f ($_.size/1gb)}}, 
                    @{n='Free (GB)';e={"{0:n2}" -f ($_.freespace/1gb)}}, 
                    @{n='% Free';e={"{0:n2}" -f ($_.freespace/$_.size*100)}}

```
