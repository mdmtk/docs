# AppMgr

## About AppMgr

### Overview

The AppMgr feature type is used to install, upgrade, remove, enable, disable applications from the device. It also is used to change the current application launcher, clear recent app list and much more.

### Main Functionality

* Install Applications
* Uninstall Applications
* Upgrade Applications
* Set a Default Launcher
* Enable Application
* Disable Application
* Clear Recent Application List
* Add Application to Protected List
* Remove Application from Protected List
* Clear Protected List
* Enable Application Info
* Disable Application Info

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
	<td>This will not perform any Actions.</td>
  </tr>
  <tr>
    <td>Install</td>
    <td>"Install"</td>
	<td>This will install the specified application. The application must not have already been installed on the device or an error will be returned in the Result XML document. If the application was already installed on the device, the Upgrade parameter should be used instead.</td>
  </tr>
  <tr>
    <td>Uninstall</td>
    <td>"Uninstall"</td>
	<td>This will remove the specified application from the device.</td>
  </tr>
  <tr>
    <td>Upgrade</td>
    <td>"Upgrade"</td>
	<td>
	<p>This will upgrade the specified application. The application must have already been installed on the device or an error will be returned in the Result XML document. If the application was not already installed on the device, the Install parameter should be used instead.</p>
	
	<p><b>Note:</b> In Jellybean devices, this action can both upgrade and downgrade an application. However, in KitKat devices, this action can only upgrade an application.</p>
	</td>
  </tr>
  <tr>
    <td>Set as Default Launcher</td>
    <td>"SetDefaultLauncher"</td>
	<td>This will set a different application launcher to enable. The launcher application must reside on the device already.</td>
  </tr>
  <tr>
    <td>Enable Application</td>
    <td>"EnableApplication"</td>
	<td>This will enable application based on its package name.</td>
  </tr>
  <tr>
    <td>Disable Application</td>
    <td>"DisableApplication"</td>
	<td>This will disable an application based on its package name. Disabling an application will disable the ability to launch the application.</td>
  </tr>
  <tr>
    <td>Clear Recent Apps List</td>
    <td>"ClearRecentApps"</td>
	<td>This will clear the list of recent apps that have been opened. When the menu button on the device is long pressed, a list of the recently opened applications will appear. After running an application using this feature, it will clear the device's recent application list, including itself.</td>
  </tr>
</table>
</div>	

####APK Path and Name
Settable if: The Action is "Install" or "Upgrade"

Pivotal parm: No

Parm name: APK

Description: 

>Provide the path and name of the Android application APK file within the device file system that will be installed or upgraded.

Parm value input rules: 

* String containing the full path and name of an APK that resides on the device. For example, '/storage/sdcard1/Herald.apk'.
* The minimum length is 1 character and the maximum length is 255 characters

####Package Name
Settable if: The Action is "Uninstall", "Set as Default Launcher", "Enable Application", or "Disable Application"

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

>This contains options for managing which applications are on the protected list. Applications on the protected list will not be force closed when the device is setup to run in multi-user mode and the current user logs off. Applications on the protected list are permitted to run across users.

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
	<td>This will not perform any Protected List Actions.</td>
  </tr>
  <tr>
    <td>Add Application to Protected List</td>
    <td>"AddAppToProtectedList"</td>
	<td>This will add an application to the protected list based on its package name.</td>
  </tr>
  <tr>
    <td>Remove Application from Protected List</td>
    <td>"RemoveAppFromProtectedList"</td>
	<td>This will remove an application from the protected list based on its package name.</td>
  </tr>
  <tr>
    <td>Remove All Application from Protected List</td>
    <td>"ClearProtectedList"</td>
	<td>Removes all applications from the protected list.</td>
  </tr>
</table>
</div>	

####Package Name
Settable if: The Protected List Action is "Add Application to Protected List" or "Remove Application from Protected List"

Pivotal parm: No

Parm name: ProtectedListPackage

Description: 

>Provide the Android Package Name of the application that should be added or removed from the protected list

Parm value input rules: 

* String containing the valid name of the package. For example, 'com.mycompany.mypackage'.
* The minimum length is 1 character and the maximum length is 255 characters
* The package names must be separated by commas

### Access to App Info Action

Pivotal parm: No

Parm name: AccessAppInfoAction

Description: 

>This will enable or disable the ability to access the application information dialog for all applications. Access to this dialog could be disabled for security reasons, such as preventing the user from changing settings, or to replace the dialog with another application.

This affects access to the application information dialog in the Settings application, in the "Manage Apps" option in the menu when the device's menu button is pressed, and when long pressing on an application that is in the notification area. The application information dialog shows detailed information about the application as well as allow the user to perform actions like: Force Stop, Enable/Disable, Clear Data, Clear Cache. This setting effects all applications.

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