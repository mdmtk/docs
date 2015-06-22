# ThreatMgr

## About ThreatMgr

### Overview

The Threat Manager feature allows your application to control what security threats a device actively monitors for and how to respond.


### Main Functionality

* Enable Threat Detection
* Disable Threat Detection
* Detectable threats:
  * Max Password Attempts
  * MDM Client Removal
  * Externally Detected 
  * Exchange Active Sync Command
  * Device is Rooted
* Counter Measures:
  *  Format SdCard
  *  Factory Reset
  *  Wipe Secure Storage Keys
  *  Lock Device
  *  Uninstall Application 
  *  Unsolicited Alert
  *  Signal Occurrence of Threat

## Queries

### Get all Threat / Countermeasure Configurations

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic-query type="ThreatMgr"/>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="ThreatMgr" version="4.3">
            <parm name="ThreatAction" value="1" />
            <parm name="ThreatName" value=" MaxPasswordAttempts" /> 
            <characteristic type="CounterMeasure">
                <parm name="FormatSdcard" value="1" /> 
                <parm name="FactoryReset" value="1" /> 
                <parm name="WipeSecureStorageKeys" value="1" /> 
                <parm name="PasswordResetAllUsers" value="1" /> 
                <parm name="AllUsersPassword" value="PASSWORDALL" /> 
                <parm name="PasswordResetUser" value="1" /> 
                <parm name="SpecificUserName" value="UserName1, UserName2" /> 
                <parm name="SpecificUserPassword" value="Password1, Password2" /> 
                <parm name="LockDevice" value="1" /> 
                <parm name="UninstallApplication" value="1" /> 
                <parm name="UninstallPackage" value="PackageName" /> 
                <parm name="UnsolicitedAlert" value="1" /> 
                <parm name="AlertPackage" value="PackageName" /> 
                <parm name="AlertClass" value="ClassName" /> 
                <parm name="AlertMsg" value="Message" />  
            </characteristic>
        </characteristic>
        <characteristic type="ThreatMgr" version="4.3">
            <parm name="ThreatAction" value="1" /> 
            <parm name="ThreatName" value="Externally Detected" /> 
            <characteristic type="CounterMeasure">
                <parm name="FormatSdcard" value="1" /> 
                <parm name="FactoryReset" value="1" /> 
                <parm name="WipeSecureStorageKeys" value="1" /> 
                <parm name="LockDevice" value="1" /> 
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>


### Get Configurations for a Specific Threat

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="ThreatMgr" version="4.3">
            <parm name="ThreatName" value=" MaxPasswordAttempts" /> 
            <characteristic-query type="CounterMeasure"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="ThreatMgr" version="4.3">
            <parm name="ThreatAction" value="1" /> 
            <parm name="ThreatName" value=" MaxPasswordAttempts" /> 
            <characteristic type="CounterMeasure">
                <parm name="FormatSdcard" value="1" /> 
                <parm name="FactoryReset" value="1" /> 
                <parm name="WipeSecureStorageKeys" value="1" /> 
                <parm name="PasswordResetAllUsers" value="1" /> 
                <parm name="AllUsersPassword" value="PASSWORDALL" /> 
                <parm name="PasswordResetUser" value="1" /> 
                <parm name="SpecificUserName" value="UserName1, UserName2" /> 
                <parm name="SpecificUserPassword" value="Password1, Password2" /> 
                <parm name="LockDevice" value="1" /> 
                <parm name="UninstallApplication" value="1" /> 
                <parm name="UninstallPackage" value="PackageName" /> 
                <parm name="UnsolicitedAlert" value="1" /> 
                <parm name="AlertPackage" value="PackageName" /> 
                <parm name="AlertClass" value="ClassName" /> 
                <parm name="AlertMsg" value="Message" />  
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=ThreatMgr&os=JB&embed=true"></iframe> 

