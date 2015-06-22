# GprsMgr

## About GprsMgr

### Overview

The GPRS feature allows you to add or remove APNs to your device. 

### Main Functionality

* Add or Update Named APN
* Remove APN
* Remove all APNs
* Set Default APN
* Set Accesses Point Name, User Name, and Password

##Parameter Notes
### APN Action
This setting allows you to manage the APN configuration on the device:

* Add/replace APN
* Remove existing named APN
* Remove all existing APNs

### GPRS Carrier 
Options for GPRS carrier for the APN.

* ATT
* T-Mobile
* Custom

>Note: For ATT and T-Mobile option the user and password filed are required.

### APN Name 
Provide the name that the APN should be set to. Used to identify the APN settings for deleting existing APN or adding/replacing. Must be unique on the device. 

### Replace if Exists 
This check box provides the option to replace an existing APN.

* Check Box is marked: Delete the APN for the device and set the new APN.
* Check Box is not marked: Don't add new APN if already there is an APN with the same name.

### Wait Time
Provide the time (in seconds) to wait for connection to the APN to be established.

### Make Default APN 
This check box provides the option to set the new APN to be Preferred.

### Access Point 
Provide the access point name that the APN should be set to (ex: internet3.voicestream.com).

### User Name
Provide the user name that the APN should be set to.

### Password
Provide the password that the APN should be set to.

##Example XML
### Add GPRS APN

    :::XML
	<wap-provisioningdoc>
		<characteristic type="GprsMgr" version="4.2" >
			<parm name="GprsAction" value="1"/>
			<parm name="GprsCarrier" value="0"/>
			<characteristic type="gprs-details">
				<parm name="ApnName" value="btmobile.bt.com"/>
				<parm name="ReplaceIfExisting" value="0"/>
				<parm name="MakeDefault" value="1"/>
			</characteristic>
			<characteristic type="custom-details">
				<parm name="CustomAccessPoint" value=""/>
				<parm name="CustomUserName" value=""/>
				<parm name="CustomPassword" value=""/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=GprsMgr&os=JB&embed=true"></iframe> 