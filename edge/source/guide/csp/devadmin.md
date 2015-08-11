# DevAdmin

## About DevAdmin

### Overview

The DevAdmin Feature Type allows your application to manage configuration settings on the device.

### Main Functionality

* Set Screen-Lock Timeout Interval
* Allow or Disallow Applications to be Installed from Unknown sources
* Turn Device Administrator On or Off

##Parameter Notes
###Screen-Lock Timeout Interval
Pivotal parm: No

Parm name: ScreenLockTimeoutInterval

Description: 

>This parm will allow your application set the amount of time that a device can be idle before the screen is locked. This refers to the time interval from the point that the display of the device is turned off to the point that the screen of the device is locked and would need to be unlocked when the display is turned back on.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to the amount of time that a device can be idle before the screen is locked.</td>
  </tr>
  <tr>
    <td>Immediately after Display Timeout</td>
    <td>"1"</td>
	<td>This value will cause the screen to be locked immediately after the screen turns off due to the display timing out.</td>
  </tr>
  <tr>
    <td>5 seconds after Display Timeout</td>
    <td>"5"</td>
	<td>This value will cause the screen to be locked 5 seconds after the screen turns off due to the display timing out.</td>
  </tr>
  <tr>
    <td>15 seconds after Display Timeout</td>
    <td>"15"</td>
	<td>This value will cause the screen to be locked 15 seconds after the screen turns off due to the display timing out.</td>
  </tr>
  <tr>
    <td>30 seconds after Display Timeout</td>
    <td>"30"</td>
	<td>This value will cause the screen to be locked 30 seconds after the screen turns off due to the display timing out.</td>
  </tr>
  <tr>
    <td>1 minute after Display Timeout</td>
    <td>"60"</td>
	<td>This value will cause the screen to be locked 1 minute after the screen turns off due to the display timing out.</td>
  </tr>
  <tr>
    <td>2 minutes after Display Timeout</td>
    <td>"120"</td>
	<td>This value will cause the screen to be locked 2 minutes after the screen turns off due to the display timing out.</td>
  </tr>
  <tr>
    <td>5 minutes after Display Timeout</td>
    <td>"300"</td>
	<td>This value will cause the screen to be locked 5 minutes after the screen turns off due to the display timing out.</td>
  </tr>
  <tr>
    <td>10 minutes after Display Timeout</td>
    <td>"600"</td>
	<td>This value will cause the screen to be locked 10 minutes after the screen turns off due to the display timing out.</td>
  </tr>
  <tr>
    <td>30 minutes after Display Timeout</td>
    <td>"1800"</td>
	<td>This value will cause the screen to be locked 30 minutes after the screen turns off due to the display timing out.</td>
  </tr>
</table>
</div>	

###Install App from Unknown Sources
Pivotal parm: No

Parm name: UnknownSourcesStatus

Description: 

>This parm will allow or disallow an application to be installed on the device if it is from an unknown source. Installation methods that are considered to be unknown sources include:

> * Install from ADB
> * Download and install from locations other than Google play
> * Receive and install from email
> * Install via APIs
> * Install via File Browser, for packages that are obtained in various ways, e.g. from SD card, from USB (UMS, ADB, or others) or any other wired data connection, etc.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to whether or not applications from unknown sources are allowed to be installed on the device.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will turn Unknown Sources on, which will allow applications from unknown sources to be installed on the device.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will turn Unknown Sources off, which will disallow applications from unknown sources to be installed on the device.</td>
  </tr>
</table>
</div>	

###Device Administration Action
Pivotal parm: No

Parm name: DevAdminAction

Description: 

>This parm will be used to set the state of the Device Administrator feature. An Android application that uses the Android Device Admin API's must also be added to the Device Admin list on a device. The DevAdmin Feature Type also allows an application to be added or removed from the Device Admin list. The package name and specific class of the application to be added as a Device Admin must be provided.

> **Note:** The state of being a device admin or not for an application does not restrict an application from being installed or launched.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether Device Administrator is On or Off.</td>
  </tr>
  <tr>
    <td>Turn On as Device Administrator</td>
    <td>"1"</td>
	<td>This value will turn On Device Administrator.</td>
  </tr>
  <tr>
    <td>Turn Off as Device Administrator</td>
    <td>"2"</td>
	<td>This value will turn Off Device Administrator.</td>
  </tr>
</table>
</div>	

####Device Administrator Package Name
Settable if: Device Administration Action is "Turn On as Device Administrator" or "Turn Off as Device Administrator"

Pivotal parm: No

Parm name: DevAdminPkg

Description: 

>This parm allows you to specify the Package Name that will be added to or removed from the Device Admin list, which will allow or disallow the application from using the Android Device Admin API's.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Device Administrator Class Name
Settable if: Device Administration Action is "Turn On as Device Administrator" or "Turn Off as Device Administrator"

Pivotal parm: No

Parm name: DevAdminClass

Description: 

>This parm allows you to specify the Class Name that will be added to or removed from the Device Admin list, which will allow or disallow the application from using the Android Device Admin API's.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

##Example XML

###Set the Screen to Lock to 1 Minute After the Display Times Out

	:::XML
	<wap-provisioningdoc>
		<characteristic type="DevAdmin" version="4.3" >
			<parm name="ScreenLockTimeoutInterval" value="60"/>
		</characteristic>
	</wap-provisioningdoc>
	
###Allow Application Installs from Unknown Sources

	:::XML
	<wap-provisioningdoc>
		<characteristic type="DevAdmin" version="4.3" >
			<parm name="UnknownSourcesStatus" value="1"/>
		</characteristic>
	</wap-provisioningdoc>



## Queries

### Get Apps that are Active Device Admins

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin" version="4.3" >
	        <characteristic-query type="AppAsDevAdmin"/>
        </characteristic>
    </wap-provisioningdoc>


#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin" version="4.3" >
            <characteristic type="AppAsDevAdmin">
                <parm name="DevAdminAction" value="1"/>
                <characteristic type="DevAdminDetails">
                    <parm name="DevAdminPkg" value="PackageName1"/>
                    <parm name="DevAdminClass" value="ClassName1"/>
                </characteristic>
            </characteristic>
        </characteristic>
        <characteristic type="DevAdmin" version="4.3" >
            <characteristic type="AppAsDevAdmin">
                <parm name="DevAdminAction" value="1"/>
                <characteristic type="DevAdminDetails">
                    <parm name="DevAdminPkg" value="PackageName2"/>
                    <parm name="DevAdminClass" value="ClassName2"/>
                </characteristic>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>


### Get Screen Lock Timeout Interval

#### Input

	:::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin">
            <parm-query name="ScreenLockTimeoutInterval"/>
        </characteristic>
    </wap-provisioningdoc>


#### Output 

	:::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin" version="4.3">
            <parm name="ScreenLockTimeoutInterval" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Install Apps from Unknown Sources Status

#### Input

	:::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin">
            <parm-query name="UnknownSourcesStatus"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

	:::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin" version="4.3">
            <parm name="UnknownSourcesStatus" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=DevAdmin&os=JB&embed=true"></iframe> 