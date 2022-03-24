---
sort: 4
---

# Clean temporal files from one site from IIS.


**this is for ALL sites**
```scss
#invoke-command -computername "HOSTNAME" -scriptblock {iisreset /STOP}
#invoke-command -computername "HOSTNAME" -scriptblock {iisreset /START} ; Start-WebSite $args[0]
```

**this is for ONE site**
```scss
Import-Module WebAdministration
$serverName = "COMPUTERNAME"      #name VM
$siteName = "ELA_Client" #name site
$block = {Stop-WebSite $args[0]};  
$session = New-PSSession -ComputerName $serverName

#stop site
Invoke-Command -Session $session -ScriptBlock $block -ArgumentList $siteName

#remove data path
Invoke-Command -Session $session -ScriptBlock {Get-ChildItem –Path "C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Temporary ASP.NET Files\*\" | Remove-Item -Recurse -Force }

#start site 
$block = {Start-WebSite $args[0]};  
Invoke-Command -Session $session -ScriptBlock $block -ArgumentList $siteName

```