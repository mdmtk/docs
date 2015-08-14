# GprsMgr

## About GprsMgr

### Overview

The GPRS Feature Type allows you to add or remove Access Point Names (APNs) to your device, which are used to set up a connection to the gateway between the GPRS carrier's cellular network and the public Internet.

### Main Functionality

* Add or Update Named APN
* Remove APN
* Remove all APNs
* Set Default APN
* Set Accesses Point Name, User Name, and Password

##Parameter Notes
### APN Action
Pivotal parm: Yes

Description: 

>This parm allows you to choose the APN action that should be performed.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Add/replace named APN</td>
    <td>"1"</td>
	<td>This parm will cause an APN to be added or replaced.</td>
  </tr>
  <tr>
    <td>Remove existing named APN</td>
    <td>"2"</td>
	<td>This parm will cause a specified APN to be removed.</td>
  </tr>
  <tr>
    <td>Remove all existing APNs</td>
    <td>"3"</td>
	<td>This parm will cause all existing APNs to be removed.</td>
  </tr>
</table>
</div>	

####GPRS Carrier 
Settable if: The APN Action is "Add/replace named APN"

Pivotal parm: Yes

Description: 

>This parm allows you to specify the name of the GPRS carrier for the APN.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>ATT</td>
    <td>"1"</td>
	<td>This value indicates that ATT is the GPRS carrier for the APN.</td>
  </tr>
  <tr>
    <td>T-Mobile</td>
    <td>"2"</td>
	<td>This value indicates that T-Mobile is the GPRS carrier for the APN.</td>
  </tr>
  <tr>
    <td>Custom</td>
    <td>"0"</td>
	<td>This value indicates that the APN has a custom GPRS carrier.</td>
  </tr>
</table>
</div>	

####APN Name
Settable if: The APN Action is "Add/replace named APN" or "Remove existing named APN"

Pivotal parm: No

Parm name: ApnName

Description: 

>This parm is used to provide the name that the APN should be set to. This name is used to identify the APN settings for deleting an existing APN or adding/replacing an APN. This name must be unique on the device. 

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Replace If Exists?
Settable if: The APN Action is "Add/replace named APN"

Pivotal parm: No

Parm name: ReplaceIfExisting

Description: 

>This parm allows you to choose if an APN should be replaced if it already exists.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"1"</td>
	<td>This value will cause an APN to be replaced if it exists already. This means that the existing APN will be deleted and replaced with the new APN.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"0"</td>
	<td>This value will not cause an APN to be replaced if it exists already. This means that if an existing APN has the same name as the new APN, the new APN will not be added.</td>
  </tr>
</table>
</div>	

####Make Default APN?
Settable if: The APN Action is "Add/replace named APN"

Pivotal parm: No

Parm name: MakeDefault

Description: 

>This parm allows you to choose if the new APN should be the default (preferred) APN.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>True</td>
    <td>"1"</td>
	<td>This value will cause the new APN to be set as the default APN.</td>
  </tr>
  <tr>
    <td>False</td>
    <td>"0"</td>
	<td>This value will not cause the new APN to be set as the default APN.</td>
  </tr>
</table>
</div>	

####Access Point
Pivotal parm: No

Description: 

>This parm allows you to provide the access point name that the APN should be set to, such as internet3.voicestream.com. The parm name will change depending on the values of other GprsMgr parms. 

If the APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "ATT"

* Parm name: AttAccessPoint

If the APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "T-Mobile"

* Parm name: TmobileAccessPoint

If the APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "Custom"

* Parm name: CustomAccessPoint

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####User Name
Pivotal parm: No

Description: 

> This parm value allows you to provide the user name that the APN should be set to. The parm name will change depending on the values of other GprsMgr parms. 

If the APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "ATT"

* Parm name: AttUserName

If the APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "T-Mobile"

* Parm name: TmobileUserName

If the APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "Custom"

* Parm name: CustomUserName

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Password
Pivotal parm: No

Description: 

> This parm value allows you to provide the password that the APN should be set to. The parm name will change depending on the values of other GprsMgr parms. 

If the APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "ATT"

* Parm name: AttPassword

If the APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "T-Mobile"

* Parm name: TmobilePassword

If the APN Action is "Add/replace named APN" *AND* the GPRS Carrier is "Custom"

* Parm name: CustomPassword

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

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