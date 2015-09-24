# PowerMgr

## About PowerMgr

### Overview

The PowerMgr Feature Type allows you to perform power-related actions on the device, such as putting it into Sleep mode, rebooting the device, or performing an OS Update. The action will be performed when the configuration is set.

Since this Feature Type only performs actions, there are currently no queries supported other than the ability to query the version of the CSP that implements this Feature Type.

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

>This parm allows you to choose the power-related action that you wish to perform on the device.

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
	<td>This value (or the absence of this parm from the XML) will not cause any power-related action to be performed on the device.</td>
  </tr>
  <tr>
    <td>Sleep Mode</td>
    <td>"1"</td>
	<td>This value will cause the device to be put into Sleep mode. On Android devices, Sleep mode turns off the device display screen and places other subsystems into low power states. Depending on the other device configuration settings, some subsystems (e.g. Wi-Fi or Cellular) may remain on and some applications may continue running while the device is in Sleep mode.</td>
  </tr>
  <tr>
    <td>Reboot</td>
    <td>"4"</td>
	<td><p>This value will cause the Operating System of the device to be rebooted. In Android, this is generally referred to as a Reset or Normal Reset (not to be confused with an Enterprise Reset or a Factory Reset). A Normal Reset generally loses only application state and data that is truly transient and preserves all data that is stored in any device file system.</p><p><b>Note:</b> Since this value causes the device to Reboot, the execution of a PowerMgr Feature using this value will terminate execution of the submitted Request XML Document prematurely. This means that any Features following a PowerMgr Feature that uses this value will never be executed. It also means that the application that submitted the Request XML Document will never receive a Result XML for the submitted Request XML Document.</p></td>
  </tr>
  <tr>
    <td>Enterprise Reset</td>
    <td>"5"</td>
	<td><p>This value will cause an Enterprise Reset to be performed, on the device.  On Zebra Android devices, an Enterprise Reset is the same as a Factory Reset with the exception that the /enterprise partition is preserved (whereas it would be destroyed on a Factory Reset).</p><p>The purpose of an Enterprise Reset is to return the device to an Enterprise-defined default state, generally as determined by the contents of the /enterprise partition.</p><p><b>Note:</b> This action is supported only on Zebra Android devices that are running the Kit Kat version of Android, such as the TC70.  This is because it depends on underlying OS extensions that were not available on Zebra Android devices running the Jelly Bean version of Android. The same action could be performed using the "OS Update" action, if a suitable OS Update ZIP file was obtained and used.</p><p><b>Note:</b> Since this value causes the device to reboot into Recovery Mode and then back into OS Mode, the execution of a PowerMgr Feature using this value will terminate execution of the submitted Request XML Document prematurely. This means that any Features following a PowerMgr Feature that uses this value will never be executed. It also means that the application that submitted the Request XML Document will never receive a Result XML for the submitted Request XML Document.</p></td>
  </tr>
  <tr>
    <td>Factory Reset</td>
    <td>"6"</td>
	<td><p>This value will cause a Factory Reset to be performed, on the device. On Zebra Android devices, a Factory Reset erases key partitions, including /data, cache, and /enterprise.</p><p>Storage Cards that are implemented using built-in flash memory may or may not be erased, depending on whether they are stored.  For example, a Storage Card implemented within the /data or /enterprise partitions would be erased, whereas a Storage Card implemented via a dedicated partition would not be. A Storage Card implemented via physically removable media (e.g. a Micro SD card) would not be erased.</p><p>The purpose of a Factory Reset is to return the device to a Factory Defined default state. It does do that, because it erases the /enterprise and hence prevents any content that is not erased from being utilized automatically when the device reboots. But since it does not erase all Storage Cards, it may actually not render the device identical to the way it shipped from the factory (when all Storage Cards were empty).</p><p><b>Note:</b> This action is supported only on Zebra Android devices that are running the Kit Kat version of Android, such as the TC70. This is because it depends on underlying OS extensions that were not available on Zebra Android devices running the Jelly Bean version of Android. The same action could be performed using the "OS Update" action, if a suitable OS Update ZIP file was obtained and used.</p><p><b>Note:</b> Since this value causes the device to reboot into Recovery Mode and then back into OS Mode, the execution of a PowerMgr Feature using this value will terminate execution of the submitted Request XML Document prematurely. This means that any Features following a PowerMgr Feature that uses this value will never be executed. It also means that the application that submitted the Request XML Document will never receive a Result XML for the submitted Request XML Document.</p></td>
  </tr>
  <tr>
    <td>Full Device Wipe</td>
    <td>"7"</td>
	<td><p>This value will cause a Full Device Wipe to be performed. On Zebra Android devices, a Full Device Wipe is the same as a Factory Reset except all Storage Cards are also erased.</p><p>The purpose of a Full Device Wipe is to return the device to as close as possible to the identical state it was in when it was shipped from the factory. But since the OS (system) partition may have been updated, via an OS Update, and cannot be returned to its original content, even a Full Device Wipe may not return a device to the identical state it was in when it shipped from the factory – only by additionally performing an OS Update to the identical OS version that shipped in the device from the factory could do that. But a Full Device Wipe can be thought of as returning the device to the state it would have been in when it shipped from the factory if it had shipped with the version of the OS that is currently installed on the device.</p><p><b>Note:</b> This action is supported only on Zebra Android devices that are running the Kit Kat version of Android, such as the TC70. This is because it depends on underlying OS extensions that were not available on Zebra Android devices running the Jelly Bean version of Android. The same action could be performed using the "OS Update" action, if a suitable OS Update ZIP file was obtained and used.</p><p><b>Note:</b> Since this value causes the device to reboot into Recovery Mode and then back into OS Mode, the execution of a PowerMgr Feature using this value will terminate execution of the submitted Request XML Document prematurely. This means that any Features following a PowerMgr Feature that uses this value will never be executed. It also means that the application that submitted the Request XML Document will never receive a Result XML for the submitted Request XML Document.</p></td>
  </tr>
  <tr>
    <td>OS Update</td>
    <td>"8"</td>
	<td><p>This value will cause an OS Update to be performed using a specified OS Update Zip File. An OS Update can completely replace the OS, can patch the OS, or can perform many of the resets discussed above (e.g. Enterprise Reset, Factory Reset, Full Device Wipe) if the right OS Update ZIP file is acquired and utilized.</p><p><b>Note:</b> Since this value causes the device to reboot into Recovery Mode and then back into OS Mode, the execution of a PowerMgr Feature using this value will terminate execution of the submitted Request XML Document prematurely. This means that any Features following a PowerMgr Feature that uses this value will never be executed. It also means that the application that submitted the Request XML Document will never receive a Result XML for the submitted Request XML Document.</p></td>
  </tr>
</table>
</div>	

####OS Update ZIP File
Settable if: The Reset Action is "OS Update"

Pivotal parm: No

Parm name: ZipFile

Description: 

>This parm allows you to specify the full path and name of the OS Update ZIP file, which must reside in the device file system at the time the OS Update action is requested.

>**Note:** The specified OS Update file must already exist in a location in the device file system within the device that is suitable for performing OS Updates. The set of locations that can be used for OS Updates is determined based on the following set of rules. Since different devices have different characteristics, the set of locations that meet these rules, and hence the set of locations that can be used for OS Updates will vary by device.

>* In Zebra devices running any version of Android, a location that is not accessible cannot be used for OS Updates. For example, a Storage Card to which access has been blocked, using the SdCardMgr Feature Types, cannot be used for OS Updates. Similarly, a Storage Card that is implemented via physically removable media would not be accessible if there was no media physically present.
>* In Zebra devices running any version of Android, a location that is encrypted cannot be used for OS Updates. For example, if a Full Storage Card Encryption is enabled for a Storage Card, then no locations on that Storage Card could be used for OS Updates. Similarly, if an Encrypted File System was mounted on a Storage Card, then no locations within that Encrypted File System could be used for OS Updates.
>* In Zebra devices running any version of Android, a location that cannot be written to by the entity wishing to perform the OS Update cannot be used for OS Updates unless the entity can somehow acquire the permissions necessary to write the OS Update ZIP file to that location.
>* In Zebra devices running the Jelly Bean version of Android, a Storage Card that is emulated cannot be used for OS Updates. This limitation has been removed from devices running the Kit Kat version of Android.

> To perform an OS Update, an appropriate OS Update ZIP file should be transferred to the device and stored in a suitable location in the device file system. The location to which the OS Update ZIP file is stored must be one of the locations supported for OS Update on that device. Once the OS Update ZIP file is stored in a suitable location in the device file system, the PowerMgr Feature Type can be used to initiate the update.

>**Note:** The path specified to the PowerMgr Feature Type would normally be the same as the path to which the file was written when it was transferred to the device, but it doesn't always need to be the same. There may be multiple paths that can be used to store the file, all of which may cause the file to be stored in the identical location. But not all such paths may work to initiate the OS Update when specified via the PowerMgr Feature Type. So, it is strongly recommended to store the files using one of the paths defined in the following table and then to specify the same path to the PowerMgr Feature Type.

<div class="parm-table">
 <table>
	<tr>
		<th>Device Model</th>
		<th>Version of Android</th>
		<th>Location Supported for OS Updates Comments</th>
	</tr>
  <tr>
    <td>ET1N0</td>
    <td><p>Jelly Bean</p><p>v02.70.2479</p><p>ET1N0JenRU02702479.zip</p><p>02-4AJ11-2479-0700-00-M1-030215</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  <tr>
    <td>ET1N2</td>
    <td><p>Jelly Bean</p><p>v02.20.2478</p><p>ET1N2JenRU02202478.zip</p><p>02-4AJ11-2478-0200-00-D1-030215</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder exists and is world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  <tr>
    <td>MC32</td>
    <td><p>Jelly Bean</p><p>v00003</p><p>MC32N0JXXXRUEN00003.zip</p><p>00-4AJ11-J-0000-0000-00-M1-112214</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder exists and is world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  <tr>
    <td>MC40</td>
    <td><p>Jelly Bean</p><p>v03.09.0514</p><p>M40N0JXXVRUxx30514.zip</p><p>03-4AJ11-J-0900-0016-V0-M1-051415</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder exists and is world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  <tr>
    <td>MC40</td>
    <td><p>Kit Kat</p><p>v01.12.0720</p><p>M40N0KXXVRUxx10720.zip</p><p>01-12-03-4AJ22-K-V0-M1-072015</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <!--<tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>-->
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity with system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  <tr>
    <td>MC67</td>
    <td><p>Jelly Bean</p><p>v030515</p><p>M67N0JXXVRUEN03055.zip</p><p>01-4AJ11-J-2200-0001-00-M1-030515</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder exists and is world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  <!--
  <tr>
    <td>MC92</td>
    <td><p>Kit Kat TBD</p><p>v??</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity with system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
  <!--
  <tr>
    <td>TC55</td>
    <td><p>Jelly Bean Non-GMS</p><p>v01.74.00</p><p>T55N0JB0VRUEN17400.zip</p></td>
	<td> 
		 <table>
	  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card OR Removable Micro SD Card (if media is physically present)</td>
		  </tr>
	      <tr>
			<td>/storage/sdcard0</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
	   	 <tr>
			<td>/storage/sdcard1</td>
			<td>Internal Storage Card</td>
		  </tr>
	      <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder exists and is world writable)</td>
		  </tr>
	      <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
  <!--
  <tr>
    <td>TC55</td>
    <td><p>Jelly Bean GMS</p><p>v1.74</p><p>(with or without Enterprise Enabler applied)</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card OR Removable Micro SD Card (if media is physically present)</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Internal Storage Card</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
  <!--
  <tr>
    <td>TC55</td>
    <td><p>Jelly Bean GMS</p><p>v1.74</p><p>(without Enterprise Enabler applied)</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
  <!--
  <tr>
    <td>TC55</td>
    <td><p>Jelly Bean GMS</p><p>v1.74</p><p>(with Enterprise Enabler applied)</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder exists and is world writable)</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
  <!--
  <tr>
    <td>TC55</td>
    <td><p>Jelly Bean GMS</p><p>v1.74</p><p>(with or without Enterprise Enabler applied)</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
  <tr>
    <td>TC55</td>
    <td><p>Kit Kat GMS</p><p>v2.52.02G.07</p><p>T55N0KXXVRUEN25202G07.zip</p><p>150611-SI-1800EN-02.52.02G.07-23257-4.4.3-user</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		 <!--
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>
		-->
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity with system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  <tr>
    <td>TC55</td>
    <td><p>Kit Kat Non-GMS</p><p>v2.52.04</p><p>T55N0KXXVRUEN25202.zip</p><p>150422-AI-1800EN-02.52.02-23257-4.4.4-user</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		 <!--
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>
		-->
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
 <!--
  <tr>
    <td>TC55</td>
    <td><p>Kit Kat MR GMS TBD</p><p>v??</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
 <!--
  <tr>
    <td>TC55</td>
    <td><p>Kit Kat MR Non-GMS TBD</p><p>v??</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder exists and is world writable)</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
  <tr>
    <td>TC70</td>
    <td><p>Kit Kat GA1</p><p>v112414</p><p>T70N0KEXXPUEF11244.zip</p><p>01-23245-K-00-00-00-G1-112414</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder exists and is world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
 <!--
  <tr>
    <td>TC70</td>
    <td><p>Kit Kat MR TBD</p><p>v??</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Internal Storage Card </td>
		  </tr>
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity with system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
  <tr>
    <td>TC75</td>
    <td><p>Kit Kat</p><p>v01104</p><p>T75N0KEXXPUEF01104.zip</p><p>01-23257-K-11-04-00-MV</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Internal Storage Card </td>
		  </tr>
		<!--
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		-->
		<!--
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>
		-->
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  <!--
  <tr>
    <td>TC75</td>
    <td><p>Kit Kat MR TBD</p><p>v??</p></td>
	<td> 
		 <table>
		  <tr>
			<td>/sdcard</td>
			<td>Internal Storage Card</td>
		  </tr>
		  <tr>
			<td>/storage/sdcard0</td>
			<td>Internal Storage Card </td>
		  </tr>
		  <tr>
			<td>/storage/sdcard1</td>
			<td>Removable Micro SD Card (media must be physically present)</td>
		  </tr>
		  <tr>
			<td>/data/tmp</td>
			<td>Internal Data Partition (folder is not world writable)</td>
		  </tr>
		  <tr>
			<td>/data/tmp/local</td>
			<td>Internal Data Partition (folder must be created by an entity that does not need system privilege)</td>
		  </tr>
		</table>
	</td>
  </tr>
  -->
</table>
</div>





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