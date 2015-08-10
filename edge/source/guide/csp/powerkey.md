# PowerKeyMgr

## About PowerKeyMgr

### Overview

The PowerKey Manager feature allows your application to control which options appear on the power menu on the device, which appears when the user long-presses the power key.

### Main Functionality

* Show or Hide the Airplane Mode Power Menu Option
* Show or Hide Touch Panel Power Menu Option
* Show or Hide Safe Mode Power Menu Option
* Show or Hide the Automatic Screen Lock Option in the Settings UI
* Turn On or Off the Automatic Screen Lock Option when Device is Powered off using the Power Key

##Parameter Notes
###Airplane Mode Power Key Menu Option
Pivotal parm: No

Parm name: AirPlaneMode

Description: 

>Thia parm allows you to select whether or not the Airplane Mode Option should appear on the Power Key Menu. If the user turns on Airplane Mode, the cellular radio, Wi-Fi and Bluetooth are disabled.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not the Airplane Mode Option currently appears on the Power Key Menu.</td>
  </tr>
  <tr>
    <td>Show Menu Option</td>
    <td>"1"</td>
	<td>This value will cause the Airplane Mode Option to appear in the Power Key Menu, allowing the user to put the device into Airplane Mode from this menu.</td>
  </tr>
  <tr>
    <td>Do not show Menu Option</td>
    <td>"2"</td>
	<td>This value will cause the Airplane Mode Option to not appear in the Power Key Menu, disallowing the user from putting the device into Airplane Mode from this menu.</td>
  </tr>
</table>
</div>	

###Touch Panel Power Key Menu Option
Pivotal parm: No

Parm name: TouchPanel

Description: 

>This parm allows you to select whether or not the Touch Panel Option should appear on the Power Key Menu.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not the Touch Panel Option currently appears on the Power Key Menu.</td>
  </tr>
  <tr>
    <td>Show Menu Option</td>
    <td>"1"</td>
	<td>This value will cause the Touch Panel Option to appear in the Power Key Menu.</td>
  </tr>
  <tr>
    <td>Do not show Menu Option</td>
    <td>"2"</td>
	<td>This value will cause the Touch Panel Option to not appear in the Power Key Menu.</td>
  </tr>
</table>
</div>	

###Safe Mode Power Key Menu Option
Pivotal parm: No

Parm name: SafeMode

Description: 

>This parm allows you to select whether or not the Safe Mode Option should appear on the Power Key Menu. If the user turns on Safe Mode, the user installed apps are disabled, which may be useful for troubleshooting a user installed app that is causing problems.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not the Safe Mode Option currently appears on the Power Key Menu.</td>
  </tr>
  <tr>
    <td>Show Menu Option</td>
    <td>"1"</td>
	<td>This value will cause the Safe Mode Option to appear in the Power Key Menu, allowing the user to put the device into Safe Mode.</td>
  </tr>
  <tr>
    <td>Do not show Menu Option</td>
    <td>"2"</td>
	<td>This value will cause the Safe Mode Option to not appear in the Power Key Menu, disallowing the user from putting the device into Safe Mode.</td>
  </tr>
</table>
</div>	

###Automatic Screen Lock on Power Key Option
Pivotal parm: No

Parm name: AutoScreenLockOption

Description: 

>This parm allows you to select whether the "Power Button Instantly Locks" Option should appear on the Settings UI.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not Power Button Instantly Locks Option currently appears on the Settings UI.</td>
  </tr>
  <tr>
    <td>Show option</td>
    <td>"1"</td>
	<td>This value will cause the Power Button Instantly Locks Option to appear on the Settings UI, allowing the user to set this option.</td>
  </tr>
  <tr>
    <td>Do not show option</td>
    <td>"2"</td>
	<td>This value will cause the Power Button Instantly Locks Option to not appear on the Settings UI, disallowing the user from setting this option.</td>
  </tr>
</table>
</div>	

###Automatic Screen Lock on Power Key State
Pivotal parm: No

Parm name: AutoScreenLockState

Description: 

>This parm allows you to select whether or not the screen should instantly lock when the screen is turned off by using the power key.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not the screen is instantly locked when the screen is turned off by using the power key.</td>
  </tr>
  <tr>
    <td>Turn on</td>
    <td>"1"</td>
	<td>This value will cause the screen to be instantly locked when the screen is turned off by using the power key.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will not cause the screen to be instantly locked when the screen is turned off by using the power key.</td>
  </tr>
</table>
</div>	



## Queries

### Get Air Plane Mode 

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="AirPlaneMode"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="AirPlaneMode" value="1"/>
        </characteristic>
    <wap-provisioningdoc>

### Get Touch Panel

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="TouchPanel"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="TouchPanel" value="1"/>
        </characteristic>
    <wap-provisioningdoc>

### Get Safe Mode

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="SafeMode"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="SafeMode" value="1"/>
        </characteristic>
    <wap-provisioningdoc>

### Get Auto Screen Lock Option

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="AutoScreenLockOption"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="AutoScreenLockOption" value="1"/>
        </characteristic>
    <wap-provisioningdoc>

### Get Auto Screen Lock State

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="AutoScreenLockState"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="AutoScreenLockState" value="1"/>
        </characteristic>
    <wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=PowerKeyMgr&os=JB&embed=true"></iframe> 