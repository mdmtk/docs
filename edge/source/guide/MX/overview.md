# MX Overview

## Overview

The MX Framework provides a common interface to Zebra Android device capabilities utilizing XML that conforms to the standard OMA-CP PROV (Microsoft MSPROV) schema. This framework allows developers and administrators an extensible, efficient, reliable and scalable means for configuring and administrating Zebra Android devices. MX exposes capabilities that underlying CSP's provide to give the user access to both privileged and unprivileged APIs. Each CSP exposes it's capabilities using DSD files that are included with the MDM Toolkit. These DSD files are then imported into a DSDtoXML tool to generate XML that can be sent to the MX framework running on the device to change a device configuration or behavior.

## MX on Devices

The MX version on a specific device can be effected by:

* OS Updates
* EMDK for Android Device Runtime Updates

With each version of MX, new CSPs can be introduced, and pre-existing CSPs can also have new behavior. It is generally not found that MX updates will remove or change pre-existing behavior unless specifically noted.

## CSP Summary
Below is a summary of the included CSPs. Make sure to consult the individual CSP reference found in this documentation, to see more details about the specific CSP features.

### AccessMgr
The Access Manager feature allows you to configure a set of applications that will be allowed to run and install on the device. When this feature is enabled, the device will only allow user installed applications on the Whitelist to be executed and/or installed (some applications that are part of the default operating system will still be available). To disable the Whitelist, you would select 'Single User Without Whitelist'.  

### AppMgr
The App Manager feature allows you to install, upgrade, remove, enable, disable applications from the device. It also allows you to change the current application launcher, clear recent app list and much more.

### BrowserMgr
The Browser Manager feature allows your application to control the web browser on the device. For example you can set the browser homepage. 

### CameraMgr
The Camera Manager feature allows your application to control access to the cameras in the device. For example you can disable the user from using all cameras on the device. 

### CellularMgr
The Cellular Manager feature allows you to configure options of the  cellular radio on your device. 

### CertMgr
The Cert Manager feature allows your application to install or uninstall certificates and initialize the Android key store. You can use digital certificates to identify your device for a variety of purposes, including VPN or Wi-Fi network access as well as authentication to servers by apps such as Email or Chrome. 

### Clock
Clock allows for a programmatic way to set the date and time. To account for time zone nuances including daylight saving time, Clock expects the values for date and time to be entered as normalized values to UTC (GMT) time. In other words, the date and time set as parameters for Clock must be the UTC (GMT) equivalent of the local time being set. 

### DevAdmin
The Device Admin feature allows your application to manage configuration settings on the device.

### DisplayMgr
The Display Manager feature allows your application to control the screen timeout value to conserve power.

### EncryptMgr
The Encrypt Manager allows the developer to set encryption policies on a device. For example a developer can create an EFS for storing application data.  

### FileMgr
The File Manager feature allows your application to manage files on the device. For example you can download a file from a ftp server and save it on the device.

### GprsMgr
The GPRS feature allows you to add or remove APNs to your device. 

### Intent
The Intent Manager feature helps your application to create and send intents on the device.

### PersistMgr
The Persist Manager is used to create and remove persistent profile features. These features and their parameters will survive and be automatically applied after a 'Enterprise Reset'. 

### PowerMgr
This feature allows you to put the device into Sleep mode, re-power or perform an OS Update. The action will be performed when the configuration is set.

### PowerKeyMgr
The PowerKey Manager feature allows your application to control which options appear on the power menu on the device.

### SdCardMgr
The SdCard Manager allows your application to manage the use of the device's SD card.

### SettingsMgr
Settings Manager feature allows you to manage settings UI configuration by providing the ability to invoke Enterprise Reset in Settings UI of your device.

### ThreatMgr
The Threat Manager feature allows your application to control what security threats a device actively monitors for and how to respond.

### TouchMgr
The Touch Manager feature allows you to set the Touch Mode on your device in order to interact with the user interface.

### UiMgr
The UI Manager feature allows you to manage UI configurations using its UI Manager parameters. 

### UsbMgr
The USB Manager feature allows you to manage USB configurations of your device.

### Wi-Fi
The Wi-Fi feature allows you to manage your device's Wi-Fi settings as well as manage the network profiles to be used for connecting and remembering networks.

### WirelessMgr
The Wireless Manager allows you to configure wireless configurations on your device. (Ex. Configure device's Bluetooth)  

### XmlMgr
The XML Manager feature allows you to specify various XML processing modes to be used.  
