# SettingsMgr

## About Settings SettingsMgr

### Overview

Settings Manager feature allows you to manage settings UI configuration by providing the ability to invoke Enterprise Reset in Settings UI of your device.

### Main Functionality

* Enable the Ability to Perform an Enterprise Reset from the Settings Menu
* Disable the Ability to Perform an Enterprise Reset from the Settings Menu
* Enable the Ability to turn Wi-Fi on or off from the Settings Menu
* Disable the Ability to turn Wi-Fi on or off from the Settings Menu
* Enable the Ability to turn Install Apps from Unknown Sources on or off from the Settings Menu
* Disable the Ability to turn Install Apps from Unknown Sources on or off from the Settings Menu
* Enable the Ability to to turn Airplane Mode on or off from the Settings Menu
* Disable the Ability to to turn Airplane Mode on or off from the Settings Menu

##Parameter Notes
### Ability to invoke Enterprise Reset in Settings UI
Specify whether ability to invoke Enterprise Reset in Settings UI will be allowed on your device.

* Do not change
* Enable
* Disable


## Queries

### Get is Invoke Enterprise Reset Available

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="InvokeEnterpriseReset"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="InvokeEnterpriseReset" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get is Wifi Settings UI Available

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="WifiSettingsUI"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="WifiSettingsUI" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get is Unknown Sources Available 

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="UnknownSources"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="UnknownSources" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get is Airplane Mode Available 

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="AirplaneMode"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="AirplaneMode" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=SettingsMgr&os=JB&embed=true"></iframe> 