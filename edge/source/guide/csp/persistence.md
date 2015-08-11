# PersistMgr

## About PersistMgr

### Overview

The PersistMgr Feature Type is used to create and remove Persistent Profiles on the device. Any parameters specified in the Persistent Profile will be automatically recovered during an Enterprise Reset. The PersistMgr Feature Type can also be used to enable and disable the Persistent Profiles, which would allow or disallow the Persistent Profile from being reapplied after an Enterprise Reset.

### Main Functionality

* Add or Remove a Persistent Profile
* Enable or Disable a Persistent Profile

##Parameter Notes
###Persist Action
Pivotal parm: Yes

Description: 

>This parm allows you to add, remove, enable, or disable a Persistent Profile. The Persistent Profile is the entire Request XML document that is sent to the PersistMgr Feature Type, which contains any features that should be persisted in addition to the PersistMgr feature.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Add current XML as a persistent profile</td>
    <td>"1"</td>
	<td>This value will make the specified Persistent Profile persistent. The combination of Persist As Name, Persist As Version and Persist As Order will be used to identify the profile set to be persisted. The same combination must be used when trying to remove the features from being persisted.</td>
  </tr>
  <tr>
    <td>Remove the specified persistent profile</td>
    <td>"2"</td>
	<td>This value will remove the specified Persistent Profile from the device. The combination of the Persist As Name, Persist As Version and Persist As Order parms must match a previously Persistent Profile with those same features.</td>
  </tr>
  <tr>
    <td>Enable the specified persistent profile</td>
    <td>"3"</td>
	<td>This value will enable the specified Persistent Profile, which means that when an Enterprise reset is performed, the persisted XML will be reapplied. Enabling a profile would allow the device's features to be automatically set after an Enterprise Reset, without any required user actions.</td>
  </tr>
  <tr>
    <td>Disable the specified persistent profile</td>
    <td>"4"</td>
	<td>This value will disable the specified Persistent Profile, which means that when an Enterprise reset is performed, the persisted XML will not be reapplied.</td>
  </tr>
</table>
</div>	

####Persist As Name
Pivotal parm: No

Parm name: PersistAsName

Description: 

>This parm is used to set the name of the Persistent Profile. This is used with the Persist As Version and Persist as Order values to identify the Persistent Profile so that it can be referenced when removing it from the device or enabling or disabling it.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Persist As Version
Pivotal parm: No

Parm name: PersistAsVersion

Description: 

>This parm is used to set the version number of the Persistent Profile. This is used with the Persist As Name and Persist as Order to identify the Persistent Profile so that it can be referenced when removing it from the device or enabling or disabling it.

>If an already existing Persistent Profile has the same Persist As Name value, but a different Persist As Version value, the new Persistent Profile will be added and enabled and the previous Persistent Profile will be disabled. If an already existing Persistent Profile has the same Persist As Name and Persist As Order values, the new Persistent Profile will replace the previous one.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Persist As Order
Pivotal parm: No

Parm name: PersistAsOrder

Description: 

>This parm is used to set the order number of the Persistent Profile. This is used with the Persist As Name and Persist as Version to identify the Persistent Profile so that it can be referenced when removing it from the device or enabling or disabling it. This value (or the absence of this parm from the XML) will cause the order number to default to 99, which is the maximum Persist As Order value.

>The order number of the Persistent Profile will indicate what order the Persistent Profiles would be resubmitted to the MXMF after an Enterprise Reset is performed. A Persistent Profile with a lower order number would be resubmitted to the MXMF before a Persistent Profile with a higher number. If two Persistent Profiles have the same order number, they will be resubmitted to the MXMF in alphabetical order based on their Persist As Name values.

Parm value input rules: 

* Integer value with a minimum value of 1 and a maximum value of 99

####Persist If Error?
Settable if: Persist Action is "Add current XML as a persistent profile"

Pivotal parm: No

Parm name: PersistIfError

Description: 

>This parm specifies if the Persistent Profile should be persisted if any errors are found in the Request XML document.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"true"</td>
	<td>This value will cause the Persistent Profile to be persisted even if errors are found in the Request XML document.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"false"</td>
	<td>This value will not cause the Persistent Profile to be persisted if errors are found in the Request XML document.</td>
  </tr>
</table>
</div>	

### Usage Notes
####Using PersistMgr on TC55 after performing a Factory Reset
The following issue is limited to the TC55 only: 
 
During the installation on the TC55, the EMDK Device Runtime package creates the "enterprise/usr/persist/" folder required for the PersistMgr feature to function. If a factory reset is done after installing the EMDK Device Runtime, this folder will get deleted and the PersistMgr will no longer work. 
 
This problem can be fixed by reinstalling the EMDK Device Runtime Package on the TC55.

##Example XML
### Add a Persistent Profile

This Request XML document is used to persist an XML which is used to configure the device's clock. After an Enterprise Reset is performed, this XML will be reapplied, which would cause the device's clock to be set accordingly.

    :::XML
	<wap-provisioningdoc>
		<characteristic type="Clock" version="4.2">
			<parm name="AutoTime" value="true" /> 
			<characteristic type="AutoTimeDetails">
				<parm name="NTPServer" value="http://time.test.com" /> 
				<parm name="SyncInterval" value="00:30:00" /> 
			</characteristic>
		</characteristic>
		<characteristic type="PersistMgr">
			<parm name="PersistAction" value="1" /> 
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile" /> 
				<parm name="PersistAsVersion" value="1" /> 
				<parm name="PersistAsOrder" value="3"/>
				<parm name="PersistIfError" value="false" /> 
			</characteristic>
		</characteristic>
	  </wap-provisioningdoc>

### Remove a Persistent Profile

This Request XML document is used to remove a Persistent Profile, which is used to configure the device's clock.

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr" version="4.2" >
			<parm name="PersistAction" value="2"/>
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
				<parm name="PersistAsVersion" value="1"/>
				<parm name="PersistAsOrder" value="3"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

### Enable a Persistent Profile

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr" version="4.2" >
			<parm name="PersistAction" value="3"/>
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
				<parm name="PersistAsVersion" value="1"/>
				<parm name="PersistAsOrder" value="3"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

### Disable a Persistent Profile

	:::XML
	<wap-provisioningdoc>
		<characteristic type="PersistMgr" version="4.2" >
			<parm name="PersistAction" value="4"/>
			<characteristic type="persist-details">
				<parm name="PersistAsName" value="Clock-profile"/>
				<parm name="PersistAsVersion" value="1"/>
				<parm name="PersistAsOrder" value="3"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=PersistMgr&os=JB&embed=true"></iframe> 