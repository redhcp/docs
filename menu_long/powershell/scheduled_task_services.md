---
sort: 6
---

# Handler Activity Task

**Task for handle services,process,scheduletask,etc with powershell** 

```scss
$computers = @(
        'COMPUTER_NAME_1',
        'COMPUTER_NAME_2'
 )
 foreach ($computer in $computers) {
 
Write-Host "ComputerName: $env:COMPUTERNAME ($(Get-Date -Format “MM/dd/yyyy”)) "  -foregroundcolor "green"

#STOP PROCESS PID
   #  Invoke-Command -Computername $computer -scriptblock {stop-precess -id 123 } #number PID

#STOP SERVICE
  #  Invoke-Command -Computername $computer -scriptblock {stop-service SERVICE-NAME -force}

#Validate Service 
    # Invoke-Command -Computername $computer -scriptblock {get-service SERVICE-NAME}

#Start Service
    # Invoke-Command -Computername $computer -scriptblock {start-service SERVICE-NAME }
   
#Disble TASK
    # Invoke-Command -Computername $computer -scriptblock {Disable-ScheduledTask -TaskName TASKNAME}

#Enable TASK
    # Invoke-Command -Computername $computer -scriptblock {Enable-ScheduledTask -TaskName TASKNAME}

#Start TASK
    # Invoke-Command -Computername $computer -scriptblock {Start-ScheduledTask -TaskName TASKNAME}
 
#VALIDATE TASK WatchdogACA
  Invoke-Command -Computername $computer -scriptblock {Get-ScheduledTask -TaskName "TASKNAME"}

#Get TASK by status Values: Running / Ready / Disabled / Queued / Unknown
 #Invoke-Command -Computername $computer -scriptblock {Get-ScheduledTask | where{$_.State -eq "Ready"}}

}

```