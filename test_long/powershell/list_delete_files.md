---
sort: 2
---

# List Delete Files

**Delete files in select path recursive and before days selected**

```scss
$path ='YOUR_PATH'
$days = -1 # example (number -1), is yesterday.
$P = Get-ChildItem -Path $path -Recurse | Where-Object LastWriteTime -LT (Get-Date).AddDays($days) | Remove-Item -Recurse -Force

```


**List files size in select path recursive and before days selected**

*can use "-Include" or "-Exclude" for extensions*

```scss
$path ='YOUR_PATH','YOUR_PATH_2'
$days = -7 # example (number -7), is last week. 
$P = Get-ChildItem -Path $path -Recurse -Include *.log -Exclude file.log | Where-Object LastWriteTime -LT (Get-Date).AddDays($days) |  Select-Object @{n="Name";e={($_.Name)}},@{n='Size (MB)';e={"{0:n2}" -f ($_.length/1mb)}},@{n="Path";e={($_.FullName)}}
Write-Output $P 

```