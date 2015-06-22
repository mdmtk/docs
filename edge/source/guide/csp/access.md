# AccessMgr

## About AccessMgr

### Overview

The Access Manager feature allows you to configure a set of applications that will be allowed to run and install on the device. When this feature is enabled, the device will only allow user installed applications on the Whitelist to be executed and/or installed (some applications that are part of the default operating system will still be available). To disable the Whitelist, you would select 'Single User Without Whitelist'.  

>Note:  
>It is important to include the executing EMDK application in the Whitelist otherwise your application will lose control of the Whitelist configuration and you will not be able to change the behavior.

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
* Allow all Applications that can be Executed to Submit XML

##Parameter Notes
### Operation Mode
* Single User Without Whitelist - Setting this feature will disable all Whitelist features.
* Single User With Whitelist - Setting this feature will enable the Whitelist feature based on the details provided. You can choose to add or delete packages from the current Whitelist

###System Settings Access
>Note: This setting is available when the operation mode is `Single User With Whitelist`

1. Full Access - The device's System Settings Menu will not be reduced
2. Reduced Access - The device's System Settings menu will be reduced to a pre-selected group of options (Display, Volume, About)

### Delete Packages
Options for deleting packages from the Whitelist

* Delete No Packages - Does not delete any packages
* Delete All Packages - Deletes all packages 
* Delete Specified Package - Delete specified package
	* Delete Package Name: Name of package(s) separated by a comma ex: com.mycompany.mypackage 

### Add Packages
Options for adding packages to the Whitelist

* Add No Packages - Does not add any packages
* Add Specified Package - Add specified package
	* Add Package Name: Name of package(s) separated by a comma ex: com.mycompany.mypackage 

>Note: It is important to include the executing EMDK application in the Whitelist otherwise your application will lose control of the Whitelist configuration and you will not be able to change the behavior without an enterprise reset..

### Allow Application To Submit XML
>Note: This feature is supported on devices that are running KitKat versions of Android like the TC70 and will only be used when the Whitelist feature is enabled.

You can specify and restrict specific applications the ability to submit changes to the MX Framework.

* Allow Package Names - Provide a comma separated list of package names that are allowed to submit XML to the MX framework.
* Disallow Package Names - Provide a comma separated list of package names that are not allowed to submit XML to the MX framework.

> WARNING: Be sure to always include the EMDK for Android service package name `com.symbol.emdkservice` when this feature is enabled. Otherwise Profile Features (excluding DataCapture) will not be able to be processed. 



## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=AccessMgr&os=JB&embed=true"></iframe> 

