# CameraMgr

## About CameraMgr

### Overview

The CameraMgr Feature Type allows your application to control access to the cameras in the device. For example you can disable the user from using all cameras on the device. 

### Main Functionality

* Enable the use of all Cameras
* Disable the use of all Cameras
* Enable the use of the Front Facing Camera
* Disable the use of the Front Facing Camera
* Enable the use of the Rear Facing Camera
* Disable the use of the Rear Facing Camera

##Parameter Notes
###All Cameras
Pivotal parm: Yes

Parm name: UseAllCameras

Description: 

>This parm will enable or disable use of all of the cameras that are on the device, which may affect cameras that are not explicitly listed. In other words, this will globally allow or disallow all camera support.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Control Individual Cameras</td>
    <td>""</td>
	<td>This value indicates that the cameras will be enabled or disabled individually.</td>
  </tr>
  <tr>
    <td>Enable ALL Cameras</td>
    <td>"1"</td>
	<td>This parm indicates that all of the cameras that are on the device will be enabled.</td>
  </tr>
  <tr>
    <td>Disable ALL Cameras</td>
    <td>"2"</td>
	<td>This parm indicates that all of the cameras that are on the device will be disabled.</td>
  </tr>
</table>
</div>	

###Front Camera
Settable if: The "All Cameras" parm is set to "Control Individual Cameras"

Pivotal parm: No

Parm name: UseFrontCamera

Description: 

>This parm will enable or disable the use of the device's front facing camera, which means that the user will be allowed or disallowed from using this camera.

>If the device does not have a front facing camera, then an error will be returned in the Result XML document.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This parm will make no changes to the current state of the device's front facing camera.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This parm will enable the use of the device's front facing camera.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This parm will disable the use of the device's front facing camera.</td>
  </tr>
</table>
</div>	

###Rear Camera
Settable if: The "All Cameras" parm is set to "Control Individual Cameras"

Pivotal parm: No

Parm name: UseRearCamera

Description: 

>This parm will enable or disable the use of the device's rear facing camera, which means that the user will be allowed or disallowed from using this camera.

>If the device does not have a rear facing camera, then an error will be returned in the Result XML document.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>""</td>
	<td>This parm will make no changes to the current state of the device's rear facing camera.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This parm will enable the use of the device's rear facing camera.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This parm will disable the use of the device's rear facing camera.</td>
  </tr>
</table>
</div>	

##Example XML

###Enable the Front Facing Camera

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseFrontCamera" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable the Rear Facing Camera

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseRearCamera" value="2"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable the Front Facing Camera and Enable the Rear Facing Camera

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseFrontCamera" value="2"/>
			<parm name="UseRearCamera" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Enable All Cameras

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseAllCameras" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable All Cameras

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseAllCameras" value="2"/>
		</characteristic>
	</wap-provisioningdoc>


## Queries

### Get Use All Cameras

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" >
            <parm-query name="UseAllCameras"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" version="4.3" >
            <parm name="UseAllCameras" value="1"/>
        </characteristic>
    </wap-provisioningdoc>
	
### Get Use Front Camera

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" >
            <parm-query name="UseFrontCamera"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" version="4.3" >
            <parm name="UseFrontCamera" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Use Rear Camera

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" >
            <parm-query name="UseRearCamera"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" version="4.3" >
            <parm name="UseRearCamera" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=CameraMgr&os=JB&embed=true"></iframe> 
