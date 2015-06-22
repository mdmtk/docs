# XML Queries

This guide will describes how to query MX for framework and device information:

* Component Versions
* Installed CSPs
* CSP Attributes
* Grouping Queries

> Note: This version of the MDM toolkit provides limited support for query abilities. The DSDtoXML tool currently does not support generating the needed query XML. Query support will be shown under a given CSP reference within this document if the CSP supports querying it's parameters. Below are some generic queries that are available at the framework level.

## CSP Query System  

The CSP query system allows a developer to query the MX Framework for information about the device and the state of the device. CSPs can be queried based off characteristics or parameters. Each CSP may or may not support querying of individual parameters and characteristics. You will need to check the CSP reference found in this guide to see what querying capabilities it supports. 

### Parameter Query Example

Example Input: 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="SomeTopLevelCharacteristic">
             <parm-query name="SomeParm">
             </parm-query>
        </characteristic>
    </wap-provisioningdoc>

Example Output: 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="SomeTopLevelCharacteristic" version="4.2">
            <parm name="SomeParm" value="SomeValue"/>
	    </characteristic>
    </wap-provisioningdoc>

### Characteristic Query Example

Example Input: 

    :::xml
    <wap-provisioningdoc>
        <characteristic-query type="SomeTopLevelCharacteristic">
        </characteristic-query>
    </wap-provisioningdoc>

Example Output: 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="SomeTopLevelCharacteristic" version="4.2">
            ...
	    </characteristic>
    </wap-provisioningdoc>

## Getting MX Version 

The following XML block queries for MX Version information: 

    :::xml
    <wap-provisioningdoc>
	    <characteristic-query type="MX">
	    </characteristic-query>
    </wap-provisioningdoc>

Example Output: 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="MX" version="4.2">
	        <parm name="Version" value="4.2.0.3"/>
	    </characteristic>
    </wap-provisioningdoc>

## Getting Installed CSPs 

The following XML block queries MX for the list of CSPs: 

    :::xml
    <wap-provisioningdoc>
	    <characteristic-query type="CspMgr">
	    </characteristic-query>
    </wap-provisioningdoc>

Example Output: 

    :::xml
	<wap-provisioningdoc>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AccessMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.accessmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.accessmngr.MxAccessMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AppMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.appmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.appmngr.MxAppMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="CertMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxcertmanager"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxcertmanager.MxCertManagerService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Clock"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxclockcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxclockcsp.MxCSPClockService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Intent"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxintentcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxintentcsp.MxIntentCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="MX"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxversioncsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxversioncsp.MxVersionCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PersistMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxpersistcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxpersistcsp.MxPersistCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="XmlMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxxmlmgrcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxxmlmgrcsp.MxXmlMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="SettingsMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.settingsmanager"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.settingsmanager.MxSettingsMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Wi-Fi"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.wificonfigcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.wificonfigcsp.MxWifiConfigCSPService"/>
			</characteristic>
		</characteristic>	
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="DataWedge"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.datawedgecsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.datawedgecsp.MxDataWedgeCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="UsbMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxusbmgrcsp"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxusbmgrcsp.MxUsbMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="TouchMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxtouchmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxtouchmngr.MxTouchMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="WirelessMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.wirelessmgr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.wirelessmgr.MxWirelessMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">			
			<characteristic type="csp-details">
				<parm name="characteristic" value="GprsMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxgprsmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxgprsmngr.MxGPRSMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details"><parm name="characteristic" value="UiMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.uimanager"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.uimanager.MxUIManagerCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PowerMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxpowermgr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxpowermgr.MxPowerMgrCSPService"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

## Getting CSP Version

The following XML block queries for CSP Version information: 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="AppMgr">
             <parm-query name="Version">
             </parm-query>
        </characteristic>
    </wap-provisioningdoc>

Example Output: 

    :::xml
    <wap-provisioningdoc>
        <characteristic type="AppMgr" version="4.2">
            <parm name="Version" value="4.2.4"/>
	    </characteristic>
    </wap-provisioningdoc>

## Grouping Queries


XML Queries can be combined. For example we can query for MX version, and the list of CSPs:

     :::xml
     <wap-provisioningdoc>
         <characteristic-query type="MX">
         	<characteristic-query type="CspMgr">
         	</characteristic-query>"
         </characteristic-query>"
    </wap-provisioningdoc>


The output XML will then be combined:

	:::xml
    <wap-provisioningdoc>
		<characteristic type="MX" version="4.2">
			<parm name="Version" value="4.2.0.3"/>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AccessMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.accessmngr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.accessmngr.MxAccessMngrCSPService"/>
			</characteristic>
		</characteristic>
	 
		.........
	 
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="UiMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.uimanager"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.uimanager.MxUIManagerCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PowerMgr"/>
				<parm name="package" value="com.motorolasolutions.emdk.mxframework.mxpowermgr"/>
				<parm name="class" value="com.motorolasolutions.emdk.mxframework.mxpowermgr.MxPowerMgrCSPService"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>

