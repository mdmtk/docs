# BrowserMgr

## About BrowserMgr

### Overview

The Browser Manager feature allows your application to control the web browser on the device. For example you can set the browser homepage. 

### Main Functionality

* Set Default homepage
* Turn on Remember Password
* Turn off Remember Password
* Turn on save forum data
* Turn off save form data

## Queries

### Get All Browser Settings

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic-query type = "BrowserMgr">
       	</characteristic-query>
    </wap-provisioningdoc>


#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetDefaultHomepage" value="www.google.com"/>
            <parm name="SetRememberPasswords" value="1"/>
            <parm name="SetSaveFormData" value="1"/>
        </characteristic>
    </wap-provisioningdoc>


### Get Default Homepage Setting

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type = "BrowserMgr">
            <parm-query name="SetDefaultHomepage"/>
        </characteristic>	
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetDefaultHomepage" value="www.google.com"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Remember Password Setting

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type = "BrowserMgr">
            <parm-query name="SetRememberPasswords"/>
        </characteristic>	
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetRememberPasswords" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Save Forum Data Setting

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type = "BrowserMgr">
            <parm-query name="SetSaveFormData"/>
        </characteristic>	
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="BrowserMgr" version="4.3">
            <parm name="SetSaveFormData" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=BrowserMgr&os=JB&embed=true"></iframe> 