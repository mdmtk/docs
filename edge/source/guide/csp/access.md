# AccessMgr

## About AccessMgr

### Overview

The Access Manager feature allows you to configure a set of applications that will be allowed to run and install on the device. When this feature is enabled, the device will only allow user installed applications on the Whitelist to be executed and/or installed (some applications that are part of the default operating system will still be available). To disable the Whitelist, you would select 'Single User Without Whitelist'.  

>**Note:** It is important to include the executing EMDK application in the Whitelist otherwise your application will lose control of the Whitelist configuration and you will not be able to change the behavior.

### Main Functionality

* Set Device Operation Mode to Single User without Whitelist
* Set Device Operation Mode to Single User with Whitelist
* Set System Settings Access to Full Access 
* Set System Settings Access to Reduced Access 
* Set Application Verification Mode to do not Verify App Signature
* Set Application Verification Mode to Verify User App Signature
* Set Application Verification Mode to Verify All App Signature
* Delete Specified Packages 
* Delete All Packages 
* Delete Specified Signatures
* Add Specified Package
* Add Package to to List of Applications Allowed to Submit XML
* Remove Package from List of Applications Allowed to Submit XML
* Allow specific Applications that can be Executed to Submit XML
* Allow all Applications that can be Executed to Submit XML

##Parameter Notes
### Operation Mode
Pivotal parm: Yes

Description: 

>Select the desired Operation Mode which will indicate whether or not Whitelisting will be used

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Single User without Whitelist</td>
    <td>"1"</td>
	<td>Setting this feature will disable all Whitelist features.</td>
  </tr>
  <tr>
    <td>Single User with Whitelist</td>
    <td>"2"</td>
	<td>Setting this feature will enable the Whitelist feature based on the details provided. You can choose to add or delete packages from the current Whitelist.</td>
  </tr>
</table>
</div>	

###System Settings Access
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: No

Parm name: SystemSettings

Description: 

>Select the level of system settings access to be allowed on the device's System Settings menu

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Full Access</td>
    <td>"1"</td>
	<td>The device's System Settings Menu will not be reduced</td>
  </tr>
  <tr>
    <td>Reduced Access</td>
    <td>"2"</td>
	<td>The device's System Settings menu will be reduced to a pre-selected group of options (Display, Volume, About)</td>
  </tr>
</table>
</div>	

###Application Verification Signing Mode
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: Yes

Description: 

>Select the level of application verification signing mode

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This will not change what the device is currently configured as</td>
  </tr>
  <tr>
    <td>Do not verify app signature</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Verify user app signature</td>
    <td>"2"</td>
	<td></td>
  </tr>
  <tr>
    <td>Verify all apps signature</td>
    <td>"3"</td>
	<td></td>
  </tr>
</table>
</div>	

### Delete Packages
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: Yes

Description: 

>Select whether or not to delete Packages from the Whitelist

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Delete NO Packages</td>
    <td>"0"</td>
	<td>Does not delete any packages</td>
  </tr>
  <tr>
    <td>Delete specified Packages(s)</td>
    <td>"1"</td>
	<td>Delete specified package</td>
  </tr>
  <tr>
    <td>Delete ALL Packages</td>
    <td>"2"</td>
	<td>Deletes all packages </td>
  </tr>  
  <tr>
    <td>Delete specified Signature(s)</td>
    <td>"3"</td>
	<td></td>
  </tr>  
</table>
</div>	

#### Delete Package Name(s)
Settable if: The Operation Mode is "Single User With Whitelist" *AND* Delete Packages is "Delete specified Packages(s)"

Pivotal parm: No

Parm name: DeletePackageNames

Description: 

>Provide the Package Names to delete from the Whitelist 

Parm value input rules: 

* String with a minimum size of 1 character
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

#### Delete Package Signature(s)
Settable if: Delete Packages is "Delete specified Signature(s)" *AND* the Application Verification Signing Mode is "Do not verify app signature", "Verify user app signature", or "Verify all apps signature"

Pivotal parm: No

Parm name: DeletePackageSign

Description: 

> Provide the package signatures to delete

Parm value input rules: 

* String with a minimum size of 1 character
* The package signatures must be separated by commas

### Add Packages
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: Yes

Description: 

>Select whether or not to add Packages to the Whitelist (with NO permission to submit XML)

>**Note:** It is important to include the executing EMDK application in the Whitelist otherwise your application will lose control of the Whitelist configuration and you will not be able to change the behavior without an enterprise reset..

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Add No Packages</td>
    <td>"0"</td>
	<td>Does not add any packages</td>
  </tr>
  <tr>
    <td>Add Specified Package(s)</td>
    <td>"1"</td>
	<td>Add specified package</td>
  </tr>
</table>
</div>	

#### Add Package Name(s)
Settable if: The Operation Mode is "Single User With Whitelist" *AND* Add Packages is "Add Specified Package(s)"

Pivotal parm: No

Parm name: AddPackageNames

Description: 

> Provide the Package Names to add to the Whitelist

Parm value input rules: 

* String with a minimum size of 1 character
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

#### Add Package Signature(s)
Settable if: The Application verification signing mode is "Do not verify app signature" or "Verify user app signature" *AND* Add Packages is "Add Specified Package(s)"

Pivotal parm: No

Parm name: AddPackageSign

Description: 

>Provide the Package signatures to add to the Whitelist

###Add Packages and Allow to Submit XML
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: Yes

Description: 

>Select whether or not to add Packages to the Whitelist and allow them to submit XML

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Allow NO applications</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>Allow specified application(s)</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Allow ALL applications that are permitted to be executed</td>
    <td>"2"</td>
	<td></td>
  </tr>  
</table>
</div>	

####Add Package Name(s)
Settable if: The Operation Mode is "Single User With Whitelist" *AND* Add Packages and Allow to Submit XML is "Allow specified application(s)"

Pivotal parm: No

Parm name: AddPackageNamesAllowXML

Description: 

>Provide the Package Names to add to the Whitelist and allow to submit XML

Parm value input rules: 

* String with a minimum size of 1 character
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

####Add Package Signature(s)
Settable if: The Operation Mode is "Single User With Whitelist" *AND* Add Packages and Allow to Submit XML is "Allow specified application(s)" *AND* Application Verification Signing Mode is "Do not verify app signature", "Verify user app signature", or "Verify all apps signature"

Pivotal parm: No

Parm name: AddPackageSignAllowXML

Description: 

>Provide the Package Signature to add to app verification signature list

Parm value input rules: 

* String with a minimum size of 1 character
* Package signatures must be separated by commas

### Allow the Application To Submit XML
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: Yes

Description: 

>Select whether or not to allow the application to submit XML. This will allow or restrict applications from submitting changes to the MX Framework.

>**Note:** This feature is supported on devices that are running KitKat versions of Android like the TC70 and will only be used when the Whitelist feature is enabled.

> **WARNING:** Be sure to always include the EMDK for Android service package name `com.symbol.emdkservice` when this feature is enabled. Otherwise Profile Features (excluding DataCapture) will not be able to be processed. 

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Allow NO applications</td>
    <td>"0"</td>
	<td></td>
  </tr>
  <tr>
    <td>Allow specified application(s)</td>
    <td>"1"</td>
	<td></td>
  </tr>
  <tr>
    <td>Allow ALL applications that are permitted to be executed</td>
    <td>"2"</td>
	<td></td>
  </tr>  
</table>
</div>	

### Allow Package Name(s)
Settable if: Allow the Application To Submit XML is "Allow specified application(s)"

Pivotal parm: No

Parm name: AllowSubmitXMLPackageNames

Description: 

>Provide the Package Names to allow to submit XML to the MX framework.

Parm value input rules: 

* String with a minimum size of 0 characters
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

### Disallow Package Name(s)
Settable if: Allow the Application To Submit XML is "Allow specified application(s)" or "Allow ALL applications that are permitted to be executed"

Pivotal parm: No

Parm name: DisallowSubmitXMLPackageNames

Description: 

>Provide the Package Names to disallow from submitting XML to the MX framework

Parm value input rules: 

* String with a minimum size of 0 characters
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

##Example XML

###Add an Application to the Whitelist

	:::XML
	<wap-provisioningdoc>
		<characteristic version="4.3" type="AccessMgr">
			<parm name="OperationMode" value="2" />
			<parm name="SystemSettings" value="1" />
			<parm name="DeletePackagesAction" value="0" />
			<parm name="AddPackagesAction" value="1" />
			<parm name="AddPackageNames" value="com.mypackage" />
		</characteristic>
	</wap-provisioningdoc>

### Specify Applications to Allow and Disallow from Submitting XML

	:::XML
	<wap-provisioningdoc>
		<characteristic version="4.3" type="AccessMgr">
			<parm name="OperationMode" value="2" />
			<parm name="SystemSettings" value="1" />
			<parm name="DeletePackagesAction" value="0" />
			<parm name="AddPackagesAction" value="0" />
			<parm name="AllowSubmitXMLAction" value="1" />
			<parm name="AllowSubmitXMLPackageNames" value="com.mypackage" />
			<parm name="DisallowSubmitXMLPackageNames" value="com.mypackage2" />
		</characteristic>
	</wap-provisioningdoc>

	
## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=AccessMgr&os=JB&embed=true"></iframe> 

