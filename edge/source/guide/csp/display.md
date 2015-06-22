# DisplayMgr

## About DisplayMgr

### Overview

The Display Manager feature allows your application to control the screen timeout value to conserve power.

### Main Functionality

* Set the Screen Timeout Interval
 * 15 Seconds 
 * 30 Seconds
 * 1 Minute
 * 2 Minutes
 * 5 Minutes
 * 10 Minutes
 * 30 Minutes

##Example XML
### Set Backlight Timeout

    :::XML
    <wap-provisioningdoc>
        <characteristic type="DisplayMgr" version="4.3" >
            <parm name="TimeoutInterval" value="15"/>
        </characteristic>
    </wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=DisplayMgr&os=JB&embed=true"></iframe> 