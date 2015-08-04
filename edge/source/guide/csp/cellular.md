# CellularMgr

## About CellularMgr

### Overview

The CellularMgr Feature Type allows you to configure the state and usage of a device's Data Roaming and Background Data functionalities.

Data Roaming is a function which allows the device to receive data from cellular networks that your mobile operator does not own. This could incur extra charges if it is available in your mobile service plan.

Background Data is another function which will let an application use data while it is running in the background. For example, an email application might use Background Data to get updates even though the user is currently using another application or the device's screen is turned off. If Background Data is turned off, the application would only be able to update when the user tells it to, possibly by starting the application.

>**Note:** If the device does not have cellular functionality that is being set or the OSX version on the device does not support the requested feature, an error will be returned in the Result XML document.

### Main Functionality

* Enable or disable Data Roaming
* Enable or disable Background Data
* Turn Data Roaming on or off  
* Turn Background Data on or off

##Parameter Notes
###Set the state of Data Roaming
Pivotal parm: No

Parm name: DataRoamingState

Description: 

>This parm will turn on or off Data Roaming.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This value will cause no change to the current state of Data Roaming on the device.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will turn on Data Roaming on the device.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will turn off Data Roaming on the device.</td>
  </tr>
</table>
</div>	

###Set the state of Background Data
Pivotal parm: No

Parm name: BackgroundDataState

Description: 

>This parm will turn on or off Background Data. 

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This value will cause no change to the current state of Background Data on the device.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will turn on Background Data on the device.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will turn off Background Data on the device.</td>
  </tr>
</table>
</div>	

###Enable/Disable Data Roaming
Pivotal parm: No

Parm name: DataRoamingUsage

Description: 

>This parm will enable or disable the usage of Data Roaming, which would allow or disallow the user from turning Data Roaming on or off.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This value will not change whether Data Roaming is enabled or disabled on the device.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will enable Data Roaming, which means that the user will be able to turn Data Roaming on or off.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will disable Data Roaming, which means that the user will be blocked from turning Data Roaming on or off.</td>
  </tr>
</table>
</div>	

###Enable/Disable Background Data
Pivotal parm: No

Parm name: BackgroundDataUsage

Description: 

>This parm will enable or disable the usage of Background Data, which would allow or disallow the user from turning Background Data on or off.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This value will not change whether Background Data is enabled or disabled on the device.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will enable Background Data, which means that the user will be able to turn Background Data on or off.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will disable Background Data, which means that the user will be blocked from turning Background Data on or off.</td>
  </tr>
</table>
</div>	

##Example XML
### Turn Off Data Roaming and Background Data
	:::xml
	<wap-provisioningdoc>
		<characteristic type="CellularMgr" version="4.3" >
			<parm name="DataRoamingState" value="2"/>
			<parm name="BackgroundDataState" value="2"/>
		</characteristic>
	</wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=CellularMgr&os=JB&embed=true"></iframe> 