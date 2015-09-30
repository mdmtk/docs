# XML Queries

This guide will describe how to query MXMS for framework and device information:

* Component Versions
* Installed CSPs
* CSP Attributes
* Grouping Queries

## CSP Query System  

The CSP query system allows a developer to query the MXMS for information about the device and the state of the device. CSPs can be queried based off characteristics or parameters. Each CSP may or may not support querying of individual parameters and characteristics. You will need to check the CSP reference found in this guide to see what querying capabilities it supports. 

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

## Querying the MXMS

Submitting queries to MX follows a similar process to submitting XML that is meant to set the device or perform an action. The SimpleMdmToolKitQuery project, which is supplied in the MDM Toolkit, contains an example of how to submit queries to MX. 

1. This example calls the queryMX method from the onServiceConnected instead of the utilizeMXMS method which was used in the previous example.

		:::java
		// This definition is mandatory to track binding to the MXMS
		private ServiceConnection mMxFrameworkServiceConnection = new ServiceConnection()
		{
			// Callback to notify when binding to the MXMS has completed
			public void onServiceConnected(ComponentName className,IBinder service)
			{
				// Pass the binding notification on so the helper class can know the service was bound
				SymbolBrand.MXMS.onServiceConnected(className,service);

				// For the purposes of this test application, we call this from here because this is the FIRST time it can be done
				// In a real world situation, it might be called repeatedly from other locations, as things that need to be done are identified
				queryMX();

				// Call term 
				SymbolBrand.MXMS.term(m_activity,mMxFrameworkServiceConnection);
				
				// Exit the application
				m_activity.finish();	    		
			}
			
			// Callback to notify when unbinding from the MXMS has occurred
			public void onServiceDisconnected(ComponentName className)
			{
				// Pass the unbinding notification on so the helper class can know the service was unbound
				SymbolBrand.MXMS.onServiceDisconnected(className);
			}
		};  

2. In the queryMX method, if isReady returns true, the mx.in3.xml is then retrieved from the Assets folder, which will be used as the Request XML document. This XML file contains:

		:::xml
		<wap-provisioningdoc>
			<characteristic-query type="MX"/>
		</wap-provisioningdoc>
		
3. The Request XML document is used by the SymbolBrand class's submitXml method, which will submit this XML to the MXMS. This XML will then be sent to the MX Feature Type, which will return the version number of MXMS.

5. The MXMS will return a Result XML document which is then used by the XmlParser's fetchParm method to retreive and output the value of the "MXMFVersion" and "Version" parms.

6. This sample project also shows similar code which would let you query the CspMgr Feature Type, which would return an enumerated list of the available Feature Types. There are also examples on how to use the other XMLs in the project's Assets folder to query other Feature Types, such as the CameraMgr, DisplayMgr, DevAdmin, DhcpOptionMgr, and EncryptMgr, to receive back information about the current settings of the device. 

		:::java
		// Function to query MX version(s)
		private void queryMX()
		{
			// Check to see if the MXMS is successfully bound and ready to accept XML
			// Note: Once the binding complete notification (previous code) is passed on, this function will return true
			//       Depending on where this code is called from, this check may or may not be required, but never hurts.
			if ( SymbolBrand.MXMS.isReady() )
			{
				Log.d(m_activity.getApplicationInfo().name,"MXMS.isReady");

				// Extract an XML snippet from the application assets
				//String inXml = XmlParser.getAssetXml(m_activity,"mx.in1.xml");
				//String inXml = XmlParser.getAssetXml(m_activity,"mx.in2.xml");
				String inXml = XmlParser.getAssetXml(m_activity,"mx.in3.xml");
				
				// If the XML was successfully obtained
				if ( inXml != null )
				{
					Log.d(m_activity.getApplicationInfo().name,"inXml = "+inXml);

					// Submit the XML to the MXMS for processing
					// Note: This will FAIL unless SymbolBrand.MXMS.isReady(), indicating that the binding to the MXMS has completed successfully
					String outXml = SymbolBrand.MXMS.submitXml(inXml);

					// If we got back result XML
					// Note: A null result XML is what happens when the binding to the MXMS has NOT completed successfully
					if ( outXml != null )
					{
						Log.d(m_activity.getApplicationInfo().name,"outXml = "+outXml);

						String queryVersion = XmlParser.fetchParm(outXml,new ParmSelector("","MXMFVersion"));

						if (queryVersion != null )
						{
							Log.i(m_activity.getApplicationInfo().name,"MXMF version = " + queryVersion);
						}
						else
						{
							Log.d(m_activity.getApplicationInfo().name,"MX query returned no MXMF version");
						}

						queryVersion = XmlParser.fetchParm(outXml,new ParmSelector("","Version"));

						if (queryVersion != null )
						{
							Log.i(m_activity.getApplicationInfo().name,"Version = " + queryVersion);
						}
						else
						{
							Log.d(m_activity.getApplicationInfo().name,"MX query returned no version");
						}
					}
					else
					{
						Log.d(m_activity.getApplicationInfo().name,"MX query returned no results");
					}
				}
			}
		}
		
##Query Examples

### Getting the MXMS Version 

The following XML block queries for MXMS Version information: 

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

### Getting Installed CSPs 

The following XML queries the MXMS for the list of CSPs: 

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

### Getting CSP Version

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

### Grouping Queries


XML Queries can be combined. For example, we can query for MXMS version and the list of CSPs:

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
