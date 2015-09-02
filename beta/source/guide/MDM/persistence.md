#Persistence

##Overview

Persistence can be used to ensure that a device would stay managed by MDM after an Enterprise Reset. 

###Persistent Components

The following are the components of the device that would need to be made persistent in order for the device to continue to be managed after an Enterprise Reset.

####Connectivity

The [Wi-Fi Feature Type](../guide/csp/wifi) or [GPRS Feature Type](../guide/csp/gprs) can be used to configure how the device should connect to the network, which is needed for the MDM Agent to connect to the MDM Server. When using these Feature Types, the [PersistMgr Feature](../guide/csp/persistence) can be used in the XML to cause these settings to be persistent. By doing this, the XML containing the connectivity information and the PersistMgr Feature will be saved in the Enterprise Partition of the device, which will not be cleared after an Enterprise Reset. Also, after an Enterprise Reset is performed, the PersistMgr will resubmit the XMLs that are in the Enterprise Partition, which means that the device's connectivity will be set again automatically.

####MX

MX is required to be on the device and it is automatically persisted. Therefore, no extra action is needed to persist this.

####MDM Agent

The following are steps that need to be performed in order for the device to continue to be managed by MDM:

1. Get

	In order to be persisted, the MDM Agent APK needs to be saved in a location that survives an Enterprise Reset, such as the Enterprise Partition. When putting a new version of the MDM Agent APK onto a device that already has this APK stored on it, the new version should overwrite the old version.

2. Installation
	
	The [AppMgr Feature Type](../guide/csp/app) can be used to install the MDM Agent. The PersistMgr Feature can be used here also to save the XML to the Enterprise Partition and automatically reinstall the MDM Agent after an Enterprise Reset.

3. Launch

	The Intent Feature Type can be used to launch the MDM Agent after it is installed. The PersistMgr Feature can be used here also to save the XML to the Enterprise Partition and automatically launch the MDM Agent after an Enterprise Reset.

####Configuration

The configuration file for the MDM Agent will need to be downloaded and saved onto the device. The MDM Agent on the device will look for its configuration file in a specified location on the device. Therefore, the configuration file should be saved in a location that survives an Enterprise Reset, such as the Enterprise Partition, and the MDM Agent should look for this file here.

###Persistence Options

####StageNow

Through the use of the StageNow options, you can choose to make the settings persistent and to store the necessary files in the Enterprise Partition when staging the device. The XMLs that are created by StageNow may need to have the PersistMgr Feature added to them to cause these XMLs to be persisted.

####MDM Agent

The MDM Agent can be programmed to automatically make itself persistent. This method is recommended over using StageNow for persistence.


