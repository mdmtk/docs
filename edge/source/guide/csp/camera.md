# CameraMgr

## About CameraMgr

### Overview

The Camera Manager feature allows your application to control access to the cameras in the device. For example you can disable the user from using all cameras on the device. 

### Main Functionality

* Enable the use of all Cameras
* Disable the use of all Cameras
* Enable the use of the Front Camera
* Disable the use of the Front Camera
* Enable the use of the Rear Camera
* Disable the use of the Rear Camera

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
