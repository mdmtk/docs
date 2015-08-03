# AccessMgr

## About AccessMgr

### Overview

The AccessMgr Feature Type enables the configuration of a device to control which user, or "installable", applications can be used on a given device as well as what those applications can do.

A key concept within the AccessMgr Feature Type is the ability to turn Whitelisting on or off. By default, Whitelisting is turned off. When Whitelisting is turned off, no restrictions are imposed. When Whitelisting is turned on, using the AccessMgr Feature Type, various restrictions can be imposed.

Whitelisting is a process which allows only applications to run which are explicitly specified in a list, which is called the "white" list. All other applications are prohibited from running. The AccessMgr Feature Type allows the "white" list of applications that are allowed to be installed and/or launched to be maintained. The AccessMgr Feature Type also allows control of which applications are allowed to submit XML for all of the Feature Types, including the AccessMgr Feature Type.

Whitelisting only applies to user applications and will never have any effect on System applications. System applications are those applications that are built into the device and hence are always installed. Some control of System applications can be accomplished by using the AppMgr Feature Type.

User applications are those applications that are not built into the device and hence must be installed onto a device before they can be used. Whitelisting can be used to control whether a device user is allowed to install a user application, but cannot control whether an application can be installed programmatically by using the AppMgr Feature Type. Whitelisting can also be used to control whether a user application can be launched, via any means, once it is installed.

>**Note:** It is important to understand that if a user application uses the AccessMgr Feature Type to turn on Whitelisting, then that application will become subject to Whitelisting. If the application does not add itself to the "white" list, then that application will no longer be allowed to run. Also, if such an application does not explicitly allow itself to submit XML, then it would not be able to alter the configuration once it was successfully applied.

The AccessMgr Feature Type also provides the option to control whether the device user can access a full or reduced version of in-device System Settings Menu.

### Main Functionality

* Turn Whitelisting on or off
* Manage the "white" list of applications that a device user can install and that can be launched
* Turn verification of application signatures on or off
* Control which applications are allowed to submit XML
* Select whether the device user can use Full or Reduced Settings
* Set Application Verification Mode to Verify All App Signature

##Parameter Notes
### Operation Mode
Pivotal parm: Yes

Description: 

>Select the desired Operation Mode which will turn Whitelisting on or off.  Whitelisting is turned off by default, and hence no restrictions are imposed on which applications device users can install or which applications can be launched.

>Turning on Whitelisting allows a device to be made more secure by preventing a device user from installing applications that are not on the "white" list and by preventing all launching of applications that are not on the "white" list. Turning on Whitelisting also complicates the process of deploying applications since applications that are deployed and installed will have to also be added to the “white” list before they can be launched.

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
	<td>This value will turn Whitelisting off and hence disable all Whitelisting functionality.</td>
  </tr>
  <tr>
    <td>Single User with Whitelist</td>
    <td>"2"</td>
	<td>This value will turn Whitelisting on and hence enable Whitelisting functionality. The exact behavior of Whitelisting will depend on the configuration of the other parms.</td>
  </tr>
</table>
</div>	

###System Settings Access
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: No

Parm name: SystemSettings

Description: 

>Select the level of system settings access to be allowed on the device's System Settings menu.

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
	<td>The device user will be allowed to access the full capabilities of the in-device System Settings Menu.</td>
  </tr>
  <tr>
    <td>Reduced Access</td>
    <td>"2"</td>
	<td>The device user will be allowed to access only a reduced set of the capabilities of the in-device System Settings Menu (Display, Volume, About)</td>
  </tr>
</table>
</div>	

###Application Verification Signing Mode
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: Yes

Description: 

>Select whether Whitelisting will verify the signatures of applications, and if so, which application signatures will be verified. Signature verification is turned off by default.

>When Whitelisting is turned on but Signature verification is turned off, the determination of whether an application is on the "white" list is made solely by comparing the Android Package Name. This is insecure since it cannot prevent a potentially rogue application from setting it’s Package Name to be one that is known to be on the "white" list, and hence circumvent Whitelisting by impersonating a trusted application.

>To increase security, Signature verification can be turned on. When Signature verification is turned on, the determination of whether an application is on the "white" list will be based on both its Package Name and its Signature. For that to work, the Signature must be provided for every application that is added to the "white" list so it can be compared against the actual Signature of that application.

>Signature verification is more secure since only a specific "authentic" version, as identified by its Signature, of a given application, whose Package Name is on the "white" list, will be allowed to be installed and launched.  Turning on Signature verification also complicates the process of deploying applications since a unique Signature will need to be configured for each application as part of adding that application to the "white" list.

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
	<td>This value will not change whether Signature verification will occur or for which applications.</td>
  </tr>
  <tr>
    <td>Do not verify app signature</td>
    <td>"1"</td>
	<td>This value will turn Signature verification off, thus causing Package Names alone to be used in to determine if an application is on the "white" list.</td>
  </tr>
  <tr>
    <td>Verify user app signature</td>
    <td>"2"</td>
	<td>This value will turn Signature verification on, thus causing Signature verification to be used in addition to Package Names to determine if a user, or "installable", application is on the "white" list.</td>
  </tr>
  <tr>
    <td>Verify all apps signature</td>
    <td>"3"</td>
	<td>This value will turn Signature verification on, thus causing Signature verification to be used in addition to Package Names to determine if any application, "built-in" or "installable", is on the "white" list.</td>
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
	<td>This value does not delete anything and hence does not affect the "white" list at all.</td>
  </tr>
  <tr>
    <td>Delete specified Packages(s)</td>
    <td>"1"</td>
	<td>This value deletes one or more selected Package Names from the "white list", thus blocking user, or "installable", applications with those Package Names from being installed by the device user or launched.</td>
  </tr>
  <tr>
    <td>Delete ALL Packages</td>
    <td>"2"</td>
	<td>This value deletes all Package Names from the "white list", thus blocking all user, or "installable",  applications from being installed by the device user or launched.</td>
  </tr>  
  <tr>
    <td>Delete specified Signature(s)</td>
    <td>"3"</td>
	<td>This value is meaningful only with Signature verification is turned on, in which case it deletes one or more Signatures from the "white list", thus blocking user, or "installable", applications with those Signatures from being installed by the device user or launched.</td>
  </tr>  
</table>
</div>	

#### Delete Package Name(s)
Settable if: The Operation Mode is "Single User With Whitelist" *AND* Delete Packages is "Delete specified Packages(s)"

Pivotal parm: No

Parm name: DeletePackageNames

Description: 

>Provide the Package Names to be deleted from the "white" list.

Parm value input rules: 

* String with a minimum size of 1 character
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

#### Delete Package Signature(s)
Settable if: Delete Packages is "Delete specified Signature(s)" *AND* the Application Verification Signing Mode is "Do not verify app signature", "Verify user app signature", or "Verify all apps signature"

Pivotal parm: No

Parm name: DeletePackageSign

Description: 

>Provide the package signatures to be deleted

Parm value input rules: 

* String with a minimum size of 1 character
* The package signatures must be separated by commas

### Add Packages
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: Yes

Description: 

>Select whether or not to add Packages to the "white" list. Adding an application to the "white" list using this parm does not allow the application to submit XML, that must be done using the separate parm "Add Packages and Allow to Submit XML".

>**Note:** It is important to understand that if an application uses the AccessMgr Feature Type to turn on Whitelisting, then that application will become subject to Whitelisting. If the application does not add itself to the "white" list, then that application will no longer be allowed to run. Also, if such an application does not explicitly allow itself to submit XML, then it would not be able to alter the configuration once it was successfully applied.

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
	<td>This value does not add any Package Names to the "white" list.</td>
  </tr>
  <tr>
    <td>Add Specified Package(s)</td>
    <td>"1"</td>
	<td>This value adds the specified Package Names to the "white" list.</td>
  </tr>
</table>
</div>	

#### Add Package Name(s)
Settable if: The Operation Mode is "Single User With Whitelist" *AND* Add Packages is "Add Specified Package(s)"

Pivotal parm: No

Parm name: AddPackageNames

Description: 

> Provide the Package Names that should be added to the "white" list.

Parm value input rules: 

* String with a minimum size of 1 character
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

#### Add Package Signature(s)
Settable if: The Application verification signing mode is "Do not verify app signature" or "Verify user app signature" *AND* Add Packages is "Add Specified Package(s)"

Pivotal parm: No

Parm name: AddPackageSign

Description: 

>Provide the Signatures that should be added to the "white" list.

###Add Packages and Allow to Submit XML
Settable if: The Operation Mode is "Single User With Whitelist"

Pivotal parm: Yes

Description: 

>Select whether or not to add Packages to the "white" list and allow them to submit XML.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Add NO Packages</td>
    <td>"0"</td>
	<td>This values does add any Package Names to the "white" list and does not explicitly allow any applications to submit XML.</td>
  </tr>
  <tr>
    <td>Add specified Package(s)</td>
    <td>"1"</td>
	<td>This value adds the specified Package Names to the "white" list and also allows the applications identified by those Package Names to submit XML.</td>
  </tr>
</table>
</div>	

####Add Package Name(s)
Settable if: The Operation Mode is "Single User With Whitelist" *AND* Add Packages and Allow to Submit XML is "Allow specified application(s)"

Pivotal parm: No

Parm name: AddPackageNamesAllowXML

Description: 

>Provide the Package Names to be added to the "white" list and that should be allowed to submit XML.

Parm value input rules: 

* String with a minimum size of 1 character
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

####Add Package Signature(s)
Settable if: The Operation Mode is "Single User With Whitelist" *AND* Add Packages and Allow to Submit XML is "Allow specified application(s)" *AND* Application Verification Signing Mode is "Do not verify app signature", "Verify user app signature", or "Verify all apps signature"

Pivotal parm: No

Parm name: AddPackageSignAllowXML

Description: 

>Provide the Signatures that should be added to the "white" list.

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
	<td>This values does make any changes and hence does not explicitly allow any applications to submit XML.</td>
  </tr>
  <tr>
    <td>Allow specified application(s)</td>
    <td>"1"</td>
	<td>This value allows the applications identified by the specified list of Package Names to submit XML.
<p>This value also allows a list of Package Names to be specified that will NOT be allowed to submit XML, thus providing an option to specify "these but not those"</p>
</td>
  </tr>
  <tr>
    <td>Allow ALL applications that are permitted to be executed</td>
    <td>"2"</td>
	<td>This value allows all applications that are on the "white" list (i.e. that are allowed to be launched) to submit XML.
<p>This value also allows a list of Package Names to be specified that will NOT be allowed to submit XML, thus providing an option to specify "all except these"</p>
</td>
  </tr>  
</table>
</div>	

### Allow Package Name(s)
Settable if: Allow the Application To Submit XML is "Allow specified application(s)"

Pivotal parm: No

Parm name: AllowSubmitXMLPackageNames

Description: 

>Provide the Package Names that should be allowed to submit XML.

Parm value input rules: 

* String with a minimum size of 0 characters
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

### Disallow Package Name(s)
Settable if: Allow the Application To Submit XML is "Allow specified application(s)" or "Allow ALL applications that are permitted to be executed"

Pivotal parm: No

Parm name: DisallowSubmitXMLPackageNames

Description: 

>Provide the Package Names that should be disallowed from submitting XML.

Parm value input rules: 

* String with a minimum size of 0 characters
* Package names must be separated by commas, such as "com.mycompany.mypackage,com.mycompany2.mypackage2" 

##Example XML

###Add an Application to the "white" list

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

