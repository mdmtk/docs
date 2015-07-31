# AppMgr

## About AppMgr

### Overview

The AppMgr Feature Type allows you manage the set of user applications that are installed on the device. On consumer Android devices, application management requires a device user to interact with UI presented on the device.In scenarios where a device is being managed by an MDM, it is often important for the MDM to tightly control which user applications are installed, without the need to involve a device user and without the consent or approval of a device user. The primary purpose of the AppMgr Feature Type is to manage user applications programmatically and silently. This enables an MDM to take full control of the set of user applications that are installed on the device.

The AppMgr Feature Type allows you to Install, Uninstall, Upgrade, and Turn On and Off launching of applications.  It also allows you to designate an application as the Default Launcher, which is the application that is invoked when the device user presses the HOME Key, and perform other tasks related to the management of applications.

When considering the capabilities of the AppMgr Feature Type, it is important to understand that applications can be divided into two classes: System applications and User applications. System applications are those applications that are built-into the device and hence are always installed. User applications are those applications that are not built-into the device and hence must be installed onto a device before they can be used. Some functions of the AppMgr Feature Type apply only to System applications, some apply only to User applications, and some apply to both. Each function will identify the classes of applications to which it applies.

### Main Functionality

* Install, Uninstall, and Upgrade User applications (with no device user involvement)
* Set an application to be the Default Launcher
* Turn On and Off Launching of an application (Blacklisting)
* Clear the Recent Application List
* Enable and Disable Access to Application Info

##Parameter Notes
### Action
Pivotal parm: Yes

Description: 

>Specify the application action to perform.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>""</td>
	<td>This value will not make any change to the applications on the device.</td>
  </tr>
  <tr>
    <td>Install</td>
    <td>"Install"</td>
	<td>This value will cause a User application contained within an APK file in the specified path on the device to be Installed on the device. If an application with the same Package Name is already installed on the device, then an error will be returned in the Result XML document. To replace an application that is already installed on the device with a different version with the same Package Name, use the value "Upgrade" instead.</td>
  </tr>
  <tr>
    <td>Uninstall</td>
    <td>"Uninstall"</td>
	<td><p>This value will cause a User application with the specified Package Name to be Uninstalled from the device. If no User application with the specified Package Name is installed on the device then an error will be returned in the Result XML document.</p>
	
	<p><b>Note:</b> When an application is Uninstalled, data that is stored in sandbox areas owned by that application will be automatically removed.  If the application is later Installed again, it will need to recreate such data.</p>
	</td>	
  </tr>
  <tr>
    <td>Upgrade</td>
    <td>"Upgrade"</td>
	<td>
	<p>This value will cause a User application contained within an APK file in the specified path on the device to Upgrade another version of the application with the same Package Name that is already on the device. If no application with same Package Name is installed on the device then an error will be returned in the Result XML document. To install an application that is not already installed on the device, use the value "Install" instead.</p>
	
	<p><b>Note:</b> When an application is upgraded, the data for that application is maintained.  This allows the new version of the application to access (and possibly convert) data created by the old version.</p>

	<p><b>Note:</b>  In devices running the Jelly Bean version of Android, an Upgrade can replace any version of an application with any other version of the same application. However, in devices running the KitKat or higher version of Android, an Upgrade can only replace an application with a higher (numerically greater) version of the same application. This change was made to reduce issues where an older version of an application maybe unable to understand data produced by a newer version.</p>
	</td>
  </tr>
  <tr>
    <td>Set as Default Launcher</td>
    <td>"SetDefaultLauncher"</td>
	<td>This value will cause the application with the specified Package Name to be made the new Default Launcher. The specified application must already be installed on the device and generally should be designed to be a Launcher, per relevant Android documentation. If no application with the specified Package Name is installed on the device then an error will be returned in the Result XML document.</td>
  </tr>
  <tr>
    <td>Enable Application</td>
    <td>"EnableApplication"</td>
	<td>This value will cause the System application with the specified Package Name to be Enabled, and therefore will allow it to be launched. If no System application with the specified Package Name is built-into the device then an error will be returned in the Result XML document.</td>
  </tr>
  <tr>
    <td>Disable Application</td>
    <td>"DisableApplication"</td>
	<td>This value will cause the System application with the specified Package Name to be Disabled, and therefore will prevent it from being launched. If no System application with the specified Package Name is built-into the device then an error will be returned in the Result XML document.</td>
  </tr>
  <tr>
    <td>Clear Recent Apps List</td>
    <td>"ClearRecentApps"</td>
	<td>This value will cause the Android Recent Applications List, which allows a user to see and launch apps that have recently been used, to be cleared.</td>
  </tr>
</table>
</div>	

####APK Path and Name
Settable if: The Action is "Install" or "Upgrade"

Pivotal parm: No

Parm name: APK

Description: 

>Provide the path and name of the Android application APK file within the device file system that will be installed or upgraded.

>**Note:** An APK file can only be used to Install a User application because any application being installed from an APK file is not built-into the device and is therefore, by definition, a User Application. But an APK could be used to Upgrade either a System application or a User application. In order for any Upgrade to work, the APK file must be signed with the same developer certificate as the application it is trying to replace. If the APK file is not signed with the same developer certificate then an error will be returned in the Result XML document. This means that a System application can only be replaced using an APK file produced by the same developer that produced the built-in System application. If a System application is successfully Upgraded using an APK, the new version of the application is granted the same permissions as the version that was replaced. This allows the new version of the application to successfully perform the same operations as the original System application even though it is actually a User application. Since the new version is not built-into the device the device will revert to the old built-in version of the application whenever data is cleared.

Parm value input rules: 

* String containing the full path and name of an APK that resides on the device. For example, '/storage/sdcard1/Herald.apk'.
* The minimum length is 1 character and the maximum length is 255 characters

####Package Name
Settable if: The Action is "Uninstall", "Set as Default Launcher", "Enable Application", or "Disable Application"

**Note:** To perform the above listed Actions on an application, the Package Name of that application must be known and specified. The Package Name can be acquired from the application developer, by looking up the Package Name on a device, or using developer tools to extract the Package Name from the APK file.

Pivotal parm: No

Parm name: Package

Description: 

>Provide the Android Package Name of the application for the application action.

Parm value input rules: 

* String containing the valid name of the package. For example, 'com.mycompany.mypackage'.
* The minimum length is 1 character and the maximum length is 255 characters
* The package names must be separated by commas

### Protected List Action
Pivotal parm: Yes

Description: 

>The Protected List is a feature that allows certain applications to be exempted from certain constraints that are imposed on applications when Multi-User Mode is enabled. In particular, applications whose Package Names are on the Protected List will:

> * Will be allowed to launch when no device user is logged in
> * Will not be terminated when a device user logs out

> **Note:** Multi-User Mode is supported on all Zebra Android devices that support Zebra MX functionality, but the AccessMgr Feature Type currently does not support enabling Multi-User Mode. Multi-User Mode can be enabled on devices that support it, but only using unsupported tools or mechanisms that do not scale to large deployments.  For this reason, the ability to use the AppMgr Feature Type to manage the Protected List may provide little or no immediate benefit. In the future, when the AccessMgr Feature Type is enhanced to support enabling Multi-User Mode, the ability to use the AppMgr Feature Type to manage the Protected List will likely be more meaningful.

>The AppMgr Feature Type allows you to manage the Package Names of applications that are on the Protected List.
Applications on the protected list will not be force closed when the device is setup to run in multi-user mode and the current user logs off. Applications on the protected list are permitted to run across users.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>""</td>
	<td>This value will not cause any changes to the Protected List.</td>
  </tr>
  <tr>
    <td>Add Application to Protected List</td>
    <td>"AddAppToProtectedList"</td>
	<td>This value will cause the Package Name of an application to be Added to the Protected List.</td>
  </tr>
  <tr>
    <td>Remove Application from Protected List</td>
    <td>"RemoveAppFromProtectedList"</td>
	<td>This value will cause the Package Name of an application to be Removed from the Protected List.</td>
  </tr>
  <tr>
    <td>Remove All Application from Protected List</td>
    <td>"ClearProtectedList"</td>
	<td>This value will cause all Package Names to be Removed from the Protected List.</td>
  </tr>
</table>
</div>	

####Package Name
Settable if: The Protected List Action is "Add Application to Protected List" or "Remove Application from Protected List"

Pivotal parm: No

Parm name: ProtectedListPackage

Description: 

>Provide the Android Package Name of the application that should be added or removed from the protected list.

Parm value input rules: 

* String containing the valid name of the package. For example, 'com.mycompany.mypackage'.
* The minimum length is 1 character and the maximum length is 255 characters
* The package names must be separated by commas

### Access to App Info Action

Pivotal parm: No

Parm name: AccessAppInfoAction

Description: 

>This will enable or disable the ability to access the application information dialog for all applications. Access to this dialog could be disabled for security reasons, such as preventing the user from changing settings, or to replace the dialog with another application.

>This affects access to the application information dialog in the Settings application, in the "Manage Apps" option in the menu when the device's menu button is pressed, and when long pressing on an application that is in the notification area. The application information dialog shows detailed information about the application as well as allow the user to perform actions like: Force Stop, Enable/Disable, Clear Data, Clear Cache. This setting effects all applications.

> **Note:** This feature is supported on devices that are running KitKat versions of Android like the TC70.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>""</td>
	<td>This will not change what the device is currently configured as.</td>
  </tr>
  <tr>
    <td>Enable Access to App Info for all applications</td>
    <td>"EnableAccessAllInfo"</td>
	<td>Allow access to the application information dialog.</td>
  </tr>
  <tr>
    <td>Disable Access to App Info for all applications</td>
    <td>"DisableAccessAllInfo"</td>
	<td>Disallow access to the application information dialog.</td>
  </tr>
</table>
</div>	


## Example XML
###Install An Application
	:::xml
	<!-- Silently install Clock.apk from the /enterprise/usr/persist folder -->
	<characteristic type="AppMgr">
		<parm name="apk" value="/enterprise/usr/persist/Clock.apk" />
		<parm name="Action" value="install" />
	</characteristic>

###Upgrade An Application
	:::xml
	<!-- Silently upgrade Clock.apk from the /enterprise/usr/persist folder -->
	<wap-provisioningdoc>
		<characteristic type="AppMgr" version="4.2" >
			<parm name="Action" value="Upgrade"/>
			<parm name="APK" value="/enterprise/usr/persist/Clock.apk"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable An Application
	:::XML
	<wap-provisioningdoc>
		<characteristic version="4.2" type="AppMgr">
			<parm name="Action" value="DisableApplication" />
			<parm name="Package" value="com.mypackagename" />
		</characteristic>
	</wap-provisioningdoc>

###Uninstall An Application
	:::XML
	<wap-provisioningdoc>
		<characteristic version="4.2" type="AppMgr">
			<parm name="Action" value="Uninstall" />
			<parm name="Package" value="com.packagename" />
		</characteristic>
	</wap-provisioningdoc>

###Start An Application After Installing it
	:::XML
	<wap-provisioningdoc>
		<characteristic version="4.2" type="AppMgr">
			<parm name="Action" value="Install" />
			<parm name="APK" value="/sdcard/myapp.apk" />
		</characteristic>
		<characteristic version="4.3" type="Intent">
			<parm name="Action" value="StartActivity" />
			<parm name="ActionName" value="android.intent.action.MAIN" />
			<parm name="Package" value="com.mypackage" />
			<parm name="Class" value="com.mypackage.myactivity" />
		</characteristic>
	</wap-provisioningdoc>

	
## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=AppMgr&os=JB&embed=true"></iframe> 