# WirelessMgr

## About WirelessMgr

### Overview

The WirelessMgr Feature Type allows you to configure wireless configurations on your device, such as the device's Bluetooth settings.  

### Main Functionality

* Enable or Disable Bluetooth
* Turn Bluetooth On or Off
* Turn NFC On or Off
* Turn GPS On or Off
* Turn WWAN (Wireless WAN) On or Off

##Parameter Notes
###Enable/Disable Bluetooth
Pivotal parm: No

Parm name: Bluetooth

Description: 

>This parm will allow you to specify whether the state of the Bluetooth radio can be changed.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether the state of the Bluetooth radio can be changed.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the Bluetooth radio to be unlocked, allowing it to be changed, either by the device user or by the WirelessMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the Bluetooth radio to be locked, preventing it from being changed, either by the device user or by the WirelessMgr Feature Type. This will cause the Bluetooth option in the Settings UI to be grayed out.</td>
  </tr>
</table>
</div>	

###Turn On/Off Bluetooth
Pivotal parm: No

Parm name: BluetoothState

Description: 

>This parm allows you to change the state of the Bluetooth radio to On or Off. Turning the Bluetooth radio on would allow the device to connect to other to other Bluetooth devices that have been paired or to setup a new pairing. Pairing the devices together means that a connection would be established between the Bluetooth enabled devices. For example, a Bluetooth enabled phone would need to first be paired with a Bluetooth enabled headset before the headset could be used.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the Bluetooth radio is turned On or Off.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the Bluetooth radio to be turned On, thus allowing the use of a Bluetooth connection on the device.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the Bluetooth radio to be turned Off, thus disallowing the use of a Bluetooth connection on the device.</td>
  </tr>
</table>
</div>	

###Turn On/Off NFC
Pivotal parm: No

Parm name: NFCState

Description: 

>This parm allows you to change the state of the NFC radio On or Off, which would allow or disallow devices to establish a radio connection with each other when they are touched together or are within a close proximity to each other.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the NFC radio is turned On or Off.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the NFC radio to be turned On, thus allowing the use of NFC on the device.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the NFC radio to be turned Off, thus disallowing the use of NFC on the device.</td>
  </tr>
</table>
</div>	

###Turn On/Off GPS
Pivotal parm: No

Parm name: GPSState

Description: 

>This parm allows you to change the state of the GPS radio to On or Off, which would allow or disallow the device from using satellite signals to determine the location of the device.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the GPS radio is turned On or Off.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the GPS radio to be turned On, thus allowing the use of GPS on the device.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the GPS radio to be turned Off, thus disallowing the use of GPS on the device.</td>
  </tr>
</table>
</div>	

###Turn On/Off WWAN
Pivotal parm: No

Parm name: WWANState

Description: 

>This parm allows you to change the state of the Wireless Wide Area Network (WWAN) radio to On or Off. This would allow or disallow a device from connecting to a WWAN, which is a wide area network that covers a large geographic area through the use of cellular tower technology.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the WWAN radio is turned On or Off.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will cause the WWAN radio to be turned On, thus allowing the use of WWAN on the device.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause the WWAN radio to be turned Off, thus disallowing the use of WWAN on the device.</td>
  </tr>
</table>
</div>	

##Example XML
###Enable the Usage of Bluetooth
	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="Bluetooth" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable the Usage of Bluetooth
	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="Bluetooth" value="2"/>
		</characteristic>
	</wap-provisioningdoc>

###Turn on the Radios
	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="BluetoothState" value="1"/>
			<parm name="NFCState" value="1"/>
			<parm name="GPSState" value="1"/>
			<parm name="WWANState" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Turn Off the Radios To Save Power
	:::xml
	<wap-provisioningdoc>
		<characteristic type="WirelessMgr" version="4.3" >
			<parm name="BluetoothState" value="2"/>
			<parm name="NFCState" value="2"/>
			<parm name="GPSState" value="2"/>
			<parm name="WWANState" value="2"/>
		</characteristic>
	</wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=WirelessMgr&os=JB&embed=true"></iframe> 