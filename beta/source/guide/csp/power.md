# PowerMgr

## About PowerMgr

### Overview

The PowerMgr Feature Type allows you to perform power related actions on the device, such as putting it into Sleep mode, rebooting the device, or perform an OS Update. The action will be performed when the configuration is set.

### Main Functionality

* Put the Device to Sleep
* Reboot the Device
* Enterprise Reset a Device
* Factory Reset a Device
* Wipe a Device
* Update the OS

##Parameter Notes
###Reset Action
Pivotal parm: Yes

Description: 

>This parm allows you to specify the reset action to perform.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do Nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause any power related actions to be performed.</td>
  </tr>
  <tr>
    <td>Sleep Mode</td>
    <td>"1"</td>
	<td>This value will cause the device to be put into Sleep mode. This would turn off the device's display, but some applications may be allowed to continue running.</td>
  </tr>
  <tr>
    <td>Reboot</td>
    <td>"4"</td>
	<td>This value will cause the device to be rebooted, or repowered.</td>
  </tr>
  <tr>
    <td>Enterprise Reset</td>
    <td>"5"</td>
	<td><p>This value will cause an Enterprise Reset to be performed, which would clear the data and cache partitions, but also preserve the contents of the Enterprise partition on the device.</p><p><b>Note:</b> This feature is supported on devices that are running KitKat versions of Android like the TC70.</p></td>
  </tr>
  <tr>
    <td>Factory Reset</td>
    <td>"6"</td>
	<td><p>This value will cause an Factory Reset to be performed, which would clear the data, cache, and Enterprise partitions to return the device to its factory settings.</p><p><b>Note:</b> This feature is supported on devices that are running KitKat versions of Android like the TC70.</p></td>
  </tr>
  <tr>
    <td>Full Device Wipe</td>
    <td>"7"</td>
	<td><p>This value will cause a full device wipe to be performed, which would clear the data, cache, and Enterprise partitions as well as the internal and external SD cards.</p><p><b>Note:</b> This feature is supported on devices that are running KitKat versions of Android like the TC70.</p></td>
  </tr>
  <tr>
    <td>OS Update</td>
    <td>"8"</td>
	<td>This value will cause an OS update to be performed by using the OS Update Zip File that is provided in the parm below.</td>
  </tr>
</table>
</div>	

####OS Update ZIP File
Settable if: The Reset Action is "OS Update"

Pivotal parm: No

Parm name: ZipFile

Description: 

>This parm allows you to specify the full path and name of the OS Update Zip File in the device's file system.

>**Note:** The OS Update file should already exist on the device. When using this feature on the TC55 the update package must be placed on the external SD card. Any attempt to use the internal SD card for this purpose will fail.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

## Example XML
### Reboot the Device

    :::XML
	<wap-provisioningdoc>
	    <characteristic type="PowerMgr" version="4.2" >
	        <parm name="ResetAction" value="4"/>
	    </characteristic>
	</wap-provisioningdoc>

### Enterprise Reset the Device

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PowerMgr" version="4.2" >
			<parm name="ResetAction" value="5"/>
		</characteristic>
	</wap-provisioningdoc>
	
### Factory Reset the Device

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerMgr" version="4.2" >
            <parm name="ResetAction" value="6"/>
        </characteristic>
    </wap-provisioningdoc>
	
### Full Device Wipe

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PowerMgr" version="4.2" >
			<parm name="ResetAction" value="7"/>
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