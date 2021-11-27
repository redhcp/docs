---
sort: 3
---



**List apps installed**
```scss
Get-AppxPackage –AllUsers | Select Name, PackageFullName
#option2
Get-AppxPackage -PackageTypeFilter Main, Bundle, Resource | Where-Object {$_.PackageFullName -like "*NAME_SEARCH*"}  | Select Name, PackageFullName
#option3
Get-AppxPackage -AllUsers | Where-Object {$_.PackageFullName -like "*NAME_SEARCH*"}  | Select Name, PackageFullName
```

**Remove PACKAGE_NAME**
```scss
Get-AppxPackage PACKAGE_NAME | Remove-AppxPackage
>option2**
Get-AppxPackage -PackageTypeFilter Main, Bundle, Resource | Where-Object {$_.PackageFullName -like "*NAME_SEARCH*"}  | Remove-AppxPackage -Allusers
```

**Remove apps list**
```scss
# 3D Builder
Get-AppxPackage *3dbuilder* | Remove-AppxPackage

# Get Office
Get-AppxPackage *officehub* | Remove-AppxPackage

# Groove Music
Get-AppxPackage *zunemusic* | Remove-AppxPackage

# Mail/Calendar
Get-AppxPackage *windowscommunicationapps* | Remove-AppxPackage

# Maps
Get-AppxPackage *windowsmaps* | Remove-AppxPackage

# Solitaire Collection
Get-AppxPackage *solitairecollection* | Remove-AppxPackage

# Movies & TV
Get-AppxPackage *zunevideo* | Remove-AppxPackage

# News
Get-AppxPackage *bingnews* | Remove-AppxPackage

# OneNote
Get-AppxPackage *onenote* | Remove-AppxPackage

# Skype
Get-AppxPackage *skypeapp* | Remove-AppxPackage

# Tips
Get-AppxPackage *getstarted* | Remove-AppxPackage

# Weather
Get-AppxPackage *bingweather* | Remove-AppxPackage

# Xbox
Get-AppxPackage *xboxapp* | Remove-AppxPackage
```