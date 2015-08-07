# DisplayMgr

## About DisplayMgr

### Overview

The DisplayMgr Feature Type allows your application to control the screen timeout value to conserve power.

### Main Functionality

* Set the Screen Timeout Interval
 
##Parameter Notes
###Set the Screen Off Timeout Interval
Pivotal parm: No

Parm name: TimeoutInterval

Description: 

>This parm will allow you to set the timeout interval for the device's screen, which specifies the time interval from the last user activity to the point that the display of the device turns off. Setting this interval to a lower amount of time will help to conserve power on the device.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to the current timeout interval.</td>
  </tr>
  <tr>
    <td>15 seconds</td>
    <td>"15"</td>
	<td>This value will cause the screen to timeout after 15 seconds of no user interaction.</td>
  </tr>
  <tr>
    <td>30 seconds</td>
    <td>"30"</td>
	<td>This value will cause the screen to timeout after 30 seconds of no user interaction.</td>
  </tr>
  <tr>
    <td>1 minute</td>
    <td>"60"</td>
	<td>This value will cause the screen to timeout after 1 minute of no user interaction.</td>
  </tr>
  <tr>
    <td>2 minutes</td>
    <td>"120"</td>
	<td>This value will cause the screen to timeout after 2 minutes of no user interaction.</td>
  </tr>
  <tr>
    <td>5 minutes</td>
    <td>"300"</td>
	<td>This value will cause the screen to timeout after 5 minutes of no user interaction.</td>
  </tr>
  <tr>
    <td>10 minutes</td>
    <td>"600"</td>
	<td>This value will cause the screen to timeout after 10 minutes of no user interaction.</td>
  </tr>
  <tr>
    <td>30 minutes</td>
    <td>"1800"</td>
	<td>This value will cause the screen to timeout after 30 minutes of no user interaction.</td>
  </tr>
</table>
</div>

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