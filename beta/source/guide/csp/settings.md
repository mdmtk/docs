# SettingsMgr

## About SettingsMgr

### Overview

SettingsMgr Feature Type allows you to manage the Settings UI options by allowing you to change what settings are allowed to be configured through this UI.

### Main Functionality

* Enable or Disable the Ability to Perform an Enterprise Reset from the Settings UI
* Enable or Disable the Ability to turn Wi-Fi on or off from the Settings UI
* Enable or Disable the Ability to turn Install Apps from Unknown Sources on or off from the Settings UI
* Enable or Disable the Ability to to turn Airplane Mode on or off from the Settings UI
* Enable of Disable the Ability to access the "Apps" section in the Settings UI

##Parameter Notes
###Ability to invoke Enterprise Reset in Settings UI
Pivotal parm: No

Parm name: InvokeEnterpriseReset

Description: 

>This parm allows you to specify whether or not the ability to invoke Enterprise Reset in Settings UI will be allowed. If an Enterprise Reset is performed, this would clear the data and cache partitions, but also preserve the contents of the Enterprise partition on the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether or not an Enterprise Reset can be invoked from the Settings UI.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the ability to invoke Enterprise Reset in Settings UI to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the ability to invoke Enterprise Reset in Settings UI to not be allowed, preventing the user from performing this action from the Settings UI. However, an Enterprise Reset can still be invoked by a System application which uses the OSX API. This also does not prevent the user from using the Enterprise Reset ZIP folder to invoke an Enterprise Reset when the device is in recovery mode.</td>
  </tr>
</table>
</div>	

###Ability to Turn Wifi On/Off in Settings UI
Pivotal parm: No

Parm name: WifiSettingsUI

Description: 

>This parm allows you to specify whether or not the ability to turn Wi-Fi on or off in Settings UI will be allowed.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether or not an Wi-Fi can be turned on or off from the Settings UI.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the ability to turn Wi-Fi on or off from the Settings UI to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the ability to turn Wi-Fi on or off from the Settings UI to not be allowed, preventing the user from changing the state of Wi-Fi from the Settings UI. This only blocks the user from making this change from the UI level and does not prevent the Wi-Fi status from being changed silently.</td>
  </tr>
</table>
</div>	

###Ability to Turn UnknownSources On/Off in Settings UI
Pivotal parm: No

Parm name: UnknownSources

Description: 

>This parm allows you to specify whether or not the ability to Turn Unknown Sources on or off in Settings UI will be allowed. Turning the Unknown Sources option on or off would allow or disallow an application to be installed on the device if it is from an unknown source. 

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether or not Unknown Sources can be turned on or off from the Settings UI.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the ability to turn Unknown Sources on or off from the Settings UI to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the ability to turn Unknown Sources on or off from the Settings UI to not be allowed, preventing the user from changing the state of Unknown Sources from the Settings UI. This only blocks the user from making this change from the UI level and does not prevent the Unknown Sources status from being changed silently.</td>
  </tr>
</table>
</div>	

###Ability to Turn Airplane Mode On/Off in Settings UI 

Pivotal parm: No

Parm name: AirplaneMode

Description: 

>This parm allows you to specify whether or not the ability to Turn Airplane Mode on or off in Settings UI will be allowed. If the user turns on Airplane Mode, the device's cellular radio, Wi-Fi and Bluetooth are disabled.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether or not Airplane Mode can be turned on or off from the Settings UI.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the ability to turn Airplane Mode on or off from the Settings UI to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the ability to turn Airplane Mode on or off from the Settings UI to not be allowed, preventing the user from changing the state of Airplane Mode from the Settings UI. This only blocks the user from making this change from the UI level and does not prevent the Airplane Mode status from being changed silently.</td>
  </tr>
</table>
</div>	

###Ability to Access Apps Section in Settings UI
Pivotal parm: No

Parm name: AccessAppsSection

Description: 

>This parm allows you to specify whether or not the ability to access the "Apps" section in Settings UI will be allowed.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether or not the "Apps" section can be accessed in the Settings UI.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the ability to access the "Apps" section in the Settings UI to be allowed.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the ability to access the "Apps" section in the Settings UI to not be allowed.</td>
  </tr>
</table>
</div>	

## Queries

### Get is Invoke Enterprise Reset Available

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="InvokeEnterpriseReset"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="InvokeEnterpriseReset" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get is Wifi Settings UI Available

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="WifiSettingsUI"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="WifiSettingsUI" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get is Unknown Sources Available 

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="UnknownSources"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="UnknownSources" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get is Airplane Mode Available 

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="AirplaneMode"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="AirplaneMode" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=SettingsMgr&os=JB&embed=true"></iframe> 