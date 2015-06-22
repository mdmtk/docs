# DevAdmin

## About DevAdmin

### Overview

The Device Admin feature allows your application to manage configuration settings on the device.

### Main Functionality

* Set Screen-Lock Timeout Interval
  * Immediately after Display Timeout
  * 5 Seconds after Display Timeout
  * 15 Seconds after Display Timeout
  * 30 Seconds after Display Timeout
  * 1 Minute after Display Timeout
  * 2 Minutes after Display Timeout
  * 5 Minutes after Display Timeout
  * 10 Minutes after Display Timeout
  * 30 Minutes after Display Timeout
* Allow Application Installs from Unknown sources
* Disable the Installation of Application from Unknown sources
* Turn on Device Administrator
* Turn off Device Administrator

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