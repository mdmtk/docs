#Staging a Device

##Overview

Staging a device refers to the process of taking a device out of the box and setting it up to be managed by MDM. The actions that will always need to happen are:

* The MDM Agent APK will need to be put onto the device.
* The MDM Agent will need to be installed on the device.
* The MDM Agent will need to be launched on the device.
* The MDM Agent will need to be configured to connect to the server.

In addition, the following action may need to be performed in addition:

* Connectivity needs to be established on the device
	* The device will need to connect to a network in order to connect to a server.
	* This may not need to be done if the device had already been in service, and therefore, already had been connected to a network.
	
In regards to MX, there are three states that the device can be in:

1. The device does not have MX installed
	* All Jellybean devices do not have MX installed on them out of the box.
2. The device has an old version of MX installed
	* The MDM Toolkit targets MX version 4.4, so MX will need to be upgraded to this version if the device has an older version
3. The device has the the 4.4 version of MX
	* Since this is the latest version of MX, no upgrades to MX would be required on these devices.
	
For devices that do not have MX installed or have an older version of MX installed, MX can be installed or upgraded by using the StageNow tool or through sideloading with a USB or SD card. <!--Please see [this page.](../guide/MDM/updating) for more information. -->

When the device is successfully staged, the device will show up on the MDM console and it will be able to be managed. Certain devices may also display a screen, which says that it was connected. After it is connected, the MDM agent will check in with the server and update its status periodically.

##Staging Options

###StageNow

StageNow can be used to stage devices that may or may not have MX installed on them. This tool can create barcodes that can be scanned with the RD Client to stage the device. 

In StageNow, the "Enroll in an MDM" wizard will provide you with the necessary options to enroll the device for management with an MDM. Such as the following steps:

1. See if MX is installed on the device already and if it has the latest version, which is version 4.4. RD Client might need to be used to upgrade MX.
2. Establish connectivity.
3. Get the MDM Agent configuration file.
4. Get the MDM Agent APK.
5. Install the MDM Agent APK.

	If two MDM Agent APK files are uesd, they will both need to be installed. One of these files would be the support app which contains lower level operations, such as sending XML to MX. Using two APK files can allow support for different devices without needing to make changes to the whole MDM Agent.

6. Launch the MDM Agent.




###Sideloading

A device can also be staged using sideloading. However, this method is not recommended since StageNow provides a simpler way of doing this.