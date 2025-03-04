---
sort: 1
---

# Install Chocolatey Powershell 

>[Chocolatey Page for find Package Here](https://community.chocolatey.org/packages)

**Install choco**
```scss
Set-Executionpolicy unrestricted -Force; #add permission execute powershell 
```
```
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

or 
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```


**Upgrade choco**
```
choco upgrade chocolatey
```



**Install choco apps**

```css
choco install adobereader
choco install googlechrome
choco install firefox
choco install winrar
choco install zoom
choco install k-litecodecpackfull
choco install sublimetext3.app


choco install vscode
choco install git.install
choco install python 
choco install microsoft-windows-terminal
choco install putty.install
choco install virtualbox
choco install docker-desktop
choco install grafana
choco install vnc-viewer
choco install github-desktop

choco install notion
choco install slack
choco install resilio-sync-home
choco install discord
choco install itunes
choco install windows10-media-creation-tool

choco install libreoffice-fresh
choco install office365business
choco install notepadplusplus
choco install google-drive-file-stream
choco install vlc
choco install dellcommandupdate 
     
```
**List choco apps Installed**

```
choco list --local-only
```
**Update choco apps installed**
```
cup -y all 
```