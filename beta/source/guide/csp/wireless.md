# WirelessMgr

## About WirelessMgr

### Overview

The Wireless Manager allows you to configure wireless configurations on your device. (Ex. Configure device's Bluetooth)  

### Main Functionality

* Enable Bluetooth
* Disable Bluetooth
* Turn on Bluetooth
* Turn off Bluetooth
* Turn on NFC
* Turn off NFC
* Turn on GPS
* Turn off GPS
* Turn on WWAN (Wireless WAN)
* Turn off WWAN (Wireless WAN)

##Parameter Notes
### Bluetooth
This setting allows you to configure Bluetooth on your device.

* **Do not change** - Keep existing Bluetooth settings
* **Enable** - Turn Bluetooth ON.
* **Disable** - Turn Bluetooth OFF. 

##Example XML
###Turn Off Radios To Save Power
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