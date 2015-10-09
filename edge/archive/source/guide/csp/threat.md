# ThreatMgr

## About ThreatMgr

### Overview

The ThreatMgr Feature Type allows your application to control what security threats a device actively monitors for and how to respond.

### Main Functionality

* Enable or Disable Threat Detection
* Detectable threats:
  * Max Password Attempts
  * MDM Client Removal
  * Externally Detected 
  * Exchange Active Sync Command
  * Device is Rooted
* Counter Measures:
  *  Format SdCard
  *  Factory Reset
  *  Wipe Secure Storage Keys
  *  Lock Device
  *  Uninstall Application 
  *  Unsolicited Alert
  *  Signal Occurrence of Threat

##Parameter Notes
###Configure handling of a threat
Pivotal parm: Yes

Description: 

>This parm will allow you to select whether a threat should be detected and, if so, how it should be mitigated.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not Threat Detection is used.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause Threat Detection to be turned on and will allow you to choose how threats should be mitigated.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This will cause Threat Detection to be turned off.</td>
  </tr>
</table>
</div>	

###Name of the threat to detect
Settable if: The "Configure handling of a threat" value is "Turn On" or "Turn Off"

Pivotal parm: Yes

Description: 

>This parm will specify the name of the threat to be detected or not detected.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Max Password Attempts</td>
    <td>"MaxPasswordAttempts"</td>
	<td>This value will cause a threat to be detected when the user tries to login to the device with the wrong password the maximum number of times.</td>
  </tr>
  <tr>
    <td>MDM Client Removal</td>
    <td>"MDMClientRemoval"</td>
	<td>This value will cause a threat to be detected when the MDM Client is removed from the device.</td>
  </tr>
  <tr>
    <td>Externally Detected</td>
    <td>"ExternallyDetected"</td>
	<td>This value will cause a custom threat to be detected from an external source through receiving an intent from this source.</td>
  </tr>
  <tr>
    <td>Exchange Active Sync Command</td>
    <td>"ExchangeActiveSyncCommand"</td>
	<td>This value will cause a threat to be detected when an error occurs when syncing with Exchange.</td>
  </tr>
  <tr>
    <td>Device is Rooted</td>
    <td>"DeviceisRooted"</td>
	<td>This value will cause a threat to be detected when the device is rooted.</td>
  </tr>
</table>
</div>	

####MDM Client Package Name
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "MDM Client Removal"

Pivotal parm: No

Parm name: MDMPackage

Description: 

>This parm allows you to specify the package name of MDM Client to be observed. If this MDM Client is removed from the device, this will be detected as a threat.

>**Note:** The MDM Client must be a system app to be specified.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Counter Measure - Format Sdcard
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted"

Pivotal parm: No

Parm name: FormatSdcard

Description: 

>This parm allows you to specify if the external SD card should be formatted in response to a detected threat. This would cause all existing data on the SD card to be lost.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Not Perform</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause the SD card to be formatted in response to a detected threat.</td>
  </tr>
  <tr>
    <td>Perform</td>
    <td>"1"</td>
	<td>This value will cause the SD card to be formatted in response to a detected threat.</td>
  </tr>
</table>
</div>	

####Counter Measure - Factory Reset
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted"

Pivotal parm: No

Parm name: FactoryReset

Description: 

>This parm allows you to specify if a Factory Reset should be performed in response to a detected threat. This would cause the data, cache and Enterprise partitions to be cleared.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Not Perform</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause a Factory Reset to be performed in response to a detected threat.</td>
  </tr>
  <tr>
    <td>Perform</td>
    <td>"1"</td>
	<td>This value will cause a Factory Reset to be performed in response to a detected threat.</td>
  </tr>
</table>
</div>	

####Counter Measure - Wipe Secure Storage Keys
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted"

Pivotal parm: No

Parm name: WipeSecureStorageKeys

Description: 

>This parm allows you to specify if the Secure Storage Keys should be cleared in response to a detected threat.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Not Perform</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause the Secure Storage Keys to be cleared in response to a detected threat.</td>
  </tr>
  <tr>
    <td>Perform</td>
    <td>"1"</td>
	<td>This value will cause the Secure Storage Keys to be cleared in response to a detected threat.</td>
  </tr>
</table>
</div>	

####Counter Measure - Lock Device
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted"

Pivotal parm: No

Parm name: LockDevice

Description: 

>This parm allows you to specify if the device should be locked in response to a detected threat. This would require the user to perform any unlock procedure that is configured for the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Not Perform</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause the device to be locked in response to a detected threat.</td>
  </tr>
  <tr>
    <td>Perform</td>
    <td>"1"</td>
	<td>This value will cause the device to be locked in response to a detected threat.</td>
  </tr>
</table>
</div>	

####Counter Measure - Uninstall Application
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted"

Pivotal parm: Yes

Description: 

>This parm allows you to specify if an application should be silently uninstalled in response to a detected threat.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Not Perform</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause an application to be uninstalled in response to a detected threat.</td>
  </tr>
  <tr>
    <td>Perform</td>
    <td>"1"</td>
	<td>This value will cause an application to be uninstalled in response to a detected threat.</td>
  </tr>
</table>
</div>	

#####**Uninstall Package**
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted" *AND* the "Counter Measure - Uninstall Application" value is "Perform"

Pivotal parm: No

Parm name: UninstallPackage

Description: 

>This parm allows you to specify the package name of the application that should be uninstalled.

Parm value input rules: 

* String containing the valid name of the package. For example, 'com.mycompany.mypackage'.
* The minimum size is 1 character and a maximum size is 255 characters

####Counter Measure - Unsolicited Alert
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted"

Pivotal parm: Yes

Description: 

>This parm allows you to specify if an unsolicited alert should be sent in response to a detected threat. This would cause an explicit intent to be sent to an application with an alert message.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Not Perform</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause an unsolicited alert to be sent in response to a detected threat.</td>
  </tr>
  <tr>
    <td>Perform</td>
    <td>"1"</td>
	<td>This value will cause an unsolicited alert to be sent in response to a detected threat.</td>
  </tr>
</table>
</div>	

####Package for Unsolicited Alert
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted" *AND* the "Counter Measure - Unsolicited Alert" value is "Perform"

Pivotal parm: No

Parm name: AlertPackage

Description: 

>This parm will allow you to specify the package name of the application that will receives the unsolicited alert.

Parm value input rules: 

* String containing the valid name of the package. For example, 'com.mycompany.mypackage'.
* The minimum size is 1 character and a maximum size is 255 characters

####Class for Unsolicited Alert
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted" *AND* the "Counter Measure - Unsolicited Alert" value is "Perform"

Pivotal parm: No

Parm name: AlertClass

Description: 

>This parm will allow you to specify the class of the application that will receive the unsolicited alert.

Parm value input rules: 

* String containing the valid name of the class.
* The minimum size is 1 character and a maximum size is 255 characters

####Msg for Unsolicited Alert
Settable if: The "Configure handling of a threat" value is "Turn On" *AND* the "Name of the threat to detect" value is "Max Password Attempts", "MDM Client Removal", "Externally Detected", "Exchange Active Sync Command", or "Device is Rooted" *AND* the "Counter Measure - Unsolicited Alert" value is "Perform"

Pivotal parm: No

Parm name: AlertMsg

Description: 

>This parm will allow you to specify the alert message that will be included in the explicit intent that is sent for for the unsolicited alert.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

###Signal occurrence of a threat
Pivotal parm: Yes

Description: 

>This parm allows you to select if the occurrence of an externally detected threat should be signaled by sending an intent.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause a signal to be sent when a threat is detected externally.</td>
  </tr>
  <tr>
    <td>Signal Occurrence</td>
    <td>"1"</td>
	<td>This value will cause a signal to be sent when a threat is detected externally.</td>
  </tr>
</table>
</div>	

####Send threat message
Settable if: The "Signal occurrence of a threat" value is "Signal Occurrence"

Pivotal parm: No

Parm name: SendThreatMsg

Description: 

>This parm will allow you to specify the message that would be included in the intent that is sent when a threat is detected externally.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters
  
<!--
## Queries

### Get all Threat / Countermeasure Configurations

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic-query type="ThreatMgr"/>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="ThreatMgr" version="4.3">
            <parm name="ThreatAction" value="1" />
            <parm name="ThreatName" value=" MaxPasswordAttempts" /> 
            <characteristic type="CounterMeasure">
                <parm name="FormatSdcard" value="1" /> 
                <parm name="FactoryReset" value="1" /> 
                <parm name="WipeSecureStorageKeys" value="1" /> 
                <parm name="PasswordResetAllUsers" value="1" /> 
                <parm name="AllUsersPassword" value="PASSWORDALL" /> 
                <parm name="PasswordResetUser" value="1" /> 
                <parm name="SpecificUserName" value="UserName1, UserName2" /> 
                <parm name="SpecificUserPassword" value="Password1, Password2" /> 
                <parm name="LockDevice" value="1" /> 
                <parm name="UninstallApplication" value="1" /> 
                <parm name="UninstallPackage" value="PackageName" /> 
                <parm name="UnsolicitedAlert" value="1" /> 
                <parm name="AlertPackage" value="PackageName" /> 
                <parm name="AlertClass" value="ClassName" /> 
                <parm name="AlertMsg" value="Message" />  
            </characteristic>
        </characteristic>
        <characteristic type="ThreatMgr" version="4.3">
            <parm name="ThreatAction" value="1" /> 
            <parm name="ThreatName" value="Externally Detected" /> 
            <characteristic type="CounterMeasure">
                <parm name="FormatSdcard" value="1" /> 
                <parm name="FactoryReset" value="1" /> 
                <parm name="WipeSecureStorageKeys" value="1" /> 
                <parm name="LockDevice" value="1" /> 
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>


### Get Configurations for a Specific Threat

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="ThreatMgr" version="4.3">
            <parm name="ThreatName" value=" MaxPasswordAttempts" /> 
            <characteristic-query type="CounterMeasure"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="ThreatMgr" version="4.3">
            <parm name="ThreatAction" value="1" /> 
            <parm name="ThreatName" value=" MaxPasswordAttempts" /> 
            <characteristic type="CounterMeasure">
                <parm name="FormatSdcard" value="1" /> 
                <parm name="FactoryReset" value="1" /> 
                <parm name="WipeSecureStorageKeys" value="1" /> 
                <parm name="PasswordResetAllUsers" value="1" /> 
                <parm name="AllUsersPassword" value="PASSWORDALL" /> 
                <parm name="PasswordResetUser" value="1" /> 
                <parm name="SpecificUserName" value="UserName1, UserName2" /> 
                <parm name="SpecificUserPassword" value="Password1, Password2" /> 
                <parm name="LockDevice" value="1" /> 
                <parm name="UninstallApplication" value="1" /> 
                <parm name="UninstallPackage" value="PackageName" /> 
                <parm name="UnsolicitedAlert" value="1" /> 
                <parm name="AlertPackage" value="PackageName" /> 
                <parm name="AlertClass" value="ClassName" /> 
                <parm name="AlertMsg" value="Message" />  
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>
-->

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=ThreatMgr&os=JB&embed=true"></iframe> 

