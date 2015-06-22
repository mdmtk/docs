# LicenseMgr

## About LicenseMgr

### Overview

The License Manager feature allows you to  TBD

### Main Functionality

* [List] TBD

## Queries

### Get Get License Manager Info

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic-query type="LicenseMgr"/>
    </wap-provisioningdoc>

#### Output

    :::XML
	<wap-provisioningdoc>
        <characteristic type="LicenseMgr" version="4.3" >
            <characteristic type=" ExistingLicense ">
                <parm name="SelectStandardFeatureName" value="featurename1"/>
                <parm name="CompanyName" value="CompanyName1"/>
                <parm name="LicenseType" value="Device_id type"/>
            </characteristic>
        </characteristic>
        <characteristic type="LicenseMgr" version="4.3" >
            <characteristic type=" ExistingLicense ">
                <parm name=" SelectStandardFeatureName " value="featurename2"/>
                <parm name="CompanyName" value="CompanyName1"/>
                <parm name="LicenseType" value="Device_id type"/>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

### Get License Info

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="LicenseMgr" version="4.3" >
            <characteristic-query type="ExistingLicense">
                 <parm name="SelectCustomFeatureName" value=" featurename1"/>
            </characteristic-query>
        </characteristic>
    </wap-provisioningdoc>


#### Output if license is Installed

    :::XML
    <wap-provisioningdoc>
        <characteristic type="LicenseMgr" version="4.3" >
            <parm name="LicenseAction" value="apply"/>
            <characteristic type=" ExistingLicense ">
                <parm name=" SelectCustomFeatureName " value="featurename1/>
                <parm name="CompanyName" value="CompanyName1/>
                <parm name="LicenseType" value="Device_id type"/>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

#### Output if license is not Installed

    :::XML
	<wap-provisioningdoc>
        <characteristic type="LicenseMgr" version="4.3" >
            <characteristic-error type="ExistingLicense" desc="Feature is not licensed"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=LicenseMgr&os=JB&embed=true"></iframe> 