# ComponentMgr

## About ComponentMgr

### Overview

The ComponentMgr Feature Type is used to configure the usage and state specific subsystems on the device, such as Ethernet. This means that subsystems can be Enabled and Disabled and also turned On or Off. 

>**Note:** If the ComponentMgr Feature Type is being used to configure a component that is not available on the device, an error will be returned in the Result XML document.  

### Main Functionality

* Turn Ethernet On or Off
* Enable or Disable Ethernet Usage

##Parameter Notes
###Ethernet Usage

Pivotal parm: No

Parm name: EthernetUsage

Description: 

>This parm allows you to control whether the state of the Ethernet Option can be changed.

>If the Ethernet Option is Disabled and then Enabled, the state of the Ethernet Option, either On or Off, should return to the state it was in before it was Disabled.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the Ethernet can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the Ethernet Option to be unlocked, allowing it to be changed, either by the device user or by the ComponentMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the Ethernet Option to be locked, preventing it from being changed, either by the device user or by the ComponentMgr Feature Type.</td>
  </tr>
</table>
</div>	

###Ethernet State

Pivotal parm: No

Parm name: EthernetState

Description: 

>This parm allows you to change the state of the Ethernet Option to On or Off.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the Ethernet Option is turned On or Off.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the Ethernet Option to be turned On, thus allowing the use of an Ethernet connection on the device.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the Ethernet Option to be turned Off, thus disallowing the use of an Ethernet connection on the device.</td>
  </tr>
</table>
</div>	

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=ComponentMgr&os=JB&embed=true"></iframe> 