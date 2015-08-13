# TouchMgr

## About TouchMgr

### Overview

The TouchMgr Feature Type allows you set the Touch Mode on your device which will be used to interact with the device's user interface.

### Main Functionality

* Configure the Screen for Stylus and Finger Input
* Configure the Screen for Glove and Finger Input

##Parameter Notes
### TouchAction
Pivotal parm: No

Parm name: TouchAction

Description: 

>This parm allows you to specify Touch Mode that should be used to interact with the user interface on the device.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"Do not change"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the device's current Touch Mode settings.</td>
  </tr>
  <tr>
    <td>Stylus and Finger</td>
    <td>"Stylus and Finger"</td>
	<td>This parm will cause the Touch Mode of the device to be changed to Stylus and Finger mode.</td>
  </tr>
  <tr>
    <td>Glove and Finger</td>
    <td>"Glove and Finger"</td>
	<td>This parm will cause the Touch Mode of the device to be changed to Glove and Finger mode.</td>
  </tr>
</table>
</div>	

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=TouchMgr&os=JB&embed=true"></iframe> 
