# PowerMgr

## About PowerMgr

### Overview

This feature allows you to put the device into Sleep mode, re-power or perform an OS Update. The action will be performed when the configuration is set.

### Main Functionality

* Put the Device to Sleep
* Reboot the Device
* Enterprise Reset a Device
* Factory Reset a Device
* Wipe a Device
* Update the OS

##Parameter Notes
### Sleep Mode
Will put the device into Sleep mode.

### Reboot
Will reboot or repower the device.

### Enterprise Reset
Will perform an Enterprise Reset.

> Note: This feature is supported on devices that are running KitKat versions of Android like the TC70.

### Factory Reset
Will perform a Factory Reset.

> Note: This feature is supported on devices that are running KitKat versions of Android like the TC70.

### Full Device Wipe
Will perform a full device wipe.

> Note: This feature is supported on devices that are running KitKat versions of Android like the TC70.

### OS Update
Will intiate an OS Update using the provided OS Update Zip File

* OS Update Zip File - The full path to the OS Update Zip File that resides on the device

> Note: The OS Update file should already exist on the device. When using this feature on the TC55 the update package must be placed on the external SD card. Any attempt to use the internal SD card for this purpose will fail.


## Example XML
### Restart the Device

    :::XML
	<wap-provisioningdoc>
	    <characteristic type="PowerMgr" version="4.2" >
	        <parm name="ResetAction" value="4"/>
	    </characteristic>
	</wap-provisioningdoc>


### Factory Reset the Device

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerMgr" version="4.2" >
            <parm name="ResetAction" value="6"/>
        </characteristic>
    </wap-provisioningdoc>

### OS Update
	:::xml
	<wap-provisioningdoc>
		<characteristic type="PowerMgr" version="4.2" >
			<parm name="ResetAction" value="8"/>
			<characteristic type="file-details">
				<parm name="ZipFile" value="/sdcard/osupdate.zip"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=PowerMgr&embed=true"></iframe> 