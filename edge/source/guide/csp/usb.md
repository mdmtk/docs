# UsbMgr

## About UsbMgr

### Overview

The UsbMgr feature allows you to manage USB configurations of your device.

### Main Functionality

* Enable or Disable USB Module Usage
* Enable or Disable External USB Storage Usage
* Enable or Disable ADB (Android Debug Bridge) Usage
* Enable or Disable Device Storage Access over USB
* Enable or Disable the Ability to Access the Device Using UMS (USB Mass Storage) Mode
* Enable or Disable the Ability to Access the Device Using MTP (Media Transfer Protocol) Mode
* Enable or Disable the Ability to Access the Device Using PTP (Picture Transfer Protocol) Mode

##Parameter Notes
###USB Module Usage
Pivotal parm: Yes

Description: 

>This parm allows you to specify whether the use of USB module will be allowed. Setting this parm would cause all of the USB features to be enabled or disabled.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not the USB module can be used. This value will also allow you to enable or disable the USB features individually through use of the other parms in the UsbMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will enable usage of the USB module, which would enable the usage of all of the USB features. The other UsbMgr features could still be enabled or disabled individually through the use of the other parms in the UsbMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will disable the usage of the USB module, which would disable the usage of all of the USB features.</td>
  </tr>
</table>
</div>	

###USB External Storage Usage
Settable if: The "USB Module Usage" value is not "Disable" 

Pivotal parm: No

Parm name: UsbExternalStorageUsage

Description: 

>This parm allows you to specify whether the use of USB External Storage will be allowed. This would allow or disallow the device to access data an external USB mass storage device, such as a flash drive, through an OTG cable.

>**Note:** This feature is supported on devices that are running KitKat versions of Android like the TC70.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not USB External Storage can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the USB External Storage Option to be unlocked, allowing it to be changed by the device user.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the USB External Storage Option to be locked, preventing it from being changed by the device user.</td>
  </tr>
</table>
</div>	

###USB ADB Usage
Settable if: The "USB Module Usage" value is not "Disable" 

Pivotal parm: No

Parm name: UsbADBUsage

Description: 

>This parm allows you to specify whether the use of the Android Debug Bridge (ADB) Mode will be allowed. ADB is a command line tool that allows communication with the Android device from a PC. For example, with ADB, you can use commands that can copy files, install apps, run shell commands, etc.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not USB ADB mode can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the USB ADB mode Option to be unlocked, allowing it to be changed by the device user.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the USB ADB mode Option to be locked, preventing it from being changed by the device user.</td>
  </tr>
</table>
</div>	

###Access device storage from PC via USB
Settable if: The "USB Module Usage" value is not "Disable" 

Pivotal parm: Yes

Description: 

>This parm allows you to specify whether all methods to access device storage from PC via USB, such as USB Mass Storage (UMS), Media Transfer Protocol (MTP), and Picture Transfer Protocol (PTP), will be allowed.

>**Note:** This feature is supported on devices that are running KitKat versions of Android like the TC70.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not all of the methods to access device storage from a PC via USB can be used. This value will also allow you to enable or disable the usage of UMS, MTP, or PTP individually through use of the other parms in the UsbMgr Feature Type.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of all of the methods to access device storage from a PC via USB to be unlocked, allowing it to be changed by the device user.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of all of the methods to access device storage from a PC via USB to be locked, preventing it from being changed by the device user.</td>
  </tr>
</table>
</div>	

####Access device storage from PC via USB UMS
Settable if: The "USB Module Usage" value is not "Disable" *AND* the "Access device storage from PC via USB" value is not "Enable" or "Disable"

Pivotal parm: No

Parm name: UsbUMSAccessDeviceStorageUsage

Description: 

>This parm allows you to specify whether access to the device storage from a PC via USB Mass Storage (UMS) will be allowed. This is the standard protocol used by flash drives, external hard drives, SD cards, and other USB storage devices. The drive is completely available to the computer, just as if it were an internal drive.

>**Note:** This feature is supported on devices that are running KitKat versions of Android like the TC70.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not access to the device storage from a PC via USB UMS can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the USB UMS Option to be unlocked, allowing it to be changed by the device user.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the USB UMS Option to be locked, preventing it from being changed by the device user.</td>
  </tr>
</table>
</div>

####Access device storage from PC via USB MTP
Settable if: The "USB Module Usage" value is not "Disable" *AND* the "Access device storage from PC via USB" value is not "Enable" or "Disable"

Pivotal parm: No

Parm name: UsbMTPAccessDeviceStorageUsage

Description: 

>This parm allows you to specify whether access to the device storage from a PC via USB Media Transfer Protocol (MTP) will be allowed. If MTP is turned on, it would cause the device to appear as a "Media Device" on the computer that it is connected to. This protocol is used for transferring audio files.

>**Note:** This feature will be supported on devices that are running KitKat versions of Android like the TC70.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not access to the device storage from a PC via USB MTP can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the USB MTP Option to be unlocked, allowing it to be changed by the device user.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the USB MTP Option to be locked, preventing it from being changed by the device user.</td>
  </tr>
</table>
</div>

####Access device storage from PC via USB PTP
Settable if: The "USB Module Usage" value is not "Disable" *AND* the "Access device storage from PC via USB" value is not "Enable" or "Disable"

Pivotal parm: No

Parm name: UsbPTPAccessDeviceStorageUsage

Description: 

>This parm allows you to specify whether access to the device storage from a PC via USB Picture Transfer Protocol (PTP) will be allowed. This protocol is commonly used for communicating with digital cameras.

>**Note:** This feature is supported on devices that are running KitKat versions of Android like the TC70.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not access to the device storage from a PC via USB PTP can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the state of the USB PTP Option to be unlocked, allowing it to be changed by the device user.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the state of the USB PTP Option to be locked, preventing it from being changed by the device user.</td>
  </tr>
</table>
</div>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=UsbMgr&os=JB&embed=true"></iframe> 