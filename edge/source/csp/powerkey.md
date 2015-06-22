# PowerKeyMgr

## About PowerKeyMgr

### Overview

The PowerKey Manager feature allows your application to control which options appear on the power menu on the device.

### Main Functionality

* Show Airplane Mode Power Menu Option
* Do not show Airplane Mode Power Menu Option
* Show Touch Panel Power Menu Option
* Hide Touch Panel Power Menu Option
* Show Safe Mode Power Menu Option
* Hide Safe Mode Power Menu Option
* Enable Auto Screen Lock when Device is Powered off using the Power Key
* Disable Auto Screen Lock when Device is Powered off using the Power Key

## Queries

### Get Air Plane Mode 

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="AirPlaneMode"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="AirPlaneMode" value="1"/>
        </characteristic>
    <wap-provisioningdoc>

### Get Touch Panel

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="TouchPanel"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="TouchPanel" value="1"/>
        </characteristic>
    <wap-provisioningdoc>

### Get Safe Mode

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="SafeMode"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="SafeMode" value="1"/>
        </characteristic>
    <wap-provisioningdoc>

### Get Auto Screen Lock Option

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="AutoScreenLockOption"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="AutoScreenLockOption" value="1"/>
        </characteristic>
    <wap-provisioningdoc>

### Get Auto Screen Lock State

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="AutoScreenLockState"/>
        </characteristic>
    <wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="AutoScreenLockState" value="1"/>
        </characteristic>
    <wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=PowerKeyMgr&os=JB&embed=true"></iframe> 