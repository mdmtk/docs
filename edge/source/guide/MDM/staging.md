#Staging a Device

##Overview

Staging a device refers to the process of taking a device out of the box and setting it up to be managed by MDM. The actions that will always need to happen are:

* The MDM Agent will need to be configured to connect to the server. This would be done by using the MDM Agent's config file(s), which must be downloaded. This will tell the MDM Agent how to connect to the MDM server.
* The MDM Agent APK file(s) will need to be put onto the device.
* The MDM Agent APK file(s) will need to be installed on the device.
* The MDM Agent application(s) will need to be launched on the device.

In addition, the following action may need to be performed:

* Connectivity needs to be established on the device
	* The device will need to to download files onto the device and to connect to a network in order to connect to a server.
	* This may not need to be done if the device had already been in service, and therefore, already had been connected to a network.
	
In regards to the MXMS, there are three states that the device can be in:

1. The device does not have the MXMS installed
	* All Jellybean devices do not have the MXMS installed on them out of the box. Therefore, the 4.4 version of the MXMS will need to be installed.
2. The device has an old version of MXMS installed
	* The MDM Toolkit targets the MXMS version 4.4, so MXMS will need to be upgraded to this version if the device has an older version
3. The device has the the 4.4 version of MXMS
	* Since this is the latest version of MXMS, no upgrades to MXMS would be required on these devices.

When the device is successfully staged, the device will show up on the MDM console and it will be able to be managed. Certain devices may also display a screen, which says that it was connected. After it is connected, the MDM agent will check in with the server and update its status periodically.

##Staging Options

###StageNow

StageNow can be used to stage devices that may or may not have MXMS installed on them. This tool can create barcodes that can be scanned with the RD Client to stage the device. 

In StageNow, the "Enroll in an MDM" wizard will provide you with the necessary options to enroll the device for management with an MDM. Such as the following steps:

1. Establish connectivity, if connectivity has not already been established on the device.
2. See if MXMS is installed on the device already and if it has the latest version, which is version 4.4. RD Client might need to be used to upgrade MXMS.
3. Download the MDM Agent configuration file(s). The StageNow FileMgr Setting Type can be used to do this.

	>**Note:** If you would like the MDM Agent configuration file(s) to be persisted, they should be saved in a persistent location, such as the Enterprise Partition. Please see the [Persistence](../guide/MDM/persistence) page for more information.
	
4. Download the MDM Agent APK file(s). The StageNow FileMgr Setting Type can be used to do this. 

	>**Note:** If you would like the MDM Agent APK file(s) to be persisted, they should be saved in a persistent location, such as the Enterprise Partition. Please see the [Persistence](../guide/MDM/persistence) page for more information.

5. Install the MDM Agent APK file(s). The StageNow AppMgr Setting Type can be used to do this. 

	>**Note:** If multiple MDM Agent APK files are required, they will all need to be downloaded and installed appropriately. <!--One of these files would be the support app which contains lower level operations, such as sending XML to MX. Using two APK files can allow support for different devices without needing to make changes to the whole MDM Agent.-->

6. Launch the MDM Agent. The StageNow Intent Setting Type can be used to do this. 
7. Persist the settings from Steps 3 - 6 by using the PersistMgr Feature Type.

###Sideloading

A device can also be staged using sideloading. However, this method is not recommended since StageNow provides a simpler way of doing this and sideloading requires many manual steps. If you would like to do this, please contact your Zebra support professional for more information.