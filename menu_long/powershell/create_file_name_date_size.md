---
sort: 7
---

# Create file with date in filename


**Create file with date in filename, specific size**

```scss
$FILENAME=get-date -format yyyyMMdd.HHmmssff
$MYARRAY = New-Object -TypeName Byte[] -ArgumentList 1Mb
$OBJ = New-Object -TypeName System.Random
$OBJ.NextBytes($MYARRAY)
Set-Content -Path $FILENAME".txt" -Value $MYARRAY -Encoding Byte

Write-Host "The file was created in" $((pwd).path) -foregroundcolor "green"

```
